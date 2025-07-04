
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ContributionCTA = () => {
  return (
    <div className="my-10 bg-gray-50 px-12 py-8 max-md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-gray-800">Schrijf zelf mee via onze Github</h3>
        <Button 
          asChild
          size="default"
          variant="default" 
          className="gap-0 pl-4 pr-0 rounded-none text-white whitespace-nowrap font-medium bg-[#1B0025] hover:bg-[#150020]"
        >
          <a href="https://github.com/michielbakker/aiplan-nl" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <span className="mr-3">Naar Github</span>
            <div className="w-8 h-8 flex items-center justify-center mr-1 bg-[#88AAC9]">
              <Github size={16} />
            </div>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ContributionCTA;
