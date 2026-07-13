'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { skillsData } from "../assets";
import Heading from "./subs/Heading";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const SkillPage = () => {

    const { language } = useLanguage();
    const t = translations[language];

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
        <div id="skills"
            className="min-h-screen flex flex-col items-center justify-center gap-y-10 sm:gap-y-14 md:gap-y-20 px-15 sm:px-8 md:px-4 lg:px-20">
            <Heading text={t.skills.heading} />

            <div className="@container w-full max-w-7xl">
                <div className="grid grid-cols-2 @md:grid-cols-3 @2xl:grid-cols-4 @5xl:grid-cols-5 @5xl:w-fit @5xl:mx-auto gap-3 sm:gap-4 md:gap-1.5 sm:w-fit">
                    {skillsData.map((item, i) => (
                        <motion.div
                            custom={i}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.1 }}
                            viewport={{ margin: "50px", once: true }}
                            key={i}
                            className="flex flex-row items-center justify-center gap-x-1.5 md:gap-x-1 rounded-xl border
                         border-yellow-500 bg-zinc-200 px-2 py-2 md:px-1.5 md:py-1.5 w-full min-w-0"
                        >
                            <Image
                                src={item.icon}
                                alt="Skills"
                                width={100}
                                height={100}
                                className="h-auto w-[20px] md:w-[16px] shrink-0"
                            />
                            <p className="text-[11px] md:text-[10px] text-gray-600 whitespace-nowrap md:whitespace-normal break-words leading-tight min-w-0 md:line-clamp-2">
                                {item.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillPage;