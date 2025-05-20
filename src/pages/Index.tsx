
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PlanItem from '@/components/PlanItem';

// Import all plan item markdown content
import intro from '../../plan-items/intro.md?raw';
import item1 from '../../plan-items/item-1.md?raw';
import item2 from '../../plan-items/item-2.md?raw';
import item3 from '../../plan-items/item-3.md?raw';
import item4 from '../../plan-items/item-4.md?raw';
import item5 from '../../plan-items/item-5.md?raw';
import item6 from '../../plan-items/item-6.md?raw';
import item7 from '../../plan-items/item-7.md?raw';
import item8 from '../../plan-items/item-8.md?raw';
import item9 from '../../plan-items/item-9.md?raw';
import item10 from '../../plan-items/item-10.md?raw';
import conclusion from '../../plan-items/conclusion.md?raw';

const Index = () => {
  // State for the expanded plan item
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  // Toggle function for expanding/collapsing plan items
  const toggleItem = (itemNumber: number) => {
    if (expandedItem === itemNumber) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemNumber);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Nederland klaarmaken voor komst Superintelligentie
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
            Een Deltaplan voor de AI Transitie
          </h2>
          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <a href="https://x.com/bakkermichiel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Michiel Bakker
            </a>
            <span className="text-gray-400">en</span>
            <a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Jelle Prins
            </a>
          </div>
        </header>
        
        <section className="mb-10">
          <div className="mt-8 space-y-4">
            <PlanItem
              number={0}
              title="De mondiale AI race"
              content={intro}
              isExpanded={expandedItem === 0}
              toggleExpand={() => toggleItem(0)}
            />
            
            {/* Regular plan items numbered 1-10 */}
            <PlanItem
              number={1}
              title="AI soevereiniteit"
              content={item1}
              isExpanded={expandedItem === 1}
              toggleExpand={() => toggleItem(1)}
            />
            <PlanItem
              number={2}
              title="Talent"
              content={item2}
              isExpanded={expandedItem === 2}
              toggleExpand={() => toggleItem(2)}
            />
            <PlanItem
              number={3}
              title="Een Nederlandse AI hub"
              content={item3}
              isExpanded={expandedItem === 3}
              toggleExpand={() => toggleItem(3)}
            />
            <PlanItem
              number={4}
              title="Strategische investeringen"
              content={item4}
              isExpanded={expandedItem === 4}
              toggleExpand={() => toggleItem(4)}
            />
            <PlanItem
              number={5}
              title="Europese rekenkracht"
              content={item5}
              isExpanded={expandedItem === 5}
              toggleExpand={() => toggleItem(5)}
            />
            <PlanItem
              number={6}
              title="Defensie als vliegwiel"
              content={item6}
              isExpanded={expandedItem === 6}
              toggleExpand={() => toggleItem(6)}
            />
            <PlanItem
              number={7}
              title="Sectorspecifieke AI-plannen"
              content={item7}
              isExpanded={expandedItem === 7}
              toggleExpand={() => toggleItem(7)}
            />
            <PlanItem
              number={8}
              title="Maak Nederland AI-vaardig"
              content={item8}
              isExpanded={expandedItem === 8}
              toggleExpand={() => toggleItem(8)}
            />
            <PlanItem
              number={9}
              title="Onderzoek naar AI-impact"
              content={item9}
              isExpanded={expandedItem === 9}
              toggleExpand={() => toggleItem(9)}
            />
            <PlanItem
              number={10}
              title="Online veiligheid"
              content={item10}
              isExpanded={expandedItem === 10}
              toggleExpand={() => toggleItem(10)}
            />
            
            {/* Conclusion item */}
            <PlanItem
              number={11}
              title="Een Nederlandse AI top"
              content={conclusion}
              isExpanded={expandedItem === 11}
              toggleExpand={() => toggleItem(11)}
            />
          </div>
        </section>
        
        <footer className="text-center text-sm text-gray-500 mt-16 pt-8 border-t border-gray-200">
          <p className="mb-2">
            Met dank aan Durk Kingma, Peter van Sabbben, Rick Lamers, Rick Pastoor, Rogier Klimbie, Salar al Khafaji en Sebastiaan Vaessen
          </p>
          <p>
            Schrijf zelf mee via <a href="https://github.com/michielbakker/aiplan-nl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">onze Github</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
