
import React, { useMemo } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

const extractTitleFromMarkdown = (markdown: string) => {
  // Look for a title in the format ### **Title**
  const titleMatch = markdown.match(/###\s+\*\*([^*]+)\*\*/);
  if (titleMatch && titleMatch[1]) {
    // Remove the numbered prefix (e.g., "1. ") if it exists
    const title = titleMatch[1].trim();
    return title.replace(/^\d+\.\s+/, '');
  }
  return null;
};

const PlanItem = ({ number, title, content, isExpanded, toggleExpand }) => {
  const extractedTitle = useMemo(() => {
    const extracted = extractTitleFromMarkdown(content);
    return extracted || title; // Fall back to provided title if extraction fails
  }, [content, title]);

  return (
    <Card>
      <div 
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white mr-3">
            {number}
          </div>
          <h3 className="text-lg font-semibold">{extractedTitle}</h3>
        </div>
        {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 pt-2 text-gray-700 border-t border-gray-100">
          <div className="prose max-w-none">
            <ReactMarkdown components={{
              // Skip the first h3 heading since we already show it in the card header
              h3: ({ node, ...props }) => {
                // Check if this is the first h3 in the document
                const isFirstH3 = node.position?.start.line === 1;
                if (isFirstH3) {
                  return null; // Don't render the first h3
                }
                return <h3 {...props} />;
              }
            }}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </Card>
  );
};

export default PlanItem;
