import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import SignatoriesList from '@/components/SignatoriesList';
import { Button } from '@/components/ui/button';

const Index = () => {
	return (
		<div className="min-h-screen bg-[#F8F9FA]">
			<div className="max-w-3xl mx-auto">
				<Header>
					<Button
						asChild
						className="gap-2 pl-4 pr-4 rounded-none text-gray-900 bg-transparent hover:bg-black/5 transition-colors duration-200 font-inter text-sm"
					>
						<a
							href="/plan"
							className="flex items-center gap-2"
						>
							Zie ons Deltaplan
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>
					</Button>
				</Header>

				<div className="px-4 sm:px-6 lg:px-8 py-4">
					<div className="space-y-8">
						<div>
							<h1 className="text-3xl font-bold mb-4 text-black font-space-grotesk">
								AI vraagt om politieke keuzes – nu
							</h1>
							<div className="text-gray-600 mb-8">
								<p className="mb-1">Door Renée Frissen, Jelle Prins, Michiel Bakker en Stan van Baarsen</p>
								<p>1 juli 2025</p>
							</div>
						</div>

						<div className="space-y-6 text-black leading-relaxed">
							<p className="font-bold">
								Niet eerder stond de wereld zo duidelijk aan de vooravond van een technologische transformatie die al onze waarden zo op de proef kan stellen als AI. Deze technologie bepaalt wie de komende decennia economisch en geopolitiek leiderschap heeft. Het bepaalt of we onze democratische waarden kunnen waarborgen of afhankelijk worden van systemen die anderen voor ons bouwen. Nu de laatste hand wordt gelegd aan de partijprogramma's, dringt een brede coalitie van experts er bij onze politieke leiders op aan: maak AI tot topprioriteit, of accepteer dat Nederland een digitale kolonie wordt.
							</p>

							<p>
								AI ontwikkelt zich razendsnel tot de motor achter economische groei en geopolitieke invloed. China investeert vele miljarden in AI-infrastructuur en energievoorzieningen. De VS domineert met bedrijven als OpenAI en Google. Frankrijk heeft een AI-minister en trekt toptalent met miljardenfondsen. Nederland blijft achter. Geen visie, geen structurele investeringen, geen ambitieuze projecten die het toptalent een uitdaging bieden. Het resultaat: veel van onze beste AI-onderzoekers gaan voor Amerikaanse bedrijven werken en onze vitale sectoren worden afhankelijk van buitenlandse AI-systemen.
							</p>

							<p>
								Dit vraagt om politiek leiderschap dat begrijpt dat technologische afhankelijkheid betekent dat anderen bepalen hoe onze samenleving eruitziet. Doen we niets, dan ontstaat er een onomkeerbare afhankelijkheid in vitale sectoren – van zorg en onderwijs tot defensie – en in de topsectoren die bepalend zijn voor onze economie.
							</p>

							<p>
								Maar dit is niet alleen een waarschuwing – het is vooral een kans. Nederland heeft unieke troeven: sterke kennisinstellingen, een bloeiend startupklimaat, en met ASML een sleutelpositie in de mondiale AI-waardeketen. Bovendien kunnen sectoren waar we niet afhankelijk willen zijn van buitenlandse AI – van defensie tot gezondheidszorg – als vliegwiel dienen voor eigen innovatie. Juist daar liggen de ambitieuze uitdagingen die internationaal toptalent aantrekken. Denk aan AI voor cybersecurity die onze vitale infrastructuur beschermt tegen buitenlandse inmenging. Aan AI die onze landbouw klimaatneutraal maakt. Of aan slimme, empathische digitale assistenten in de zorg die ouderen helpen langer zelfstandig te blijven. Dit zijn de uitdagingen waar de beste AI-onderzoekers ter wereld aan willen werken.
							</p>

							<p>
								AI bepaalt straks niet alleen onze economie, maar ook onze democratische processen. Zonder eigen systemen dicteren anderen de spelregels. Nederland kan het voortouw nemen in een Europese AI-kopgroep die innoveert én onze vrijheden beschermt. Dat vraagt om een publieke AI-infrastructuur: transparante algoritmes, open broncode voor kritieke toepassingen, en taalmodellen die onze waarden weerspiegelen. Met heldere regels en open standaarden creëren we ruimte voor nieuwe spelers én democratische controle over technologie die straks overal is.
							</p>

							<p>
								Daarvoor zijn gerichte politieke keuzes nodig. Denk aan een Minister voor Digitale Zaken, en een staatssecretaris voor AI. Een AI Gigafabriek om de benodigde rekenkracht te verschaffen, met bijbehorende investeringen in hernieuwbare energie. Investeringen in en het door de overheid afnemen van grootschalige AI-innovaties op het gebied van klimaat, gezondheid en veiligheid die toptalent uit de hele wereld aantrekken. Een visum-fastlane voor ondernemend en wetenschappelijk toptalent, en een actieve lobby om onderzoeksteams naar Nederland te halen. Een krachtig investeringsfonds met een AI-first visie. Een gezonde wederzijdse relatie met de techbedrijven die kritieke technologie leveren. De overheid niet alleen als investeerder, maar als betrouwbare afnemer van kritieke AI technologie dankzij daadkrachtige industriepolitiek. En het als Nederland actiever benutten van Europees kapitaal dat al beschikbaar is.
							</p>

							<p>
								De AI-transitie is onomkeerbaar. Als we nu geen richting geven, worden we geleid – door anderen, met andere belangen. Demissionair minister Karremans van Economische Zaken verwoordt het scherp: "AI gaat onze economie en samenleving fundamenteel veranderen. Maar wie de techniek niet zelf ontwikkelt, is afhankelijk van anderen. Daarom zetten we vol in op een sterke, Nederlandse AI-infrastructuur." Wie kiest voor een ambitieus AI-klimaat, moet snel handelen én investeren. Wij hopen dat politieke partijen dit voorbeeld volgen en dit cruciale moment benutten om samen de koers voor Nederland uit te zetten.
							</p>
						</div>

						<div className="flex justify-center my-8">
							<Button
								asChild
								className="gap-2 px-6 py-3 rounded-md text-white bg-[#FF3333] hover:bg-[#cc1a1a] transition-colors duration-200 font-inter text-base font-medium"
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

						<div className="mt-12 pt-8 border-t border-gray-300">
							<p className="mb-6">
								Meer weten over dit initiatief? Lees <Link to="/plan" className="text-[#315FD8] hover:text-[#1e3a8a] underline">ons tien-punten AI Deltaplan.</Link>
							</p>

							<div>
								<h3 className="font-bold mb-4 text-lg">Ondertekenaars:</h3>
								<SignatoriesList />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
