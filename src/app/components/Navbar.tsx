'use client';

import Link from "next/link";
import { copyRightIcon, navbarData } from "../assets";

interface Props {
    id: string | number;
}

const Navbar = ({ id }: Props) => {

    return (
        <nav className="w-[70px] h-screen fixed left-0 top-0 flex flex-col items-center justify-between border-r border-gray-200 px-4 py-10 z-10" >
            <Link href="/#home">
                <span className="text-3xl font-semibold text-red-400 ">T</span>.
                <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">Nhi</span>
            </Link>

            <div className="flex flex-col gap-y-3 sm:gap-y-2 mb-8 cursor-pointer">
                {navbarData.map((item, i) => (
                    <Link key={i} href={`/#${item.id}`} className="group flex flex-col items-center gap-y-2">
                        <span className={`text-2xl group-hover:scale-125 transition-all ${item.id === id ? "text-red-500 scale-110" : "text-yellow-600 scale-100"}`}>
                            {item.icon}
                        </span>
                        <span className={`text-[10px] tracking-wide  opacity-0 group-hover:translate-x-0 
                    group-hover:opacity-100 transition-all duration-300 text-center ${i % 2 === 0 ? "translate-x-2" : "-translate-2"}
                    ${item.id === id && "-translate-x-0 opacity-100"}`}>
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>


            <div className="relative flex items-center justify-center w-full h-20 shrink-0">
                <p className="absolute flex items-center justify-center whitespace-nowrap -rotate-90 origin-center text-[13px] text-gray-500 tracking-wider">
                    {copyRightIcon} 2021 - {new Date().getFullYear()}
                </p>
            </div>
        </nav >
    )
}

export default Navbar