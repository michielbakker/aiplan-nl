
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const NewsletterCTA = () => {
  return (
	<div className="my-10 bg-[#315FD8] px-8 py-8 max-md:px-6">
	<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
		<div className="flex-1 text-center sm:text-left">
			<h3 className="text-xl font-semibold text-white mb-2 font-space-grotesk">
				Wil je bijdragen aan het AI Plan?
			</h3>
			<p className="text-gray-300 text-sm">
				Blijf op de hoogte van updates en ontwikkelingen, of schrijf ons een bericht.
			</p>
		</div>
		<Button
			asChild
			size="lg"
			className="gap-2 px-6 py-3 rounded-md text-gray-900 font-semibold bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md"
		>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSfnUR6k6OR3ToKp3DgSLfWzerepExXClIIiImqXKrTfskkpug/viewform?usp=header"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2"
			>
				<ExternalLink size={20} />
				<span>Laat je email achter</span>
			</a>
		</Button>
	</div>
</div>
  );
};

export default NewsletterCTA;
