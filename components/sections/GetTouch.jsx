// import { AiOutlineMail } from "react-icons/ai";
// import { IoCallOutline } from "react-icons/io5";
// import { CiLocationOn } from "react-icons/ci";

// const GetTouch = () => {

//     const GetTouchData = [
//     {
//       label: 'Email',
//       icon: <AiOutlineMail />,
//       content: 'marketing@noidathunders.com ',
//       type: 'email',
//     },
//     {
//       label: 'Phone',
//       icon: <IoCallOutline/>,
//       content: '+91-9812595958',
//       type: 'phone',
//     },
//     {
//       label: 'ADDRESS',
//       icon: <CiLocationOn/>,
//       type: 'address',
//       content: (
//         <>
//           Noida UP
//         </>
//       ),
//     },
//   ]

//   return (
//     <section className="text-center px-4 pt-16 bg-white">
//       <h1 className="text-4xl md:text-5xl  font-[heading-1] pb-4 text-black">Get In Touch !</h1>
//       <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-6 font-[para-1]">
//         Got a thunderous idea or want to connect with Noida Thunders? Whether you're a fan, a brand, or a collaborator — we’re just a message away. Let’s make something big happen!
//       </p>

//       <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12">
//         {/* Contact Card */}
//         {GetTouchData.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center p-6 rounded-lg w-full md:w-72"
//           >
//             <div className="bg-black p-4 rounded mb-4">
//               <span className="text-white text-2xl">{item.icon}</span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 font-[para-1] text-black">{item.label}</h3>
//             <p className="text-gray-600 font-[para-1]">{item.content}</p>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// };

// export default GetTouch;


'use client'; // Add this at the top to make the entire component client-side

import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const GetTouch = () => {
  const handleContactClick = (type, value) => {
    switch(type) {
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'phone':
        // Remove all non-digit characters for tel: link
        const phoneNumber = value.replace(/\D/g, '');
        window.location.href = `tel:${phoneNumber}`;
        break;
      default:
        // Do nothing for address
        break;
    }
  }

  const GetTouchData = [
    {
      label: 'Email',
      icon: <AiOutlineMail />,
      content: 'marketing@noidathunders.com',
      type: 'email'
    },
    {
      label: 'Phone',
      icon: <IoCallOutline/>,
      content: '+91-9812595958',
      type: 'phone'
    },
    {
      label: 'ADDRESS',
      icon: <CiLocationOn/>,
      content: 'Noida UP',
      type: 'address'
    },
  ]

  return (
    <section className="text-center px-4 pt-16 bg-white">
      <h1 className="text-4xl md:text-5xl font-[heading-1] pb-4 text-black">Get In Touch !</h1>
      <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-6 font-[para-1]">
        Got a thunderous idea or want to connect with Noida Thunders? Whether you're a fan, a brand, or a collaborator — we're just a message away. Let's make something big happen!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12">
        {GetTouchData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 rounded-lg w-full md:w-72 cursor-default ${
              item.type !== 'address' ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''
            }`}
            onClick={() => item.type !== 'address' && handleContactClick(item.type, item.content)}
          >
            <div className="bg-black p-4 rounded mb-4">
              <span className="text-white text-2xl">{item.icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-[para-1] text-black">{item.label}</h3>
            <p className={`text-gray-600 font-[para-1] ${
              item.type !== 'address' ? 'hover:text-blue-600' : ''
            }`}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetTouch;