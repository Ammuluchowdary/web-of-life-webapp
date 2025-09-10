'use client';
import React from 'react';
import Image from 'next/image';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import LampMain from '@/assets/main_lamp.png';
import Lamp1 from '@/assets/top_lamp.jpg';
import Lamp2 from '@/assets/onion_lamp.jpg';
import Lamp3 from '@/assets/onion_b_lamp.jpg';
import Lamp4 from '@/assets/trinagle_lamp.png';
import Lamp5 from '@/assets/round_lamp.jpg';

export default function LampsSection() {
  const [ref, animate] = useInViewAnimation(0.3);
  const columnHeight = '80vh';

  return (
    <section ref={ref} className="w-full min-h-[65vh] md:min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-2 md:px-8 md:py-10 relative overflow-hidden">
      {/* <h2 className="font-cinzel text-white text-4xl sm:text-5xl md:text-6xl text-center my-8 md:my-24 tracking-wider select-none">LAMPS</h2> */}
      {/* Mobile Layout (2-column row above carousel) */}
      <div className="w-full md:hidden flex flex-col gap-6">
        {/* 2-column row: image left, text right */}
        <div className="flex flex-row w-full gap-4 mb-4">
          {/* Image */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="aspect-[3/4] w-full max-w-[180px] rounded-lg overflow-hidden shadow-lg mx-auto">
              <Image src={LampMain} alt="Lamp Main" className="object-cover w-full h-full" priority />
            </div>
          </div>
          {/* Text */}
          <div className="w-1/2 flex flex-col justify-center items-start pr-2">
            <h2 className="text-xl font-cinzel text-black dark:text-white mb-2 tracking-wider select-none transition-colors duration-300">LAMPS</h2>
            <p className="amiko-regular text-black dark:text-white text-xs sm:text-sm text-left select-none transition-colors duration-300">
              inspired from the anglerfish from the deep oceans which uses its illumination to lure other fishes in the ocean and how nature has its own way to give these creatures.
            </p>
          </div>
        </div>
        {/* Carousel grid */}
        <div className="flex flex-row gap-4 overflow-x-auto pb-2 snap-x snap-mandatory w-full px-2">
          {[LampMain, Lamp4, Lamp1, Lamp2, Lamp3, Lamp5].map((img, i) => (
            <div key={i} className="relative min-w-[160px] max-w-[180px] h-44 rounded-lg overflow-hidden flex-shrink-0 snap-center cursor-pointer hover:scale-105 transition duration-300">
              <Image src={img} alt={`Lamp ${i}`} fill className="object-cover" />
              {i === 5 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-cinzel text-white text-lg px-4 py-1 rounded-lg cursor-pointer transition duration-300 bg-black/60">
                    MORE &rarr;
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Desktop/Tablet Layout (with animation, unchanged) */}
      <div className="hidden md:flex relative flex-1 w-full flex-col md:flex-row items-stretch justify-center max-w-[1600px] mx-auto" style={{ minHeight: columnHeight }}>
        {/* Animated Left Image */}
        <div
          className={`
            flex-shrink-0
            absolute md:static left-1/2 md:left-0 top-1/2 md:top-auto
            transform
            ${animate ? 'justify-start md:-translate-x-0 -translate-x-1/2 -translate-y-1/2 md:translate-y-0' : 'justify-center -translate-x-1/2 -translate-y-1/2 md:translate-x-1/2 md:translate-y-0'}
            transition-all duration-1000 ease-in-out
            z-10
            flex items-center
          `}
          style={{ width: '32vw', minWidth: '320px', maxWidth: '520px', height: columnHeight, maxHeight: 800 }}
        >
          <Image
            src={LampMain}
            alt="Lamp Main"
            className="rounded-3xl shadow-lg object-cover w-full h-full"
            priority
          />
        </div>
        {/* Right Content (Grid) */}
        <div
          className={`
            relative
            w-full md:w-[65%]
            md:ml-10
            flex flex-col items-start justify-center
            transition-all duration-1000 ease-in-out
            ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            z-0
            bg-white/80 dark:bg-black/80 rounded-lg 
            min-w-[320px]
            h-full
          `}
          style={{ height: columnHeight }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel text-black dark:text-white mb-4 tracking-wider select-none transition-colors duration-300">LAMPS</h2>
          <p className="amiko-regular text-black dark:text-white text-base md:text-lg mb-8 select-none transition-colors duration-300">
            INSPIRED FROM THE ANGLERFISH FROM THE DEEP OCEANS WHICH USES ITS ILLUMINATION TO LURE OTHER FISHES IN THE OCEAN AND HOW NATURE HAS ITS OWN WAY TO GIVE THESE CREATURES .
          </p>
          {/* Grid of images */}
          <div className="grid grid-cols-3 gap-12 w-full h-[calc(100%-7rem)] items-stretch">
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={LampMain} alt="Lamp 1" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={Lamp4} alt="Lamp 2" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={Lamp1} alt="Lamp 3" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={Lamp2} alt="Lamp 4" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={Lamp3} alt="Lamp 5" fill className="rounded-lg object-cover" />
            </div>
            {/* Last image with overlay */}
            <div className="relative w-full h-full min-h-[120px] group">
              <Image src={Lamp5} alt="Lamp 6" fill className="rounded-lg object-cover brightness-50 transition duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cinzel text-white text-xl md:text-2x px-6 py-2 rounded-lg cursor-pointer transition duration-300 group-hover:bg-black/80">
                  MORE &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 