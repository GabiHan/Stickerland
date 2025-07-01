import Link from "next/link";

export default function GameSelection() {
  const games = [
    { title: "Memory Sticker", image: "/assets/1.png", link: "/Memory" },
    { title: "Sticker Tap", image: "/assets/2.png", link: "/tap" },
    { title: "Whack-a-Sticker", image: "/assets/3.png", link: "/whack" },
    { title: "Sticker Puzzle", image: "/assets/4.png", link: "/puzzle" },
    { title: "Coloriage", image: "/assets/5.png", link: "/color" },
    { title: "Sticker Rain", image: "/assets/6.png", link: "/rain" },
  ];

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-purple-600 mb-10">
        🎮 Choisis ton Mini-Jeu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game, idx) => (
          <Link
            key={idx}
            href={game.link}
            className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition flex flex-col items-center hover:-translate-y-1"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-24 h-24 object-contain mb-4 transition-transform group-hover:scale-110"
            />
            <span className="text-lg font-semibold text-purple-700">{game.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
