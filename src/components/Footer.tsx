
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="text-center text-sm text-gray-500 mt-14 pt-8 border-t border-gray-200">
      <p className="mb-2">
        {language === 'nl'
          ? 'Met dank aan Durk Kingma, Miles Brundage, Peter van Sabben, Rick Lamers, Rick Pastoor, Rogier Klimbie, Salar al Khafaji, Sebastiaan Vaessen en Teddy Collins'
          : 'With thanks to Durk Kingma, Miles Brundage, Peter van Sabben, Rick Lamers, Rick Pastoor, Rogier Klimbie, Salar al Khafaji, Sebastiaan Vaessen and Teddy Collins'}
      </p>
    </footer>
  );
};

export default Footer;
