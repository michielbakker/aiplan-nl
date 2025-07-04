
import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import { ArrowRight } from 'lucide-react';

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

const extractContentFromMarkdown = (markdown: string) => {
  // Extract content after the title, removing the ### **Title** part
  const lines = markdown.split('\n');
  const contentLines = [];
  let foundTitle = false;
  
  for (const line of lines) {
    if (line.match(/###\s+\*\*([^*]+)\*\*/)) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim()) {
      contentLines.push(line);
    }
  }
  
  return contentLines.join('\n').trim();
};

const PlanItem = ({ number, content, backgroundColor }) => {
  const extractedTitle = useMemo(() => {
    const extracted = extractTitleFromMarkdown(content);
    return extracted || `Item ${number}`;
  }, [content, number]);

  const extractedContent = useMemo(() => {
    return extractContentFromMarkdown(content);
  }, [content]);

  const handleLearnMoreClick = () => {
    // Handle learn more functionality
    console.log('Learn more clicked for item', number);
  };

  const buttonBgColor = backgroundColor === '#C9BDA9' ? '#594F3F' : '#88AAC9';

  return (
    <section className="w-full mt-[89px] max-md:mt-10">
      <article className="px-8 py-[54px] max-md:px-5" style={{ backgroundColor }}>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col text-[#0C0011] font-medium mt-[5px] max-md:mt-10">
              <h2 className="text-[22px] leading-none font-space-grotesk">
                {extractedTitle}
              </h2>
              
              <div className="text-[10px] font-normal leading-[15px] self-stretch mt-[25px] font-inter">
                <ReactMarkdown>
                  {extractedContent}
                </ReactMarkdown>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleLearnMoreClick} 
                  className="gap-0 pl-4 pr-0 rounded-none text-white hover:opacity-90"
                  style={{ backgroundColor: buttonBgColor }}
                >
                  <span className="mr-3">Lees meer</span>
                  <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: buttonBgColor }}>
                    <ArrowRight size={16} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PlanItem;
