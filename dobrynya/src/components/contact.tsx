'use client'; // Используется для поддержки функциональности клиента в Next.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaVk } from 'react-icons/fa'; // VKontakte icon from react-icons library

const Footer = () => {
  return (
    <footer className="bg-green-800 pt-12 w-full">
      <div className="flex flex-wrap pl-6">
        {/* First Column */}
        <div className="w-full md:w-1/4 mr-6 mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <Link href="/" passHref>
            <Image
              src="/logo_dobrynya.jpeg"
              alt="Торговый центр Добрыня"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-white text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Режим работы:</h3>
          <p className="mb-2"><strong>Продуктовый зал:</strong> 8:30 - 20:30 ежедневно</p>
          <p><strong>Промтоварный зал:</strong> 10:00 - 19:00 ежедневно</p>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/5 text-white text-center md:text-left mb-6">
          <h3 className="text-xl font-semibold mb-2">Пункты выдачи:</h3>
          <p className="mb-2"><strong>WILDBERRIES:</strong> 9:00 - 20:00</p>
          <p className="mb-2"><strong>OZON:</strong> 10:00 - 21:00</p>
          <p><strong>BOXBERRY:</strong> 10:00 - 21:00</p>
        </div>

        {/* Fourth Column */}
        <div className="w-full md:w-1/4 text-white text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-2">Адрес:</h3>
          <p className="text-lg mb-2">
            Торговый центр "Добрыня", г. Петрозаводск, микрорайон Кукковка, ул. Ровио, д.11
          </p>
          <div className="flex items-center">
            <div className="mr-4">
              <p className="text-lg mb-2">rovio11@mail.ru</p>
              <p className="text-lg mb-2">+7 (8142) 53-49-36</p>
            </div>
            <Link href="https://vk.com/dobrynia_ptz" className="text-white-500 hover:text-red-500 flex justify-center">
              <FaVk size={60} />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider and Footer Info */}
      <div className="border-t border-white mt-6 pt-4 text-center text-white text-sm flex items-center justify-center">
        <Link href={'https://example.com'} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <p className="mr-2">
            2024 Дизайн и разработка
          </p>
          <img 
            src="/image-removebg-preview.png" 
            alt="Fluttrium Logo" 
            className="w-32 h-auto ml-2" 
          />
        </Link>
      </div>

    </footer>
  );
};

export default Footer;
