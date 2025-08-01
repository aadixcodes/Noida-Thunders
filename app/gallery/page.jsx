"use client"
import DivImg from "@/components/common/DivImg";

const galleryImages = [
  "/assets/welcome.jpg",
  "/assets/G30.jpg",
  "/assets/gallery.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",

];

const page = () => {
  return (

    <>

    <DivImg text={'Our Gallery'}/>

    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bg-banner-2.png')", // your uploaded background
      }}
    >
      {/* White overlay */}
      {/* <div className="absolute inset-0 bg-white/85 bg-opacity-90 z-0" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full rounded-lg mb-4 break-inside-avoid shadow-md border-2 border-[#001d3d] hover:scale-[1.01] transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default page;

