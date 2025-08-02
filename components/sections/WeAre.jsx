'use client';
import React from "react";
import Image from "next/image";

const WeAre = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1c0f0d] font-[heading-1] mb-4 opacity-95 leading-tight">
            We Are Noida Thunders
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-[#fab604] mx-auto"></div>
        </div>  

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-0   items-center">

          {/* Image Content */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/assets/noida.png"
              alt="Noida Thunders Team"
              fill
              className="object-cover object-center"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" /> */}
          </div>

          {/* Text Content */}
          <div className="px-4 sm:px-6 lg:px-8 space-y-6 text-[#1c0f0d] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
            <p className="mb-6">
              Welcome to the world of Noida Thunders — where every serve is electric and every match is a statement.
              Born from the spirit of one of India's fastest-growing cities, Noida Thunders represents more than just volleyball.
              We embody ambition, energy, and the pulse of a young, tech-driven generation ready to roar on and off the court.
            </p>

            <p className="mb-6">
              With a lineup of fearless athletes, strategic minds, and unstoppable grit, Noida Thunders is here to storm the Uttar
              Pradesh Pro Volleyball League with unmatched intensity and pride.
            </p>

            <p className="font-medium">
              Whether you're a die-hard sports fan or just love the thrill of the game — this is your team, your city, your thunder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;