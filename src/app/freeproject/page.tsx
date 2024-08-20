"use client"
import FreeProject, {FreeProjectItem} from "@/components/FreeProject";
import SectionContacts from "@/components/sectioncontact";
import Header from "@/components/ui/header";
import {useEffect, useRef, useState} from "react";


export const revalidate = 0;

export default async function Home() {



    let freeprojects: FreeProjectItem[] = [];

    const contactsRef = useRef<HTMLDivElement | null>(null);

    const scrollToContacts = () => {
        contactsRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const [blogs, setBlogs] = useState<FreeProjectItem[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch("/api/getfreeproject"); // Вызов API метода GET
                const data = await res.json();
                setBlogs(data); // Устанавливаем полученные данные в состояние
            } catch (error) {
                console.error("Ошибка при загрузке проектов:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <>
            <Header scrollToContacts={scrollToContacts}/>
            <FreeProject freeprojects={blogs} loadingState={loading}/>
            <SectionContacts/>
        </>
    );
}
