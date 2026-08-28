'use client'

import Image from 'next/image'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { arrowLeftIcon, experienceData } from '../assets'
import { useLanguage } from '../context/LanguageContext'
import Heading from './subs/Heading'
import { translations } from '../i18n/translations'

const ExperiencePage = () => {
    const date = new Date().getFullYear()
    const { language } = useLanguage();
    const t = translations[language];

    const items = experienceData.map((d, i) => ({
        year: d.year,
        ...t.experience.items[i],
    }));

    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 95%', 'end end'],
    })

    const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 })
    return (

        <div id="experience" className="relative md:mt-10">
            <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10">
                <Heading text={t.experience.heading} />
                <Image
                    src={'/tannhi-education.png'}
                    alt={'Experience Image'}
                    width={400}
                    height={400}
                    className="absolute -top-4 right-0 opacity-70 lg:hidden rounded-xl"
                    priority
                />
                <div
                    ref={containerRef}
                    className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
                >
                    {items.map((data, i) => (
                        <div
                            key={`id-${i}`}
                            className={`relative w-full max-w-[550px] px-4 min-[1150px]:max-w-none min-[1150px]:px-0 min-[1150px]:w-[600px] min-[1400px]:w-[480px] ${i % 2 === 0
                                ? 'min-[1150px]:-left-[300px] min-[1400px]:-left-[240px]'
                                : 'min-[1150px]:left-[300px] min-[1400px]:left-[240px]'
                                }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
                                className="relative flex flex-col gap-y-3 rounded-md border border-red-300
             bg-white p-4 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors z-20"
                            >
                                <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white">
                                    {data.title}
                                </h1>
                                <p className="text-gray-800 dark:text-gray-100">
                                    <span className="block font-light">Education:</span>
                                    <span className="block pl-2 font-extralight">{data.education}</span>
                                </p>
                                <div className="text-gray-800 dark:text-gray-200 transition-colors">
                                    <span className="font-light">Experience:</span>
                                    <ul className="pl-2">
                                        {data.experience.map((exp, j) => (
                                            <li key={j} className="my-1 font-extralight">{exp}</li>
                                        ))}
                                    </ul>
                                </div>
                                <span
                                    className={`absolute top-20 text-red-300 -translate-y-1/2 hidden min-[1150px]:inline ${i % 2 === 0 ? 'left-full rotate-180' : 'right-full'
                                        }`}
                                >
                                    {arrowLeftIcon}
                                </span>
                            </motion.div>
                            <div
                                className={`w-14 absolute -top-10 min-[1150px]:top-20 left-1/2 -translate-x-1/2 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-30 bg-white dark:bg-zinc-800 ${i % 2 === 0
                                    ? 'min-[1150px]:left-[calc(100%+24px)] min-[1150px]:translate-x-0'
                                    : 'min-[1150px]:right-[calc(100%+24px)] min-[1150px]:left-auto min-[1150px]:translate-x-0'
                                    }`}
                            >
                                {date - items.length + i + 1}
                            </div>
                        </div>
                    ))}

                    <motion.div
                        initial={{ scaleY: 0 }}
                        style={{ scaleY: scrollY }}
                        className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full rounded-full bg-gray-300 origin-top z-0"
                    ></motion.div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage