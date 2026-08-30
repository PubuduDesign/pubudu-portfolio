"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gaming Thumbnail",
    category: "Thumbnail",
    image: "/portfolio/thumb1.jpg",
  },
  {
    title: "Finance Thumbnail",
    category: "Thumbnail",
    image: "/portfolio/thumb2.jpg",
  },
  {
    title: "Instagram Post",
    category: "Social Media",
    image: "/portfolio/post1.jpg",
  },
  {
    title: "YouTube Banner",
    category: "Banner",
    image: "/portfolio/banner1.jpg",
  },
  {
    title: "Sports Thumbnail",
    category: "Thumbnail",
    image: "/portfolio/thumb3.jpg",
  },
  {
    title: "Business Thumbnail",
    category: "Thumbnail",
    image: "/portfolio/thumb4.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#1B1830] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm">
            My Portfolio
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of YouTube thumbnails, social media graphics,
            and banner designs created for clients worldwide.
          </p>
        </motion.div>

        {/* Filter Buttons */}

        <div className="flex justify-center gap-4 mt-14 flex-wrap">

          <button className="px-6 py-3 rounded-full bg-purple-600 text-white">
            All
          </button>

          <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition">
            Thumbnails
          </button>

          <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition">
            Social Media
          </button>

          <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition">
            Banners
          </button>

        </div>

        {/* Portfolio Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-purple-500/20"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center">

                <p className="text-purple-400 text-sm tracking-widest uppercase">
                  {project.category}
                </p>

                <h3 className="text-white text-2xl font-semibold mt-2">
                  {project.title}
                </h3>

                <button className="mt-6 px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition">
                  View Project
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}