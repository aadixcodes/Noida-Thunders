import Image from "next/image";
import DivImg from '@/components/common/DivImg'

import { assets } from '@/public/assets/assests'
import React from 'react'

const page = () => {

  const schedule = {

    "team": "NOIDA THUNDERS",
    "match_schedule": [
      {
        "day": "Day 1",
        "date": "7 Aug 2025",
        "match_number": "M1",
        "time": "3:30 PM – 5:00 PM",
        "opponent": "Lucknow Tigers",
        "oppImg": assets.lucknow,
      },
      {
        "day": "Day 3",
        "date": "9 Aug 2025",
        "match_number": "M6",
        "time": "5:00 PM – 6:30 PM",
        "opponent": "Kashi Warriors",
        "oppImg": assets.Kashi,
      },
      {
        "day": "Day 5",
        "date": "11 Aug 2025",
        "match_number": "M9",
        "time": "3:30 PM – 5:00 PM",
        "opponent": "Mathura Yodhas",
        "oppImg": assets.mathura,
      },
      {
        "day": "Day 8",
        "date": "14 Aug 2025",
        "match_number": "M15",
        "time": "3:30 PM – 5:00 PM",
        "opponent": "Ayodhya Superkings",
        "oppImg": assets.ayodhya,
      },
      {
        "day": "Day 10",
        "date": "16 Aug 2025",
        "match_number": "M20",
        "time": "5:00 PM – 6:30 PM",
        "opponent": "Gorakhpur Giants",
        "oppImg": assets.gorakhpur,
      }
    ]
  }

  return (
    <>
      <DivImg text={'Fixtures'}/>

        <section
            className="relative py-16 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/Banner1.jpg')",
            }}
          >
            {/* White overlay with opacity */}
            <div className="absolute inset-0 bg-white/95 bg-opacity-90 z-0" />
      
            <div className="relative z-10 max-w-6xl mx-auto px-4">

              {
                schedule.match_schedule.map((match, idx) => (
                  <div 
                    key={idx} 
                    className={`px-4 py-6 rounded-lg max-w-6xl mx-auto mt-10 relative overflow-hidden ${
                      idx % 2 === 0 ? 'bg-[#0B2A45] text-white' : 'bg-white text-[#0B2A45]'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 relative z-10">
                    
                      {/* Team A */}
                      <div className="flex items-center gap-4">
                        <Image src={assets.noida} alt="Noida Thunders" width={60} height={60} />
                        <div>
                          <h2 className="text-xl font-[heading-1]">Noida Thunders</h2>
                          <div className={`h-1 w-16 mt-1 ${
                            idx % 2 === 0 ? 'bg-[#fab505]' : 'bg-[#0B2A45]'
                          }`} />
                        </div>
                      </div>

                      {/* Match Info */}
                      <div className="text-center font-[para-1]">
                        <p className="text-sm font-semibold">{match.date}</p>
                        <p className="text-sm font-semibold">{match.time}</p>
                      </div>

                      {/* Team B */}
                      <div className="flex items-center gap-4 flex-row-reverse">
                        <Image src={match.oppImg} alt={match.opponent} width={60} height={60} />
                        <div className="text-right">
                          <h2 className="text-xl font-[heading-1]">{match.opponent}</h2>
                          <div className={`h-1 w-16 mt-1 ml-auto ${
                            idx % 2 === 0 ? 'bg-[#fab505]' : 'bg-[#0B2A45]'
                          }`} />
                        </div>
                      </div>
                    </div>

                    {/* VS in Background */}
                    <div className={`absolute inset-0 flex items-center justify-center text-[8rem] font-extrabold z-0 ${
                      idx % 2 === 0 ? 'text-white/5' : 'text-[#0B2A45]/5'
                    }`}>
                      VS
                    </div>

                    {/* Venue */}
                    <p className={`text-center font-[para-1] mt-4 text-sm ${
                      idx % 2 === 0 ? 'text-white/80' : 'text-[#0B2A45]/80'
                    }`}>
                      Shaheed Vijay Singh Pathak Sports Complex Indoor Stadium
                    </p>
                  </div>
                ))
              }

            </div>
          </section>
    </>
  )
}

export default page