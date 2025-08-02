// /app/blogs/page.js
import DivImg from "@/components/common/DivImg";
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