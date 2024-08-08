"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaVk } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 border-b border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-3 sm:py-5 max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center mb-3 sm:mb-0">
          <Link href="/">
            <Image
              src="/logo_dobrynya.jpeg"
              alt="logo"
              width={150}
              height={150}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-10">
          <Link href="/project" className="text-lg lg:text-xl text-green-800 hover:text-red-500">
            Магазины
          </Link>
          <Link href="/freeproject" className="text-lg lg:text-xl text-green-800 hover:text-red-500">
            Свободные площади
          </Link>
          <Link href="/SectionContacts" className="text-lg lg:text-xl text-green-800 hover:text-red-500">
            Контакты
          </Link>
          <Link href="https://vk.com/dobrynia_ptz" className="text-green-800 hover:text-red-500">
            <FaVk size={24} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleOffcanvas} className="text-green-800 hover:text-red-500">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full px-4 sm:px-6 py-5 border-t border-gray-200">
          <Link href="/project" className="block text-lg text-green-800 hover:text-red-500 mb-4">
            Магазины
          </Link>
          <Link href="/freeproject" className="block text-lg text-green-800 hover:text-red-500 mb-4">
            Свободные площади
          </Link>
          <Link href="/SectionContacts" className="block text-lg text-green-800 hover:text-red-500 mb-4">
            Контакты
          </Link>
          <Link href="https://vk.com/dobrynia_ptz" className="block text-green-800 hover:text-red-500">
            <FaVk size={24} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
