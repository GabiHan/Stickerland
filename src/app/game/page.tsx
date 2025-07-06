import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function GameSelection() {
  const games = [
    { title: "Froggo says", image: "/memory/6.png", link: "/Memory" },
    { title: "Sticker Tap", image: "/memory/.png", link: "/tap" },
    { title: "Whack-a-Sticker", image: "/memory/3.png", link: "/whack" },
    { title: "Sticker Puzzle", image: "/memory//4.png", link: "/puzzle" },
    { title: "Coloriage", image: "/memory/5.png", link: "/color" },
    { title: "Sticker Rain", image: "/memory/6.png", link: "/rain" },
  ];

  return (
    <>
    <Navbar />
    <div className="h-15"></div>

    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="font-extrabold title mb-6 text-center animate-bounce">
      Choisis ton mini-jeu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game, idx) => (
          <Link
            key={idx}
            href={game.link}
            className="border group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition flex flex-col items-center hover:-translate-y-1"
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

    <Footer />
  </>
  );
}
