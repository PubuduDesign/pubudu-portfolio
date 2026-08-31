"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Adobe Photoshop",
    icon: "/icons/photoshop.png",
    percent: 100,
    level: "Expert",
  },
  {
    name: "Canva",
    icon: "/icons/canva.png",
    percent: 100,
    level: "Expert",
  },
  {
    name: "Adobe Illustrator",
    icon: "/icons/illustrator.png",
    percent: 85,
    level: "Advanced",
  },
  {
    name: "Figma",
    icon: "/icons/figma.png",
    percent: 75,
    level: "Advanced",
  },
  {
    name: "Adobe Premiere Pro",
    icon: "/icons/premiere.png",
    percent: 75,
    level: "Advanced",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#1B1830] py-20 md:py-28 px-5 md:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm">
            My Skills
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Creative Software
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Professional design tools I use to create branding, social media,
            print materials, UI designs, and visual content.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#241D3F] rounded-[35px] border border-purple-500/20 p-5 md:p-10 shadow-xl hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-all duration-500"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12">

            {skills.map((skill, index) => (

              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >

                {/* Top Row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">

                  <div className="flex items-center gap-3">

                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={36}
                      height={36}
                      className="w-8 h-8 md:w-9 md:h-9"
                    />

                    <span className="text-white font-medium text-sm md:text-base">
                      {skill.name}
                    </span>

                  </div>

                  <span className="text-purple-400 font-semibold text-sm md:text-base">
                    {skill.level}
                  </span>

                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.3,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                  />

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}