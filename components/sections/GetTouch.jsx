import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const GetTouch = () => {

    const GetTouchData = [
    {
      label: 'Email',
      icon: <AiOutlineMail />,
      content: 'noidathunders@gmail.com',
    },
    {
      label: 'Phone',
      icon: <IoCallOutline/>,
      content: '+91-9812595958',
    },
    {
      label: 'ADDRESS',
      icon: <CiLocationOn/>,
      content: (
        <>
          demo address #8901 Marmora Road
        </>
      ),
    },
  ]

  return (
    <section className="text-center px-4 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-4 font-[heading-1]">Get In Touch !</h1>
      <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-12 font-[para-1]">
        Got a thunderous idea or want to connect with Noida Thunders? Whether you're a fan, a brand, or a collaborator — we’re just a message away. Let’s make something big happen!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12">
        {/* Contact Card */}
        {GetTouchData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg w-full md:w-72"
          >
            <div className="bg-black p-4 rounded mb-4">
              <span className="text-white text-2xl">{item.icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-[para-1]">{item.label}</h3>
            <p className="text-gray-600 font-[para-1]">{item.content}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default GetTouch;

