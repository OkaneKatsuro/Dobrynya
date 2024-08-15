"use client"
import { GlareCardDemo } from "@/components/cards";
import Form from "@/components/form";
import Hero from "@/components/hero";
import React, { useRef } from "react";
import RentalOffer from "@/components/kp";
import { YandexMap } from "@/components/map";
import News from "@/components/news";
import { LayoutGridDemo } from "@/components/pics";
import { SetionGlareCardDemo } from "@/components/sectioncards";
import SectionContacts from "@/components/sectioncontact";
import SectionKP from "@/components/sectionkp";

import { SetionYandexMap } from "@/components/sectionmap";
import SectionPics from "@/components/sectionpics";
import Header from "@/components/ui/header";

const Home: React.FC = () => {
  const contactsRef = useRef<HTMLDivElement | null>(null);

  const scrollToContacts = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToContacts={scrollToContacts} />
      <Hero />
      <SetionGlareCardDemo />
      <Form />
      <SectionKP />
      <SetionYandexMap />
      <SectionPics />
      <News />
      <SectionContacts ref={contactsRef} />
    </>
  );
};

export default Home;