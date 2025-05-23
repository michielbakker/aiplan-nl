
import React from 'react';

const Header = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
        Nederland klaarmaken voor komst Superintelligentie
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
        Een Deltaplan voor de AI Transitie
      </h2>
      <div className="flex justify-center items-center space-x-2 text-gray-600 mb-4">
        <a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          Michiel Bakker
        </a>
        <span className="text-gray-400">en</span>
        <a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          Jelle Prins
        </a>
      </div>
      <div className="flex justify-center">
        <a 
          href="https://aiplan-nl.translate.goog/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
        >
          🇬🇧 English
        </a>
      </div>
    </header>
  );
};

export default Header;
