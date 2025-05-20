
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
              // Skip any h3 headings that could be title duplicates
              h3: ({ node, ...props }) => {
                // If we have children, check their content
                if (node.children && node.children.length > 0) {
                  const firstChild = node.children[0];
                  
                  // Handle text nodes (checking for ** which indicates title format)
                  if (firstChild.type === 'text') {
                    const textContent = (firstChild as { value: string }).value;
                    if (textContent.includes('**')) {
                      return null; // Skip this heading - it's a title
                    }
                  }
                  
                  // Check for strong/bold nodes which would also indicate a title
                  // We need to check if it's an element type with tagName 'strong'
                  if (firstChild.type === 'element' && 'tagName' in firstChild && firstChild.tagName === 'strong') {
                    return null; // Skip this heading - it likely contains the title
                  }
                }
                
                return <h3 {...props} />;
              },
              // Also handle any potential numbered prefixes in paragraphs
              p: ({ node, ...props }) => {
                if (node.children && node.children.length > 0) {
                  // Check if this paragraph starts with a numbered prefix like "5. Europese rekenkracht"
                  const firstChild = node.children[0];
                  if (firstChild.type === 'text') {
                    const textContent = (firstChild as { value: string }).value;
                    if (textContent.match(/^\d+\.\s+/)) {
                      // If this contains a title-like format, don't render it
                      if (textContent.includes(extractedTitle)) {
                        return null;
                      }
                    }
                  }
                }
                return <p {...props} />;
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
