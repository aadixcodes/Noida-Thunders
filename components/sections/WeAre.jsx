'use client';
import React from "react";
import Image from "next/image";

const WeAre = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1c0f0d] font-[heading-1] mb-4 opacity-95 leading-tight">
            We Are Noida Thunders
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-[#fab604] mx-auto"></div>
        </div>  

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-1 items-center">

          {/* Image Content */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/assets/Noida.png"
              alt="Noida Thunders Team"
              fill
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /> */}

          {/* Text Content */}
          <div className="space-y-6 text-[#1c0f0d] text-base sm:text-lg font-[Para-1] leading-relaxed">
            <p>
              Welcome to the world of Noida Thunders — where every serve is electric and every match is a statement.
              Born from the spirit of one of India's fastest-growing cities, Noida Thunders represents more than just volleyball.
              We embody ambition, energy, and the pulse of a young, tech-driven generation ready to roar on and off the court.
              With a lineup of fearless athletes, strategic minds, and unstoppable grit, Noida Thunders is here to storm the Uttar
              Pradesh Pro Volleyball League with unmatched intensity and pride.
            </p>

            <p>
              Whether you're a die-hard sports fan or just love the thrill of the game — this is your team, your city, your thunder.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeAre;

