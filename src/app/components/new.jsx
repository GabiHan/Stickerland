"use client";

export default function New(){
    return(
        <section className="mt-16 px-4">
  <h2 className="font-extrabold title mb-6 text-center">
   Nouveautés à découvrir !
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Exemple de carte */}
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
      <img
        src="/assets/sticker-new-1.png"
        alt="Sticker mignon"
        className="w-full h-40 object-contain mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">Chat Magique</h3>
      <p className="text-sm text-gray-500">Un nouveau sticker enchanté !</p>
    </div>

    <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
      <img
        src="/assets/game-new-1.png"
        alt="Mini-jeu"
        className="w-full h-40 object-contain mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">Sticker Memory</h3>
      <p className="text-sm text-gray-500">Un mini-jeu pour booster ta mémoire !</p>
    </div>

    <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition">
      <img
        src="/assets/sticker-new-2.png"
        alt="Sticker mignon"
        className="w-full h-40 object-contain mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">Licorne Chill</h3>
      <p className="text-sm text-gray-500">Nouvelle arrivée dans Stickerland !</p>
    </div>
  </div>
</section>


    );
}