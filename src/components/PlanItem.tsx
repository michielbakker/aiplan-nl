
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';

interface PlanItemProps {
  number: number;
  title: string;
  content: string;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const PlanItem: React.FC<PlanItemProps> = ({
  number,
  title,
  content,
  isExpanded,
  toggleExpand
}) => {
  return (
    <Card className="overflow-hidden">
      <div
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium mr-3">
            {number}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
          {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </Button>
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
};

export default PlanItem;
