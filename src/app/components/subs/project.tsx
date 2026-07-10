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
            className="relative w[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer">
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
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center
                         gap-y-2 bg-white/95 p-6 rounded-lg "
            >
                <h2 className="text-lg font-bold tracking-wide text-gray-500 ">{data.name}</h2>
                <p className="text-justify text-gray-500 first-letter:pl-2">{data.desc}</p>
                <a href={data.demo} target="_blank" rel="noopener noreferrer" className="text-sm">Demo: {data.demo}</a>
                <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-sm">GitHub: {data.github}</a>
            </motion.div>
        </motion.div>
    )
}

export default Project