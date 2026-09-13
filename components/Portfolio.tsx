"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import CategoryGrid from "./portfolio/CategoryGrid";
import MasonryGallery from "./portfolio/MasonryGallery";
import ImageLightbox from "./portfolio/ImageLightbox";

import { thumbnailCategories } from "./portfolio/portfolioData";
import { socialMediaCategory } from "./portfolio/socialMediaData";

const tabs = ["Thumbnails", "Social Media", "Banners"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Thumbnails");

  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const [selectedImage, setSelectedImage] = useState(-1);

  // Open a gallery
  const openGallery = (category: any) => {
    setSelectedCategory(category);
    setSelectedImage(-1);
  };

  // Close gallery
  const closeGallery = () => {
    setSelectedCategory(null);
    setSelectedImage(-1);
  };

  return (
    <section
      id="portfolio"
      className="bg-[#1B1830] py-20 md:py-32 px-5 md:px-6"
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
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            Featured Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Browse my best design collections.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 md:gap-4 mt-10 md:mt-14 flex-wrap">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                closeGallery();
              }}
              className={`px-5 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-full transition ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* ========================= */}
        {/* THUMBNAILS */}
        {/* ========================= */}

        {activeTab === "Thumbnails" && !selectedCategory && (

          <div className="mt-12 md:mt-16">

            <CategoryGrid
              categories={thumbnailCategories}
              onOpen={openGallery}
            />

          </div>

        )}

        {/* ========================= */}
        {/* SOCIAL MEDIA */}
        {/* ========================= */}

        {activeTab === "Social Media" && !selectedCategory && (

          <div className="mt-12 md:mt-16">

            <MasonryGallery
              images={socialMediaCategory.images}
              onOpen={(index) => {
                setSelectedCategory(socialMediaCategory);
                setSelectedImage(index);
              }}
            />

          </div>

        )}

        {/* ========================= */}
        {/* BANNERS */}
        {/* ========================= */}

        {activeTab === "Banners" && !selectedCategory && (

          <div className="mt-12 md:mt-16">

            <div className="text-center text-gray-400 py-20">
              Banner designs coming soon.
            </div>

          </div>

        )}

        {/* ========================= */}
        {/* CATEGORY GALLERY */}
        {/* ========================= */}

        {selectedCategory && (

          <div className="mt-12 md:mt-16">

            {/* Back Button */}
            <button
              onClick={closeGallery}
              className="mb-8 md:mb-10 px-5 md:px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white transition"
            >
              ← Back to Categories
            </button>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-10">
              {selectedCategory.title} Collection
            </h3>

            {/* Gallery */}
            <MasonryGallery
              images={selectedCategory.images}
              onOpen={(index) => setSelectedImage(index)}
            />

          </div>

        )}

      </div>

      {/* ========================= */}
      {/* IMAGE LIGHTBOX */}
      {/* ========================= */}

      {selectedCategory &&
        selectedImage >= 0 &&
        selectedCategory.images.length > 0 && (

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