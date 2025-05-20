
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MessageCircle } from 'lucide-react';

// Import all detail markdown content
import item1Detail from '../../plan-items/item-1-detail.md?raw';
import item2Detail from '../../plan-items/item-2-detail.md?raw';
import item3Detail from '../../plan-items/item-3-detail.md?raw';
import item4Detail from '../../plan-items/item-4-detail.md?raw';
import item5Detail from '../../plan-items/item-5-detail.md?raw';
import item6Detail from '../../plan-items/item-6-detail.md?raw';
import item7Detail from '../../plan-items/item-7-detail.md?raw';
import item8Detail from '../../plan-items/item-8-detail.md?raw';
import item9Detail from '../../plan-items/item-9-detail.md?raw';
import item10Detail from '../../plan-items/item-10-detail.md?raw';

const PlanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const itemNumber = parseInt(id || '1');
  
  // Map of item details
  const itemDetails = {
    1: item1Detail,
    2: item2Detail,
    3: item3Detail,
    4: item4Detail,
    5: item5Detail,
    6: item6Detail,
    7: item7Detail,
    8: item8Detail,
    9: item9Detail,
    10: item10Detail,
  };
  
  // Get the content for this item
  const content = itemDetails[itemNumber as keyof typeof itemDetails] || '';

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-6">
          <Button variant="ghost" className="flex items-center gap-2">
            <ChevronLeft size={16} />
            <span>Terug naar overzicht</span>
          </Button>
        </Link>
        
        <div className="prose max-w-none">
          <ReactMarkdown className="markdown-content">
            {content}
          </ReactMarkdown>
        </div>
        
        {/* Feedback section */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <MessageCircle size={20} />
            <span>Heb je feedback, suggesties of relevante links? </span>
            <a 
              href="https://github.com/michielbakker/aiplan-nl"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Open een issue op GitHub.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
