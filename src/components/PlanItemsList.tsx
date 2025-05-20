
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

interface PlanItemsListProps {
  planItems: {
    number: number;
    content: string;
  }[];
}

const PlanItemsList: React.FC<PlanItemsListProps> = ({ planItems }) => {
  return (
    <div className="mt-8 mb-16 space-y-4">
      {planItems.map((item) => (
        <Card key={item.number} className="overflow-hidden">
          <Link to={`/plan/${item.number}`} className="block p-4 hover:bg-gray-50">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white mr-3 shrink-0">
                {item.number}
              </div>
              <div className="prose max-w-none">
                <ReactMarkdown components={{
                  h3: ({ node, ...props }) => {
                    return <h3 className="text-lg font-semibold" {...props} />;
                  },
                }}>
                  {item.content}
                </ReactMarkdown>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default PlanItemsList;
