
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const NewsletterCTA = () => {
  return (
    <div className="my-10 bg-[#1B0025] px-12 py-8 max-md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="text-lg text-white">Wil je op een andere manier bijdragen of op de hoogte blijven?</h3>
        <Button 
          asChild
          size="default"
          variant="default" 
          className="gap-0 pl-4 pr-0 rounded-none text-black whitespace-nowrap font-medium bg-gray-50 hover:bg-gray-100"
        >
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnUR6k6OR3ToKp3DgSLfWzerepExXClIIiImqXKrTfskkpug/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <span className="mr-3">Laat je email achter</span>
            <div className="w-8 h-8 flex items-center justify-center mr-1 bg-[#88AAC9]">
              <ExternalLink size={16} />
            </div>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NewsletterCTA;
