
import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

interface ColorScheme {
  backgroundColor: string;
  buttonBgColor: string;
}

interface PlanItemProps {
  number: number;
  content: string;
  colorScheme: ColorScheme;
}

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

const PlanItem: React.FC<PlanItemProps> = ({ number, content, colorScheme }) => {
  const navigate = useNavigate();
  
  const extractedTitle = useMemo(() => {
    const extracted = extractTitleFromMarkdown(content);
    return extracted || `Item ${number}`;
  }, [content, number]);

  const extractedContent = useMemo(() => {
    return extractContentFromMarkdown(content);
  }, [content]);

  const handleLearnMoreClick = () => {
    navigate(`/plan/${number}`);
  };

  const { backgroundColor, buttonBgColor } = colorScheme;

  // Create a darker shade of the button color for hover effect
  const getDarkerColor = (color: string) => {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Make 10% darker
    const darkerR = Math.floor(r * 0.9);
    const darkerG = Math.floor(g * 0.9);
    const darkerB = Math.floor(b * 0.9);
    
    return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
  };

  const buttonHoverColor = getDarkerColor(buttonBgColor);

  return (
    <section id={`plan-item-${number}`} className="w-full mt-[1rem] max-md:mt-10">
      <article className="px-12 py-8 max-md:px-8" style={{ backgroundColor }}>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-full max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col text-[#0C0011] font-medium mt-[5px] max-md:mt-10">
              <h2 className="text-[22px] leading-none font-space-grotesk mt-[.5rem]">
                {number}. {extractedTitle}
              </h2>
              
              <div className="text-[14px] font-normal font-inter leading-[170%]">
                <ReactMarkdown>
                  {extractedContent}
                </ReactMarkdown>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleLearnMoreClick} 
                  className="gap-0 pl-4 pr-0 rounded-none text-white transition-colors duration-200"
                  style={{ backgroundColor: buttonBgColor }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = buttonHoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = buttonBgColor;
                  }}
                >
                  <span className="mr-3">Lees meer</span>
                  <div className="w-8 h-8 flex items-center justify-center mr-1" style={{ backgroundColor: "white" }}>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6H14M10 2L14 6L10 10" stroke="black" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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
