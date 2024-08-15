
import FreeProject from "@/components/FreeProject";
import SectionContacts from "@/components/sectioncontact";
import Header from "@/components/ui/header";
import { useRef } from "react";



const Home: React.FC = () => {
  const contactsRef = useRef<HTMLDivElement | null>(null);

  const scrollToContacts = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToContacts={scrollToContacts} />
      <FreeProject />
      <SectionContacts/>
    </>
  );
}
