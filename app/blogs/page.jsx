// // // /app/blogs/page.js
//  import DivImg from "@/components/common/DivImg";
 import { blogPosts } from './blogData'
 import { IoCalendarNumberOutline } from "react-icons/io5"; 
 import Link from "next/link";

const page = () => {
  return (
    <>
      <DivImg text={'Blogs'}/>

      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/bg-banner-2.png')",
        }}
      >
        {/* White overlay with opacity */}
        {/* <div className="absolute inset-0 bg-white/95 bg-opacity-90 z-0" /> */}

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogPosts.map((blog, index) => (
              <div
                key={index}
                className="overflow-hidden transition-transform hover:scale-[1.02] bg-white rounded-2xl shadow-md"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-left">
                  <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                      <IoCalendarNumberOutline />
                      {blog.date}
                  </p>
                  <h3 className="font-semibold text-md text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">{blog.description}</p>
                  <Link 
                    href={`/blogs/${blog.slug}`} 
                    className="text-[#0e0e0e] font-medium inline-flex items-center hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;



// "use client"
// import { useState, useEffect } from 'react';
// import DivImg from "@/components/common/DivImg";

// const galleryData = {
//   auction: [
//     "/assets/welcome.jpg",
//     "/assets/G30.jpg",
//     "/assets/gallery.jpg",
//     "/assets/gallery2.jpg",
//     "/assets/gallery3.jpg",
//   ],
//   training: [
//     "/assets/training1.jpg",
//     "/assets/training2.jpg",
//   ],
//   match: []
// };

// const Page = () => {
//   const [activeFilter, setActiveFilter] = useState('auction');
//   const [isLoading, setIsLoading] = useState(true);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setImages(galleryData[activeFilter]);
//       setIsLoading(false);
//     }, 800);
//     return () => clearTimeout(timer);
//   }, [activeFilter]);

//   const handleFilter = (filter) => {
//     setIsLoading(true);
//     setActiveFilter(filter);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Gallery Heading */}
//       <DivImg text={'Our Gallery'} />

//       <section className="relative py-16 max-w-7xl mx-auto px-4">
//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {['auction', 'training', 'match'].map((filter) => (
//             <button
//               key={filter}
//               onClick={() => handleFilter(filter)}
//               className={`px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
//                 activeFilter === filter
//                   ? 'bg-[#0b2142] text-white shadow-lg'
//                   : 'bg-white text-[#0b2142] hover:bg-gray-100'
//               }`}
//             >
//               {filter === 'auction' && 'Auction'}
//               {filter === 'training' && 'Training Camp'}
//               {filter === 'match' && 'Match Day'}
//             </button>
//           ))}
//         </div>

//         {/* Masonry Layout */}
//         <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
//           {isLoading ? (
//             Array.from({ length: 6 }).map((_, index) => (
//               <div
//                 key={`skeleton-${index}`}
//                 className="w-full h-48 bg-gray-200 rounded-lg mb-4 break-inside-avoid animate-pulse"
//               />
//             ))
//           ) : images.length > 0 ? (
//             images.map((src, index) => (
//               <img
//                 key={index}
//                 src={src}
//                 alt={`Gallery image ${index + 1}`}
//                 className="w-full rounded-lg mb-4 break-inside-avoid shadow-md border-4 border-[#0b2142] hover:scale-[1.01] transition-transform duration-300"
//                 loading="lazy"
//               />
//             ))
//           ) : (
//             <div className="col-span-full text-center py-12">
//               <h3 className="text-2xl font-bold text-[#0b2142] mb-2">
//                 Coming Soon!
//               </h3>
//               <p className="text-gray-600">
//                 We're preparing amazing content for this section. Stay tuned!
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;
