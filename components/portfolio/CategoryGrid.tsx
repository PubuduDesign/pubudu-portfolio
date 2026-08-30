"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Category {
  id: string;
  title: string;
  cover: string;
  images: string[];
}

interface Props {
  categories: Category[];
  onOpen: (category: Category) => void;
}

export default function CategoryGrid({
  categories,
  onOpen,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {categories.map((category, index) => (

        <motion.div
  key={category.id}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
    delay: index * 0.1,
  }}
  onClick={() => {
    console.log(category.title);
    onOpen(category);
  }}
  className="group cursor-pointer overflow-hidden rounded-3xl border border-purple-500/20 bg-[#241D3F]"
>

          <div className="relative h-[260px] overflow-hidden">

            <Image
              src={category.cover}
              alt={category.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />

          </div>

          <div className="p-6 text-center">

            <h3 className="text-2xl font-bold text-white">
              {category.title}
            </h3>

            <p className="text-purple-400 mt-2">
              View Collection →
            </p>

          </div>

        </motion.div>

      ))}

    </div>
  );
}