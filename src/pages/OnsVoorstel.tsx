import ArticleLayout from '@/components/ArticleLayout';
import IntroSection from '@/components/IntroSection';
import PlanItemsList from '@/components/PlanItemsList';
import ContributionCTA from '@/components/ContributionCTA';
import AboutUs from '@/components/AboutUs';
import TulipIcon from '@/components/TulipIcon';
import { Button } from '@/components/ui/button';

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

const OnsVoorstel = () => {
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
		<ArticleLayout
			title={
				<>
					Nederland klaarmaken
					<br />
					voor komst Superintelligentie
				</>
			}
			eyebrow="Ons Oorspronkelijke Voorstel"
			subtitle="Een Deltaplan voor de AI Transitie"
			meta={
				<div className="space-y-2 text-slate-600">
					<p>
						Door{' '}
						<a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900">
							Michiel Bakker
						</a>{' '}
						en{' '}
						<a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900">
							Jelle Prins
						</a>
						. Eerder verschenen{' '}
						<a href="https://www.nrc.nl/nieuws/2025/05/20/nationaal-actieplan-voor-de-ai-transitie-is-nu-noodzakelijk-a4893971" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900">
							in NRC
						</a>
						.
					</p>
				</div>
			}
			headerAppend={
				<Button
					asChild
					variant="ghost"
					className="gap-2 px-3 py-2 text-gray-600 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 font-inter text-sm border border-gray-200"
				>
					<a
						href="https://aiplan-nl.translate.goog/ons-voorstel?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp"
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
			}
			heroIcon={<TulipIcon />}
			afterArticle={
				<div className="space-y-12">
					<PlanItemsList planItems={planItems} />
					<div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
						<div className="px-8 py-10 md:px-12">
							<IntroSection title="Een Nederlandse AI top" />
						</div>
					</div>
					<ContributionCTA />
					<AboutUs />
				</div>
			}
		>
			<div className="space-y-10">
				<IntroSection title="De mondiale AI race" />
				<IntroSection title="Het is geen toekomstmuziek meer" />
				<IntroSection title="Nederland's positie: van koploper naar achterblijver" />
				<IntroSection title="De prijs van niets doen" />
				<IntroSection title="Een nieuw Deltaplan voor AI" />
			</div>
		</ArticleLayout>
	);
};

export default OnsVoorstel; 
