"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter(); // ← tu dois définir ceci

  return (
    <header className="header-G">
      <div className="text-block">
        <h1 className="title font-extrabold mb-4">
          <div>Welcome to stickerland !</div>
        </h1>

        <p className="text-gray-700 text-2xl leading-relaxed">
          What will we play today?</p>
          <br />
          <div className="flex gap-4 pt-5">
            <button 
              onClick={() => router.push("/gallerie")}
              className="headButt"
            >
              Gallery
            </button>
            <button 
            onClick={() => router.push("/game")}
            className="headButt">
              Mini-game
            </button>
          </div>
        
      </div>

<div className="md:w-1/2 flex justify-center md:justify-end relative">
  {/* Image rotative derrière */}
  <img
    src="/assets/6.png" // ta sticker qui tourne
    alt="Sticker Rotatif"
    className="absolute top-0 right-0 w-30 h-auto animate-spin"
    style={{ animationTimingFunction: "linear", animationDuration: "15s", zIndex: 0 }}
  />

  {/* Image principale au-dessus */}
  <img
    src="/assets/main.png"
    alt="Illustration"
    className="w-100 h-auto rounded-xl relative z-10 transform transition-transform duration-700 hover:scale-105 hover:rotate-1"
  />
</div>

    </header>
  );
}
