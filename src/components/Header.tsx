
import React from 'react';

const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex justify-center items-center mb-4">
        <div className="w-8 h-6 mr-2 flex flex-col">
          <div className="w-full h-1/3 bg-[#AE1C28]"></div>
          <div className="w-full h-1/3 bg-white"></div>
          <div className="w-full h-1/3 bg-[#21468B]"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          AIPlan NL
        </h1>
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
        Een Deltaplan voor de AI Transitie
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
