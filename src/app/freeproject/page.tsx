"use client"
import FreeProject, {FreeProjectItem} from "@/components/FreeProject";
import SectionContacts from "@/components/sectioncontact";
import Header from "@/components/ui/header";
import {useRef} from "react";
import {fetchFreeProjectsFromDatabase, initDatabase} from "@/db/db";


export const revalidate = 0;

export default async function Home() {

    await initDatabase();

    let freeprojects: FreeProjectItem[] = [];

    const contactsRef = useRef<HTMLDivElement | null>(null);

    const scrollToContacts = () => {
        contactsRef.current?.scrollIntoView({behavior: "smooth"});
    };

    try {
        freeprojects = await fetchFreeProjectsFromDatabase();
    } catch (err){
        console.error("Ошибка при получении свободных площадей :", err);
    }

    return (
        <>
            <Header scrollToContacts={scrollToContacts}/>
            <FreeProject freeprojects={freeprojects}/>
            <SectionContacts/>
        </>
    );
}
