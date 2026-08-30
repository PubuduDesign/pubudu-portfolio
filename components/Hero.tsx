"use client";

import Image from "next/image";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#1B1830] px-10 pt-32 pb-16">

      {/* Hero Content */}
      <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto">

        {/* LEFT */}
        <div className="relative z-10 w-1/2">

          <p className="uppercase tracking-[10px] text-purple-400 text-sm mb-6 pl-2">
            Graphic Designer
          </p>

          <h1 className={`${anton.className} text-[180px] leading-[0.91]`}>
            <span className="text-white">PUBUDU</span>
            <br />
            <span className="text-purple-500">SHYAMAL</span>
          </h1>

          <p className="mt-8 text-gray-300 max-w-md text-lg leading-9">
            I design and build modern websites with beautiful user experiences,
            responsive layouts, and clean code.
          </p>

          <div className="mt-10 flex gap-5">

            <a 
            href="#portfolio"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white font-medium transition duration-300 shadow-lg shadow-purple-500/30 hover:scale-105"
            >
              View My Work
            </a>

            <a
            href="#contact"
            className="border border-purple-500 px-8 py-4 rounded-full text-white hover:bg-purple-600 hover:border-purple-600 transition duration-300"
            >
              Let's Talk
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative w-1/2 flex justify-end items-center">
        {/* Floating Photoshop */}
<motion.div
  animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="absolute top-8 left-8 z-30"
>
  <Image
    src="/icons/photoshop.png"
    alt="Photoshop"
    width={60}
    height={60}
    className="rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.7)]"
  />
</motion.div>

{/* Floating Canva */}
<motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ duration: 4.5, repeat: Infinity }}
  className="absolute top-20 right-8 z-30"
>
  <Image
    src="/icons/canva.png"
    alt="Canva"
    width={60}
    height={60}
    className="rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.7)]"
  />
</motion.div>

{/* Floating Illustrator */}
<motion.div
  animate={{ x: [0, 10, 0] }}
  transition={{ duration: 3.8, repeat: Infinity }}
  className="absolute bottom-[500px] left-0 z-30"
>
  <Image
    src="/icons/illustrator.png"
    alt="Illustrator"
    width={60}
    height={60}
    className="rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.7)]"
  />
</motion.div>

{/* Floating Figma */}
<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 4.2, repeat: Infinity }}
  className="absolute bottom-100 right-0 z-30"
>
  <Image
    src="/icons/figma.png"
    alt="Figma"
    width={60}
    height={60}
    className="rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.7)]"
  />
</motion.div>

{/* Floating Premiere Pro */}
<motion.div
  animate={{ rotate: [0, 8, -8, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute bottom-50 left-0 z-30"
>
  <Image
    src="/icons/premiere.png"
    alt="Premiere Pro"
    width={60}
    height={60}
    className="rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.7)]"
  />
</motion.div>

          {/* Purple Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[120px]"></div>

          {/* Circle Outline */}
          <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20"></div>

          {/* Profile Image */}
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={600}
            height={650}
            priority
            className="relative z-20 object-contain"
          />

        </div>

      </div>

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto -mt-10 z-30">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-[#2A2245] border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500 transition">
            <h2 className="text-5xl font-bold text-purple-500">
  <CountUp end={12} duration={2} />+
</h2>
            <p className="text-gray-300 mt-2">
              Years <br /> Experience
            </p>
          </div>

          <div className="bg-[#2A2245] border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500 transition">
            <h2 className="text-5xl font-bold text-purple-500">
  <CountUp end={5000} duration={2} separator="," />+
</h2>
            <p className="text-gray-300 mt-2">
              Happy <br /> Clients
            </p>
          </div>

          <div className="bg-[#2A2245] border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500 transition">
            <h2 className="text-5xl font-bold text-purple-500">
  <CountUp end={10000} duration={2} separator="," />+
</h2>
            <p className="text-gray-300 mt-2">
              Projects <br /> Completed
            </p>
          </div>

          <div className="bg-[#2A2245] border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500 transition">
            <h2 className="text-5xl font-bold text-purple-500">
  <CountUp end={100} duration={2} />%
</h2>
            <p className="text-gray-300 mt-2">
              Client <br /> Satisfaction
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}