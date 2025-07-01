// app/gallerie/page.jsx
"use client";

import { useRouter } from "next/navigation";

export default function Gallerie() {
  const router = useRouter();

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
  <h2 className="text-4xl font-extrabold text-center text-pink-500 mb-10">
    🌈 Galerie de Stickers
  </h2>

  {/* Grille responsive */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {/* Carte sticker */}
    {[
      "/assets/1.png",
      "/assets/2.png",
      "/assets/3.png",
      "/assets/4.png",
      "/assets/5.png",
      "/assets/6.png",
      "/assets/7.png",
      "/assets/8.png",
      "/assets/9.png",
    ].map((img, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-4 flex justify-center items-center"
      >
        <img
          src={img}
          alt={`Sticker ${idx + 1}`}
          className="w-full h-auto object-contain max-h-40"
        />
      </div>
    ))}
  </div>
</section>

  );
}
