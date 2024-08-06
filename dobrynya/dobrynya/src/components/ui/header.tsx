"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaVk } from "react-icons/fa";  // Import VK icon from react-icons
import Dropdown from "./Pages";
import BurgerDropdown from "./dropdown/burger_drop";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const closeOffcanvas = () => {
    setIsOpen(false);
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
        <div className="hidden md:flex items-center space-x-10 mx-10">
          <Link href="/towns" className="text-2xl text-green-800 hover:text-red-500">
            Магазины
          </Link>
          <Link href="/towns" className="text-2xl text-green-800 hover:text-red-500">
            Свободные площади
          </Link>
          <Link href="/SectionContacts" className="text-2xl text-green-800 hover:text-red-500">
            Контакты
          </Link>
          {menuItemsForBurger.map((item, index) => (
            <React.Fragment key={`burger_${index}`}>
              {/* Additional items can be added here if needed */}
            </React.Fragment>
          ))}
          <Link href="https://vk.com/dobrynia_ptz" className="text-green-800 hover:text-red-500">
            <FaVk size={30} />
          </Link>
        </div>
        {menuItemsForBurger.map((item, index) => (
          <React.Fragment key={`burger_${index}`}>
            {item.children ? (
              <BurgerDropdown item={item} />
            ) : (
              <Link
                className="text-green-500 hover:text-red-500"
                href={item.route || ""}
                key={`burger_${index}`}
              >
                {item.title}
              </Link>
            )}
          </React.Fragment>
          
        ))}
      </div>
    </header>
  );
};

export default Header;

const menuItemsForBurger: MenuItem[] = [
  {
    title: "Продукты",
    children: [
      {
        title: "История",
        route: "/history",
      },
      {
        title: "Цели и задачи",
        route: "/aim",
      },
      {
        title: "Новости",
        route: "/news",
      },
      {
        title: "Услуги в сфере миграции",
        route: "/migration",
      },
      {
        title: "Реквизиты",
        route: "/requisites",
      },
      {
        title: "Отчеты",
        route: "/reports",
      },
      { title: "Города-побратимы", route: "/towns" },
    ],
  },
];
