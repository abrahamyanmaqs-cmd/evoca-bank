import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { collection, onSnapshot, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../../firebase"; // Ստուգեք ճանապարհը՝ եթե firebase.js-ը 2 քայլ վերև է, թողեք այսպես, եթե 1 քայլ՝ դարձրեք "../firebase"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import "leaflet/dist/leaflet.css";

const DEFAULT_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v78OryFf-8N8yE_O0gPZt496E-C_n2-RFA&s";

// Օգտատիրոջ շարժին կամ Լոգինին հետևելու և քարտեզը կենտրոնացնելու բաղադրիչ
function MapRecenter({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 14, { animate: true });
    }
  }, [center, map]);
  return null;
}

const createCustomIcon = (photoUrl) => {
  return L.divIcon({
    className: "custom-user-marker",
    html: `
      <div style="
        width: 42px; 
        height: 42px; 
        border-radius: 50%; 
        border: 3px solid #007bff; 
        overflow: hidden; 
        box-shadow: 0 3px 8px rgba(0,0,0,0.4);
        background: white;
      ">
        <img src="${photoUrl || DEFAULT_AVATAR}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
  });
};

export default function UsersMap() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeUsers, setActiveUsers] = useState([]);
  const [myLocation, setMyLocation] = useState(null);

 
  useEffect(() => {
    let watchId = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const userRef = doc(db, "users", user.uid);
        
      
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (pos) => {
              const { latitude, longitude } = pos.coords;
              setMyLocation([latitude, longitude]);
              await setDoc(userRef, {
                uid: user.uid,
                displayName: user.displayName || "Անանուն",
                photoURL: user.photoURL || DEFAULT_AVATAR,
                isLoggedIn: true,
                location: { latitude, longitude },
                lastUpdated: serverTimestamp()
              }, { merge: true });
            },
            (err) => console.error("Initial GPS Error:", err),
            { enableHighAccuracy: true }
          );

 
          watchId = navigator.geolocation.watchPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setMyLocation([latitude, longitude]);
              await updateDoc(userRef, {
                location: { latitude, longitude },
                lastUpdated: serverTimestamp()
              });
            },
            (err) => console.error("Watch GPS Error:", err),
            { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
          );
        }
      }
    });

    return () => {
      unsubscribeAuth();
      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  // 2. Real-time լսում ենք բոլոր օգտատերերին
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersWithLoc = [];
      snapshot.forEach((docItem) => {
        const data = docItem.data();
        if (data.isLoggedIn && data.location?.latitude && data.location?.longitude) {
          usersWithLoc.push({
            id: docItem.id,
            displayName: data.displayName || "Անանուն",
            photoURL: data.photoURL || DEFAULT_AVATAR,
            lat: data.location.latitude,
            lng: data.location.longitude,
          });
        }
      });
      setActiveUsers(usersWithLoc);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error("Login Error:", e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-800">Օգտատերերի Live Քարտեզ</h2>
        {!currentUser ? (
          <button 
            onClick={handleGoogleLogin}
            className="bg-[#007bff] hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow-md cursor-pointer"
          >
            Մուտք Google-ով
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full border">
            <img src={currentUser.photoURL || DEFAULT_AVATAR} alt="" className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs font-semibold text-gray-700">{currentUser.displayName} (Ակտիվ է)</span>
          </div>
        )}
      </div>

      <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-md border border-gray-200 relative">
        <MapContainer 
          center={[40.1792, 44.4991]} 
          zoom={12} 
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {/* Ավտոմատ կենտրոնանում է ձեր վրա, հենց լոկացիան գտնի */}
          {myLocation && <MapRecenter center={myLocation} />}

          {activeUsers.map((u) => (
            <Marker 
              key={u.id} 
              position={[u.lat, u.lng]}
              icon={createCustomIcon(u.photoURL)}
            >
              <Popup>
                <div className="flex items-center gap-2 p-1">
                  <img src={u.photoURL || DEFAULT_AVATAR} alt="" className="w-7 h-7 rounded-full object-cover" />
                  <span className="font-bold text-xs">{u.displayName}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}