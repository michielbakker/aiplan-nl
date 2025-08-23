import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Nadi = () => {
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
							href="https://aiplan-nl.translate.goog/nadi?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp"
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
							Een Nederlandse DARPA: het einde van ‘doe maar gewoon’
						</h1>
						<div className="text-gray-600 mb-6 space-y-5">
							<p className="text-sm">Door <a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">Jelle Prins</a>, <a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">Michiel Bakker</a>, <a href="https://linkedin.com/in/reneefrissen" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">Renée Frissen</a> en <a href="https://www.stanvanbaarsen.nl" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline transition-colors">Stan van Baarsen</a>.</p>
							<p className="text-sm font-medium">18 augustus 2025</p>
						</div>

						<div className="space-y-6 text-black leading-relaxed">
							<p className="text-base leading-relaxed">
								Nederland heeft een innovatieprobleem dat we niet willen zien. Onze universiteiten staan in de wereldtop, onze onderzoekers publiceren baanbrekende studies, en toch blijven we achter als het gaat om het omzetten van kennis naar wereldveranderende doorbraken.
							</p>

							<p className="text-base leading-relaxed">
								Tegelijkertijd hebben we uitdagingen die alleen opgelost kunnen worden met dergelijke doorbraken. Het stikstofprobleem vraagt om definitieve oplossingen, niet om compromissen. Huizen moeten in weken gebouwd worden, niet in jaren. Ons land moet klimaatbestendig worden voor de volgende eeuw, en een gezonde economie heeft constant innovatie nodig.
							</p>

							<p className="text-base leading-relaxed">
								Het antwoord ligt in een organisatie die Nederland nog niet heeft: een instituut dat bewust "onmogelijke" doorbraken organiseert.
							</p>

							<p className="text-base leading-relaxed">
								Het internet, GPS, touchscreens in je telefoon en het mRNA-vaccin dat miljoenen levens redde, allemaal innovaties van dezelfde Amerikaanse organisatie: DARPA. Minister Karremans (Economische Zaken) kondigde onlangs aan te verkennen hoe Nederland een vergelijkbaar instituut kan oprichten: het Nationaal Agentschap voor Disruptieve Innovatie (NADI). In potentie is dit het meest ambitieuwe Nederlandse R&D-initiatief in decennia!
							</p>

							<p className="text-base leading-relaxed">
								Helaas kan een demissionair Minister alleen een verkenning doen. Het is aan het volgende kabinet om de plannen door te zetten. Laten we vurig hopen dat ze dat doen. Want als we dit goed doen, kunnen we aan de basis staan van doorbraken die de grootste uitdagingen van onze tijd oplossen.
							</p>

							<p className="text-base leading-relaxed">
								Maar, om NADI echt te laten slagen, moeten we bereid zijn een aantal dingen on-Nederlands te doen.
							</p>

							<h2 className="text-2xl font-bold text-black font-space-grotesk mt-8 mb-4">
								Hoe DARPA doorbraken organiseert
							</h2>

							<p className="text-base leading-relaxed">
								DARPA inspireerde al vergelijkbare organisaties in o.a. Duitsland (SPRIND), Engeland (ARIA) en vele andere landen. Zij keken goed naar wat DARPA zo'n succes heeft gemaakt, en dat geheim zit niet in het geld. Het budget van deze organisaties, zoals ARIA met $200 miljoen per jaar en DARPA met $4 miljard per jaar, is bescheiden vergeleken met wat Big Tech uitgeeft (Amazon $88 miljard, Google $49 miljard, Facebook $44 miljard).
							</p>

							<p className="text-base leading-relaxed">
								Het geheim zit in de organisatie: kleine teams met briljante program managers die als 'mini-CEO' voor vijf jaar de vrijheid krijgen om schijnbaar onmogelijke ideeën te realiseren. Geen commissies, eindeloos overleg of bureaucratie, maar een extreem ambitieuze missie, een zak geld, en complete vrijheid.
							</p>

							<p className="text-base leading-relaxed">
								Ze zoeken allemaal naar "big-if-true" ideeën. Projecten die fantastisch zijn als ze lukken, ook al lijken ze nu nog onmogelijk. Ze organiseren o.a. wedstrijden waarbij externe teams worden uitgedaagd met een waanzinnig doel. Bijvoorbeeld het ontwikkelen van een zelfrijdende auto.
							</p>

							<p className="text-base leading-relaxed">
								De eerste etappe was in de woestijn, en de winnaars kregen miljoenen om door te ontwikkelen en een uitdagender parcours aan te gaan. Het resultaat: de denkkracht van individuele topwetenschappers en ingenieurs werd samengebracht voor een gemeenschappelijke missie.
							</p>

							<p className="text-base leading-relaxed">
								Individuele puzzelstukjes zoals geavanceerde sensoren en slimme algoritmen, die anders her en der zouden verstoffen op een plank, werden samengebracht voor een inspirerend product dat liet zien dat sciencefiction geen fictie meer is – Google rijdt al meer dan 1 miljoen taxiritten per maand, zonder chauffeur.
							</p>

							<p className="text-base leading-relaxed">
								Dat is ook het moment dat investeerders geïnteresseerd raken en startups ontstaan. Ze zien een nieuwe 'golf' opkomen, zoals eerder met het internet, de smartphone en AI. Opkomende technologieën of industrieën, waarvan velen overtuigd zijn dat ze de volgende miljardenmarkt vormen.
							</p>

							<p className="text-base leading-relaxed">
								Het doel is dan ook om nieuwe golven te creëren waar anderen op kunnen surfen. Zo investeerde DARPA in totaal 40 miljoen in hun zelfrijdende auto-wedstrijd. Het geld ging naar teams van universiteiten, bedrijven en onderzoeksinstellingen. Kleine teams die later uitgroeiden tot miljarden-bedrijven doordat investeerders er tientallen miljarden in staken. Dat aanzuigeffect waarbij publiek geld een veelvoud aan privaat kapitaal aantrekt, is de heilige graal van innovatiebeleid.
							</p>

							<p className="text-base leading-relaxed">
								Hoe ziet 'big' eruit als het lukt? Met zelfrijdende auto's zijn er geen verkeersdoden meer, gaan transportkosten omlaag en kunnen parkeerplekken vervangen worden door tuintjes en terrasjes. Zeewierboerderijen in Duitsland halen CO2 uit de lucht, en kunnen plastics vervangen. Programmeerbare planten in UK vereisen minder pesticiden en water, en kunnen het voedselprobleem oplossen.
							</p>

							<h2 className="text-2xl font-bold text-black font-space-grotesk mt-8 mb-4">
								Vijf Nederlandse Valkuilen
							</h2>

							<p className="text-base leading-relaxed">
								In het voorstel van minister Karremans blijkt duidelijk dat er al goed naar buitenlandse voorbeelden gekeken is. Er worden ook al kort een aantal eigenschappen waaraan NADI moet voldoen benoemd, zoals de zelfstandigheid van de organisatie en de autonomie van de teams. Mocht er echter een andere minister komen, dan moeten we waken voor typische Nederlandse valkuilen die van NADI een verspilling van publiek geld maken in plaats van een fantastische investering.
							</p>

							<h3 className="text-xl font-bold text-black font-space-grotesk mt-6 mb-3">
								Valkuil 1: Klein denken
							</h3>

							<p className="text-base leading-relaxed">
								Nooit kwam verandering van mensen met een "doe maar gewoon, dan doe je al gek genoeg" houding. De succesvolle projecten bij DARPA, ARIA en SPRIND resulteren niet in een enkel product of bedrijf, maar in een geheel nieuwe industrie. Het leiderschap wordt afgerekend op hoe groot hun ideeën zijn, niet op de haalbaarheid. We moeten extreem ambitieus zijn. De vraag is niet of iets 10% beter kan, maar hoe het 10x beter kan. Klinkt het realistisch? Dan mikken we te laag.
							</p>

							<h3 className="text-xl font-bold text-black font-space-grotesk mt-6 mb-3">
								Valkuil 2: Faal angst & Risico mijden
							</h3>

							<p className="text-base leading-relaxed">
								In Nederland is elk gefaald project een politiek schandaal. We zijn daardoor steeds meer mechanismen gaan uitvinden om risico's te mijden, zeker bij technische projecten. Die duren daardoor langer en zijn kostbaarder, terwijl er technisch zelden echte onzekerheden zijn.
							</p>

							<p className="text-base leading-relaxed">
								Bij de zeer ambitieuze NADI projecten, waarbij veel meer onzekerheden zijn, moet het reflex niet zijn om de risico's in te perken, maar om mislukkingen te omarmen. Een ontploffende raket moet resulteren in luid applaus. Zonder spectaculaire mislukkingen, ook geen spectaculaire successen. DARPA viert mislukkingen, en gaat ervan uit dat 9 van de 10 projecten niet al hun doelstellingen halen. Dat is OK, zolang de projecten maar ambitieus genoeg zijn om toch de wereld te veranderen.
							</p>

							<p className="text-base leading-relaxed">
								Bovendien, als je ambitie hoog genoeg ligt, dan hebben ook gefaalde projecten een grote positieve impact op de industrie door de lessen die worden geleerd. Bij de eerste zelfrijdendeauto-race in de woestijn haalde niemand de finish. En het lukte DARPA nog niet om efficiënt biobrandstoffen op basis van algen te ontwikkelen, maar ze hielpen met dit programma wel het veld vooruit rondom productie van eiwitten voor voeding en nieuwe medicijnen.
							</p>

							<p className="text-base leading-relaxed">
								Om de juiste lessen te leren moet NADI transparant zijn over wat niet werkt. Niet wegmoffelen maar uitleggen: dit probeerden we, daarom faalde het. Maar ook: dit leerde het veld.
							</p>

							<h3 className="text-xl font-bold text-black font-space-grotesk mt-6 mb-3">
								Valkuil 3: Verkeerde leiders
							</h3>

							<p className="text-base leading-relaxed">
								In Nederland staan vaak oud-politici of bankiers aan het roer van publieke organisaties. Laten dit nu net mensen zijn die hun hele carrière hebben geleerd om risico's in te perken. Bovendien hebben ze zelden leiding gegeven aan organisaties die disruptieve technologieën ontwikkelden, en missen ze een fundamentele technische achtergrond.
							</p>

							<p className="text-base leading-relaxed">
								De CEO van ARIA heeft een PhD in Technische Materiaalkunde en heeft meerdere bedrijven opgericht in Silicon Valley. De board bestaat uit top wetenschappers en ondernemers.
							</p>

							<p className="text-base leading-relaxed">
								NADI heeft leiders nodig die technische diepgang combineren met ondernemerservaring en oog voor de publieke zaak. Hoewel er in Nederland vaak wantrouwen lijkt richting ondernemers, leren de buitenlandse voorbeelden dat zij essentieel zijn. Alvast een suggestie die door iedereen omarmd kan worden? Robbert Dijkgraaf. Nu nog een ondernemer er naast.
							</p>

							<h3 className="text-xl font-bold text-black font-space-grotesk mt-6 mb-3">
								Valkuil 4: Consensus zoeken
							</h3>

							<p className="text-base leading-relaxed">
								Een reflex zal zijn om voor elke investering consensus te zoeken. Zorgvuldige afweging van belangen is waardevol, maar niet als er gezocht wordt naar disruptieve ideeën. Deze organisaties zoeken naar ideeën waar sommigen zeer enthousiast over zijn, maar anderen niet, en stimuleren inbreng vanuit vele verschillende hoeken. Als er consensus is dat iets een goed idee is, dan zal de markt het wel oppakken.
							</p>

							<h3 className="text-xl font-bold text-black font-space-grotesk mt-6 mb-3">
								Valkuil 5: Gebrek aan autonomie
							</h3>

							<p className="text-base leading-relaxed">
								Het is lastig om aan een breed publiek uit te leggen dat ons belastinggeld gaat naar ideeën die voor velen klinken als slechte sprookjes. Bovendien falen de meeste projecten. Om de vrijheid te hebben om toch door te zetten, moet de organisatie op zichzelf staan en zo veel mogelijk autonomie hebben.
							</p>

							<p className="text-base leading-relaxed">
								Geen vinger in de pap voor Invest-NL, TNO en elk ministerie. ARIA is zelfs vrijgesteld van de Wet Openbaarheid van Bestuur (WOB) in de UK. Het toezicht is beperkt tot dat wat nodig is om te voorkomen dat belastinggeld verdwijnt.
							</p>

							<h3 className="text-xl font-bold text-black font-space-grotesk mt-6 mb-3">
								Wees niet te calvinistisch
							</h3>

							<p className="text-base leading-relaxed">
								Als we niet in de valkuilen stappen, en we doen het goed, dan moeten we het ook van de daken schreeuwen. Wees niet te calvinistisch. Elk 'big-if-true' project heeft per definitie een fantastisch verhaal: een toekomstvisie die eenieder kan inspireren. Het verhaal vertellen zal het draagvlak vergroten en toptalent aantrekken.
							</p>

							<h2 className="text-2xl font-bold text-black font-space-grotesk mt-8 mb-4">
								Nederland kan dit
							</h2>

							<p className="text-base leading-relaxed">
								Sceptici zullen zeggen dat een dergelijk initiatief gewoon niet bij Nederland past. Maar Nederland kan dit. We hebben de kennis en het geld. We hebben het zelfs al eens gedaan met de deltawerken: bedreigd door het water richtte we een aparte organisatie op en gaven hen een schijnbaar onmogelijke opdracht, én de vrijheid om te innoveren.
							</p>

							<p className="text-base leading-relaxed">
								Het volgende kabinet moet zich realiseren dat innovatie essentieel is voor economische groei. Denk daarbij groot: een toekomst waarin landbouw de natuur versterkt in plaats van uitput, of een land waar energie bijna gratis is. Definieer dergelijke Nederlandse missies die even ambitieus als urgent zijn, en reserveer hiervoor 200 miljoen euro per jaar gedurende de komende 10 jaar. Mogelijk is dit het snelst te realiseren als een nieuwe opzet voor het Nationale Groeifonds, of als eerste investering van één nieuwe Nationale investeringsagenda. <i>Maar zorg dat de opzet anders is dan de andere innovatie en financieringsclubs die we al hebben, met een wezenlijk andere leiding en complete autonomie.</i>
							</p>

							<p className="text-base leading-relaxed">
								Als we dit goed doen, dan wordt weer duidelijk voor Nederlanders waar we, behalve dijken bouwen, 'goed in zijn' en kunnen we een cultuuromslag teweegbrengen waardoor Nederlanders leren groot te denken!
							</p>

							<p className="text-base leading-relaxed italic">
								P.S. Die naam NADI mag wél wat Nederlandser. Wat vinden we van VONDST – Versneller voor Onderzoek naar Nieuwe Doorbraken in Strategische Technologie?
							</p>
						</div>
					</div>

					<AboutUs />
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Nadi;
