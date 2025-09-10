"use client"
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface showcaseModalProps {
  open: boolean;
  onClose: () => void;
  images: StaticImageData[];
  mainImageIdx: number;
  setMainImageIdx: (idx: number) => void;
  title: string;
  description: string;
  features: string[];
  dimensions: { label: string; value: string }[];
}

const ShowcaseModal: React.FC<showcaseModalProps> = ({
  open,
  onClose,
  images,
  mainImageIdx,
  setMainImageIdx,
  title,
  description,
  features,
  dimensions,
}) => {
  // Add state for hover preview
  const [hoverImageIdx, setHoverImageIdx] = useState<number | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  // Swap logic: when a thumbnail is clicked, swap it with the main image
  const handleThumbnailClick = (idx: number) => {
    if (idx === mainImageIdx) return;
    setMainImageIdx(idx);
  };

  // Get the current image to display (hover or main)
  const currentImage = hoverImageIdx !== null ? images[hoverImageIdx] : images[mainImageIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/70">
      <div className="relative bg-black rounded-2xl px-2 sm:px-6 md:px-8 py-8 md:py-14  w-[98vw] max-w-5xl flex flex-col md:flex-row gap-6 md:gap-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl cursor-pointer z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Responsive Layout */}
        <div className="flex flex-col w-full md:flex-row gap-6 md:gap-8">
          {/* Left: Thumbnails + Main Image (side by side on md+) */}
          <div className="flex flex-col w-full md:flex-row md:w-auto">
            {/* Thumbnails (vertical on md+, hidden on mobile) */}
            <div className="hidden md:flex flex-col gap-3 mr-3">
              {images.map((img, idx) => (
                idx !== mainImageIdx && (
                  <div
                    key={idx}
                    className="w-16 h-16 rounded-lg overflow-hidden border border-gray-700 cursor-pointer flex-shrink-0 transition-transform duration-200 hover:scale-105"
                    onClick={() => handleThumbnailClick(idx)}
                    onMouseEnter={() => setHoverImageIdx(idx)}
                    onMouseLeave={() => setHoverImageIdx(null)}
                  >
                    <Image src={img} alt="thumb" className="object-fill w-full h-full" />
                  </div>
                )
              ))}
            </div>
            {/* Main Image */}
            <div className="relative aspect-square w-full max-w-xs sm:max-w-sm md:w-[340px] md:max-w-[340px] rounded-lg overflow-hidden mb-3 mx-auto md:mb-0">
              <Image 
                src={currentImage} 
                alt="Main" 
                fill 
                className="object-cover transition-opacity duration-300" 
              />
            </div>
            {/* Thumbnails (mobile only, below main image) */}
            <div className="flex flex-row gap-2 w-full justify-center mt-2 md:hidden">
              {images.map((img, idx) => (
                idx !== mainImageIdx && (
                  <div
                    key={idx}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-gray-700 cursor-pointer flex-shrink-0 transition-transform duration-200 hover:scale-105"
                    onClick={() => handleThumbnailClick(idx)}
                    onMouseEnter={() => setHoverImageIdx(idx)}
                    onMouseLeave={() => setHoverImageIdx(null)}
                  >
                    <Image src={img} alt="thumb" className="object-fill w-full h-full" />
                  </div>
                )
              ))}
            </div>
          </div>
          {/* Details (below images on mobile, right on desktop) */}
          <div className="flex-1 flex flex-col justify-center px-2 sm:px-6 md:px-12 text-white">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-center md:text-left">{title}</h2>
            <div className="mb-1 sm:mb-2 text-gray-300 text-sm sm:text-base">Description</div>
            <div className="mb-3 sm:mb-4 text-gray-300 text-xs sm:text-sm">{description}</div>
            <ul className="mb-3 sm:mb-4 text-xs sm:text-sm list-disc list-inside text-gray-300">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <div className="mb-1 sm:mb-2 text-gray-300 text-sm sm:text-base">Dimensions</div>
            <div className="flex gap-4 sm:gap-8 text-xs sm:text-sm flex-wrap">
              {dimensions.map((d, i) => (
                <div key={i}>
                  <div className="font-semibold">{d.label}</div>
                  <div>{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseModal; 