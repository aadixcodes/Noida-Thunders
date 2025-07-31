'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { assets } from '@/public/assets/assests';

const matches = [
  {
    team2: 'Lucknow Tigers',
    team1: 'Noida Thunders',
    date: 'July 30, 2025',
    time: '12:00 PM',
    venue: 'Stadium Name',
    team1Logo: assets.lucknow,
    team2Logo: assets.noida,
  },
  {
    team2: 'Mathura Yodhas',
    team1: 'Noida Thunders',
    date: 'Aug 7, 2025',
    time: '3:30 PM',
    venue: 'Stadium Arena',
    team1Logo: assets.mathura,
    team2Logo: assets.noida,
  },

    {
    team2: 'Ayodhya Superkings',
    team1: 'Noida Thunders',
    date: 'Aug 7, 2025',
    time: '3:30 PM',
    venue: 'Stadium Arena',
    team1Logo: assets.ayodhya,
    team2Logo: assets.noida,
  },

    {
    team2: 'Gorakhpur Giants',
    team1: 'Noida Thunders',
    date: 'Aug 7, 2025',
    time: '3:30 PM',
    venue: 'Stadium Arena',
    team1Logo: assets.gorakhpur,
    team2Logo: assets.noida,
  },
  // Add more matches as needed
];

const MatchSchedule = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/assets/bg-banner-2.png')` }} // update path if needed
      id="schedule"
    >
      {/* White Shadow Overlay */}
      <div className="absolute inset-0 bg-white/30 bg-opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 text-black">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-[heading-1]">Match Schedule</h2>
          <p className="text-gray-700 max-w-xl mx-auto mt-3 font-[para-1]">
            Dive into our upcoming matches and witness the thunder in action.
          </p>
        </div>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          className="mySwiper"
        >
          {matches.map((match, index) => (
            <SwiperSlide key={index}>
              <div className="px-6 lg:px-16 transition-all duration-500 ease-in-out">
                <div className="flex flex-col items-center gap-6 p-6 rounded-xl font-[para-1] ">
                  <div className="flex items-center justify-between w-full gap-4">
                    <div className="text-center flex-1">
                      <Image src={match.team1Logo} alt={match.team1} width={100} height={100} className="mx-auto" />
                      <p className=" mt-2  font-semibold">{match.team1}</p>
                    </div>
                    <div className="text-4xl font-bold text-center flex-shrink-0 w-[100px]">VS</div>
                    <div className="text-center flex-1">
                      <Image src={match.team2Logo} alt={match.team2} width={100} height={100} className="mx-auto" />
                      <p className="mt-2 font-semibold">{match.team2}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-medium">{match.date} | {match.time}</p>
                    <p className="text-gray-600">{match.venue}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default MatchSchedule;
