'use client';
import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assests";

const Iconstar = () => {

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#1c0f0d] mb-4 font-[heading-1] opacity-95">
            Meet Our Icon Star
          </h1>
          <div className="w-[30%] h-1 bg-[#fab604] mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image Content */}
            <div className="relative h-full min-h-[400px] lg:min-h-[300px] overflow-hidden shadow-xl rounded-lg">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <Image
                    src={assets.starplayer}
                    alt="Ayodhya Super Kings Team"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>



          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-[#1c0f0d] leading-relaxed font-[Para-1]">
              Vipul Kumar isn't just a player - he's the icon of Noida Thunders. As one of India's top Volleball
              setters, his precision , quick thinking , and clutch assists have made him the heartbeat of every
              team he's led. From Best Setter at the UP State Championship (2019) to MVP a the UPPVL Trials Games.
              Ranked among the top 3 in assists at the senior Nationals (2021) , Vipul's track record is built on
              impact. Ranked among the top 3 in assists at the senior Nationals (2021) and owning the Best serve Accuracy 
              in the Zonal League (2023), he enters this season as the game - changer Noida counts on - calm ,
              calculated , and ready to command the court.
            </p>

            <button className='bg-[#fab505] text-white py-2 px-5 rounded-2xl'>View Our Squad</button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Iconstar;