
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const detailsNlObj = import.meta.glob('../../plan-items/nl/item-*-detail.md', { eager: true, as: 'raw' });
const detailsEnObj = import.meta.glob('../../plan-items/en/item-*-detail.md', { eager: true, as: 'raw' });

const sortDetails = (obj: Record<string, string>) =>
  Object.entries(obj)
    .sort((a, b) => parseInt(a[0].match(/item-(\d+)-/)! [1]) - parseInt(b[0].match(/item-(\d+)-/)! [1]))
    .map(([, content]) => content);

const detailsNl = sortDetails(detailsNlObj);
const detailsEn = sortDetails(detailsEnObj);

const PlanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const itemNumber = parseInt(id || '1');
  
  const { language } = useLanguage();
  const details = language === 'en' ? detailsEn : detailsNl;
  const content = details[itemNumber - 1] || '';

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-6">
          <Button variant="ghost" className="flex items-center gap-2">
            <ChevronLeft size={16} />
            <span>{language === 'nl' ? 'Terug naar overzicht' : 'Back to overview'}</span>
          </Button>
        </Link>
        
        <div className="prose max-w-none markdown-content">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
        
        {/* Feedback section */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
  <MessageCircle size={20} />
  <span className="whitespace-nowrap">
    <span>{language === 'nl' ? 'Heb je feedback, suggesties of relevante links? ' : 'Have feedback, suggestions or relevant links? '}</span>
    <a
      href="https://github.com/michielbakker/aiplan-nl"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline"
    >
      {language === 'nl' ? 'Open een issue op GitHub' : 'Open an issue on GitHub'}
    </a>
    <span>{language === 'nl' ? ' of ' : ' or '}</span>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfnUR6k6OR3ToKp3DgSLfWzerepExXClIIiImqXKrTfskkpug/viewform?usp=header"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline"
    >
      {language === 'nl' ? 'laat je email en idee achter.' : 'leave your email and idea.'}
    </a>
  </span>
</div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
