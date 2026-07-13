'use client';

import { createContext, ReactNode, useCallback, useContext, useSyncExternalStore } from 'react';

export type Language = 'en' | 'vi';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'language';
const CUSTOM_EVENT = 'language-storage-change';

function subscribe(callback: () => void) {
    window.addEventListener('storage', callback);
    window.addEventListener(CUSTOM_EVENT, callback);
    return () => {
        window.removeEventListener('storage', callback);
        window.removeEventListener(CUSTOM_EVENT, callback);
    };
}

function getSnapshot(): Language {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'en' || saved === 'vi' ? saved : 'vi';
}

function getServerSnapshot(): Language {
    return 'vi';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggleLanguage = useCallback(() => {
        const next: Language = language === 'en' ? 'vi' : 'en';
        window.localStorage.setItem(STORAGE_KEY, next);
        window.dispatchEvent(new Event(CUSTOM_EVENT));
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
};