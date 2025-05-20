
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

const PlanItem = ({ number, title, content, isExpanded, toggleExpand }) => (
  <Card>
    <div 
      className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
      onClick={toggleExpand}
    >
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white mr-3">
          {number}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
    </div>
    
    {isExpanded && (
      <div className="px-6 pb-6 pt-2 text-gray-700 border-t border-gray-100">
        <div className="prose max-w-none">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    )}
  </Card>
);

export default PlanItem;
