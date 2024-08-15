import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import OffcanvasMobile, { OffcanvasMobileItem } from "../mobileoffcanvas";



const menuItemsAbout: OffcanvasMobileItem[] = [
  {
    title: "Магазины",
    route: "/town",
  },
  {
    title: "Свободные площади",
    route: "/town",
  },
];

const BurgerDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  

  return (
    <>
      <div className="relative flex items-center justify-center">
        <button className="flex flex-row hover:text-red-400" onClick={toggleOffcanvas}>
          <IconContext.Provider value={{ className: "block md:hidden", size: "35", color: "green" }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 bottom-0 left-0 z-20 bg-black/40" onClick={toggle}></div>
      )}

      {isOffcanvasOpen && (
        <OffcanvasMobile onClose={toggleOffcanvas} menuItems={menuItemsAbout} />
      )}
    </>
  );
};

export default BurgerDropdown;
