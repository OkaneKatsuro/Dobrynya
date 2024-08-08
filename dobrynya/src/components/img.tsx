"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";


export function DirectionAwareHoverDemo() {
  const imageUrl =
    "/snimok.png";
  return (
    <div className="h-[30rem] relative  flex items-center justify-center width={400}
        height={400}">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">ТЦ Добрыня</p>
        <p className="font-normal text-sm">1200 / квадратных метров</p>
      </DirectionAwareHover>
    </div>
  );
}
