
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';

const DeltaPlanIntro = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {getTranslation(language, 'delta_plan.title')}
      </h2>
      <div className="prose max-w-none text-gray-700">
        <p>
          {getTranslation(language, 'delta_plan.description1')}
        </p>
        <p className="mt-4">
          {getTranslation(language, 'delta_plan.description2')}
        </p>
      </div>
    </section>
  );
};

export default DeltaPlanIntro;
