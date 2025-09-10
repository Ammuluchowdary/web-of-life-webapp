'use client';
import React from 'react';
import Image from 'next/image';
import BigMirror from '@/assets/mirror.jpg';
import Mirror2 from '@/assets/trees_mirror.jpg';
import AvacadoMirror from '@/assets/avacado_mirror.jpg';
import AvacadoMirror2 from '@/assets/avacado_mirror2.jpg';
import BeachMirror from '@/assets/beach_mirror.jpg';
import Round_Lamp from '@/assets/round_lamp.jpg';
import MirrorMain from '@/assets/mirrors_main.jpg';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export default function MirrorsSection() {
  const [ref, animate] = useInViewAnimation(0.3);
  const columnHeight = '80vh';

  return (
    <section ref={ref} className="w-full min-h-[65vh] md:min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-2 md:px-8 md:py-10 relative overflow-hidden">
      {/* <h2 className="font-cinzel text-white text-4xl sm:text-5xl md:text-6xl text-center my-8 md:my-24 tracking-wider select-none">MIRRORS</h2> */}
      {/* Mobile Layout (2-column row above carousel) */}
      <div className="w-full md:hidden flex flex-col gap-6">
        {/* 2-column row: image left, text right */}
        <div className="flex flex-row w-full gap-4 mb-4">
          {/* Image */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="aspect-[3/4] w-full max-w-[180px] rounded-lg overflow-hidden shadow-lg mx-auto">
              <Image src={MirrorMain} alt="Main Mirror" className="object-cover w-full h-full" priority />
            </div>
          </div>
          {/* Text */}
          <div className="w-1/2 flex flex-col justify-center items-start pr-2">
            <h2 className="text-xl font-cinzel text-black dark:text-white mb-2 tracking-wider select-none transition-colors duration-300">MIRRORS</h2>
            <p className="amiko-regular text-black dark:text-white text-xs sm:text-sm text-left select-none transition-colors duration-300">
              elegantly diffusing the vibrance of the ancient conch, the rippled portal is inspired by the high–spirited affect that it creates around its surroundings.
            </p>
          </div>
        </div>
        {/* Carousel grid */}
        <div className="flex flex-row gap-4 overflow-x-auto pb-2 snap-x snap-mandatory w-full px-2">
          {[BigMirror, Mirror2, AvacadoMirror, AvacadoMirror2, BeachMirror, Round_Lamp].map((img, i) => (
            <div key={i} className="relative min-w-[160px] max-w-[180px] h-44 rounded-lg overflow-hidden flex-shrink-0 snap-center cursor-pointer hover:scale-105 transition duration-300">
              <Image src={img} alt={`Mirror ${i}`} fill className="object-cover" />
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
        {/* Left Content (Grid) */}
        <div
          className={`
            relative
            w-full md:w-[65%]
            md:mr-10
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
          <h2 className="text-3xl md:text-4xl font-cinzel text-black dark:text-white mb-4 tracking-wider select-none transition-colors duration-300">MIRRORS</h2>
          <p className="amiko-regular text-black dark:text-white text-base md:text-lg mb-8 select-none transition-colors duration-300">
            ELEGANTLY DIFFUSING THE VIBRANCE OF THE ANCIENT CONCH, THE RIPPLED PORTAL IS INSPIRED BY THE HIGH–SPIRITED AFFECT THAT IT CREATES AROUND ITS SURROUNDINGS.
          </p>
          {/* Grid of images */}
          <div className="grid grid-cols-3 gap-12 w-full h-[calc(100%-7rem)] items-stretch">
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={BigMirror} alt="Big Mirror" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={Mirror2} alt="Ripple 1" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={AvacadoMirror} alt="Ripple 2" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={AvacadoMirror2} alt="Ripple 3" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full h-full min-h-[120px] cursor-pointer hover:scale-120 transition duration-300">
              <Image src={BeachMirror} alt="Beach Mirror" fill className="rounded-lg object-cover" />
            </div>
            {/* Last image with overlay */}
            <div className="relative w-full h-full min-h-[120px] group">
              <Image src={Round_Lamp} alt="Round Lamp" fill className="rounded-lg object-cover brightness-50 transition duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cinzel text-white text-xl md:text-2x px-6 py-2 rounded-lg cursor-pointer transition duration-300 group-hover:bg-black/80">
                  MORE &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Animated Right Image */}
        <div
          className={`
            flex-shrink-0
            absolute md:static right-1/2 md:right-0 top-1/2 md:top-auto
            transform
            ${animate ? 'justify-end md:translate-x-0 translate-x-1/2 -translate-y-1/2 md:translate-y-0' : 'justify-center translate-x-1/2 -translate-y-1/2 md:-translate-x-1/2 md:translate-y-0'}
            transition-all duration-1000 ease-in-out
            z-10
            flex items-center
          `}
          style={{ width: '32vw', minWidth: '320px', maxWidth: '520px', height: columnHeight, maxHeight: 800 }}
        >
          <Image
            src={MirrorMain}
            alt="Main Mirror"
            className="rounded-lg shadow-lg object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
