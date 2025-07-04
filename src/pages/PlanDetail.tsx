
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MessageCircle } from 'lucide-react';

// Import all detail markdown content
import item1Detail from '../../plan-items/item-1-detail.md?raw';
import item2Detail from '../../plan-items/item-2-detail.md?raw';
import item3Detail from '../../plan-items/item-3-detail.md?raw';
import item4Detail from '../../plan-items/item-4-detail.md?raw';
import item5Detail from '../../plan-items/item-5-detail.md?raw';
import item6Detail from '../../plan-items/item-6-detail.md?raw';
import item7Detail from '../../plan-items/item-7-detail.md?raw';
import item8Detail from '../../plan-items/item-8-detail.md?raw';
import item9Detail from '../../plan-items/item-9-detail.md?raw';
import item10Detail from '../../plan-items/item-10-detail.md?raw';

const PlanDetail = () => {
	const { id } = useParams<{ id: string }>();
	const itemNumber = parseInt(id || '1');

	// Map of item details
	const itemDetails = {
		1: item1Detail,
		2: item2Detail,
		3: item3Detail,
		4: item4Detail,
		5: item5Detail,
		6: item6Detail,
		7: item7Detail,
		8: item8Detail,
		9: item9Detail,
		10: item10Detail,
	};

	// Get the content for this item
	const content = itemDetails[itemNumber as keyof typeof itemDetails] || '';

	// Add item number to the markdown content
	const processedContent = useMemo(() => {
		return content.replace(/##?\s+\*\*([^*]+)\*\*/, `## **${itemNumber}. $1**`);
	}, [content, itemNumber]);

	return (
		<div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EDE9F4' }}>
			<div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-24">
				<Link to={`/#plan-item-${itemNumber}`} className="inline-block">
					<Button variant="ghost" className="flex items-center gap-2 text-white hover:text-white hover:bg-black" style={{ backgroundColor: '#101E59' }}>
						<ChevronLeft size={16} />
						<span>Terug naar overzicht</span>
					</Button>
				</Link>

				<div className="prose markdown-content text-black font-inter">
					<ReactMarkdown>
						{processedContent}
					</ReactMarkdown>
				</div>
				<div className="mt-12 pt-8 border-t border-gray-200">
					<div className="flex items-start gap-2 text-gray-600">
						<MessageCircle size={20} className="flex-shrink-0 mt-0.5" />
						<div className="flex-1">
							<span>Heb je feedback, suggesties of relevante links? </span>
							<a
								href="https://github.com/michielbakker/aiplan-nl"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 hover:underline"
							>
								Open een issue op GitHub
							</a>
							<span> of </span>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSfnUR6k6OR3ToKp3DgSLfWzerepExXClIIiImqXKrTfskkpug/viewform?usp=header"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 hover:underline"
							>
								laat je email en idee achter.
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanDetail;
