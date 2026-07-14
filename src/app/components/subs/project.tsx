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


const GithubIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const Project = (props: Props) => {
    const { data, index } = props
    const [show, setShow] = useState<boolean>(false);

    const toggle = () => setShow((s) => !s);

    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
            onClick={toggle}
            role="button"
            tabIndex={0}
            aria-expanded={show}
            aria-label={`Xem chi tiết dự án ${data.name}`}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle();
                }
            }}
            className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
            <Image
                src={data.image}
                alt="Project Image"
                width={400}
                height={400}
                className="rounded-lg opacity-70 w-full"
            />


            {!show && (
                <>
                    <div className="absolute top-2 left-2 flex gap-1 flex-wrap max-w-[90%]">
                        {data.tech.slice(0, 3).map((t, i) => (
                            <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm"
                            >
                                {t}
                            </span>
                        ))}
                    </div>


                    <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-2 right-2 flex items-center gap-1 bg-yellow-400/90 text-black text-[10px] font-medium px-2 py-1 rounded-full shadow-md"
                    >
                        <span>✨ Nhấn để xem</span>
                    </motion.div>
                </>
            )}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                style={{ pointerEvents: show ? "auto" : "none" }}
                className="absolute inset-0 flex flex-col items-center justify-center
             gap-y-2 bg-white/95 p-4 rounded-lg dark:bg-zinc-700/95 transition-colors"
            >
                <h2 className="text-base font-bold tracking-wide text-gray-500 dark:text-white transition-colors text-center">
                    {data.name}
                </h2>
                <p className="text-justify text-xs leading-snug text-gray-500 dark:text-gray-100 transition-colors">
                    {data.desc}
                </p>

                <div className="flex gap-2 mt-1">
                    <a
                        href={data.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
                    >
                        <ExternalLinkIcon /> Demo
                    </a>
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md bg-gray-700 text-white hover:bg-gray-800 transition-colors dark:bg-gray-500 dark:hover:bg-gray-600"
                    >
                        <GithubIcon /> GitHub
                    </a>
                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); setShow(false); }}
                    className="absolute top-2 right-2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    aria-label="Đóng"
                >
                    ✕
                </button>
            </motion.div>
        </motion.div >
    )
}

export default Project