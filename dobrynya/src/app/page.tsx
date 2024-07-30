import { GlareCardDemo } from "@/components/cards";
import Form from "@/components/form";
import Hero from "@/components/hero";
import RentalOffer from "@/components/kp";
import { YandexMap } from "@/components/map";
import { LayoutGridDemo } from "@/components/pics";
import { SetionGlareCardDemo } from "@/components/sectioncards";
import SectionContacts from "@/components/sectioncontact";
import SectionKP from "@/components/sectionkp";

import { SetionYandexMap } from "@/components/sectionmap";
import SectionPics from "@/components/sectionpics";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <>
     <Header/>
    <Hero/>
    <Form/>
    <SetionGlareCardDemo/>
    <SectionKP/>
    <SetionYandexMap/>
    <SectionPics/>
    <SectionContacts/>
    </>
  );
}
