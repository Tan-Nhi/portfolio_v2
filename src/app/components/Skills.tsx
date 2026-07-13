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
            className="min-h-screen flex flex-col items-center justify-center  gap-y-10 sm:gap-y-14 md:gap-y-20 px-15 sm:px-8 md:px-12 lg:px-20">
            <Heading text={t.skills.heading} />

            <div className="@container w-full max-w-7xl">
                <div className="grid grid-cols-2 @md:grid-cols-3 @2xl:grid-cols-4 @5xl:grid-cols-5 @5xl:w-fit @5xl:mx-auto gap-3 sm:gap-4">
                    {skillsData.map((item, i) => (
                        <motion.div
                            custom={i}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.1 }}
                            viewport={{ margin: "50px", once: true }}
                            key={i}
                            className="flex items-center justify-center gap-x-1.5 sm:gap-x-2 rounded-xl border
         border-yellow-500 bg-zinc-200 px-2 py-2 sm:px-3 sm:py-3
         w-full"
                        >
                            <Image
                                src={item.icon}
                                alt="Skills"
                                width={100}
                                height={100}
                                className="h-auto w-[24px] sm:w-[28px] md:w-[32px] shrink-0"
                            />
                            <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">{item.name}</p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillPage;