import DivImg from '@/components/common/DivImg';
import OurManagement from '@/components/sections/OurManagement';
import Partner from '@/components/sections/Partners';
import WeAre from '@/components/sections/WeAre';
// import WordsOwner from '@/components/sections/wordsOwner';
import { assets, OurMission } from '@/public/assets/assests';
import React from 'react'

const page = () => {
  return (
    <>

    <DivImg/>

    <WeAre/>

    <div className="our-mission">
        <div className="w-full whatUs py-24 px-4 sm:px-5 md:px-10">
          {/* Feature Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {OurMission.map((box, idx) => (
              <div
                key={idx}
                className="bg-transparent border-2 border-gray-500 rounded-lg p-6 flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:scale-105"
                >
                <div className="text-[#fab505] text-3xl sm:text-4xl">{box.icons}</div>
                <h3 className='text-white text-4xl font-extralight'>{box.heading}</h3>
                <p className="text-white text-sm sm:text-base font-[Para-1]">{box.message}</p>
              </div>
            ))}
          </div>
        </div>
    </div>

    <div className="our-philosphy h-[50vh] w-full flex items-center justify-center px-4 sm:px-0">
      <div className="whatUs w-full sm:w-[85%] h-[60%] flex flex-col items-center justify-center rounded-2xl p-4 sm:p-0">
        <div className="text-center space-y-4 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-[heading-1]">
            Philosophy
          </h2>
          <div className="h-1 w-24 bg-[#fab505] mx-auto"></div>
          <p className="text-white text-sm sm:text-base md:text-lg font-[Para-1] max-w-2xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quam 
            illum quo dolore, minus alias labore nihil ipsa.
          </p>
        </div>
      </div>
    </div>

    <OurManagement/>

    <section 
      className="py-16 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/bg-banner-2.png')", // Add your banner image path here
      }}
    >
      {/* Optional overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-white/90"></div> */}
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-4 font-[heading-1]">
              Words from Owner
            </h2>
            <div className="h-1 w-24 bg-[#fab505] mx-auto"></div>
          </div>

          {/* Mobile Layout: Image after heading, then content */}
          <div className="block md:hidden">
            {/* Image & Name for Mobile */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <img
                  src="/assets/IconPlayer.jpg"
                  alt="Mr. Naveen Raathi"
                  className="w-48 h-60 object-cover mx-auto rounded-sm border border-gray-200"
                />
                {/* Name overlay on image for mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white py-2 px-4">
                  <h3 className="text-lg font-bold">Mr. Naveen Raathi</h3>
                  <p className="text-sm">Owner - Noida Thunders</p>
                </div>
              </div>
            </div>

            {/* Content for Mobile */}
            <div className="font-[para-1] text-sm sm:text-base">
              <p className="text-gray-700 mb-4 leading-relaxed">
                When we envisioned Noida Thunders, it was never just about forming a team — it was about igniting a
                movement. A movement that resonates with the speed, ambition, and pulse of Noida itself. A team that
                reflects the energy of a city that never stops growing, building, and dreaming bigger.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Noida Thunders is built on the foundation of discipline, fire, and future. We stand for every aspiring
                athlete, every dreamer, and every fan who believes in the power of sports to unite and uplift. Our
                players don't just wear a jersey; they carry the pride of a city poised to roar on the national stage.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This is more than volleyball. This is about creating icons, building a legacy, and thunderously announcing that Noida
                has arrived.
              </p>
              <div className="text-center italic text-gray-800 bg-gray-50 p-4 rounded border-l-4 border-[#fab505]">
                "Join us in this electrifying journey. Let's rally together, rise stronger, and make sure that when we
                thunder — the entire nation hears it."
              </div>
            </div>
          </div>

          {/* Desktop Layout: Content and Image side by side */}
          <div className="hidden md:flex items-start gap-12">
            {/* Text Content */}
            <div className="flex-1 font-[para-1]">
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                When we envisioned Noida Thunders, it was never just about forming a team — it was about igniting a
                movement. A movement that resonates with the speed, ambition, and pulse of Noida itself. A team that
                reflects the energy of a city that never stops growing, building, and dreaming bigger.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                Noida Thunders is built on the foundation of discipline, fire, and future. We stand for every aspiring
                athlete, every dreamer, and every fan who believes in the power of sports to unite and uplift. Our
                players don't just wear a jersey; they carry the pride of a city poised to roar on the national stage.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-base">
                This is more than volleyball. This is about creating icons, building a legacy, and thunderously announcing that Noida
                has arrived.
              </p>
              <div className="italic text-gray-800 bg-gray-50/80 p-6 rounded border-l-4 border-[#fab505] text-center">
                "Join us in this electrifying journey. Let's rally together, rise stronger, and make sure that when we
                thunder — the entire nation hears it."
              </div>
            </div>

            {/* Image & Name */}
            <div className="flex-shrink-0 text-center">
              <div className="relative">
                <img
                  src="/assets/IconPlayer.jpg"
                  alt="Mr. Naveen Raathi"
                  className="w-64 h-80 object-cover rounded-sm border border-gray-200 shadow-sm"
                />
                {/* Name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/85 text-white py-3 px-4">
                  <h3 className="text-xl font-bold mb-1">Mr. Naveen Raathi</h3>
                  <p className="text-sm">Owner - Noida Thunders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <Partner/>


    </>
  )
}

export default page;