"use client"
import React, { useState } from 'react'
import Image from "next/image";
import BlackBigChair from '@/assets/BlackBig_Chair.jpg';
// import ArtMirror from '@/assets/art_mirror.png';
import StoneTable from '@/assets/stoneTable.jpg';
import StoneTable2 from '@/assets/stoneTable2.jpg';
import StoneTable3 from '@/assets/stoneTable3.jpg';
import StoneTable4 from '@/assets/stoneTable4.jpg';
import StoneTable5 from '@/assets/stoneTable5.jpg';
import StoneTable6 from '@/assets/stoneTable6.jpg';
import CelestialDance from '@/assets/Celestial_dance.jpg';
import BeachAvacado from '@/assets/beach_avacado.jpg';
import BottleNose from '@/assets/BottleNose.jpg';
import OebaMirror from '@/assets/oeba_mirror.jpg';
import FireWood from '@/assets/fire_wood.jpg';
import Avacado from '@/assets/avacado_mirror.jpg';
import Bowl from '@/assets/wooden_bowl.png';
import portal from '@/assets/Rectanglemirror.png';
import Navbar from '../components/navbar';
import ShowcaseModal from './showcaseModal';

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [mainImageIdx, setMainImageIdx] = useState(0);

  // All images for the modal gallery
  const images = [StoneTable, StoneTable2, StoneTable3, StoneTable4, StoneTable5, StoneTable6];

  // Modal content
  const title = "The Stone Table";
  const description = "A timeless design, with premium materials features as one of our most popular and iconic pieces. Mirror is perfect for any stylish living space with beech legs and lambskin leather upholstery.";
  const features = [
    "Premium material",
    "Handmade upholstery",
    "Quality timeless classic"
  ];
  const dimensions = [
    { label: "Height", value: "110cm" },
    { label: "Width", value: "75cm" },
    { label: "Depth", value: "50cm" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-300">
        {/* Gallery Section */}
        <section className="w-full bg-white dark:bg-black px-4 py-12 flex flex-col md:flex-row gap-12 md:gap-24 lg:gap-32 transition-colors duration-300">
          {/* Left: Quote and Large Image */}
          <div className="flex-1 flex flex-col items-center ">
            <p className="text-black dark:text-white text-lg md:text-2xl lg:text-4xl font-light text-center z-5 transition-colors duration-300">
              &ldquo;Discover timeless treasures at Web of Life &ndash;<br />
              where history meets elegance&rdquo;
            </p>
            <div className="w-full   aspect-[3/4] relative z-0">
              <Image
                src={FireWood}
                alt="Hero Left"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
          {/* Right: Responsive Gallery Grid */}
          <div className="flex-[1.5] grid grid-cols-2 md:grid-cols-3  gap-x-20 gap-y-12">
            {/* First Image with Modal */}
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={StoneTable}
                  alt="The Stone Table"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div
                  className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg transition-opacity duration-200 cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  onClick={() => setShowModal(true)}
                >
                  <span className="text-black dark:text-white text-base font-medium">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center transition-colors duration-300">The Stone Table</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={CelestialDance}
                  alt="Celestial Dance"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-black dark:text-white text-base font-medium cursor-pointer">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center">Celestial Dance</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={BeachAvacado}
                  alt="Beach Avacado"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-black dark:text-white text-base font-medium cursor-pointer">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center">Rippled Portal</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={BlackBigChair}
                  alt="Black Big Chair"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-black dark:text-white text-base font-medium cursor-pointer">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center">Black Big Chair</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={OebaMirror}
                  alt="Oeba Mirror"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-black dark:text-white text-base font-medium cursor-pointer">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center">Oeba Mirror</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={BottleNose}
                  alt="The Art Mirror"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-black dark:text-white text-base font-medium cursor-pointer">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center">Bottle Nose</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={Avacado}
                  alt="The Art Mirror"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-black dark:text-white text-base font-medium cursor-pointer">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center">Birth and Death of a Star</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={Bowl}
                  alt="The Art Mirror"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-black dark:text-white text-base font-medium cursor-pointer">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center">Wooden Bowl</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full group" style={{ aspectRatio: "1/1", minHeight: 150 }}>
                <Image
                  src={portal}
                  alt="The Art Mirror"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Quick View Overlay */}
                <div className="absolute left-0 right-0 bottom-0 bg-gray-300/80 text-center py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-black dark:text-white text-base font-medium cursor-pointer">Quick View</span>
                </div>
              </div>
              <span className="text-black dark:text-white text-sm md:text-2xl mt-5 text-center">Rippled Portal</span>
            </div>
          </div>
        </section>
      </div>

      {/* Showcase Modal */}
      <ShowcaseModal
        open={showModal}
        onClose={() => setShowModal(false)}
        images={images}
        mainImageIdx={mainImageIdx}
        setMainImageIdx={setMainImageIdx}
        title={title}
        description={description}
        features={features}
        dimensions={dimensions}
      />
    </>
  )
}

export default Page;