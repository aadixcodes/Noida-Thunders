import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {

const Icons = [
    {
      id: 1,
      icon: <FaFacebookF />,
    },

    {
      id: 2,
      icon: <FaInstagram />,
    },

    {
      id: 3,
      icon: <FaTwitter />,
    },

    {
      id: 4,
      icon: <FaYoutube />,
    }
  ]


  return (
    <footer className="footer text-white text-sm pt-10">
  <div className="max-w-5xl mx-auto px-4 pb-10 border-b border-gray-700">
    
    {/* Desktop Layout: Grid for md and up */}
    <div className="hidden md:grid md:grid-cols-3 gap-8">
      {/* Logo & Description */}
      <div>
        <img src="/assets/noida.png" alt="Noida Thunders Logo" className="w-32 mb-3" />
        <p className="text-gray-400 w-[80%] font-[Para-1]">
          Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec odio suscipit nascetur cursus, con sectetur elit.
        </p>
        <div className="flex gap-4 mt-4">
          {Icons.map((idx, i) => (
            <div key={i} className="bg-amber-500 p-2 rounded-2xl">
              <h2 className="text-black hover:text-white">{idx.icon}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-4 text-white font-[Para-1]">Quick Links</h3>
        <ul className="text-gray-400 space-y-2 font-[Para-1]">
          <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
          <li><a href="/fixtures" className="hover:text-yellow-500">Fixtures</a></li>
          <li><a href="/squad" className="hover:text-yellow-500">Our Squad</a></li>
          <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
          <li><a href="/blogs" className="hover:text-yellow-500">Blogs</a></li>
          <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-4 text-white font-[Para-1]">Contact Us</h3>
        <ul className="text-gray-400 space-y-2">
          <li className="text-center">
            <div className="flex gap-3 items-center justify-center">
              <IoLocationOutline className="text-xl" />
              <strong className="text-lg font-extralight">Address :</strong>
            </div>
            demo address - VSS01 Mamarama <br />
            Road Main City, Western
          </li>
          <li className="text-center">
            <div className="flex gap-3 items-center justify-center">
              <IoCallOutline className="text-lg font-extralight" />
              <strong className="text-lg font-extralight">Phone:</strong>
            </div>
            +91-9123456789
          </li>
          <li className="text-center">
            <div className="flex gap-3 items-center justify-center">
              <MdOutlineEmail className="text-xl font-extralight" />
              <strong className="text-lg font-extralight">Email:</strong>
            </div>
            <a href="mailto:noidathunders@gmail.com" className="hover:text-yellow-500">noidathunders@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Mobile Layout: Visible only below md */}
    <div className="flex flex-col items-center text-center md:hidden gap-6">
      {/* Logo Section */}
      <div>
        <img src="/assets/noida.png" alt="Noida Thunders Logo" className="w-32 mb-3 mx-auto" />
        <p className="text-gray-400 max-w-xs mx-auto font-[Para-1]">
          Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec odio suscipit nascetur cursus, con sectetur elit.
        </p>
        <div className="flex gap-4 mt-4 justify-center">
          {Icons.map((idx, i) => (
            <div key={i} className="bg-amber-500 p-2 rounded-2xl">
              <h2 className="text-black hover:text-white">{idx.icon}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links & Contact Side-by-Side on mobile */}
      <div className="flex justify-between w-full px-2">
        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 text-white font-[Para-1]">Quick Links</h3>
          <ul className="text-gray-400 space-y-1 text-sm font-[Para-1]">
            <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="/fixtures" className="hover:text-yellow-500">Fixtures</a></li>
            <li><a href="/squad" className="hover:text-yellow-500">Our Squad</a></li>
            <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
            <li><a href="/blogs" className="hover:text-yellow-500">Blogs</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 text-white font-[Para-1]">Contact Us</h3>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>
              <strong>Address:</strong><br />
              VSS01 Mamarama<br />
              Road Main City, Western
            </li>
            <li>
              <strong>Phone:</strong><br />
              +91-9123456789
            </li>
            <li>
              <strong>Email:</strong><br />
              <a href="mailto:noidathunders@gmail.com" className="hover:text-yellow-500">noidathunders@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="font-[Para-1] text-center bg-black text-white py-4 text-xs border-t mt-4 flex flex-col md:flex-row items-center justify-between px-4 md:px-32 border-white border-dotted gap-2">
    <p>© Copyright 2025 Ayodya Super Kings. All Rights Reserved.</p>
    <p>Design & Developed by Varnix Media Pvt. Ltd.</p>
  </div>
</footer>


  );
}

