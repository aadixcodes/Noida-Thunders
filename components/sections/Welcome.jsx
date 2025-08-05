'use client';
import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl xs:text-4xl sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem] text-[#1c0f0d] font-[heading-1] mb-4 md:mb-6 leading-tight">
            Welcome to the world of Noida Thunders
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-[#fab604] mx-auto"></div>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-[#1c0f0d] font-[heading-1]">
            More Than a Team. A Movement.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 text-[#1c0f0d] text-base sm:text-[1.05rem] md:text-lg lg:text-[1.1rem] font-[Para-1] leading-relaxed sm:leading-relaxed">
            <p>
              Welcome to the world of Noida Thunders — where every serve is electric and every match is a statement.
              Born from the spirit of one of India’s fastest-growing cities,
              Noida Thunders represent more than just volleyball.
              We embody ambition, energy, and the pulse of a young, tech-driven generation ready to roar on and off the court.
            </p>

            <p>
              With a lineup of fearless athletes, strategic minds, and unstoppable grit, Noida Thunders are here to storm the Uttar
              Pradesh Pro Volleyball League with unmatched intensity and pride.
            </p>

            <p>
              Whether you're a die-hard sports fan or just love the thrill of the game — this is your team, your city, your thunder.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[340px] md:h-[370px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/welcome.jpg"
              alt="Noida Thunders Team"
              fill
              className="object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;