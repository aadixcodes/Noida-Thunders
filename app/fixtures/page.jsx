import Image from "next/image";
import DivImg from '@/components/common/DivImg'

import { assets } from '@/public/assets/assests'
import React from 'react'

const page = () => {
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

                <div className="bg-[#0B2A45] text-white px-4 py-6 rounded-lg max-w-6xl mx-auto mt-10 relative overflow-hidden">
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 relative z-10">
                  
                    {/* Team A */}
                    <div className="flex items-center gap-4">
                      <Image src={assets.noida} alt="Noida Thunders" width={60} height={60} />
                      <div>
                        <h2 className="text-xl font-[heading-1]">Noida Thunders</h2>
                        <div className="h-1 w-16 bg-[#fab505] mt-1" />
                      </div>
                    </div>

                    {/* Match Info */}
                    <div className="text-center font-[para-1]">
                      <p className="text-sm font-semibold">August 1, 2025</p>
                      <p className="text-sm font-semibold">03:30 PM – 05:00 PM</p>
                    </div>

                      {/* Team B */}
                      <div className="flex items-center gap-4 flex-row-reverse">
                        <Image src={assets.ayodhya} alt="Mathura Yodhas" width={60} height={60} />
                        <div className="text-right">
                          <h2 className="text-xl font-[heading-1]">Mathura Yodhas</h2>
                          <div className="h-1 w-16 bg-[#fab505] mt-1 ml-auto" />
                        </div>
                      </div>
                    </div>

                    {/* VS in Background */}
                    <div className="absolute inset-0 flex items-center justify-center text-[8rem] font-extrabold text-white/5 z-0">
                      VS
                    </div>

                {/* Venue */}
                    <p className="text-center font-[para-1] mt-4 text-sm text-white/80">
                      Shaheed Vijay Singh Pathak Sports Complex Indoor Stadium
                    </p>
               </div>
              </div>
            </section>

    </>
  )
}

export default page