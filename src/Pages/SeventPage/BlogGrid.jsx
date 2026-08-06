 import React, { useEffect } from "react";
  import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const BlogGrid = () => {
  const rightBlogs = [
    {
      id: 1,
      category: "Ներդրումներ",
      title: "Ներդրումների կարելի՞ն ու չի կարելի՞ները",
      date: "23.04.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg",
    },
    {
      id: 2,
      category: "Ներդրումներ",
      title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
      date: "11.04.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg",
    },
    {
      id: 3,
      category: "Բիզնես",
      title: "Ինչպե՞ս սկսել բիզնես. Guide from A to Z",
      date: "05.01.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg",
    },
    {
      id: 4,
      category: "Կենսակերպ",
      title: "Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան",
      date: "16.06.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png",
    },
  ];

  const mainBlog = {
    category: "Ներդրումներ",
    title: "EvocaINVEST. Ինչպե՞ս կատարել գործարքներ",
    description: "Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:",
    date: "17.06.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg",
  };

  useEffect(() => {
    const uploadData = async () => {
      try {
        // Ուղարկում ենք ձախ մեծ բլոկը
        await addDoc(collection(db, "blogGridMain"), mainBlog);

        // Ուղարկում ենք աջ կողմի բլոկները
        for (const item of rightBlogs) {
          await addDoc(collection(db, "blogGridSide"), item);
        }

        console.log("BlogGrid տվյալները հաջողությամբ գրանցվեցին Firebase-ում!");
      } catch (error) {
        console.error("Սխալ Firebase ուղարկելիս:", error);
      }
    };

    uploadData();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Ձախ մեծ բլոկ (Span 7) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between h-full">
          <div>
            {/* Նկարի կոնտեյներ */}
            <div className="rounded-2xl overflow-hidden bg-gray-100 mb-6 h-[280px] sm:h-[340px] lg:h-[370px]">
              <img
                src={mainBlog.image}
                alt="EvocaINVEST"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-3 bg-[#5E1EEB]"></div>
              <span className="text-[#1C1C1E] font-semibold text-[15px]">
                {mainBlog.category}
              </span>
            </div>

            <h2 className="text-[22px] md:text-[26px] font-bold text-[#1C1C1E] leading-snug mb-4">
              {mainBlog.title}
            </h2>

            <p className="text-[#4A4A4E] text-[15px] leading-relaxed mb-6">
              {mainBlog.description}
            </p>
          </div>

          <span className="text-[#8E8E93] text-[14px] font-medium mt-auto">
            {mainBlog.date}
          </span>
        </div>

        {/* Աջ կողմի փոքր բլոկներ 2x2 (Span 5) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
          {rightBlogs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer h-full"
            >
              <div>
                <div className="rounded-xl overflow-hidden mb-3 bg-gray-100 h-[140px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-2.5 bg-[#5E1EEB]"></div>
                  <span className="text-[#5E1EEB] font-semibold text-[12px]">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-[#1C1C1E] font-bold text-[14px] leading-snug mb-3 line-clamp-2">
                  {item.title}
                </h3>
              </div>

              <span className="text-[#8E8E93] text-[12px] font-medium block mt-auto">
                {item.date}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogGrid;