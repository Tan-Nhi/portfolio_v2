"use client";
import { useEffect, useRef, useState } from "react";
import { projectsButton, projectsData } from "../assets";
import Heading from "./subs/Heading"
import Project from "./subs/project";
import { animate, motion } from "framer-motion";

const ProjectsPage = () => {
    const [tech, setTech] = useState<string>("All");
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
    return (
        <div id="projects"
            className="min-h-screen py-20 px-80 ">
            <Heading text={"Projects"} />
            <div className="flex flex-wrap items-center justify-center gap-4 py-10">
                {projectsButton.map((text, i) => (
                    <motion.button
                        key={i}
                        initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
                        ref={(el) => { buttonsRef.current[i] = el; }}
                        onClick={() => {
                            setTech(text);
                            setIndex(i);
                        }}
                        className="rounded-xl border border-yellow-500 px-4 py-2 text-sm font-medium text-gray-500 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
                    >
                        {text}
                    </motion.button>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5">
                {projectsData
                    .filter((projects) => {
                        return projects.tech.some((item) => (tech === 'All' ? true : item === tech))
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