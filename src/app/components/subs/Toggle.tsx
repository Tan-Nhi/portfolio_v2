'use client';

import { moonIcon, sunIcon } from "@/app/assets";
import { ReactNode, useRef, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useIsMounted } from "@/app/assets/hooks/useIsMounted";


interface Props {
    children: ReactNode
}

const Toggle = ({ children }: Props) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const mounted = useIsMounted();
    const mainRef = useRef<(HTMLElement | null)>(null);

    const addDarkTheme = () => {
        mainRef.current?.classList.add('dark');
        setDarkTheme(true);
    }

    const removeDarkTheme = () => {
        mainRef.current?.classList.remove('dark');
        setDarkTheme(false);
    }

    return (
        <main ref={mainRef}>
            <div className="bg-zinc-50 dark:bg-zinc-800">
                <div className="max-w-[1200px] sm:pl-[80px] sm:pr-5 xl:w-full mx-auto flex justify-center xl:px-[90px] overflow-hidden">
                    <div
                        className="fixed right-14 top-10 z-20 flex items-center gap-3
                        md:top-0 md:h-14 md:right-16 md:z-40 md:gap-2"
                    >
                        <LanguageToggle />
                        <button
                            onClick={() => (darkTheme ? removeDarkTheme() : addDarkTheme())}
                            className="flex items-center justify-center h-9 w-9 rounded-full bg-white dark:bg-zinc-700
                        border border-yellow-500/40 text-yellow-600 hover:bg-yellow-500 hover:text-white
                        transition-colors shadow-sm text-xl z-40"
                        >
                            {mounted ? (darkTheme ? sunIcon : moonIcon) : null}
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Toggle