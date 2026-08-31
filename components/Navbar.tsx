"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1B1830]/70 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Pubudu<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-gray-300 font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-400 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Start Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1B1830] border-t border-purple-500/20">

          <nav className="flex flex-col items-center py-8 gap-6">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 text-lg hover:text-purple-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Start Now
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}