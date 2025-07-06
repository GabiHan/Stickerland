"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ← AJOUTER CECI

const stickerList = [
  { name: "moon", img: "/memory/1.png" },
  { name: "Sun", img: "/memory/2.png" },
  { name: "cloudy sun", img: "/memory/3.png" },
  { name: "cloudy moon", img: "/memory/4.png" },
  { name: "unicorn", img: "/memory/5.png" },
  { name: "rain", img: "/memory/6.png" },
];

const levelSettings = {
  easy: 800,
  medium: 500,
  hard: 300,
};

export default function SimonStickerGame() {
  const router = useRouter(); // ← tu dois définir ceci
  
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [message, setMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("easy");
  const [showFlash, setShowFlash] = useState(false);


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
      setMessage(`Game over ... `);
      setIsPlaying(false);
      return;
    }

    if (newPlayerSeq.length === sequence.length) {
      const nextIndex = Math.floor(Math.random() * stickerList.length);
      const newSequence = [...sequence, nextIndex];
      setPlayerSequence([]);
      setSequence(newSequence);
      setScore((s) => s + 1);
      setMessage(" Well done !...");
      setTimeout(() => {
        setMessage("Watch closely...");
        playSequence(newSequence);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* NAVBAR */}
      <nav className="w-full bg-transparent shadow-md h-20 px-10 py-3 flex items-center justify-between sticky top-0 z-50">
        
        
              {/* Escargot animé en bas de la navbar */}
      <div className="absolute z-50" style={{ top: '55px', left: 0, right: 0, height: '40px', pointerEvents: 'none' }}>
        <img
          src="/sprite/7.png"
          alt="Snail"
          className="w-10 h-auto snail-walk"
          style={{
            animation: "snailWalk 50s ease-in-out infinite",
            position: "relative",
          }}
        />
      </div>

        {/* Logo flottant à gauche */}
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="Logo" className="w-40 h-auto" />
          
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
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
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
              className={`w-24 h-24 md:w-28 md:h-28 rounded-xl shadow-md p-2 transition-all duration-200 bg-white ${
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

          {/* Sticker flottant gauche avec instructions */}
    <div className="fixed top-24 left-4 flex flex-col items-center z-50">
      <img
        src="/sprite/1.png"
        alt="Instruction Sticker"
        className="w-30 h-auto"
      />
      <div className="mt-2 px-4 py-3 bg-white bg-opacity-90 rounded-xl shadow-md max-w-xs text-sm text-gray-700 font-medium">
         <strong className="title">Mimi Says</strong><br />
         <div className="paragraph"> 
          <br />       
          Repeat the sticker sequence! <br />
          Click <strong className="text-pink">"Start"</strong>, watch carefully, and click in the correct order.
          You can choose the difficulty level and see your score in the navigation bar.</div>

      </div>
    </div>

          <div className="fixed bottom-6 right-6 z-50">
      <button 
            onClick={() => router.push("/game")}
            className="w-50 px-4 py-2 bg-purple-200 text-purple-800 text-2xl rounded-lg shadow hover:bg-purple-300 transition-all">
              ← Go Back
            </button>
    </div>

    </div>
  );
}
