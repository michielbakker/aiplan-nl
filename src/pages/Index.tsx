
import { useState } from 'react';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import DeltaPlanIntro from '../components/DeltaPlanIntro';
import PlanItemsList from '../components/PlanItemsList';
import ContributionCTA from '../components/ContributionCTA';
import NewsletterCTA from '../components/NewsletterCTA';
import Footer from '../components/Footer';

// Import all plan item short markdown content
import { useLanguage } from '@/context/LanguageContext';

const shortNlObj = import.meta.glob('../../plan-items/nl/item-*-short.md', { eager: true, as: 'raw' });
const shortEnObj = import.meta.glob('../../plan-items/en/item-*-short.md', { eager: true, as: 'raw' });

const sortShorts = (obj: Record<string, string>) =>
  Object.entries(obj)
    .sort((a, b) => parseInt(a[0].match(/item-(\d+)-/)! [1]) - parseInt(b[0].match(/item-(\d+)-/)! [1]))
    .map(([, content]) => content);

const shortsNl = sortShorts(shortNlObj);
const shortsEn = sortShorts(shortEnObj);

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
  const { language } = useLanguage();
  const itemShortContents = language === 'en' ? shortsEn : shortsNl;

  const planItems = itemShortContents.map((content, index) => ({
    number: index + 1,
    content
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        
        <IntroSection section="globalRace" />
        <IntroSection section="noLongerFuture" />
        <IntroSection section="dutchPosition" />
        <IntroSection section="priceOfInaction" />
        
        <DeltaPlanIntro />
        <PlanItemsList planItems={planItems} />
        
        <div className="my-20">
          <IntroSection section="dutchSummit" />
        </div>
        
        <ContributionCTA />
        <NewsletterCTA />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
