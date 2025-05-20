
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Toggle } from "@/components/ui/toggle";
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <Toggle 
      pressed={language === 'en'} 
      onPressedChange={toggleLanguage}
      className="flex items-center space-x-1"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span>{language === 'nl' ? 'EN' : 'NL'}</span>
    </Toggle>
  );
};

export default LanguageToggle;
