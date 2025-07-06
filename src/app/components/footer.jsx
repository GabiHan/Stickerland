"use client";
 
export default function Footer(){
    return(
        <footer className="mt-20 bg-[#fde4cf] text-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Logo / Présentation rapide */}
            <div>
            <h3 className="text-4xl font-bold text-pink-600 mb-2">Stickerland</h3>
            <div className="paragraph">
                the adorable world of stickers with fun mini-games to discover ! 
            </div>
            </div>

            {/* Liens rapides */}
            <div>
            <h4 className="title">Navigation</h4>
            <br />
            <ul className="space-y-2 text-sm">
                <li><a href="/gallerie" className="footLink">Galerie</a></li>
                <li><a href="/game" className="footLink">Mini-jeux</a></li>
                <li><a href="#" className="footLink">Contact</a></li>
            </ul>
            </div>

                {/* 📬 Contact Me Section */}
                <div>
                <h4 className="title">Contact me</h4>
                <p className="paragraph mt-2">
                    <br />
                    Feel free to reach out at:
                    <br />
                    <a
                    href="mailto:your-email@example.com"
                    className="text-2xl underline hover:text-pink-700"
                    >
                    mimicornwuv@gmail.com
                    </a>
                </p>
                </div>

        </div>

        {/* Mention en bas */}
        <br /><br />
        <div className="paragraph text-center">
            © 2025 Stickerland All rights reserved.
        </div>
        </footer>

    );
}