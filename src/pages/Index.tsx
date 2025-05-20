
import { useState } from 'react';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import DeltaPlanIntro from '../components/DeltaPlanIntro';
import PlanItemsList from '../components/PlanItemsList';
import ContributionCTA from '../components/ContributionCTA';
import NewsletterCTA from '../components/NewsletterCTA';
import Footer from '../components/Footer';

// Import all plan item short markdown content
import item1Short from '../../plan-items/item-1-short.md?raw';
import item2Short from '../../plan-items/item-2-short.md?raw';
import item3Short from '../../plan-items/item-3-short.md?raw';
import item4Short from '../../plan-items/item-4-short.md?raw';
import item5Short from '../../plan-items/item-5-short.md?raw';
import item6Short from '../../plan-items/item-6-short.md?raw';
import item7Short from '../../plan-items/item-7-short.md?raw';
import item8Short from '../../plan-items/item-8-short.md?raw';
import item9Short from '../../plan-items/item-9-short.md?raw';
import item10Short from '../../plan-items/item-10-short.md?raw';

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

const Index = () => {
  // Collect all imported items in an array
  const itemShortContents = [
    item1Short, item2Short, item3Short, item4Short, item5Short, 
    item6Short, item7Short, item8Short, item9Short, item10Short
  ];
  
  // Generate plan items dynamically based on the imported content
  const planItems = itemShortContents.map((content, index) => ({
    number: index + 1,
    content
  }));

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
