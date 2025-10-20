import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
	return (
		<div className="bg-white rounded-lg border border-gray-200/50 p-8 shadow-xl">
			<div className="max-w-2xl">
				<h3 className="text-2xl font-bold mb-4 text-black font-space-grotesk">
					Over ons
				</h3>
				<p className="text-gray-600 mb-6 leading-relaxed">
					Wil je meer weten over ons werk? Bekijk ons eerder gepubliceerde AI Deltaplan met tien concrete maatregelen om Nederland voor te bereiden op de AI-transitie, of meld je aan voor onze nieuwsbrief en blijf op de hoogte van onze ontwikkelingen.
				</p>
				<div className="flex flex-col sm:flex-row gap-4">
					<Button
						asChild
						className="gap-2 px-6 py-3 rounded-md text-white bg-[#315FD8] hover:bg-[#1e3a8a] transition-all duration-200 font-inter text-base font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
					>
						<Link
							to="/ons-voorstel"
							className="flex items-center gap-2  !text-white"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Lees ons voorstel
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						className="gap-2 px-6 py-3 rounded-md border-gray-300 hover:bg-gray-50 transition-all duration-200 font-inter text-base font-medium"
					>
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSfnUR6k6OR3ToKp3DgSLfWzerepExXClIIiImqXKrTfskkpug/viewform?usp=header"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Laat je e-mail achter
						</a>
					</Button>
					<Button
						asChild
						variant="outline"
						className="gap-2 px-6 py-3 rounded-md border-gray-300 hover:bg-gray-50 transition-all duration-200 font-inter text-base font-medium flex-shrink-0"
					>
						<Link
							to="/"
							className="flex items-center gap-2 whitespace-nowrap"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
								<path d="M9,15 L15,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
								<path d="M15,15 L15,9 L9,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							Meer over ons
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
