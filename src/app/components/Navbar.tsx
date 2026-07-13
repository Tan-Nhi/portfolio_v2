'use client';

import Link from "next/link";
import { copyRightIcon, navbarData } from "../assets";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";


interface Props {
    id: string | number;
}

const Navbar = ({ id }: Props) => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <nav className="w-[70px] h-screen fixed left-0 top-0 flex flex-col items-center justify-between border-r border-gray-200 dark:border-zinc-700 px-4 py-10 z-10 bg-zinc-50 dark:bg-zinc-800 transition-colors">
            <Link href="/#home" className="flex flex-col items-center shrink-0">
                <span className="text-3xl font-semibold text-red-400 leading-none whitespace-nowrap">
                    T.
                </span>
                <span className="mt-1 block rotate-90 origin-center text-[11px] font-semibold tracking-wide text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    Nhi
                </span>
            </Link>

            <div className="flex flex-col gap-y-4 cursor-pointer">
                {navbarData.map((item, i) => (
                    <Link
                        key={i}
                        href={`/#${item.id}`}
                        className="group relative flex items-center justify-center"
                    >
                        <span
                            className={`text-2xl mb-4 transition-all duration-300 group-hover:scale-125 ${item.id === id
                                ? "text-red-500 scale-110"
                                : "text-yellow-600 scale-100"
                                }`}
                        >
                            {item.icon}
                        </span>

                        <span
                            className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md
                            bg-zinc-800 dark:bg-zinc-100 px-2 py-1 text-[11px] font-medium tracking-wide
                            text-white dark:text-zinc-800 opacity-0 -translate-x-1
                            group-hover:opacity-100 group-hover:translate-x-0
                            transition-all duration-300 z-20"
                        >
                            {t.nav[item.id as keyof typeof t.nav]}
                        </span>
                    </Link>
                ))}
            </div>

            <div className="relative flex items-center justify-center w-full h-24 shrink-0">
                <div className="absolute flex items-center gap-1.5 -rotate-90 origin-center whitespace-nowrap ">
                    <span className="text-[13px] text-gray-500 dark:text-gray-200">
                        {copyRightIcon}
                    </span>
                    <span className="text-[15px] text-gray-500 dark:text-gray-200 tracking-wider ">
                        2021 - {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar