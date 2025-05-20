
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ContributionCTA = () => {
  const { language } = useLanguage();
  return (
    <div className="my-10 rounded-lg overflow-hidden shadow-md bg-gray-100">
      <div className="p-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-800">
            {language === 'nl' ? 'Schrijf zelf mee via onze Github' : 'Contribute via our Github'}
          </h3>
          <Button
            asChild
            size="default"
            variant="default"
            className="whitespace-nowrap font-medium"
          >
            <a href="https://github.com/michielbakker/aiplan-nl" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2" size={18} />
              {language === 'nl' ? 'Naar Github' : 'Go to Github'}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContributionCTA;
