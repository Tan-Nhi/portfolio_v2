'use client';

import Image from "next/image";
import Heading from "./subs/Heading";
import { motion } from 'framer-motion'
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";


const ContactPage = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div id="contact"
            className="h-screen py-20">
            <Heading text={t.contact.heading} />
            <div className="w-full h-full my-auto flex lg:flex-col items-center justify-center lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] shrink-0 rounded-md overflow-hidden opacity-80"
                >
                    <Image
                        src={"/contact.gif"}
                        alt="Contact image"
                        fill
                        sizes="320px"
                        priority
                        className="object-cover"
                    />
                </motion.div>
                <motion.form
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3">
                    <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
                        <input
                            type="text"
                            placeholder={t.contact.name}
                            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        />
                        <input
                            type="email"
                            placeholder={t.contact.email}
                            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder={t.contact.subject}
                        className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                    />
                    <textarea
                        placeholder={t.contact.message}
                        className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" name="" id=""
                    ></textarea>
                    <input
                        type="submit"
                        className="w-full border border-yellow-500 rounded-md bg-yellow-600 font-light px-4 py-2 text-sm 
                        tracking-wider outline-none text-white hover:bg-yellow-500 transition-colors cursor-pointer"
                        value={t.contact.send}
                    />
                </motion.form>
            </div>
        </div>
    )
}

export default ContactPage