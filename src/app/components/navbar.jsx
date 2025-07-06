"use client";

import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const [modalContent, setModalContent] = useState(null);

  const navigation = [
    { name: "Home", href: "/homepage", action: null },
    { name: "Condition of use", href: "#", action: "terms" },
    { name: "Confidentiality", href: "#", action: "privacy" },
  ];

  const toggleMenu = () => {
    const menu = menuRef.current;
    const icon = iconRef.current;
    if (menu) menu.classList.toggle("hidden");
    if (icon) icon.classList.toggle("menu-open");
  };

  const openModal = (type) => {
    setModalContent(type);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <nav className="bg-[#fde4cf]/60 shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div>
              <img className="w-40 h-auto" src="logo.png" alt="logo" />
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) =>
                item.action ? (
                  <button
                    key={item.name}
                    onClick={() => openModal(item.action)}
                    className="nav-butt"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-butt"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600"
                ref={iconRef}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div ref={menuRef} className="md:hidden hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) =>
              item.action ? (
                <button
                  key={item.name}
                  onClick={() => openModal(item.action)}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* 🔽 Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // bloque la fermeture si on clique dedans
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {modalContent === "terms" ? "Conditions of Use" : "Privacy Policy"}
            </h2>

            <p className="paragraph leading-relaxed text-sm max-h-[60vh] overflow-y-auto">
              {modalContent === "terms"
                ? "By accessing and using this site, you agree to engage with the interactive games and enjoy the collection of cute stickers solely for personal and entertainment purposes. All stickers featured on this platform are the intellectual property of the creator and may not be reproduced, redistributed, or used for any commercial or personal benefit without explicit permission. Unauthorized use is strictly prohibited. Do e-mail me for any queries."
                : "This site respects your privacy. No cookies. No tracking. Just stickers and fun!"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
