import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NewsletterCTA from '@/components/NewsletterCTA';

const Index = () => {
	return (
		<div className="bg-[#F8F9FA] min-h-screen">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<Header>
					<Button
						asChild
						variant="ghost"
						className="gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 font-inter text-sm border border-gray-200 hover:border-gray-300"
					>
						<a
							href="https://aiplan-nl.translate.goog/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp"
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

				{/* Hero Section */}
				<div className="text-center py-12 pb-8">
					<div className="mb-6">
						<h1 className="text-3xl sm:text-5xl lg:text-6xl font-[500] text-gray-900 font-space-grotesk leading-tight mb-6">
							Een plan voor AI dat werkt voor Nederland
						</h1>
						<div className="max-w-3xl mx-auto">
							<p className="text-lg sm:text-2xl text-gray-600 font-inter leading-relaxed mb-6 italic">
								AI verandert alles. Maar Nederland is daar nog niet op voorbereid.
							</p>
							<p className="text-base sm:text-xl text-gray-700 font-inter leading-relaxed">
								AI Plan is een onafhankelijke stichting die zich inzet voor een toekomstbestendig AI-beleid. Wij werken aan een strategische, democratisch verankerde AI-aanpak die past bij onze waarden en onze economie versterkt.
							</p>
						</div>
					</div>
				</div>

				{/* Visual separator */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16"></div>

				{/* Our Work Section */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-[500] text-gray-900 font-space-grotesk mb-6 mt-0">
							Ons werk
						</h2>
					</div>

					<div className="space-y-6">
						{/* Card 1: Open Brief */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md transition-shadow duration-200">
							<div className="flex items-start gap-6">
								<div className="w-12 h-12 bg-[#FF3030]/10 rounded-full flex items-center justify-center flex-shrink-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#FF3030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<polyline points="14,2 14,8 20,8" stroke="#FF3030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<line x1="16" y1="13" x2="8" y2="13" stroke="#FF3030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<line x1="16" y1="17" x2="8" y2="17" stroke="#FF3030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<polyline points="10,9 9,9 8,9" stroke="#FF3030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
								<div className="flex-1 min-w-0">
									<div className="mb-3">
										<h3 className="text-xl font-bold text-gray-900 font-space-grotesk mb-1">
											Open Brief
										</h3>
										<p className="text-sm text-gray-500 font-inter">
											8 juli 2025
										</p>
									</div>
									<p className="text-gray-600 font-inter mb-4 leading-relaxed">
										Een oproep aan de politiek: maak AI nú topprioriteit. We leggen uit waarom Nederland achterloopt en waarom de overheid nu moet ingrijpen om onze democratische waarden te waarborgen.
									</p>
									<Button
										asChild
										className="gap-2 px-6 py-3 rounded-lg text-white bg-[#FF3030] hover:bg-[#d92020] font-inter font-medium shadow-sm hover:shadow-md transition-all duration-200"
									>
										<Link to="/openbrief" className="flex items-center gap-2">
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											Lees de brief
										</Link>
									</Button>
								</div>
							</div>
						</div>

						{/* Card 2: AI Deltaplan */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md transition-shadow duration-200">
							<div className="flex items-start gap-6">
								<div className="w-12 h-12 bg-[#315FD8]/10 rounded-full flex items-center justify-center flex-shrink-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#315FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<polyline points="14,2 14,8 20,8" stroke="#315FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<line x1="16" y1="13" x2="8" y2="13" stroke="#315FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<line x1="16" y1="17" x2="8" y2="17" stroke="#315FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<line x1="10" y1="9" x2="8" y2="9" stroke="#315FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
								<div className="flex-1 min-w-0">
									<div className="mb-3">
										<h3 className="text-xl font-bold text-gray-900 font-space-grotesk mb-1">
											AI Deltaplan
										</h3>
										<p className="text-sm text-gray-500 font-inter">
											20 mei 2025
										</p>
									</div>
									<p className="text-gray-600 font-inter mb-4 leading-relaxed">
										Ons oorspronkelijke plan: tien concrete voorstellen voor een toekomstbestendig AI-beleid. Van investeringen in AI-infrastructuur tot het aantrekken van toptalent en het beschermen van onze democratische waarden.
									</p>
									<Button
										asChild
										className="gap-2 px-6 py-3 rounded-lg text-white bg-[#315FD8] hover:bg-[#1e3a8a] font-inter font-medium shadow-sm hover:shadow-md transition-all duration-200"
									>
										<Link to="/ons-voorstel" className="flex items-center gap-2">
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											Lees het voorstel
										</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<NewsletterCTA />

				<Footer />
			</div>
		</div>
	);
};

export default Index; 