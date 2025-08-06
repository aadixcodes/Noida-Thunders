"use client";
import Image from "next/image";

const Partner = () => {
  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "/assets/partner1.jpg",
      type: "Official Broadcasting Partner",
    },
    {
      name: "Sponsor 2",
      logo: "/assets/partner2.png",
      type: "Official Broadcasting Partner",
    },
    {
      name: "SVR - Your Move, Our Expertise",
      logo: "/assets/svRe-logo.jpg",
      type: "Principal Sponsor",
    },
    {
      name: 'Vite',
      logo: "/assets/Veeta-logo.jpg",
      type: "Powered By",
    }
  ];

  return (
    <section className="py-8 md:py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-[heading-1] opacity-95 text-[#1c0f0d]">
            Our Partners
          </h2>
          <div className="w-[25%] h-1 bg-[#fab604] mx-auto mt-3"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 md:flex-nowrap md:justify-between">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-2 flex-shrink-0"
            >
              {/* Caption above the image */}
              <p className="mb-2 text-center text-[#1c0f0d] font-[para-1] italic text-lg">
                {sponsor.type}
              </p>

              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;






// "use client";
// import Image from "next/image";

// const Partner = () => {
//   const sponsors = [
//     {
//       name: "Sponsor 1",
//       logo: "/assets/partner1.jpg",
//     },
//     {
//       name: "Sponsor 2",
//       logo: "/assets/partner2.png",
//     },
//   ];

//   return (
//     <section className="py-8 md:py-12 mt-10">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-2">
//           <h2 className="text-4xl sm:text-6xl font-[heading-1] opacity-95 text-[#1c0f0d]">
//             Our Partners
//           </h2>
//           <div className="w-[25%] h-1 bg-[#fab604] mx-auto mt-3"></div>
//         </div>
//         <div className="text-center  mb-6 md:mb-8">
//           <p className="text-xl text-[#1c0f0d] font-[para-1]"> <i> Official Broadcasting Partners </i></p>
//         </div>

//         {/* Partner logos - now with consistent spacing */}
//         <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
//           {sponsors.map((sponsor, index) => (
//             <div key={index} className="flex items-center justify-center p-2">
//               <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
//                 <Image
//                   src={sponsor.logo}
//                   alt={sponsor.name}
//                   fill
//                   className="object-contain rounded-xl"
//                   sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Added Official Broadcast Partners line */}


        
//       </div>
//     </section>
//   );
// };

// export default Partner;