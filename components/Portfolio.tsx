"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CategoryGrid from "./portfolio/CategoryGrid";
import MasonryGallery from "./portfolio/MasonryGallery";
import ImageLightbox from "./portfolio/ImageLightbox";
import { thumbnailCategories } from "./portfolio/portfolioData";

const tabs = ["Thumbnails", "Social Media", "Banners"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Thumbnails");

  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const [selectedImage, setSelectedImage] = useState(-1);

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
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Featured Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Browse my best design collections.
          </p>

        </motion.div>

        {/* Tabs */}

        <div className="flex justify-center gap-4 mt-14 flex-wrap">

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedCategory(null);
              }}
              className={`px-8 py-3 rounded-full transition ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
              }`}
            >
              {tab}
            </button>

          ))}

        </div>

        {/* THUMBNAILS */}

        {activeTab === "Thumbnails" && !selectedCategory && (

          <div className="mt-16">

            <CategoryGrid
              categories={thumbnailCategories}
              onOpen={setSelectedCategory}
            />

          </div>

        )}

        {/* CATEGORY GALLERY */}

        {selectedCategory && (

          <div className="mt-16">

            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-10 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white"
            >
              ← Back to Categories
            </button>

            <h3 className="text-4xl font-bold text-white mb-10">
              {selectedCategory.title} Collection
            </h3>

            <MasonryGallery
              images={selectedCategory.images}
              onOpen={(index) => setSelectedImage(index)}
            />

          </div>

        )}

      </div>

      {/* Lightbox temporarily disabled */}

{selectedCategory && selectedImage >= 0 && (
  <ImageLightbox
    images={selectedCategory.images}
    current={selectedImage}
    onClose={() => setSelectedImage(-1)}
    onNext={() =>
      setSelectedImage((prev) =>
        prev === selectedCategory.images.length - 1
          ? 0
          : prev + 1
      )
    }
    onPrev={() =>
      setSelectedImage((prev) =>
        prev === 0
          ? selectedCategory.images.length - 1
          : prev - 1
      )
    }
  />
)}

    </section>
  );
}