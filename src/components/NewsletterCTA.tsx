
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const NewsletterCTA = () => {
  return (
    <div className="my-10 rounded-lg overflow-hidden shadow-md bg-blue-50">
      <div className="p-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-800">Wil je op een andere manier bijdrage of op de hoogte blijven?</h3>
          <Button 
            asChild
            size="default"
            variant="default" 
            className="whitespace-nowrap font-medium bg-blue-600 hover:bg-blue-700"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnUR6k6OR3ToKp3DgSLfWzerepExXClIIiImqXKrTfskkpug/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="mr-2" size={18} />
              Laat je email achter
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTA;
