'use client';

import { useIsMounted } from '@/app/assets/hooks/useIsMounted';
import { useLanguage } from '@/app/context/LanguageContext';


const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();
    const mounted = useIsMounted();

    return (
        <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="flex items-center justify-center rounded-full bg-white dark:bg-zinc-700
            border border-yellow-500/40 px-3 h-9 text-xs font-semibold tracking-wider
            text-yellow-600 hover:bg-yellow-500 hover:text-white transition-colors shadow-sm"
        >
            {mounted ? (language === 'vi' ? 'VI' : 'EN') : 'EN'}
        </button>
    );
};

export default LanguageToggle;