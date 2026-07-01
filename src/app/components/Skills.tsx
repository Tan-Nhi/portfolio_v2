'use client';

import Image from "next/image";
import Heading from "./subs/Heading";
import { skillsData } from "../assets";
import { motion } from "framer-motion";

const SkillPage = () => {

    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.07,
            },
        }),
        hidden: { opacity: 0, y: 30 },
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
            <Heading text={"Skills"} />
            <div className="w-full max-w-7xl grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {skillsData.map((item, i) => (
                    <motion.div
                        custom={i}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.1 }}
                        viewport={{ margin: "50px", once: true }}
                        key={i}
                        className="flex items-center justify-center gap-x-2 rounded-xl border
                                 border-yellow-500 bg-zinc-200 px-3 py-3"
                    >
                        <Image
                            src={item.icon}
                            alt="Skills"
                            width={100}
                            height={100}
                            className="h-auto w-[32px] shrink-0"
                        />
                        <p className="text-sm text-gray-600 whitespace-nowrap">{item.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default SkillPage;