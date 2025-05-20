
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { language } = useLanguage();

  return (
    <header className="text-center mb-12 relative">
      <div className="absolute top-0 right-0">
        <LanguageToggle />
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
        {getTranslation(language, 'header.title')}
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
        {getTranslation(language, 'header.subtitle')}
      </h2>
      <div className="flex justify-center items-center space-x-2 text-gray-600">
        <a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          Michiel Bakker
        </a>
        <span className="text-gray-400">en</span>
        <a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          Jelle Prins
        </a>
      </div>
    </header>
  );
};

export default Header;
