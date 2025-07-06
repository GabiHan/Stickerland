"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const images = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
];


export default function AbGallery() {
  const router = useRouter(); // ← tu dois définir ceci
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 30000); // 30 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2 relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg border">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery image ${index + 1}`}
              className={`bg-white absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* Bloc texte à droite */}
        <div className="md:w-1/2 text-center md:text-left">
        <h2 className="title2 font-bold mb-4 relative inline-block pl-50">
          <span className="bg-white rounded-xl px-4 py-2 inline-block">
            Explore our stickers gallery
          </span>
          <div className="h-15"></div>
        </h2>

          <div className="paragraph">
            Enjoy the view ! 
            <br />
            We have a full set of beautiful and adorable stickers especially made for the Stickerland saga.
            <br />
            <div className="h-10"></div>
            
            <button 
              onClick={() => router.push("/gallerie")}
              className="headButt"
            >
              <span>Go to the gallery</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

