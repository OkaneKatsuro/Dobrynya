"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaVk } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";  // Import menu icons
import BurgerDropdown from "./dropdown/burger_drop";

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
    <header className="fixed w-screen bg-white z-10 border-gray-200 px-4 lg:px-6 py-5">
      <div className="flex md:justify-start justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex flex-row space-x-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo_dobrynya.jpeg"
                alt="atom_black"
                width={400}
                height={400}
              />
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 mx-10">
          <Link href="/project" className="text-2xl text-green-800 hover:text-red-500">
            Магазины
          </Link>
          <Link href="/freeproject" className="text-2xl text-green-800 hover:text-red-500">
            Свободные площади
          </Link>
          <Link href="/SectionContacts" className="text-2xl text-green-800 hover:text-red-500">
            Контакты
          </Link>
          <Link href="https://vk.com/dobrynia_ptz" className="text-green-800 hover:text-red-500">
            <FaVk size={30} />
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