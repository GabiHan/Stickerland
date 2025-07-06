"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Gallerie() {
  const [search, setSearch] = useState("");

  const stickers = [
    { name: "Moon", type: "Weather", img: "/memory/1.png" },
    { name: "Sun", type: "Weather", img: "/assets/2.png" },
    { name: "Cloudy Sun", type: "Weather", img: "/assets/3.png" },
    { name: "Cloudy Moon", type: "Weather", img: "/assets/4.png" },
    { name: "Unicorn", type: "Animal", img: "/assets/5.png" },
    { name: "Star", type: "Symbol", img: "/assets/6.png" },
    { name: "Rainbow", type: "Weather", img: "/assets/7.png" },
    { name: "Kitten", type: "Animal", img: "/assets/8.png" },
    { name: "Bubble", type: "Abstract", img: "/assets/9.png" },
  ];

  const filtered = stickers.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="h-15"></div>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <h2 className="font-extrabold title mb-6 text-center animate-bounce">Galerie de Stickers</h2>

      {/* 🔍 Barre de recherche */}
      <div className="mb-6 flex justify-end">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="I am looking for..."
          className="text-center paragraph w-full sm:w-96 border border-gray-300 rounded px-4 py-2 text-black bg-white"
        />
      </div>

        {/* 🎨 Grille responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filtered.map((sticker, idx) => (
            <div
              key={idx}
              className="border bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-4 flex flex-col items-center text-center"
            >
              <img
                src={sticker.img}
                alt={`Sticker ${sticker.name}`}
                className="w-full h-auto object-contain max-h-40 mb-2"
              />
              <p className="text-lg font-bold text-pink-600">{sticker.name}</p>
              <p className="text-sm text-gray-500">{sticker.type}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Aucun sticker ne correspond à votre recherche.
          </p>
        )}
      </section>

      <Footer />
    </>
  );
}
