"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CategoryGrid from "./portfolio/CategoryGrid";
import GalleryModal from "./portfolio/GalleryModal";

import { thumbnailCategories } from "./portfolio/portfolioData";

const tabs = [
  "Thumbnails",
  "Social Media",
  "Banners",
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Thumbnails");

  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  return (
    <section
      id="portfolio"
      className="bg-[#1B1830] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Featured Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Browse my best design collections. Click any category to
            explore the complete gallery.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="flex justify-center gap-4 flex-wrap mt-14">

          {tabs.map((tab)=>(
            <button
              key={tab}
              onClick={()=>setActiveTab(tab)}
              className={`px-8 py-3 rounded-full transition ${
                activeTab===tab
                ? "bg-purple-600 text-white"
                : "border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* Categories */}

        <div className="mt-16">

          {activeTab==="Thumbnails" && (

            <CategoryGrid
              categories={thumbnailCategories}
              onOpen={setSelectedCategory}
            />

          )}

        </div>

      </div>

      {<div>
      {selectedCategory && (
  <GalleryModal
    category={selectedCategory}
    onClose={() => setSelectedCategory(null)}
  />
)}
</div>
      }

    </section>
  );
}