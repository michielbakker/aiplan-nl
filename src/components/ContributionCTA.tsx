
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ContributionCTA = () => {
	return (
		<div className="bg-[#315FD8] px-8 py-8 max-md:px-6 rounded-3xl shadow-lg shadow-slate-900/10">
			<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
				<div className="flex-1 text-center sm:text-left">
					<h3 className="text-xl font-semibold text-white mb-2 font-space-grotesk">
						Schrijf zelf mee via onze GitHub
					</h3>
					<p className="text-blue-100 text-sm">
						Laat suggesties achter voor de inhoud van het Deltaplan.
					</p>
				</div>
				<Button
					asChild
					size="lg"
					className="gap-2 px-6 py-3 rounded-md text-gray-900 font-semibold bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md"
				>
					<a
						href="https://github.com/michielbakker/aiplan-nl"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						<Github size={20} />
						<span>Naar Github</span>
					</a>
				</Button>
			</div>
		</div>
	);
};

export default ContributionCTA;
