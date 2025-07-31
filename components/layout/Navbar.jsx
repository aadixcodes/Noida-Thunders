'use client';

import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import { assets } from '@/public/assets/assests'; // ⚠️ see note below
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <>

          {/* Top Section */}
      <div className="w-full bg-[#fab505] hidden md:flex flex-row lg:flex-row items-center justify-between px-6 lg:px-10 py-4 gap-4 lg:gap-0">
          <div className="flex flex-col text-white sm:flex-row gap-4 sm:gap-7 text-sm">
              <div className="flex items-center gap-2">
                  <MdEmail />
                  <h3>noidathunders@gmail.com</h3>
              </div>
              <div className="flex items-center gap-2">
                  <IoIosCall />
                  <h3>+91 9812595958</h3>
              </div>
          </div>

          <div className="flex gap-4 text-lg text-white">
              <FaInstagram />
              <FaFacebook />
              <BsTwitterX />
              <FaYoutube />
          </div>
      </div>


    <nav className="w-full font-[Para-1]">

      {/* Bottom Section */}
    <div className="text-white px-6 lg:px-10 py-4 bg-[#141413] border-b-[2px] border-white border-dotted">
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
        <div className="hidden lg:flex gap-10">
          <Link href={'/'} className='cursor-pointer hover:text-[#fab505]'>Home</Link>
          <Link href={'/about'} className='cursor-pointer hover:text-[#fab505]'>About</Link>
          <Link href={'/fixtures'} className='cursor-pointer hover:text-[#fab505]'>Fixtures</Link>
          <Link href={'/team'} className='cursor-pointer hover:text-[#fab505]'>Team</Link>
          <Link href={'/gallery'} className='cursor-pointer hover:text-[#fab505]'>Gallery</Link>
          <Link href={'/blog'} className='cursor-pointer hover:text-[#fab505]'>Blogs</Link>
          <Link href={'/contact'} className='cursor-pointer hover:text-[#fab505]'>Contact us</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-[#141413] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-5 flex flex-col gap-6 mt-16">
            <Link href={'/'} className='cursor-pointer hover:text-[#fab505]' onClick={() => setIsOpen(false)}>Home</Link>
            <Link href={'/about'} className='cursor-pointer hover:text-[#fab505]' onClick={() => setIsOpen(false)}>About</Link>
            <Link href={'/fixtures'} className='cursor-pointer hover:text-[#fab505]' onClick={() => setIsOpen(false)}>Fixtures</Link>
            <Link href={'/team'} className='cursor-pointer hover:text-[#fab505]' onClick={() => setIsOpen(false)}>Team</Link>
            <Link href={'/gallery'} className='cursor-pointer hover:text-[#fab505]' onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href={'/blog'} className='cursor-pointer hover:text-[#fab505]' onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link href={'/contact'} className='cursor-pointer hover:text-[#fab505]' onClick={() => setIsOpen(false)}>Contact us</Link>
          </div>
          <button 
            className="absolute top-4 right-4 text-2xl text-white"
            onClick={() => setIsOpen(false)}
          >
            <HiOutlineX />
          </button>
        </div>
      </div>
    </nav>

    </>
  );
};

export default Navbar;
