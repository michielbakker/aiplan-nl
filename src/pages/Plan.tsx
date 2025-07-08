import Header from '@/components/Header';
import IntroSection from '@/components/IntroSection';
import DeltaPlanIntro from '@/components/DeltaPlanIntro';
import PlanItemsList from '@/components/PlanItemsList';
import ContributionCTA from '@/components/ContributionCTA';
import NewsletterCTA from '@/components/NewsletterCTA';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import TulipIcon from '@/components/TulipIcon';

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
import { Link } from 'react-router-dom';

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

const Plan = () => {
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
		<div className="bg-[#F8F9FA]">
			<div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<Header>
					<Button
						asChild
						className="gap-2 pl-2 pr-1 rounded-none text-gray-900 bg-transparent hover:bg-black/5 transition-colors duration-200 font-inter text-sm"
					>
						<Link
							to="/"
							className="flex items-center gap-2"
						>
							<span className="hidden min-[426px]:inline">Zie onze Open Brief</span>
							<span className="min-[426px]:hidden">Open Brief</span>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
					</Button>
					<Button
						asChild
						variant="ghost"
						className="gap-1 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 font-inter text-sm border border-gray-200 hover:border-gray-300"
					>
						<a
							href="https://aiplan-nl.translate.goog/plan?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
								<path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
							</svg>
							EN
						</a>
					</Button>
				</Header>
				<div className="text-center mb-12">
					<h1 className="text-3xl sm:text-4xl font-[500] mb-2 text-gray-900 font-space-grotesk">
						Nederland klaarmaken<br />
						voor komst Superintelligentie
					</h1>
					<h2 className="font-[400] text-gray-700 font-inter mb-4 text-[1.1rem] mt-0">
						Een Deltaplan voor de AI Transitie
					</h2>
					<div className="flex justify-center items-center text-gray-600 mb-4 font-inter" style={{ fontSize: '0.9rem' }}>
						<span>Door <a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 transition-colors">Michiel Bakker</a> en <a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 transition-colors">Jelle Prins</a>. Eerder verschenen <a href="https://www.nrc.nl/nieuws/2025/05/20/nationaal-actieplan-voor-de-ai-transitie-is-nu-noodzakelijk-a4893971" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 transition-colors">in NRC</a>.</span>
					</div>
				</div>
				<div className="flex justify-center items-center mb-4">
					<TulipIcon />
				</div>
				<div className="pb-12 mt-12">
					<div className="md:bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200/50 md:px-8 md:pb-12 pt-0 mb-6">
						<IntroSection title="De mondiale AI race" />
						<IntroSection title="Het is geen toekomstmuziek meer" />
						<IntroSection title="Nederland's positie: van koploper naar achterblijver" />
						<IntroSection title="De prijs van niets doen" />

					</div>

					<DeltaPlanIntro />
					<PlanItemsList planItems={planItems} />

					<div className="md:bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200/50 md:p-8 !pt-0 mt-12">
						<IntroSection title="Een Nederlandse AI top" />
					</div>

					<ContributionCTA />
					<NewsletterCTA />

					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Plan; 