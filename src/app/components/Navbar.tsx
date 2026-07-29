'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { copyRightIcon, navbarData } from "../assets";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

interface Props {
    id: string | number;
}

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const drawerVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: { type: "spring", stiffness: 320, damping: 32 },
    },
    exit: { x: "100%", transition: { duration: 0.25, ease: "easeInOut" } },
};

const listVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const Navbar = ({ id }: Props) => {
    const { language } = useLanguage();
    const t = translations[language];
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    return (
        <>
            {/* ---------- MOBILE TOP BAR — chỉ hiện khi màn hình ≤767px (md của project bạn = mobile) ---------- */}
            <div className="hidden md:flex fixed top-0 left-0 w-full h-14 items-center justify-between
                px-4 z-30 bg-zinc-50 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700
                transition-colors">
                <Link href="/#home" className="text-2xl font-semibold text-red-400 leading-none">
                    T.
                </Link>

                <button
                    type="button"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="relative w-9 h-9 flex items-center justify-center rounded-full
                        border border-gray-300 dark:border-zinc-600"
                >
                    <motion.span
                        className="absolute w-4 h-[2px] bg-zinc-700 dark:bg-zinc-200 rounded-full"
                        animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 0 : -4 }}
                        transition={{ duration: 0.25 }}
                    />
                    <motion.span
                        className="absolute w-4 h-[2px] bg-zinc-700 dark:bg-zinc-200 rounded-full"
                        animate={{ opacity: mobileOpen ? 0 : 1 }}
                        transition={{ duration: 0.15 }}
                    />
                    <motion.span
                        className="absolute w-4 h-[2px] bg-zinc-700 dark:bg-zinc-200 rounded-full"
                        animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? 0 : 4 }}
                        transition={{ duration: 0.25 }}
                    />
                </button>
            </div>

            {/* ---------- MOBILE OVERLAY + DRAWER ---------- */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            key="overlay"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setMobileOpen(false)}
                            className="hidden md:block fixed inset-0 z-20 bg-black/40 backdrop-blur-[2px]"
                        />

                        <motion.div
                            key="drawer"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="hidden md:flex fixed top-0 right-0 h-dvh w-64 z-30 flex-col justify-between
                                px-6 py-8 bg-zinc-50 dark:bg-zinc-800 border-l border-gray-200 dark:border-zinc-700"
                        >
                            <motion.div
                                variants={listVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col gap-y-5 mt-14"
                            >
                                {navbarData.map((item, i) => (
                                    <motion.div key={i} variants={itemVariants}>
                                        <Link
                                            href={`/#${item.id}`}
                                            onClick={() => setMobileOpen(false)}
                                            className="relative flex items-center gap-3"
                                        >
                                            {item.id === id && (
                                                <motion.span
                                                    layoutId="active-dot"
                                                    className="absolute -left-3 w-1.5 h-1.5 rounded-full bg-red-500"
                                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                            <span className={`text-xl ${item.id === id ? "text-red-500" : "text-yellow-600"}`}>
                                                {item.icon}
                                            </span>
                                            <span className={`text-sm font-medium ${item.id === id
                                                ? "text-red-500"
                                                : "text-gray-600 dark:text-gray-300"
                                                }`}>
                                                {t.nav[item.id as keyof typeof t.nav]}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="flex items-center gap-1.5 whitespace-nowrap">
                                <span className="text-[13px] text-gray-500 dark:text-gray-200">{copyRightIcon}</span>
                                <span className="text-[13px] text-gray-500 dark:text-gray-200 tracking-wider">
                                    2021 - {new Date().getFullYear()}
                                </span>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ---------- DESKTOP SIDEBAR — chỉ hiện khi màn hình >767px, đúng như code gốc của bạn ---------- */}
            <nav className="flex md:hidden w-[70px] min-h-dvh fixed left-0 top-0 flex-col items-center
             justify-between border-r border-gray-200 dark:border-zinc-700 px-4 py-10 z-10
              bg-zinc-50 dark:bg-zinc-800 transition-colors xl:py-6">
                <Link href="/#home" className="flex flex-col items-center shrink-0">
                    <span className="text-3xl font-semibold text-red-400 leading-none whitespace-nowrap">
                        T.
                    </span>
                    <span className="mt-1 block rotate-90 origin-center text-[11px] font-semibold tracking-wide text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Nhi
                    </span>
                </Link>

                <div className="flex flex-col gap-y-4 sm:gap-y-2 xl:gap-y-1 cursor-pointer">
                    {navbarData.map((item, i) => (
                        <Link
                            key={i}
                            href={`/#${item.id}`}
                            className="group relative flex items-center justify-center"
                        >
                            <span
                                className={`text-2xl mb-4 transition-all duration-300 group-hover:scale-125 xs:group-hover:scale-100 xl:group-hover:scale-115 ${item.id === id
                                    ? "text-red-500 scale-110 xl:scale-100 xs:scale-80"
                                    : "text-yellow-600 scale-100 xl:scale-90 xs:scale-70"
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
                        <span className="text-[15px] xs:text-[12px] text-gray-500 dark:text-gray-200 tracking-wider ">
                            2021 - {new Date().getFullYear()}
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar