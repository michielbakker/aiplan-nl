
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { useMarkdownContent } from '@/utils/markdownLoader';

const PlanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const itemNumber = parseInt(id || '1');
  const { language } = useLanguage();
  const [content, setContent] = useState('');
  const { loadDetailContent } = useMarkdownContent();
  
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const loadedContent = await loadDetailContent(itemNumber);
        setContent(loadedContent);
      } catch (error) {
        console.error('Failed to load content:', error);
        setContent('Content not available');
      }
    };
    
    fetchContent();
  }, [itemNumber, language]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-6">
          <Button variant="ghost" className="flex items-center gap-2">
            <ChevronLeft size={16} />
            <span>{getTranslation(language, 'back_to_overview')}</span>
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
              <span>{getTranslation(language, 'feedback.question')} </span>
              <a 
                href="https://github.com/michielbakker/aiplan-nl"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {getTranslation(language, 'feedback.github')}
              </a>
              <span> of </span>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnUR6k6OR3ToKp3DgSLfWzerepExXClIIiImqXKrTfskkpug/viewform?usp=header"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {getTranslation(language, 'feedback.form')}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
