import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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

const Index = () => {
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Nederland klaarmaken voor komst Superintelligentie
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
            Een Deltaplan voor de AI Transitie
          </h2>
          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Michiel Bakker
            </a>
            <span className="text-gray-400">en</span>
            <a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Jelle Prins
            </a>
          </div>
        </header>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">De mondiale AI race</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Heel lang was de gedachte dat alleen mensen écht intelligent kunnen zijn. Maar met voldoende rekenkracht en de juiste algoritmes kunnen computers straks alles wat mensen kunnen – en waarschijnlijk veel meer. Dit is geen sciencefiction. Deze technologische ontwikkeling is ingrijpender dan de komst van de smartphone of het internet. AI (artificial intelligence ofwel kunstmatige intelligentie) wordt razendsnel slimmer, dankzij enorme investeringen en supercomputers.
            </p>
            <p className="mt-4">
              AI zal de komende jaren de geopolitieke en militaire machtsbalans laten kantelen naar de naties die deze technologie beheersen. Amerika en China investeren daarom massaal in talent, startups en datacenters. Zelfs de Emiraten hebben een minister voor AI en zetten vol in op het bouwen van zogeheten 'soevereine AI'. Nederland kijkt toe, terwijl anderen bepalen hoe de toekomst eruitziet.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Het is geen toekomstmuziek meer</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Veel mensen zijn nog sceptisch. Zij zien onhandige chatbots die onzin uitkramen of gekke plaatjes maken. “Kan dit écht de wereld veranderen?" vragen ze zich af. Maar zij zien slechts het topje van de ijsberg. Onder het oppervlak raast de vooruitgang in volle vaart door. Elke maand verschijnen nieuwe, krachtigere AI-systemen, die steeds complexere taken autonoom kunnen uitvoeren.
            </p>
            <p className="mt-4">
              In sommige sectoren is de impact al pijnlijk zichtbaar. Neem programmeurs: twee jaar geleden nog sceptisch, nu laten ze AI het grootste deel van hun code schrijven. De wereldwijde vraag naar programmeurs bevindt zich op een dieptepunt, simpelweg omdat bestaande programmeurs met hulp van AI veel productiever zijn geworden.
            </p>
            <p className="mt-4">
              Dit creëert bovendien een vliegwiel: AI helpt programmeurs bij het bouwen van nóg betere AI. Eind vorige maand werd op een AI conferentie een technische innovatie gepresenteerd die volledig door AI was bedacht, getest en opgeschreven en zonder problemen langs de menselijke peer-review kwam.
            </p>
            <p className="mt-4">
              Deze overgang van scepticisme naar razendsnelle adoptie – en potentieel vervanging – zullen we in elke industrie gaan zien. Zelfrijdende auto’s verzorgen al 20 procent van de taxiritten in sommige Amerikaanse steden. Farmaceuten gebruiken AI om sneller en goedkoper medicijnen te ontwikkelen. Virtuele collega’s worden snel een realiteit: razend slim en altijd beschikbaar, alleen niet aanwezig bij de koffieautomaat. Bedrijven hebben geen keus: wie AI niet effectief inzet, verliest het op snelheid, innovatie en kosten.
            </p>
            <p className="mt-4">
              Dit geeft ons een dubbel gevoel: technisch opent AI ongekende mogelijkheden en maakt het ons eigen werk – als AI onderzoeker en AI ondernemer – interessanter dan ooit. Maar tegelijk zien we hoe snel dit onze samenleving verandert, en hoe slecht we daarop zijn voorbereid.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nederland's positie: van koploper naar achterblijver</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Hoe doet Nederland het in deze race? Om eerlijk te zijn: we lopen achter. Landen als Amerika, China – en in mindere mate het VK en Frankrijk – investeren miljarden in AI. Nederland? Geen plan, geen prioriteit, geen grote investeringen.
            </p>
            <p className="mt-4">
              Vijf jaar geleden stond Nederland nog in de voorhoede. Academisch waren we een internationaal AI-zwaartepunt, Google opende een AI-kantoor in Amsterdam en ASML groeide uit tot een belangrijke speler in AI-chiptechnologie. Het bewijst: Nederland kán een sleutelrol spelen.            </p>
            <p className="mt-4">
              Maar vandaag de dag gebruiken we vooral Amerikaanse AI-modellen terwijl ons talent wegtrekt. We verliezen controle over een technologie die straks álles raakt – van innovatie tot defensie en dagelijks werk.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">De prijs van niets doen</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Dit verlies aan technologische zelfstandigheid heeft verstrekkende gevolgen. Zonder eigen AI-modellen weten we niet precies hoe de technologie écht werkt en riskeren we buitensluiting bij geopolitieke spanningen. Soevereiniteitsverlies betekent: geen invloed op hun ontwikkeling en geen zekerheid dat ze in ons belang handelen.
            </p>
            <p className="mt-4">
              Ook onze welvaartsstaat komt in gevaar. Als economische waarde wegvloeit naar buitenlandse techbedrijven die onze ‘virtuele werknemers’ leveren, dalen onze belastinginkomsten. Ons sociale zekerheidsstelsel kan alleen bestaan met een sterke, zelfstandige economie.
            </p>
            <p className="mt-4">
              De keuze is helder: nu investeren in onze AI-toekomst, of eindigen als openluchtmuseum voor rijke Chinese en Amerikaanse toeristen.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Een nieuw Deltaplan voor AI</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              In de twintigste eeuw bouwde Nederland de Deltawerken om ons land te beschermen tegen het water. Geen luxeproject, maar een daad van zelfbescherming – visionair, collectief en onmisbaar. Vandaag staan we opnieuw voor een existentiële dreiging. Niet van water, maar van digitale afhankelijkheid. AI wordt de fundering van economie, defensie, zorg, onderwijs en alles wat onze samenleving draaiende houdt. Als we die systemen niet zelf bouwen en begrijpen, raken we de regie over onze toekomst kwijt.
            </p>
            <p className="mt-4">
              Om deze uitdaging het hoofd te bieden, presenteren wij een eerste aanzet voor een nationaal AI Deltaplan, bedoeld om de discussie te voeden en tot actie aan te zetten:
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            {planItems.map((item) => (
              <Card key={item.number} className="overflow-hidden">
                <Link to={`/plan/${item.number}`} className="block p-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white mr-3 shrink-0">
                      {item.number}
                    </div>
                    <div className="prose max-w-none">
                      <ReactMarkdown components={{
                        h3: ({ node, ...props }) => {
                          return <h3 className="text-lg font-semibold" {...props} />;
                        },
                      }}>
                        {item.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Een Nederlandse AI top</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              AI-modellen zijn nu al krachtig genoeg om de komende jaren ons leven ingrijpend te veranderen – dat staat vast. Velen denken bovendien dat we nog maar een paar jaar verwijderd zijn van het moment waarop AI zichzelf begint te verbeteren: een kettingreactie die, eenmaal begonnen, niet meer te stoppen is.
            </p>
            <p className="mt-4">
              Voor Nederland is dit een historisch keuzemoment. Blijven we toekijken en accepteren we technologische afhankelijkheid? Of nemen we, zoals bij de waterdreiging, het heft in eigen hand? De kennis en het kapitaal hebben we – nu moeten we die inzetten.
            </p>
            <p className="mt-4">
              Daarom roepen wij op tot een Nederlandse AI-top, direct na de zomer. Het Verenigd Koninkrijk en Frankrijk organiseerden eerder al succesvolle AI-toppen die hun ambities zichtbaar maakten en versnelden. Maar waar zij kozen voor internationale bijeenkomsten met diplomatieke allure, heeft Nederland behoefte aan iets anders: een nationale top, gericht op het samenbrengen van onze eigen bedrijven, ondernemers, onderzoekers en beleidsmakers. Niet om de wereld te imponeren, maar om binnen ons eigen land daadwerkelijk stappen te zetten en AI overal nóg hoger op de agenda te zetten.
            </p>
            <p className="mt-4">
              Zo’n top laat zien dat we de AI-transitie – met al haar kansen en risico’s – serieus nemen. Met onze tien aanbevelingen doen we een aanzet voor een concrete agenda. Tijdens de top presenteert de overheid de invulling van haar rol in de AI-transitie, terwijl bedrijven uiteenzetten hoe AI hun markt fundamenteel verandert en welke stappen nodig zijn om internationaal competitief te blijven.
            </p>
            <p className="mt-4">
              Het oorspronkelijke Deltaplan van 1955 werd ook niet zonder slag of stoot aangenomen – er was initiële weerstand tegen de immense kosten en technische complexiteit. Net als nu vroegen sommigen zich af of de dreiging wel zo urgent was. Het vergde visionair leiderschap van mensen als Johan van Veen, die ver vooruit durfden te kijken. Nu staan we opnieuw voor een existentiële uitdaging die om dezelfde Nederlandse vastberadenheid vraagt.
            </p>
          </div>
        </section>
        
        {/* Prominent contribution box */}
        <div className="my-10 rounded-lg overflow-hidden shadow-md bg-gray-100">
          <div className="p-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-gray-800">Schrijf zelf mee via onze Github</h3>
              <Button 
                asChild
                size="default"
                variant="default" 
                className="whitespace-nowrap font-medium"
              >
                <a href="https://github.com/michielbakker/aiplan-nl" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2" size={18} />
                  Naar Github
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Newsletter sign-up highlight */}
        <div className="my-10 rounded-lg overflow-hidden shadow-md bg-blue-50">
          <div className="p-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-gray-800">Wil je op een andere manier bijdrage of op de hoogte blijven?</h3>
              <Button 
                asChild
                size="default"
                variant="default" 
                className="whitespace-nowrap font-medium bg-blue-600 hover:bg-blue-700"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnUR6k6OR3ToKp3DgSLfWzerepExXClIIiImqXKrTfskkpug/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2" size={18} />
                  Laat je email achter
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <footer className="text-center text-sm text-gray-500 mt-6 pt-8 border-t border-gray-200">
          <p className="mb-2">
            Met dank aan Durk Kingma, Miles Brundage, Peter van Sabben, Rick Lamers, Rick Pastoor, Rogier Klimbie, Salar al Khafaji, Sebastiaan Vaessen en Teddy Collins
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
