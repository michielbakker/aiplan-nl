import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'nl' | 'en';

interface LangCtx {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LangCtx>({
  language: 'nl',
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof localStorage !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'nl';
    }
    return 'nl';
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'nl' ? 'en' : 'nl';
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('language', next);
      }
      return next;
    });
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
