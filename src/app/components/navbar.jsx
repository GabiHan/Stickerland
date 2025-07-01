"use client";

import { useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const navigation = [
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    const menu = menuRef.current;
    const icon = iconRef.current;
    if (menu) menu.classList.toggle("hidden");
    if (icon) icon.classList.toggle("menu-open");
  };

  return (
    <nav className="bg-transparent shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div ><img className="w-40 h-auto" src="assets\5.png" alt="logo" /></div>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="bg-white hover:bg-[#b8f2e6] text-black font-bold text-xl tracking-[.10em] py-2 px-4 rounded"
              >
                {item.name}
              </a>
            ))}
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
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
