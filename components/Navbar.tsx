"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1B1830]/70 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          <a href="#home">
            Pubudu<span className="text-purple-500">.</span>
          </a>
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-10 text-gray-300 font-medium">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#services" className="hover:text-purple-400 transition">Services</a>
          <a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </nav>

        {/* Button */}
        <a
          href="#contact"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
        >
          Start Now
        </a>

      </div>
    </header>
  );
}