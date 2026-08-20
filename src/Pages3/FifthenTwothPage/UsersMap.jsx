import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { collection, onSnapshot, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../../firebase"; 
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import "leaflet/dist/leaflet.css";

const DEFAULT_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v78OryFf-8N8yE_O0gPZt496E-C_n2-RFA&s";

// Հեռավորության հաշվարկ (մետրերով)
function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function MapRecenter({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.setView(center, 16);
  }, [center, map]);
  return null;
}

const createCustomIcon = (photoUrl) => {
  return L.divIcon({
    className: "custom-user-marker",
    html: `<div style="width: 40px; height: 40px; border-radius: 50%; border: 3px solid #007bff; overflow: hidden; background: white;">
             <img src="${photoUrl || DEFAULT_AVATAR}" style="width: 100%; height: 100%; object-fit: cover;" />
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

export default function UsersMap() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeUsers, setActiveUsers] = useState([]);
  const [myLocation, setMyLocation] = useState(null);
  const lastValidLocation = useRef(null);

  useEffect(() => {
    let watchId = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const userRef = doc(db, "users", user.uid);
        
        watchId = navigator.geolocation.watchPosition(
          async (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            
            // Եթե GPS ճշգրտությունը վատն է (>40 մետր), սպասում ենք
            if (accuracy > 40) return;

            // Եթե շարժվել ես 2 մետրից քիչ, թարմացնում ենք միայն եթե պետք է, բայց հիմա թողնում ենք ռեալ-թայմ
            lastValidLocation.current = { latitude, longitude };
            setMyLocation([latitude, longitude]);

            await updateDoc(userRef, {
              location: { latitude, longitude },
              lastUpdated: serverTimestamp()
            }).catch(() => {
               // Եթե document-ը չկա, ստեղծում ենք
               setDoc(userRef, { uid: user.uid, displayName: user.displayName, photoURL: user.photoURL, isLoggedIn: true, location: { latitude, longitude } }, { merge: true });
            });
          },
          (err) => console.error("GPS Error:", err),
          { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
        );
      }
    });

    return () => {
      unsubscribeAuth();
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  useEffect(() => {
    return onSnapshot(collection(db, "users"), (snapshot) => {
      const users = [];
      snapshot.forEach(d => {
        const data = d.data();
        if (data.location) users.push({ id: d.id, ...data, lat: data.location.latitude, lng: data.location.longitude });
      });
      setActiveUsers(users);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg border">
        <MapContainer center={[40.1792, 44.4991]} zoom={13} style={{ width: "100%", height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {myLocation && <MapRecenter center={myLocation} />}
          {activeUsers.map((u) => (
            <Marker key={u.id} position={[u.lat, u.lng]} icon={createCustomIcon(u.photoURL)}>
              <Popup>{u.displayName}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}