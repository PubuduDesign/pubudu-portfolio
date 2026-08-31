"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#151225] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">

          {/* Logo & Description */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pubudu<span className="text-purple-500">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Creative Graphic Designer specializing in YouTube thumbnails,
              social media design, branding, and video editing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-purple-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-purple-400 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="hover:text-purple-400 transition"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-xl font-semibold mb-5">
              Follow Me
            </h3>

            <div className="flex justify-center lg:justify-start gap-4">

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#241D3F] flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#241D3F] flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#241D3F] flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#241D3F] flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition"
              >
                <FaYoutube size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-purple-500/20 mt-10 md:mt-14 pt-6 md:pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Pubudu Shyamal. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}