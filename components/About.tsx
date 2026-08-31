"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#1B1830] py-20 md:py-28 px-5 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Image */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] bg-purple-600/20 rounded-full blur-[100px]"></div>

          <div className="relative border border-purple-500/20 rounded-3xl overflow-hidden">
            <Image
              src="/images/About.jpg"
              alt="About Me"
              width={520}
              height={620}
              className="object-cover w-full max-w-[520px] h-auto"
            />
          </div>

        </div>

        {/* Right Content */}
        <div>
          <div className="text-center lg:text-left">
          </div>
          <p className="uppercase tracking-[8px] text-purple-400 text-sm mb-3">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Creating Digital
            <span className="text-purple-500"> Experiences</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-8 mt-6 mb-6">
            I'm a professional Graphic Designer with over <span className="text-purple-400 font-semibold">12 years</span> of experience, helping creators, businesses, and brands build a strong visual presence through creative, high-quality designs. Throughout my career, I've successfully completed <span className="text-purple-400 font-semibold">20,000+ designs</span>, fulfilled <span className="text-purple-400 font-semibold">10,000+ orders</span>, and worked with <span className="text-purple-400 font-semibold">5,000+ clients</span> from around the world. My expertise includes YouTube thumbnails, social media graphics, branding, banners, and promotional designs, all created with a focus on attracting attention, increasing engagement, and delivering real results.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-8 mt-6 mb-8">
            Every project is approached with creativity, precision, and a deep understanding of what makes a design stand out. Whether you're a content creator, startup, or established business, I'm committed to delivering professional designs that help your brand grow and leave a lasting impression.
          </p>

          <a 
          href="#contact"
          className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white font-medium transition duration-300 shadow-lg shadow-purple-500/30 hover:scale-105">
            Let's Talk
          </a>

        </div>

      </div>
    </section>
  );
}