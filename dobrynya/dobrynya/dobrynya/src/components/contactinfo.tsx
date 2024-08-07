// ContactInfo.tsx
import React from 'react';
import { FaVk } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="px-12">
      <div className="col-12 flex flex-col justify-center items-center space-y-4">
        <p className="text-xl font-bold text-center">
          Контактная информация ТЦ "Добрыня"
        </p>
        <p className="text-base">Вся Россия: +7 (8142) 53-49-36</p>
        <p className="text-base">Электронная почта: rovio11@mail.ru</p>
        <p className="text-base">
          г. Петрозаводск, район Кукковка, ул. Ровио, д.11
        </p>
        <h3 className="text-2xl font-semibold">Режим работы</h3>
        <p className="text-base">
          Продуктовый зал: 8:30 - 20:30 ежедневноы
        </p>
        <p className="text-base">Промтоварный зал: 10:00 - 19:00 ежедневно</p>
        <div className="flex items-center">
          <a
            href="https://vk.com/dobrynia_ptz"
            className="text-green-500 hover:text-red-500"
          >
            <FaVk size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
