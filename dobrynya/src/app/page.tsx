import { GlareCardDemo } from "@/components/cards";
import Form from "@/components/form";
import Hero from "@/components/hero";
import { YandexMap } from "@/components/map";
import { SetionGlareCardDemo } from "@/components/sectioncards";
import { SetionYandexMap } from "@/components/sectionmap";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <>
     <Header/>
    <Hero/>
    <Form/>
    <SetionGlareCardDemo/>
    <SetionYandexMap/>
    </>
  );
}
