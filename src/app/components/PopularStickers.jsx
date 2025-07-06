"use client";

import { useEffect, useRef, useState } from "react";

const stickers = [
  { id: 1, name: "Chat mignon", img: "/assets/4.png" },
  { id: 2, name: "Banane funky", img: "/assets/9.png" },
  { id: 3, name: "Alien rigolo", img: "/assets/10.png" },
  { id: 4, name: "Licorne magique", img: "/assets/14.png" },
  { id: 5, name: "Sushi heureux", img: "/assets/2.png" },
  { id: 6, name: "Chat mignon", img: "/assets/4.png" },
  { id: 7, name: "Banane funky", img: "/assets/9.png" },
  { id: 8, name: "Alien rigolo", img: "/assets/10.png" },
  { id: 9, name: "Licorne magique", img: "/assets/14.png" },
  { id: 10, name: "Sushi heureux", img: "/assets/2.png" },
];

export default function PopularStickers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stickers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // scroll to current sticker
  useEffect(() => {
    const container = containerRef.current;
    const cardWidth = container?.children[0]?.offsetWidth || 0;
    container.scrollTo({
      left: currentIndex * (cardWidth + 16), // +16 = space-x-4
      behavior: "smooth",
    });
  }, [currentIndex]);

  return (
    <section className="my-10 px-4">

      <div
        ref={containerRef}
        className="flex space-x-4 overflow-hidden scroll-smooth pt-15 pb-15"
      >
        {stickers.map((sticker) => (
          <div
            key={sticker.id}
            className="border paragraph flex-none w-100 h-auto bg-white rounded-2xl shadow-lg p-4 transition-all duration-300 hover:scale-105"
          >
            <img
              src={sticker.img}
              alt={sticker.name}
              className="w-full h-32 object-contain"
            />
            <p className="text-center mt-2 font-medium">{sticker.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
