"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  // Функция для обработки клика и прокрутки к секции с формой
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex justify-center text-center p-4 z-0">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        onClick={scrollToForm}  // Добавляем обработчик клика
        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 py-2 px-4"
      >
        <span className="text-base sm:text-lg">Оставить заявку на аренду</span>
        <AceternityLogo />
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="10"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
