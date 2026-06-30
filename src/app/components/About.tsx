'use client';

import Image from "next/image";
import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "../assets";
import Achievements from "./subs/Achievements";
import Heading from "./subs/Heading";

const AboutPage = () => {
    return <>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10">
            <Heading text={'About Me'} />

            <div className="w-full flex flex-row items-center gap-x-10 md:flex-col md:items-center md:gap-y-8 justify-center">
                <Image
                    src={'/about-me.png'}
                    alt="About Image"
                    width={400}
                    height={400}
                    className="w-[200px] shrink-0 md:w-[180px]"
                    priority
                />
                <div className="relative flex-1 max-w-[900px] rounded-xl bg-zinc-100 p-8 text-justify dark:bg-zinc-700 transition-colors">
                    <span className="absolute -left-5 top-24 scale-[2.5] text-zinc-100 md:hidden dark:text-zinc-700 transition-colors">
                        {arrowLeftIcon}
                    </span>
                    <p className="text-lg font-light leading-relaxed text-gray-700 lg:text-[16px] sm:text-[14px] dark:text-white">{aboutText}</p>
                    <a href="/tannhi-cv.pdf"
                        download=""
                        className="mt-6 flex w-max items-center gap-x-2 rounded-full bg-red-400 px-5 py-2.5 font-light text-white hover:bg-red-500 transition-colors"
                    >
                        <span>Download CV</span>
                        <span className="text-xl">{downloadIcon}</span>
                    </a>
                </div>
            </div>
            <div className="mt-20 w-full flex flex-wrap items-center justify-around gap-x-7 gap-y-10 ">
                {aboutData.map((item, i) => (
                    <Achievements key={i} title={item.title} amount={item.amount}>
                        {item.icon}
                    </Achievements>
                ))}

            </div>
        </div >
    </>
}

export default AboutPage