"use client";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "../assets";
import { useLanguage } from "../context/LanguageContext";

import Heading from "./subs/Heading"
import Project from "./subs/project";
import { animate, motion } from "framer-motion";
import { translations } from "../i18n/translations";

const ProjectsPage = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const items = projectsData.map((p, i) => ({
        ...p,
        name: t.projects.items[i].name,
        desc: t.projects.items[i].desc,
    }));

    const [tech, setTech] = useState<string>(t.projects.filters[0]);
    const [index, setIndex] = useState<number>(0);

    const prevIndex = useRef<number>(0);
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const handleClick = () => {
        animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
        animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 });
    }

    useEffect(() => {
        handleClick();
        prevIndex.current = index;
    }, [index]);

    // Lưu ý: filter logic vẫn dùng "tech" gốc tiếng Anh trong projectsData,
    // nên khi language = vi, nhãn nút hiển thị tiếng Việt nhưng so sánh dùng index thay vì text
    const filterKeys = ['All', 'Frontend', 'Fullstack', 'Backend', 'NestJS', 'Java Spring', 'UI/UX'];
    const activeFilterKey = filterKeys[index];

    return (
        <div id="projects"
            className="min-h-screen py-20">
            <Heading text={t.projects.heading} />
            <div className="flex flex-wrap items-center justify-center gap-4 py-10 ">
                {t.projects.filters.map((text, i) => (
                    <motion.button
                        key={i}
                        initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
                        ref={(el) => { buttonsRef.current[i] = el; }}
                        onClick={() => {
                            setTech(filterKeys[i]);
                            setIndex(i);
                        }}
                        className="rounded-xl border border-yellow-500 px-4 py-2 text-sm font-medium text-gray-500 transition-all duration-300 hover:bg-yellow-500 hover:text-white dark:text-white"
                    >
                        {text}
                    </motion.button>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 ">
                {items
                    .filter((project) => {
                        return project.tech.some((item) => (activeFilterKey === 'All' ? true : item === activeFilterKey))
                    })
                    .map((data, i) => (
                        <motion.div
                            className="" key={`id-${i}`}
                            layout
                        >
                            <Project data={data} index={i} />
                        </motion.div>
                    ))}
            </div>
        </div>
    )
}

export default ProjectsPage