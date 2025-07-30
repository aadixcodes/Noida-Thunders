import DivImg from "@/components/common/DivImg";
import { blogs } from "@/public/assets/assests";
import { IoCalendarNumberOutline } from "react-icons/io5";

const page = () => {

  return (

    <>

    <DivImg text={'Blogs'}/>

    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/Banner1.jpg')",
      }}
    >
      {/* White overlay with opacity */}
      <div className="absolute inset-0 bg-white/95 bg-opacity-90 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className=" overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="p-4 text-left">
                <p className="text-sm text-gray-500 mb-1">
                  <div className="flex items-center gap-4">
                    <IoCalendarNumberOutline />
                    {blog.date}
                  </div>
                </p>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-700 mb-3">{blog.excerpt}</p>
                <a href="#" className="text-[#0e0e0e] font-medium inline-flex items-center hover:underline">
                  Read More →
                </a>
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
