
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import DeltaPlanIntro from '../components/DeltaPlanIntro';
import PlanItemsList from '../components/PlanItemsList';
import ContributionCTA from '../components/ContributionCTA';
import NewsletterCTA from '../components/NewsletterCTA';
import Footer from '../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMarkdownContent } from '@/utils/markdownLoader';

// We'll use dynamic loading for plan items based on language
const Index = () => {
  const { language } = useLanguage();
  const [planItems, setPlanItems] = useState<{ number: number; content: string }[]>([]);
  const { loadShortContent } = useMarkdownContent();
  
  useEffect(() => {
    const loadPlanItems = async () => {
      try {
        // Generate array of 1-10 numbers
        const itemNumbers = Array.from({ length: 10 }, (_, i) => i + 1);
        
        // Load all short contents based on language
        const items = await Promise.all(
          itemNumbers.map(async (number) => {
            try {
              const content = await loadShortContent(number);
              return { number, content };
            } catch (error) {
              console.error(`Failed to load content for item ${number}:`, error);
              return { number, content: 'Content not available' };
            }
          })
        );
        
        setPlanItems(items);
      } catch (error) {
        console.error('Failed to load plan items:', error);
      }
    };
    
    loadPlanItems();
  }, [language]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        
        <IntroSection title="De mondiale AI race" />
        <IntroSection title="Het is geen toekomstmuziek meer" />
        <IntroSection title="Nederland's positie: van koploper naar achterblijver" />
        <IntroSection title="De prijs van niets doen" />
        
        <DeltaPlanIntro />
        <PlanItemsList planItems={planItems} />
        
        <div className="my-20">
          <IntroSection title="Een Nederlandse AI top" />
        </div>
        
        <ContributionCTA />
        <NewsletterCTA />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
