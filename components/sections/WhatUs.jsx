'use client';
import { WhatMakes } from '@/public/assets/assests'; // ⚠️ see note below
import React from 'react';

const WhatUs = () => {
  return (
<div className="w-full whatUs py-20 px-4 sm:px-6 md:px-10">
  {/* Heading Section */}
  <div className="text-center mb-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-[heading-1] mb-4">
      What Makes Us Thunders?
    </h2>
    <div className="h-1 w-24 sm:w-32 bg-[#fab505] mx-auto"></div>
  </div>

  {/* Feature Boxes */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {WhatMakes.map((box, idx) => (
      <div
        key={idx}
        className="bg-transparent border-2 border-gray-500 rounded-lg p-6 flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:scale-105"
      >
        <div className="text-[#fab505] text-3xl sm:text-4xl">{box.icons}</div>
        <p className="text-white text-sm sm:text-base font-[Para-1]">{box.text}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default WhatUs;
