'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Partner from '@/components/sections/Partners';
import DivImg from '@/components/common/DivImg';


export default function OurTeam() {
  const [activeTab, setActiveTab] = useState('team');
  const [isLoading, setIsLoading] = useState(true);

  const teamImages = [
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
    '/assets/Profile.webp',
  ];

  const staffData = [
    {
      image: '/assets/IconPlayer.jpg',
      name: 'Amrit Pal Singh',
      title: 'Head Coach'
    },
    {
      image: '/assets/IconPlayer.jpg',
      name: 'Vijay Tomar',
      title: 'Assistant Coach'
    }
  ];

  useEffect(() => {
    // Simulate loading delay only for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white/0">
      {/* Page Banner - Unchanged */}

      <DivImg text={'Our Team'}/>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        {/* Toggle Tabs - Unchanged */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex gap-3 md:gap-5 p-1 rounded-lg bg-white shadow-sm">
            {['team', 'staff'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setIsLoading(true);
                  setActiveTab(tab);
                }}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-md font-medium text-sm md:text-base transition-all ${
                  activeTab === tab
                    ? 'bg-[#fab604] text-[#1c0f0d] shadow-md'
                    : 'bg-transparent text-[#1c0f0d] hover:bg-gray-100'
                }`}
              >
                {tab === 'team' ? 'Players Squad' : 'Management'}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid with Skeleton Loading */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 rounded-xl">
          {isLoading ? (
            // Skeleton loading only for images
            Array.from({ length: activeTab === 'team' ? 8 : 2 }).map((_, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 animate-pulse">
                  {activeTab === 'staff' && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-300 animate-pulse" />
                  )}
                </div>
              </div>
            ))
          ) : activeTab === 'team' ? (
            // Actual team images
            teamImages.map((image, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={image}
                      alt={`Player ${index + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual staff images
            staffData.map((staff, index) => (
              // <div
              //   key={index}
              //   className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)]"
              // >
              //   <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              //     <div className="relative aspect-[3/4]">
              //       <Image
              //         src={staff.image}
              //         alt={staff.name}
              //         fill
              //         className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              //         sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              //       />
              //       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              //     </div>
              //     <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
              //       <h3 className="font-bold text-[#1c0f0d] text-sm sm:text-base">{staff.name}</h3>
              //       <p className="text-[#1c0f0d] text-xs sm:text-sm">{staff.title}</p>
              //     </div>
              //   </div>
              // </div>

              <div
                key={index}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={staff.image}
                      alt={`Player ${index + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Partner/>
    </div>
  );
}

