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
        className="absolute left-2 sm:left-6 text-white"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 text-white"
      >
        <ChevronRight size={26} />
      </button>

      <div className="relative w-[95vw] h-[70vh] sm:h-[80vh] lg:w-[90vw] lg:h-[85vh]">
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