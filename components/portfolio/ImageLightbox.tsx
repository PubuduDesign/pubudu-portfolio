"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageLightbox({
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: Props) {
  if (current < 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white"
      >
        <X size={36} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-6 text-white"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 text-white"
      >
        <ChevronRight size={40} />
      </button>

      <div className="relative w-[90vw] h-[90vh]">
        <Image
          src={images[current]}
          alt=""
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      <div className="absolute bottom-6 text-white">
        {current + 1} / {images.length}
      </div>

    </div>
  );
}