import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NewsletterCTA from '@/components/NewsletterCTA';

const Index = () => {
	return (
		<div className="bg-[#F8F9FA] min-h-screen">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<Header hideHomeBtn={true}>
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

				<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16"></div>
				
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-[500] text-gray-900 font-space-grotesk mb-6 mt-0">
							Ons werk
						</h2>
					</div>

					<div className="space-y-6">
						{/* Card 1: NADI Opiniestuk */}
						<div className="bg-white rounded-xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md transition-shadow duration-200">
							<div className="flex items-start gap-6">
								<div className="w-12 h-12 bg-[#315FD8]/10 rounded-full flex items-center justify-center flex-shrink-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#315FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
								<div className="flex-1 min-w-0">
									<div className="mb-3">
										<h3 className="text-xl font-bold text-gray-900 font-space-grotesk mb-1">
											Een Nederlandse DARPA: het einde van ‘doe maar gewoon’
										</h3>
										<p className="text-sm text-gray-500 font-inter">
											18 augustus 2025
										</p>
									</div>
									<p className="text-gray-600 font-inter mb-4 leading-relaxed">
									Een opiniestuk over NADI, het Nationaal Agentschap voor Disruptieve Innovatie. We laten zien waarom Nederland grootser moet durven denken, wat we kunnen leren van DARPA en ARIA, en welke valkuilen we moeten vermijden.
									</p>
									<Button
										asChild
										className="gap-2 px-6 py-3 rounded-lg text-white bg-[#315FD8] hover:bg-[#1e3a8a] font-inter font-medium shadow-sm hover:shadow-md transition-all duration-200"
									>
										<Link to="/nadi" className="flex items-center gap-2">
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											Lees het opiniestuk
										</Link>
									</Button>
								</div>
							</div>
						</div>

						{/* Card 2: Open Brief */}
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

						{/* Card 3: AI Deltaplan */}
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

				<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16"></div>

				{/* Over Ons Section */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-[500] text-gray-900 font-space-grotesk mb-6 mt-0">
							Ons team
						</h2>
						<div className="max-w-4xl mx-auto">
							<p className="text-base sm:text-lg text-gray-700 font-inter leading-relaxed">
								AI Plan is een initiatief van Jelle Prins en Michiel Bakker, en wordt inmiddels ondersteund door een vast team en een brede groep adviseurs. Samen brengen we technische, maatschappelijke en economische expertise samen om de AI-transitie in Nederland vorm te geven.
							</p>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-sm border border-gray-200/50 p-8">
						<div className="space-y-8">
							{/* Main team */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{/* Michiel Bakker */}
								<div className="flex items-start gap-4">
									<img 
										src="/lovable-uploads/75569a3d-7c14-4819-9b8c-6f7dc87dc622.png" 
										alt="Michiel Bakker"
										className="w-16 h-16 rounded-full object-cover flex-shrink-0"
									/>
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-1">
											<span className="font-bold text-gray-900">Michiel Bakker</span>
											<a href="https://www.linkedin.com/in/michielbakker1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</a>
											<a href="https://x.com/bakkermichiel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</a>
											<a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
													<path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
													<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
												</svg>
											</a>
										</div>
										<p className="text-gray-700 font-inter leading-relaxed text-sm">
											Assistant Professor aan het Massachusetts Institute of Technology (MIT).
										</p>
									</div>
								</div>

								{/* Jelle Prins */}
								<div className="flex items-start gap-4">
									<img 
										src="/jelle.jpg" 
										alt="Jelle Prins" 
										className="w-16 h-16 rounded-full object-cover flex-shrink-0"
									/>
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-1">
											<span className="font-bold text-gray-900">Jelle Prins</span>
											<a href="https://linkedin.com/in/jelleprins" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</a>
											<a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</a>
										</div>
										<p className="text-gray-700 font-inter leading-relaxed text-sm">
											Medeoprichter van AI-bedrijf Cradle en was verantwoordelijk voor de eerste apps van Uber, Booking.com en Catawiki.
										</p>
									</div>
								</div>

								{/* Renée Frissen */}
								<div className="flex items-start gap-4">
									<img 
										src="/renee.png" 
										alt="Renée Frissen" 
										className="w-16 h-16 rounded-full object-cover flex-shrink-0"
									/>
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-1">
											<span className="font-bold text-gray-900">Renée Frissen</span>
											<a href="https://linkedin.com/in/reneefrissen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</a>
											<a href="https://www.openembassy.nl/en/our-team/renee-frissen/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
													<path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
													<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
												</svg>
											</a>
										</div>
										<p className="text-gray-700 font-inter leading-relaxed text-sm">
											Oprichter en CEO van OpenEmbassy, en medeoprichter van de 10% Club.
										</p>
									</div>
								</div>

								{/* Stan van Baarsen */}
								<div className="flex items-start gap-4">
									<img 
										src="/stan.jpg" 
										alt="Stan van Baarsen" 
										className="w-16 h-16 rounded-full object-cover flex-shrink-0"
									/>
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-1">
											<span className="font-bold text-gray-900">Stan van Baarsen</span>
											<a href="https://linkedin.com/in/stanvanbaarsen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													<circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</a>
											<a href="https://www.stanvanbaarsen.nl" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
												<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
													<path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
													<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
												</svg>
											</a>
										</div>
										<p className="text-gray-700 font-inter leading-relaxed text-sm">
											Masterstudent Technology Policy aan de University of Cambridge.
										</p>
									</div>
								</div>
							</div>

							{/* Separator */}
							<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

							{/* Contributors */}
							<div>
								<h3 className="text-lg font-bold text-gray-900 font-space-grotesk mb-3">
									Met dank aan
								</h3>
								<p className="text-gray-700 font-inter leading-relaxed mb-4">
									Wij hebben uitgebreide inhoudelijke bijdragen en hulp gekregen van onder andere Onno Eric Blom, Durk Kingma, Miles Brundage, Nick Lenten, Peter van Sabben, Rick Lamers, Rick Pastoor, Rogier Klimbie, Salar al Khafaji, Sebastiaan Vaessen, Teddy Collins, Wouter van Noort, Anke Huiskes en Alexander Klöpping.
								</p>
								<p className="text-gray-700 font-inter leading-relaxed">
									En dank aan <a href="https://verveagency.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline transition-colors">Verve</a> voor het ontwerpen van onze huisstijl en branding.
								</p>
							</div>
						</div>
					</div>
				</div>

				<NewsletterCTA />

				{/* Remove Footer */}
			</div>
		</div>
	);
};

export default Index; 