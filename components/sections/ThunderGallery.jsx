'use client';
import { ThunGallery } from '@/public/assets/assests';
import React from 'react';

const ThunderGallery = () => {
  return (
    <section className="w-full whatUs py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-[heading-1]">
            Thunders Gallery
          </h2>
          <div className="h-1 w-24 bg-[#fab505] mx-auto"></div>
          <p className="text-white text-sm sm:text-base md:text-sm font-[Para-1] max-w-2xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quam 
            illum quo dolore, minus alias labore nihil ipsa vitae beatae, excepturi 
            enim aliquid odit laboriosam.
          </p>
        </div>

        {/* Gallery Boxes - Desktop & Tablet */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-10 z-10">
          <div className="box h-48 sm:h-56 w-56 rounded-2xl abc transition-transform duration-300 hover:scale-110"></div>
          <div className="box h-48 sm:h-56 w-56 rounded-2xl abcd transition-transform duration-300 hover:scale-110"></div>
          <div className="box h-48 sm:h-56 w-56 rounded-2xl abcde transition-transform duration-300 hover:scale-110"></div>
        </div>

        {/* Gallery Boxes - Mobile Layout */}
        <div className="sm:hidden flex flex-col items-center gap-4 z-10">
          <div className="flex gap-4">
            <div className="box h-48 w-40 rounded-2xl abc transition-transform duration-300 hover:scale-110"></div>
            <div className="box h-48 w-40 rounded-2xl abcd transition-transform duration-300 hover:scale-110"></div>
          </div>
          <div className="box h-48 w-40 rounded-2xl abcde transition-transform duration-300 hover:scale-110"></div>
        </div>

        {/* Button */}
        <button className="bg-[#fab505] text-black font-semibold py-2 px-6 rounded-2xl hover:bg-[#e0a904] transition duration-300">
          View More
        </button>
      </div>
    </section>
  );
};

export default ThunderGallery;

