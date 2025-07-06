"use client";

export default function New(){
    return(
  <section className="mt-16 px-4">
  <h2 className="font-extrabold title mb-6 text-center animate-bounce">
   Nouveautés à découvrir !
  </h2>
<br />
  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Exemple de carte */}
    <div className="carte">
      <img
        src="/new/1.png"
        alt="Sticker mignon"
        className="w-full h-40 object-contain mb-3"
      />
      <h3 className="title">Lapin Fluffy</h3>
      <div className="paragraph">A fluffy bunny to warm you.</div>
    </div>

    <div className="carte">
      <img
        src="/memory/6.png"
        alt="Mini-jeu"
        className="w-full h-40 object-contain mb-3"
      />
      <h3 className="title">Froggo says</h3>
      <div className="paragraph">A memory game to stimulate you !</div>
    </div>

    <div className="carte">
      <img
        src="/assets/sticker-new-2.png"
        alt="Sticker mignon"
        className="w-full h-40 object-contain mb-3"
      />
      <h3 className="title">Licorne Chill</h3>
      <div className="paragraph">Nouvelle arrivée dans Stickerland !</div>
    </div>
  </div>
</section>


    );
}