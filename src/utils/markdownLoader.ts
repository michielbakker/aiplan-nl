
import { useLanguage } from '@/contexts/LanguageContext';

// Dynamically import markdown files based on language
export const useMarkdownContent = () => {
  const { language } = useLanguage();
  
  // Import all English short markdown content
  const loadEnglishShortContent = (itemNumber: number) => {
    try {
      // Using dynamic import with template literals isn't ideal but necessary here
      // This will be evaluated at runtime and webpack will include all possible imports
      return import(`../../plan-items/en/item-${itemNumber}-short.md?raw`).then(module => module.default);
    } catch (error) {
      console.error(`Failed to load English short content for item ${itemNumber}:`, error);
      // Fallback to Dutch if English isn't available
      return import(`../../plan-items/item-${itemNumber}-short.md?raw`).then(module => module.default);
    }
  };
  
  // Import all English detail markdown content
  const loadEnglishDetailContent = (itemNumber: number) => {
    try {
      return import(`../../plan-items/en/item-${itemNumber}-detail.md?raw`).then(module => module.default);
    } catch (error) {
      console.error(`Failed to load English detail content for item ${itemNumber}:`, error);
      // Fallback to Dutch if English isn't available
      return import(`../../plan-items/item-${itemNumber}-detail.md?raw`).then(module => module.default);
    }
  };
  
  // Import all Dutch short markdown content (use existing files)
  const loadDutchShortContent = (itemNumber: number) => {
    return import(`../../plan-items/item-${itemNumber}-short.md?raw`).then(module => module.default);
  };
  
  // Import all Dutch detail markdown content (use existing files)
  const loadDutchDetailContent = (itemNumber: number) => {
    return import(`../../plan-items/item-${itemNumber}-detail.md?raw`).then(module => module.default);
  };
  
  const loadShortContent = async (itemNumber: number) => {
    if (language === 'en') {
      try {
        return await loadEnglishShortContent(itemNumber);
      } catch (error) {
        // Fallback to Dutch if English fails
        return await loadDutchShortContent(itemNumber);
      }
    } else {
      return await loadDutchShortContent(itemNumber);
    }
  };
  
  const loadDetailContent = async (itemNumber: number) => {
    if (language === 'en') {
      try {
        return await loadEnglishDetailContent(itemNumber);
      } catch (error) {
        // Fallback to Dutch if English fails
        return await loadDutchDetailContent(itemNumber);
      }
    } else {
      return await loadDutchDetailContent(itemNumber);
    }
  };
  
  return {
    loadShortContent,
    loadDetailContent
  };
};
