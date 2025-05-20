
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="text-center mb-12 relative">
      <button
        onClick={toggleLanguage}
        className="absolute right-0 top-0 text-sm text-gray-600 hover:underline"
      >
        {language === 'nl' ? 'EN' : 'NL'}
      </button>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
        {language === 'nl'
          ? 'Nederland klaarmaken voor komst Superintelligentie'
          : 'Preparing the Netherlands for the arrival of Superintelligence'}
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
        {language === 'nl'
          ? 'Een Deltaplan voor de AI Transitie'
          : 'A Delta Plan for the AI Transition'}
      </h2>
      <div className="flex justify-center items-center space-x-2 text-gray-600">
        <a
          href="https://miba.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          Michiel Bakker
        </a>
        <span className="text-gray-400">{language === 'nl' ? 'en' : 'and'}</span>
        <a
          href="https://x.com/jelleprins"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          Jelle Prins
        </a>
      </div>
    </header>
  );
};

export default Header;
