"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  images: string[];
  onOpen: (index: number) => void;
}

export default function MasonryGallery({
  images,
  onOpen,
}: Props) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5 space-y-4 md:space-y-5">

      {images.map((image, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="break-inside-avoid mb-5 cursor-pointer group"
          onClick={() => {
  console.log("Clicked image:", index);
  onOpen(index);
}}
        >
          <div className="relative overflow-hidden rounded-2xl">

            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={700}
              height={700}
              className="w-full rounded-2xl transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">

              <span className="opacity-0 group-hover:opacity-100 transition text-white font-semibold text-lg">
                View Design
              </span>

            </div>

          </div>
        </motion.div>

      ))}

    </div>
  );
}