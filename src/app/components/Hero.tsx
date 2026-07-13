"use client";

import { heroIcons } from "@/app/assets";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { translations } from "../i18n/translations";

const HeroPage = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const [windowOffset, setWindowOffset] = useState({
        innerWidth: 0,
        innerHeight: 0,
    });
    const [mouseMove, setMoveMove] = useState<boolean>(false);
    const [buttonHover, setButtonHover] = useState<boolean>(false);
    const x = useMotionValue<number>(0);
    const y = useMotionValue<number>(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        x.set(clientX);
        y.set(clientY);
    };

    const handleMoveEnter = () => {
        setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
        setMoveMove(true);
    }

    const { innerWidth, innerHeight } = windowOffset;
    const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
    const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

    return (
        <>
            <div id='home'
                className="min-h-dvh grid place-items-center pt-0 -mt-10 sm:mt-0"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMoveEnter}
            >
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
                    >
                        <motion.div
                            className="flex items-center justify-center"
                            style={{
                                rotateX: mouseMove ? rotateX : 0,
                                rotateY: mouseMove ? rotateY : 0,
                                transition: '0.1s'
                            }}>
                            <Image
                                src={"/tannhi.png"}
                                alt="Person Image"
                                width={400}
                                height={400}
                                priority={true}
                                className="h-auto w-[350px] rounded-xl"
                            />
                            <motion.span className="absolute text-3xl font-semibold text-white" initial={{ scale: 0 }}
                                animate={{
                                    opacity: buttonHover ? 0 : 1,
                                    scale: buttonHover ? 2 : 0,
                                    y: buttonHover ? -40 : 0
                                }}
                                transition={{ opacity: { delay: 0.4 } }}
                            >
                                Hi
                            </motion.span>
                        </motion.div>
                        <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
                            {t.hero.greeting}
                        </h1>
                        <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200">
                            {t.hero.tagline}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl"
                    >
                        {heroIcons.map((icon, i) => (
                            <a
                                href="https://github.com/Tan-Nhi"
                                key={i}
                                target="_blank"
                                className="hover:bg-red-400 hover:text-white transition-colors rounded-lg  "
                            >
                                {icon}
                            </a>
                        ))}
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        href="#"
                        className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light  capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={() => setButtonHover(false)}
                    >
                        {t.hero.cta}
                    </motion.a>
                </div >
            </div >
        </>
    );
};

export default HeroPage;