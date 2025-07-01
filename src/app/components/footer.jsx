"use client";
 
export default function Footer(){
    return(
        <footer className="mt-20 bg-pink-100 text-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Logo / Présentation rapide */}
            <div>
            <h3 className="text-2xl font-bold text-pink-600 mb-2">Stickerland</h3>
            <p className="text-sm">
                Le monde adorable des stickers vivants et des mini-jeux funs à découvrir !
            </p>
            </div>

            {/* Liens rapides */}
            <div>
            <h4 className="font-semibold text-lg mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-pink-500 transition">Galerie</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Mini-jeux</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">À découvrir</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
            </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
            <h4 className="font-semibold text-lg mb-3">Suivez-nous</h4>
            <div className="flex gap-4 text-2xl text-pink-500">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-discord"></i></a>
            </div>
            </div>
        </div>

        {/* Mention en bas */}
        <div className="mt-8 text-center text-xs text-gray-500">
            © 2025 Stickerland. Tous droits réservés.
        </div>
        </footer>

    );
}