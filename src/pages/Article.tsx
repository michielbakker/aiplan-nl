import Header from '@/components/Header';
import SignatoriesList from '@/components/SignatoriesList';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Article = () => {
	return (
		<div className="bg-[#F8F9FA] min-h-screen">
			<div className="max-w-3xl mx-auto px-6 lg:px-8 py-4">
				<Header>
					<Button
						asChild
						variant="ghost"
						className="gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 font-inter text-sm border border-gray-200 hover:border-gray-300"
					>
						<a
							href="https://aiplan-nl.translate.goog/openbrief?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp"
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

				<div className="space-y-12">
					<div className="md:bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200/50 md:p-8">
						<h1 className="text-3xl md:text-4xl font-bold mb-4 text-black font-space-grotesk leading-tight">
							AI vraagt om politieke keuzes – nu
						</h1>
						<div className="text-gray-600 mb-6 space-y-5">
							<p className="text-sm">Door <a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">Jelle Prins</a>, <a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">Michiel Bakker</a>, <a href="https://linkedin.com/in/reneefrissen" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">Renée Frissen</a> en <a href="https://www.stanvanbaarsen.nl" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">Stan van Baarsen</a>. Eerder verschenen in <a href="https://www.volkskrant.nl/columns-opinie/opinie-voorkom-dat-nederland-een-digitale-kolonie-wordt-en-investeer-meer-in-ai~bcdaf33a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">de Volkskrant</a>.</p>
							<p className="text-sm font-medium">8 juli 2025</p>
						</div>

						<div className="space-y-6 text-black leading-relaxed">
							<p className="font-bold text-lg leading-relaxed">
								Niet eerder stond de wereld zo duidelijk aan de vooravond van een technologische transformatie die al onze waarden zo op de proef kan stellen als AI. Deze technologie bepaalt wie de komende decennia economisch en geopolitiek leiderschap heeft. Het bepaalt of we onze democratische waarden kunnen waarborgen of afhankelijk worden van systemen die anderen voor ons bouwen. Nu de laatste hand wordt gelegd aan de partijprogramma's, dringt een brede coalitie van experts er bij onze politieke leiders op aan: maak AI tot topprioriteit, of accepteer dat Nederland een digitale kolonie wordt.
							</p>

							<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

							<p className="text-base leading-relaxed">
								AI ontwikkelt zich razendsnel tot de motor achter economische groei en geopolitieke invloed. <a href="https://www.rand.org/pubs/perspectives/PEA4012-1.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">China investeert vele miljarden in AI-infrastructuur en energievoorzieningen</a>. De VS domineert met bedrijven als OpenAI en Google. Frankrijk heeft een AI-minister en trekt toptalent met <a href="https://www.reuters.com/technology/artificial-intelligence/france-invest-109-billion-euros-ai-macron-announces-2025-02-09/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">miljardenfondsen</a>. <a href="https://www.volkskrant.nl/tech/nederland-slaat-zelfs-binnen-europa-een-modderfiguur-wat-ai-rekenkracht-betreft~bf21ff5b/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">Nederland blijft achter</a>. Geen visie, geen structurele investeringen, geen ambitieuze projecten die het toptalent een uitdaging bieden. Het resultaat: <a href="https://www.prosus.com/~/media/Files/P/prosus-corp-v2/documents/prosus-publishes-new-research-report-on-dutch-state-of-ai-with-dealroom-co-and-techleap.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">veel van onze beste AI-onderzoekers gaan voor buitenlandse bedrijven werken</a> en onze vitale sectoren worden afhankelijk van buitenlandse AI-systemen.
							</p>

							<p className="text-base leading-relaxed">
								Dit vraagt om politiek leiderschap dat begrijpt dat technologische afhankelijkheid betekent dat anderen bepalen hoe onze samenleving eruitziet. Doen we niets, dan ontstaat er een onomkeerbare afhankelijkheid in vitale sectoren – van zorg en onderwijs tot defensie – en in de topsectoren die bepalend zijn voor onze economie.
							</p>

							<p className="text-base leading-relaxed">
								Maar dit is niet alleen een waarschuwing – het is vooral een kans. Nederland heeft unieke troeven: sterke kennisinstellingen, een bloeiend startupklimaat, en met ASML een sleutelpositie in de mondiale AI-waardeketen. Bovendien kunnen sectoren waar we niet afhankelijk willen zijn van buitenlandse AI – van defensie tot gezondheidszorg – als vliegwiel dienen voor eigen innovatie. <a href="https://www.volkskrant.nl/kijkverder/v/2025/ai-startup-nederland-kunstmatige-intelligentie~v1497699/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">Zeker als we gaan voor sectoren waar we al excelleren</a>. Juist daar liggen de ambitieuze uitdagingen die internationaal toptalent aantrekken. Denk aan AI voor cybersecurity die onze vitale infrastructuur beschermt tegen buitenlandse inmenging. Aan AI die onze landbouw klimaatneutraal maakt. Of aan slimme, empathische digitale assistenten in de zorg die ouderen helpen langer zelfstandig te blijven. Dit zijn de uitdagingen waar de beste AI-onderzoekers ter wereld aan willen werken.
							</p>

							<p className="text-base leading-relaxed">
								<a href="https://www.rathenau.nl/nl/berichten-aan-het-parlement/ai-en-democratie" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">AI bepaalt straks niet alleen onze economie, maar ook onze democratische processen</a>. Zonder eigen systemen dicteren anderen de spelregels. Nederland kan het voortouw nemen in een Europese AI-kopgroep die innoveert én onze vrijheden beschermt. Dat vraagt om een publieke AI-infrastructuur: transparante algoritmes, open broncode voor kritieke toepassingen, en taalmodellen die onze waarden weerspiegelen. En het vraagt om investeren in AI-geletterdheid voor alle Nederlanders. Met heldere regels en open standaarden creëren we ruimte voor nieuwe spelers én democratische controle over technologie die straks overal is.
							</p>

							<p className="text-base leading-relaxed">
								Daarvoor zijn gerichte politieke keuzes nodig. Denk aan een Minister voor Digitale Zaken, en een staatssecretaris voor AI. Of beter nog: verschillende staatssecretarissen voor concrete inhoudelijke opdrachten waar AI een sleutelrol in moet vervullen, zoals defensie of gezondheidszorg. <a href="https://www.volkskrant.nl/binnenland/groningen-ziet-in-eigen-ai-fabriek-een-unieke-kans-op-een-nieuw-begin~b56323092/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">Een AI Gigafabriek om de benodigde rekenkracht te verschaffen, met bijbehorende investeringen in hernieuwbare energie</a>. Investeringen in en het door de overheid afnemen van grootschalige AI-innovaties op het gebied van klimaat, gezondheid en veiligheid die toptalent uit de hele wereld aantrekken. Een visum-fastlane voor ondernemend en wetenschappelijk toptalent, en een actieve lobby om onderzoeksteams naar Nederland te halen. Een krachtig investeringsfonds met een AI-first visie. Een gezonde wederzijdse relatie met de techbedrijven die kritieke technologie leveren. De overheid niet alleen als investeerder, maar als betrouwbare afnemer van kritieke AI technologie dankzij daadkrachtige industriepolitiek. En het als Nederland actiever benutten van Europees kapitaal dat al beschikbaar is.
							</p>

							<p className="text-base leading-relaxed font-medium">
								De AI-transitie is onomkeerbaar. Als we nu geen richting geven, worden we geleid – door anderen, met andere belangen. <a href="https://www.rijksoverheid.nl/actueel/nieuws/2025/06/27/nederland-zet-in-op-200-miljoen-euro-voor-aifabriek-in-groningen" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">Demissionair minister Karremans van Economische Zaken verwoordt het scherp</a>: "AI gaat onze economie en samenleving fundamenteel veranderen. Maar wie de techniek niet zelf ontwikkelt, is afhankelijk van anderen. Daarom zetten we vol in op een sterke, Nederlandse AI-infrastructuur." Wie kiest voor een ambitieus AI-klimaat, moet snel handelen én investeren. Wij hopen dat politieke partijen dit voorbeeld volgen en dit cruciale moment benutten om samen de koers voor Nederland uit te zetten.
							</p>
						</div>
					</div>

					<div className="mt-12 bg-gradient-to-r from-[#FF3333]/5 to-[#FF3333]/10 rounded-xl border border-[#FF3333]/20 px-8 py-6 text-center">
						<div className="max-w-lg mx-auto space-y-6">
							<div className="w-16 h-16 bg-[#FF3333]/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#FF3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<h2 className="text-2xl font-bold text-black font-space-grotesk">
								Steun deze oproep
							</h2>
							<p className="text-gray-700 text-base leading-relaxed">
								Voeg je stem toe aan onze coalitie van experts die dringt op politieke actie voor AI.
							</p>
							<Button
								asChild
								className="gap-2 px-8 py-4 rounded-lg text-white bg-[#FF3333] hover:bg-[#d92020] font-inter text-base font-medium shadow-lg"
							>
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSfhnurJFD4Ih2p12JYviasYNMm8JCbSvmMH-B0NhAji-GOtkQ/viewform"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2"
								>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									Onderteken de oproep
								</a>
							</Button>
						</div>
					</div>

					<div className="bg-white rounded-lg border border-gray-200/50 p-8 shadow-sm">
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
										className="flex items-center gap-2"
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
							</div>
						</div>
					</div>

					<div className="md:bg-white md:rounded-lg md:border md:border-gray-200/50 md:p-8 md:shadow-sm">
						<SignatoriesList />
					</div>

					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Article;
