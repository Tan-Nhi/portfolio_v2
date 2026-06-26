'use client';

import Image from "next/image";
import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "../assets";
import Achievements from "./subs/Achievements";
import Heading from "./subs/Heading";

const AboutPage = () => {
    return <>
        <div className="min-h-screen px-96 flex flex-col items-center justify-center">
            <Heading text={'About Me'} />
            <div className="w-full flex items-center justify-between md:justify-center">
                <Image
                    src={'/about-me.png'}
                    alt="About Image"
                    width={400}
                    height={400}
                    className="w-[300px] md:hidden lg:block lg:w-[200px]"
                    priority
                />
                <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
                    <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 lg:block md:hidden">
                        {arrowLeftIcon}
                    </span>
                    <p className="text-gray-700 leading-6 lg:text-[16px] sm:text-[14px] whitespace-pre-line">{aboutText}</p>
                    <a href="/tannhi-cv.pdf"
                        download=""
                        className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300
                         bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors "
                    >
                        <span>Download CV</span>
                        <span className="text-xl">{downloadIcon}</span>
                    </a>
                </div>
            </div>
            <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
                {aboutData.map((item, i) => (
                    <Achievements key={i} title={item.title} amount={item.amount}>
                        {item.icon}
                    </Achievements>
                ))}

            </div>
        </div>
    </>
}

export default AboutPage