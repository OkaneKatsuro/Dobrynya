"use client"
import FreeProject from "@/components/FreeProject";
import SectionContacts from "@/components/sectioncontact";
import Header from "@/components/ui/header";
import {Suspense, useRef} from "react";




export default  function Home() {


    const contactsRef = useRef<HTMLDivElement | null>(null);

    const scrollToContacts = () => {
        contactsRef.current?.scrollIntoView({behavior: "smooth"});
    };


    return (
        <>
            <Header scrollToContacts={scrollToContacts}/>
            <Suspense>
            <FreeProject/>
            </Suspense>
            <SectionContacts/>
        </>
    );
}
