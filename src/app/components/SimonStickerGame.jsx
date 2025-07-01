"use client";
import { useState } from "react";

const stickerList = [
  { name: "Chat", img: "/assets/1.png" },
  { name: "Alien", img: "/assets/10.png" },
  { name: "Banane", img: "/assets/9.png" },
  { name: "Licorne", img: "/assets/4.png" },
  { name: "Banane", img: "/assets/9.png" },
  { name: "Licorne", img: "/assets/4.png" },
];

const levelSettings = {
  easy: 800,
  medium: 500,
  hard: 300,
};

export default function SimonStickerGame() {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [message, setMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("easy");

  const startGame = () => {
    const first = Math.floor(Math.random() * stickerList.length);
    const newSequence = [first];
    setSequence(newSequence);
    setPlayerSequence([]);
    setScore(0);
    setMessage("Watch closely...");
    setIsPlaying(true);
    setTimeout(() => playSequence(newSequence), 500);
  };

  const playSequence = async (seq) => {
    for (let i = 0; i < seq.length; i++) {
      setActiveIndex(seq[i]);
      await new Promise((r) => setTimeout(r, levelSettings[level]));
      setActiveIndex(null);
      await new Promise((r) => setTimeout(r, 200));
    }
    setMessage("Your turn !");
  };

  const handlePlayerClick = (index) => {
    if (!isPlaying) return;
    const newPlayerSeq = [...playerSequence, index];
    setPlayerSequence(newPlayerSeq);
    setShowFlash(true); // active le flash visuel

    setTimeout(() => {
    setShowFlash(false); // désactive après 500ms
    }, 500);


    const isCorrect = sequence[newPlayerSeq.length - 1] === index;

    if (!isCorrect) {
      setMessage(`Game over ... : ${score}`);
      setIsPlaying(false);
      return;
    }

    if (newPlayerSeq.length === sequence.length) {
      const nextIndex = Math.floor(Math.random() * stickerList.length);
      const newSequence = [...sequence, nextIndex];
      setPlayerSequence([]);
      setSequence(newSequence);
      setScore((s) => s + 1);
      setMessage("Well done !...");
      setTimeout(() => {
        setMessage("Watch closely...");
        playSequence(newSequence);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* NAVBAR */}
      <nav className="w-full bg-[#e7c6ff] shadow-md h-20 px-10 py-3 flex items-center justify-between sticky top-0 z-50">
        {/* Logo flottant à gauche */}
        <div className="flex items-center gap-2">
          <img src="/assets/5.png" alt="Logo" className="w-40 h-auto" />
          
        </div>

        {/* Niveau + Score */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="paragraph">Niveau</label>
            <select
              className="border border-gray-300 rounded px-2 py-1 paragraph"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              disabled={isPlaying}
            >
              <option value="easy">Facile</option>
              <option value="medium">Moyen</option>
              <option value="hard">Difficile</option>
            </select>
          </div>
          <span className="paragraph">
            🎯 Score : {score}
          </span>
        </div>
      </nav>

      {/* CONTENU */}
      <div className="flex flex-col items-center pt-10 px-4">
        <h1 className="title pb-10">Mimi Saysssss....</h1>
        <div className="grid grid-cols-3 gap-6 mb-6">
          {stickerList.map((sticker, i) => (
            <button
              key={i}
              onClick={() => handlePlayerClick(i)}
              className={`w-24 h-24 md:w-28 md:h-28 rounded-xl shadow-md p-2 transition-all duration-200 bg-[#fbf8cc] ${
                activeIndex === i ? "ring-4 ring-yellow-300 scale-110" : ""
              }`}
            >
              <img
                src={sticker.img}
                alt={sticker.name}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        <button
          onClick={startGame}
          className="gamebutt paragraph"
          disabled={isPlaying}
        >
         Start
        </button>

        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-gray-700">{message}</p>
        </div>

      </div>
      
    </div>
  );
}
