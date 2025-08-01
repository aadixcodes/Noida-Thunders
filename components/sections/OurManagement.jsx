// components/OurManagement.js

import { teamMembers } from "@/public/assets/assests";

const OurManagement = () => {
  return (
    <section className="py-2 pb-20 bg-white" id="management">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-[heading-1] mb-4">
          Our Management
        </h2>
        <div className="h-1 w-24 bg-[#fab505] mx-auto mb-6"></div>

        {/* Description Text */}
        <p className="text-gray-600 max-w-4xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
          The backbone of Noida Thunders — a team of dedicated professionals
          leading the charge with vision, strategy, and unwavering commitment to
          excellence.
        </p>

        {/* Team Members Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white overflow-hidden">
              {/* Image Container with beige background and dark blue overlay */}
              <div className="relative w-full aspect-[3/4] bg-[#b8a082] flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-[#b8a082] flex items-center justify-center">
                    <span className="text-gray-600">Photo</span>
                  </div>
                )}

                {/* Dark blue overlay bar at bottom of image */}
                <div className="w-full px-3 py-2 absolute bottom-0 flex justify-center items-center">
                  <div className="w-[95%] py-2 md:py-4 bg-[#1e3a5f]">
                    <h4 className="text-white text-sm md:text-lg tracking-wide font-[heading-1]">
                      {member.role || "Role"}
                    </h4>
                    <p className="text-white font-[para-1] text-sm md:text-base">
                      {member.name || "Name Here"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurManagement;