"use client";
import React, { useState } from "react";
import "@/components/styles/Offcanvas.scss";
import { MdClose } from "react-icons/md";
import { FaVk } from "react-icons/fa";
import { IconContext } from "react-icons";

interface OffcanvasProps {
  onClose: () => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ onClose }) => {
  return (
    <div className="offcanvas flex items-center z-50 ">
      <div className="absolute top-0">
        <button
          type="button"
          className="text-white mx-3 my-3"
          onClick={onClose}
        >
          <IconContext.Provider
            value={{ className: "shared-class", size: "35" }}
          >
            <MdClose />
          </IconContext.Provider>
        </button>
      </div>
      <div className="px-12">
        <div className="col-12 flex flex-col justify-center items-center space-y-4">
          <p className="text-xl font-bold text-center">
            Контактная информация ТЦ "Добрыня"
          </p>
          <p className="text-base">Вся Россия: +7 (8142) 53-49-36</p>
          <p className="text-base">Электронная почта: rovio11@mail.ru</p>
          <p className="text-base">г. Петрозаводск, район Кукковка, ул. Ровио, д.11</p>
          <h3 className="text-2xl font-semibold">Режим работы</h3>
          <p className="text-base">Продуктовый зал: 8:30 - 20:30 ежедневноы</p>
          <p className="text-base">Промтоварный зал: 10:00 - 19:00 ежедневно</p>
          <IconContext.Provider value={{ className: "vk-icon", size: "24" }}>
            <FaVk />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
