"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const thumbnailCategories = [
  {
    id: "gaming",
    title: "Gaming",
    cover: "/portfolio/thumbnails/Gaming/1.jpg",
    images: [
      "/portfolio/thumbnails/Gaming/1.jpg",
      "/portfolio/thumbnails/Gaming/2.jpg",
      "/portfolio/thumbnails/Gaming/3.jpg",
      "/portfolio/thumbnails/Gaming/4.jpg",
      "/portfolio/thumbnails/Gaming/5.jpg",
      "/portfolio/thumbnails/Gaming/6.jpg",
    ],
  },
];

interface Category {
  id: string;
  title: string;
  cover: string;
  images: string[];
}

interface Props {
  category: Category;
  onClose: () => void;
}

export default function GalleryModal({
  category,
  onClose,
}: Props) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === category.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? category.images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-purple-400 transition"
        >
          <X size={34} />
        </button>

        {/* Previous */}
        <button
          onClick={prev}
          className="absolute left-6 text-white hover:text-purple-400 transition"
        >
          <ChevronLeft size={50} />
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-6 text-white hover:text-purple-400 transition"
        >
          <ChevronRight size={50} />
        </button>

        <div className="max-w-6xl w-full">

          <motion.div
            key={current}
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .3 }}
            className="relative aspect-video rounded-2xl overflow-hidden"
          >
            <Image
              src={category.images[current]}
              alt={category.title}
              fill
              className="object-contain"
            />
          </motion.div>

          <div className="text-center mt-8">

            <h2 className="text-white text-3xl font-bold">
              {category.title}
            </h2>

            <p className="text-purple-400 mt-2">
              {current + 1} / {category.images.length}
            </p>

          </div>

        </div>

      </motion.div>

    </AnimatePresence>
  );
}