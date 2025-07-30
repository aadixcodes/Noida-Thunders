// components/OurManagement.js

import { teamMembers } from "@/public/assets/assests";


const OurManagement = () => {
  return (
<section className="py-16 bg-white" id="management">
  <div className="max-w-6xl mx-auto px-4 text-center">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black font-[heading-1] mb-4">
      Our Managament
    </h2>
    <div className="h-1 w-24 bg-[#fab505] mx-auto mb-10"></div>

    {/* Team Members Grid */}
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
          {/* Image Container */}
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">Photo</span>
            )}
          </div>
          
          {/* Text Content - Exactly matches your reference image */}
          <div className="p-4 text-center space-y-1">
            <h4 className="text-sm font-bold text-gray-800 uppercase font-[heading-1] tracking-wide">
              {member.role || "Role"}
            </h4>
            <p className="text-gray-600 font-[para-1]">
              {member.name || "Name Here"}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default OurManagement;
