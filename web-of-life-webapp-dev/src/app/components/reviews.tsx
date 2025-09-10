'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import FashionDesigner from '../../assets/FashionDesigner.jpg';
import Software from '../../assets/SoftwareEngineer.jpg';
import Designer from '../../assets/Designer.jpg';
import Engineer from '../../assets/Engineer.jpg';

const reviews = [
  {
    name: 'Sara Frenna',
    role: 'DESIGNER',
    img: Designer,
    stars: 4,
    text: `I Recently Purchased A Vintage Brass Lamp From Web Of Life, And I Couldn't Be Happier! The Product Was Exactly As Described,`,
  },
  {
    name: 'Rama Krishna',
    role: 'DESIGNER',
    img: Software,
    stars: 5,
    text: `I Recently Purchased A Vintage Brass Lamp From Web Of Life, And I Couldn't Be Happier! The Product Was Exactly As Described,`,
  },
  {
    name: 'Anu Rada',
    role: 'DESIGNER',
    img: FashionDesigner,
    stars: 4,
    text: `I Recently Purchased A Vintage Brass Lamp From Web Of Life, And I Couldn't Be Happier! The Product Was Exactly As Described,`,
  },
  {
    name: 'Shyam',
    role: 'Software Engineer',
    img: Engineer,
    stars: 4,
    text: `I Recently Purchased A Vintage Brass Lamp From Web Of Life, And I Couldn't Be Happier! The Product Was Exactly As Described,`,
  },
];

function getWindowSize() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1; // mobile
  if (window.innerWidth < 900) return 2; // small tablet
  return 3; // desktop
}

export default function Review() {
  const [startIdx, setStartIdx] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isMdUp, setIsMdUp] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : false
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const reviewsToShow = 3;

  // For infinite loop, clone first 3 reviews to the end
  const extendedReviews = isMdUp ? [...reviews, ...reviews.slice(0, reviewsToShow)] : reviews;

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
      setStartIdx(0);
      setIsMdUp(window.innerWidth >= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay for md and up
  useEffect(() => {
    if (!isMdUp) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setStartIdx((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMdUp]);

  // Handle infinite loop reset
  useEffect(() => {
    if (!isMdUp) return;
    if (startIdx === reviews.length) {
      // After transition ends, reset to 0 without animation
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setStartIdx(0);
      }, 700); // match transition duration
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [startIdx, isMdUp]);

  const endIdx = isMdUp ? startIdx + reviewsToShow : startIdx + windowSize;
  const canScrollLeft = startIdx > 0;
  const canScrollRight = endIdx < reviews.length;

  function handleLeft() {
    if (!canScrollLeft) return;
    setStartIdx((prev) => Math.max(0, prev - windowSize));
  }
  function handleRight() {
    if (!canScrollRight) return;
    setStartIdx((prev) => Math.min(reviews.length - windowSize, prev + windowSize));
  }

  // Hide arrows if only 1 card is visible or on md and up
  const showArrows = windowSize > 1 && reviews.length > windowSize && !isMdUp;

  // Card width for md and up (must match max-w-*)
  const cardWidth = 370; // px, matches lg:max-w-[370px]
  const gap = 32; // px, matches lg:gap-8 (2rem)
  const totalCardWidth = cardWidth + gap;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-10 px-2 sm:px-4 md:pb-16 transition-colors duration-300">
      <h2 style={{ fontFamily: 'Cinzel Decorative', fontWeight: 'bold' }} className="text-4xl text-center font-serif mb-12 text-black dark:text-white transition-colors duration-300">REVIEWS</h2>
      <div className="relative max-w-7xl mx-auto flex items-center justify-center">
        {/* Left Arrow (only on mobile/sm) */}
        {showArrows && (
          <button
            aria-label="Scroll left"
            onClick={handleLeft}
            disabled={!canScrollLeft}
            className={`transition-all duration-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center absolute left-0 z-10 top-1/2 -translate-y-1/2 border ${canScrollLeft ? 'bg-white dark:bg-black text-black dark:text-white border-white dark:border-black cursor-pointer' : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed border-gray-300 dark:border-gray-600'}`}
          >
            <FaChevronLeft size={22} />
          </button>
        )}
        {/* Cards Row */}
        {windowSize === 1 ? (
          <div
            className="flex gap-4 w-full justify-start items-stretch mx-auto overflow-x-auto scrollbar-hide px-1"
            style={{ maxWidth: '100%' }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="review-card relative bg-white dark:bg-black border border-gray-400 dark:border-gray-400 rounded-2xl flex flex-col items-center px-2 py-8 min-w-[90vw] max-w-[95vw] w-[90vw] mx-auto shadow-lg transition-colors duration-300"
                style={{ marginTop: 40 }}
              >
                {/* Avatar */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden  shadow-lg transition-colors duration-300">
                  <Image src={review.img} alt={review.name} width={64} height={64} className="object-cover w-full h-full" />
                </div>
                {/* Stars */}
                <div className="flex justify-center mt-8 mb-4">
                  {[...Array(5)].map((_, idx) =>
                    idx < review.stars ? (
                      <FaStar key={idx} className="text-yellow-400 text-xl mx-0.5" />
                    ) : (
                      <FaRegStar key={idx} className="text-yellow-400 text-xl mx-0.5" />
                    )
                  )}
                </div>
                {/* Review Text */}
                <p className="text-center text-base font-light mb-6 mt-2 leading-relaxed px-1 text-black dark:text-white transition-colors duration-300">
                  {review.text}
                </p>
                {/* Name */}
                <div className="text-center mt-2">
                  <span className="block text-lg font-cinzel tracking-wide mb-1 text-black dark:text-white transition-colors duration-300">{review.name.toUpperCase()}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400 tracking-widest transition-colors duration-300">{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="overflow-hidden w-full"
            style={{ maxWidth: `${totalCardWidth * reviewsToShow - gap}px` }}
          >
            <div
              className={`flex items-stretch ${isMdUp ? 'gap-8' : 'gap-4'} transition-transform duration-700 ease-in-out`}
              style={{
                width: `${totalCardWidth * extendedReviews.length - gap}px`,
                transform: `translateX(-${startIdx * totalCardWidth}px)` ,
                transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' : 'none',
              }}
              onTransitionEnd={() => {
                if (startIdx === reviews.length) {
                  setIsTransitioning(false);
                }
              }}
            >
              {extendedReviews.map((review, i) => (
                <div
                  key={i + startIdx}
                  className="review-card relative bg-white dark:bg-black border border-gray-400 dark:border-gray-400 rounded-2xl flex flex-col items-center px-2 py-8 sm:px-4 md:px-6 min-w-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[370px] mx-auto shadow-lg transition-colors duration-300"
                  style={{ marginTop: 40, flex: 1, width: `${cardWidth}px` }}
                >
                  {/* Avatar */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-4 border-black dark:border-white bg-white dark:bg-black shadow-lg transition-colors duration-300">
                    <Image src={review.img} alt={review.name} width={64} height={64} className="object-cover w-full h-full" />
                  </div>
                  {/* Stars */}
                  <div className="flex justify-center mt-8 mb-4">
                    {[...Array(5)].map((_, idx) =>
                      idx < review.stars ? (
                        <FaStar key={idx} className="text-yellow-400 text-xl mx-0.5" />
                      ) : (
                        <FaRegStar key={idx} className="text-yellow-400 text-xl mx-0.5" />
                      )
                    )}
                  </div>
                  {/* Review Text */}
                  <p className="text-center text-base md:text-lg font-light mb-6 mt-2 leading-relaxed px-1 sm:px-2 text-black dark:text-white transition-colors duration-300">
                    {review.text}
                  </p>
                  {/* Name */}
                  <div className="text-center mt-2">
                    <span className="block text-lg md:text-xl font-cinzel tracking-wide mb-1 text-black dark:text-white transition-colors duration-300">{review.name.toUpperCase()}</span>
                    <span className="block text-xs md:text-sm text-gray-500 dark:text-gray-400 tracking-widest transition-colors duration-300">{review.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Right Arrow (only on mobile/sm) */}
        {showArrows && (
          <button
            aria-label="Scroll right"
            onClick={handleRight}
            disabled={!canScrollRight}
            className={`transition-all duration-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center absolute right-0 z-10 top-1/2 -translate-y-1/2 border ${canScrollRight ? 'bg-white dark:bg-black text-black dark:text-white border-white dark:border-black cursor-pointer' : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed border-gray-300 dark:border-gray-600'}`}
          >
            <FaChevronRight size={22} />
          </button>
        )}
      </div>
    </div>
  );
}
