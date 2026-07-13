'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react";

interface ProjectData {
    name: string;
    desc: string;
    image: string;
    tech: string[];
    github: string;
    demo: string;
}

interface Props {
    data: ProjectData;
    index: number;
}

const Project = (props: Props) => {
    const { data, index } = props

    const [show, setShow] = useState<boolean>(false);
    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
            onClick={() => setShow((show) => !show)}
            className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer overflow-hidden">
            <Image
                src={data.image}
                alt="Project Image"
                width={400}
                height={400}
                className="rounded-lg opacity-70 w-full"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center
                         gap-y-1.5 bg-white/95 p-4 rounded-lg dark:bg-zinc-700/95 transition-colors overflow-y-auto"
            >
                <h2 className="text-base font-bold tracking-wide text-gray-500 dark:text-white transition-colors text-center">
                    {data.name}
                </h2>
                <p className="text-justify text-xs leading-snug text-gray-500 line-clamp-5 dark:text-gray-100 transition-colors">
                    {data.desc}
                </p>
                <a
                    href={data.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs truncate max-w-full text-blue-500 hover:underline dark:text-blue-300 transition-colors"
                >
                    Demo: {new URL(data.demo).hostname}
                </a>
                <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs truncate max-w-full text-blue-500 hover:underline dark:text-blue-300 transition-colors"
                >
                    GitHub: {data.github.replace('https://github.com/', '')}
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Project