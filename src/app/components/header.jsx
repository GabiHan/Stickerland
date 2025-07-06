"use client";

import { useRouter } from "next/navigation";
import Clouds from "./clouds";


export default function Header() {
  const router = useRouter();

  return (
    <header className="header-G relative overflow-hidden">
      {/* ☁️ Nuages animés dynamiques */}
      <Clouds count={7} />

      {/* Contenu principal */}
      <div className="text-block z-10 relative">
        <h1 className="title font-extrabold mb-4">
          Welcome to stickerland!
        </h1>

        <h2 className="text-gray-700 text-2xl leading-relaxed">
          What will we play today?
        </h2>

        <div className="flex gap-4 pt-5">
          <button
            onClick={() => router.push("/gallerie")}
            className="headButt"
          >
            <span>Gallery</span>
          </button>
          <button
            onClick={() => router.push("/game")}
            className="headButt"
          >
            <span>Mini-game</span>
          </button>
        </div>
      </div>

      {/* Illustration principale + sticker animé */}
      <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
        <img
          src="/assets/6.png"
          alt="Sticker Rotatif"
          className="absolute top-0 right-0 w-30 h-auto animate-spin"
          style={{
            animationTimingFunction: "linear",
            animationDuration: "15s",
            zIndex: 0,
          }}
        />
        <img
          src="/assets/main.png"
          alt="Illustration"
          className="w-100 h-auto rounded-xl relative z-10 transform transition-transform duration-700 hover:scale-105 hover:rotate-1"
        />
      </div>
    </header>
  );
}
