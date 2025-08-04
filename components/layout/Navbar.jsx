"use client";

import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import { assets } from "@/public/assets/assests";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Section - Will scroll normally */}
      <div className={`w-full bg-[#fab505] hidden md:flex flex-row lg:flex-row items-center justify-between px-6 lg:px-36 py-4 gap-4 lg:gap-0 transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 py-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
        <div className="flex flex-col text-white sm:flex-row gap-4 sm:gap-7 text-sm">
          <div className="flex text-black items-center gap-2">
            <MdEmail />
            <h3>marketing@noidathunders.com</h3>
          </div>
          <div className="flex text-black items-center gap-2">
            <IoIosCall />
            <h3>+91 9812595958</h3>
          </div>
        </div>

        <div className="flex gap-4 text-black text-lg">
          <a 
            href="https://www.instagram.com/noidathunders/ " 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61575067900117 " 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://x.com/Noida_thunders " 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <BsTwitterX />
          </a>
          <a 
            href="https://www.youtube.com/channel/UCeTEz7LUtYtdCRmPq9KCnMw " 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <nav className={`w-full font-[Para-1] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        {/* Bottom Section - Will stick to top */}
        <div className="text-white lg:px-36 px-6 bg-[#141413] border-b-[2px] border-white border-dotted">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="h-16 w-16 relative shrink-0">
              <Image
                src={assets.noida}
                alt="Ayodhya Super Kings"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-10 text-lg">
              <Link href={"/"} className="cursor-pointer hover:text-[#fab505]">
                Home
              </Link>
              <Link
                href={"/about-us"}
                className="cursor-pointer hover:text-[#fab505]"
              >
                About
              </Link>
              <Link
                href={"/fixtures"}
                className="cursor-pointer hover:text-[#fab505]"
              >
                Fixtures
              </Link>
              <Link
                href={"/our-team"}
                className="cursor-pointer hover:text-[#fab505]"
              >
                Team
              </Link>
              <Link
                href={"/gallery"}
                className="cursor-pointer hover:text-[#fab505]"
              >
                Gallery
              </Link>
              <Link
                href={"/blogs"}
                className="cursor-pointer hover:text-[#fab505]"
              >
                Blogs
              </Link>
              <Link
                href={"/contact-us"}
                className="cursor-pointer hover:text-[#fab505]"
              >
                Contact us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div
              className="lg:hidden text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/70 bg-opacity-50 z-40 lg:hidden cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Menu Sidebar - Updated styling */}
          <div
            className={`fixed inset-0 h-full w-full bg-[#141413]/90 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out lg:hidden ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <button
              className="absolute top-6 right-6 text-3xl text-white"
              onClick={() => setIsOpen(false)}
            >
              <HiOutlineX />
            </button>
            
            <div className="flex flex-col items-center justify-center gap-8 w-full px-4">
              <Link
                href={"/"}
                className="text-2xl font-medium text-white hover:text-[#fab505] transition-colors w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href={"/about-us"}
                className="text-2xl font-medium text-white hover:text-[#fab505] transition-colors w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href={"/fixtures"}
                className="text-2xl font-medium text-white hover:text-[#fab505] transition-colors w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Fixtures
              </Link>
              <Link
                href={"/our-team"}
                className="text-2xl font-medium text-white hover:text-[#fab505] transition-colors w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href={"/gallery"}
                className="text-2xl font-medium text-white hover:text-[#fab505] transition-colors w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href={"/blogs"}
                className="text-2xl font-medium text-white hover:text-[#fab505] transition-colors w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href={"/contact-us"}
                className="text-2xl font-medium text-white hover:text-[#fab505] transition-colors w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;