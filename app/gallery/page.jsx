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

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full rounded-lg mb-4 break-inside-avoid shadow-md border-6 border-[#0b2142] hover:scale-[1.01] transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default page;

