import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      url: "https://facebook.com/yourpage", // Replace with your actual Facebook URL
    },
    {
      id: 2,
      icon: <FaInstagram />,
      url: "https://instagram.com/yourpage", // Replace with your actual Instagram URL
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: "https://twitter.com/yourpage", // Replace with your actual Twitter URL
    },
    {
      id: 4,
      icon: <FaYoutube />,
      url: "https://youtube.com/yourchannel", // Replace with your actual YouTube URL
    }
  ];

  return (
    <footer className="text-white text-sm pt-10 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <img 
          src="/assets/bg-banner-3.png"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 pb-10 border-b border-gray-700 relative">
        {/* Desktop Layout: Grid for md and up */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <img src="/assets/noida.png" alt="Noida Thunders Logo" className="w-32 mb-3" />
            <p className="text-gray-300 w-[80%] font-[Para-1]">
              Fueling the spirit of volleyball with passion, pride, and power — both on and off the court.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((item) => (
                <Link 
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 p-2 rounded-2xl hover:bg-amber-600 transition-colors"
                >
                  <span className="text-black hover:text-white">{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 text-white font-[Para-1]">Quick Links</h3>
            <ul className="text-gray-300 space-y-2 font-[Para-1]">
              <li><Link href="/about-us" className="hover:text-yellow-500">About Us</Link></li>
              <li><Link href="/fixtures" className="hover:text-yellow-500">Fixtures</Link></li>
              <li><Link href="/our-team" className="hover:text-yellow-500">Our Squad</Link></li>
              <li><Link href="/gallery" className="hover:text-yellow-500">Gallery</Link></li>
              <li><Link href="/blogs" className="hover:text-yellow-500">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col pl-0 md:pl-20 justify-center">
            <h3 className="text-xl font-semibold mb-4 text-white font-[Para-1]">Contact Us</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="text-start">
                <div className="flex gap-3 items-center justify-start">
                  <IoLocationOutline className="text-xl" />
                  <strong className="text-lg font-extralight">Address :</strong>
                </div>
                demo address - VSS01 Mamarama <br />
                Road Main City, Western
              </li>
              <li className="text-start">
                <div className="flex gap-3 items-center justify-start">
                  <IoCallOutline className="text-lg font-extralight" />
                  <strong className="text-lg font-extralight">Phone:</strong>
                </div>
                +91-9812595958
              </li>
              <li className="text-start">
                <div className="flex gap-3 items-center justify-start">
                  <MdOutlineEmail className="text-xl font-extralight" />
                  <strong className="text-lg font-extralight">Email:</strong>
                </div>
                <a href="mailto:noidathunders@gmail.com" className="hover:text-yellow-500">noidathunders@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout: Visible only below md */}
        <div className="flex flex-col items-center text-center md:hidden gap-8">
          {/* Logo Section */}
          <div>
            <img src="/assets/noida.png" alt="Noida Thunders Logo" className="w-32 mb-3 mx-auto" />
            <p className="text-gray-300 max-w-xs mx-auto font-[Para-1]">
              Fueling the spirit of volleyball with passion, pride, and power — both on and off the court.
            </p>
            <div className="flex gap-4 mt-4 justify-center">
              {socialLinks.map((item) => (
                <Link 
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 p-2 rounded-2xl hover:bg-amber-600 transition-colors"
                >
                  <span className="text-black hover:text-white">{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact Side-by-Side on mobile */}
          <div className="flex flex-row justify-between w-full px-4 gap-6 sm:gap-4">
            {/* Quick Links */}
            <div className="text-center sm:text-left sm:w-1/2">
              <h3 className="text-lg font-semibold mb-3 text-white font-[Para-1]">Quick Links</h3>
              <ul className="text-gray-300 space-y-2 text-sm font-[Para-1]">
                <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
                <li><Link href="/fixtures" className="hover:text-yellow-500">Fixtures</Link></li>
                <li><Link href="/squad" className="hover:text-yellow-500">Our Squad</Link></li>
                <li><Link href="/gallery" className="hover:text-yellow-500">Gallery</Link></li>
                <li><Link href="/blogs" className="hover:text-yellow-500">Blogs</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left sm:w-1/2">
              <h3 className="text-lg font-semibold mb-3 text-white font-[Para-1]">Contact Us</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <IoLocationOutline />
                    <span>Address:</span>
                  </div>
                  <div className="mt-1">
                    VSS01 Mamarama<br />
                    Road Main City, Western
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <IoCallOutline />
                    <span>Phone:</span>
                  </div>
                  <div className="mt-1">+91-9123456789</div>
                </li>
                <li>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <MdOutlineEmail />
                    <span>Email:</span>
                  </div>
                  <div className="mt-1">
                    <a href="mailto:noidathunders@gmail.com" className="hover:text-yellow-500">noidathunders@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="font-[Para-1] text-center bg-black text-white py-4 text-xs border-t mt-4 flex flex-col md:flex-row items-center justify-between px-4 md:px-32 border-white border-dotted gap-2 relative">
        <p>© Copyright 2025 Ayodya Super Kings. All Rights Reserved.</p>
        <p>Design & Developed by Varnix Media Pvt. Ltd.</p>
      </div>
    </footer>
  );
}