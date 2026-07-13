'use client';

import Image from "next/image";
import { aboutData, arrowLeftIcon, downloadIcon } from "../assets";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import Achievements from "./subs/Achievements";
import Heading from "./subs/Heading";

const AboutPage = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const stats = aboutData.map((item, i) => ({
        icon: item.icon,
        amount: item.amount,
        title: t.about.stats[i].title,
    }));

    return <>
        <div id='about'
            className="min-h-screen flex flex-col items-center justify-center">
            <Heading text={t.about.heading} />

            <div className="w-full flex items-center justify-center gap-x-8 md:gap-x-16">
                <Image
                    src={'/tannhi-About.png'}
                    alt="About Image"
                    width={400}
                    height={400}
                    className="w-[160px] shrink-0 rounded-xl md:hidden"
                    priority
                />
                <div className="relative flex-1 max-w-[900px] rounded-xl bg-zinc-100 p-8 text-justify dark:bg-zinc-700 transition-colors">
                    <span className="absolute -left-5 top-24 scale-[2.5] text-zinc-100 md:hidden dark:text-zinc-700 transition-colors">
                        {arrowLeftIcon}
                    </span>
                    <p className="text-lg font-light leading-relaxed text-gray-700 lg:text-[16px] sm:text-[14px] dark:text-white whitespace-pre-line">
                        {t.about.text}
                    </p>
                    <a href="/tannhi-cv.pdf"
                        download=""
                        className="mt-6 flex w-max items-center gap-x-2 rounded-full bg-red-400 px-5 py-2.5 font-light text-white hover:bg-red-500 transition-colors"
                    >
                        <span>{t.about.downloadCV}</span>
                        <span className="text-xl">{downloadIcon}</span>
                    </a>
                </div>
            </div>

            <div className="mt-20 w-full max-w-[900px] mx-auto grid grid-cols-4 gap-x-7 gap-y-10 justify-items-center md:grid-cols-1 md:gap-y-8">
                {stats.map((item, i) => (
                    <Achievements key={i} title={item.title} amount={item.amount}>
                        {item.icon}
                    </Achievements>
                ))}
            </div>
        </div >
    </>
}

export default AboutPage