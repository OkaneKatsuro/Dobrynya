import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/components/ui/header";
import { IconContext } from "react-icons";
import OffcanvasMobile, { OffcanvasMobileItem } from "../mobileoffcanvas";
import { FaVk } from "react-icons/fa";

interface Props {
  item: MenuItem;
}

const menuItemsAbout: OffcanvasMobileItem[] = [
  {
    title: "Магазины",
    route: "/town",
  },
  {
    title: "Свободные площади",
    route: "/town"
  },
];

export default function BurgerDropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const [isOpenn, setIsOpenn] = useState(false);

  const openOffcanvas = () => {
    setIsOpenn(!isOpenn);
  };

  const closeOffcanvas = () => {
    setIsOpenn(false);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative flex items-center justify-center">
        <button
          className="flex flex-row hover:text-red-400"
          onClick={openOffcanvas}
        >
          <IconContext.Provider
            value={{ className: "block md:hidden", size: "35", color: "green" }}
          >
            <GiHamburgerMenu />
          </IconContext.Provider>
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 z-20 bg-black/40"
          onClick={toggle}
        ></div>
      )}
      {isOpenn && (
        <OffcanvasMobile onClose={closeOffcanvas} menuItems={menuItemsAbout} />
      )}
    </>
  );
}
