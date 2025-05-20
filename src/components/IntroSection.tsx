import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';

interface IntroSectionProps {
  title: string;
}

const IntroSection = ({ title }: IntroSectionProps) => {
  const { language } = useLanguage();
  
  // Find the corresponding translation key
  const findTranslationKey = (title: string) => {
    // Map Dutch titles to their intro section keys
    const titleToKey: Record<string, string> = {
      "De mondiale AI race": "intro.section1",
      "Het is geen toekomstmuziek meer": "intro.section2",
      "Nederland's positie: van koploper naar achterblijver": "intro.section3",
      "De prijs van niets doen": "intro.section4",
      "Een Nederlandse AI top": "ai_top"
    };
    
    return titleToKey[title] || title;
  };
  
  const translationKey = findTranslationKey(title);
  const translatedTitle = getTranslation(language, translationKey);
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{translatedTitle}</h2>
      <div className="prose max-w-none text-gray-700">
        <p>
          {/* Content would go here */}
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
