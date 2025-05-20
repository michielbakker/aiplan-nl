
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PlanItem from '@/components/PlanItem';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Github } from 'lucide-react';

// Import all plan item markdown content
import item1 from '../../plan-items/item-1.md?raw';
import item2 from '../../plan-items/item-2.md?raw';
import item3 from '../../plan-items/item-3.md?raw';
import item4 from '../../plan-items/item-4.md?raw';
import item5 from '../../plan-items/item-5.md?raw';
import item6 from '../../plan-items/item-6.md?raw';
import item7 from '../../plan-items/item-7.md?raw';
import item8 from '../../plan-items/item-8.md?raw';
import item9 from '../../plan-items/item-9.md?raw';
import item10 from '../../plan-items/item-10.md?raw';

const Index = () => {
  // State for the expanded plan item
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  // Toggle function for expanding/collapsing plan items
  const toggleItem = (itemNumber: number) => {
    if (expandedItem === itemNumber) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemNumber);
    }
  };

  // Collect all imported items in an array
  const itemContents = [
    item1, item2, item3, item4, item5, 
    item6, item7, item8, item9, item10
    // When you add more items, just import them above and add them here
  ];
  
  // Generate plan items dynamically based on the imported content
  const planItems = itemContents.map((content, index) => ({
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
            <a href="https://x.com/bakkermichiel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
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
              Heel lang dachten we dat alleen mensen écht intelligent kunnen zijn. Maar met voldoende rekenkracht en de juiste algoritmes kunnen computers straks alles wat wij kunnen–en waarschijnlijk veel meer. Dit is geen sciencefiction meer. Deze technologische ontwikkeling is ingrijpender dan de komst van de smartphone of het internet. AI (Artificial Intelligence - 'Kunstmatige Intelligentie') wordt razendsnel slimmer, dankzij enorme investeringen en supercomputers.
            </p>
            <p className="mt-4">
              AI zal de komende jaren de geopolitieke en militaire machtsbalans laten kantelen naar de naties die deze technologie beheersen. Amerika en China begrijpen dit als geen ander en investeren massaal in talent, startups en datacenters. Zelfs de Emiraten hebben een minister voor AI en zetten vol in op het bouwen van 'soevereine AI'. Nederland kijkt toe, terwijl anderen bepalen hoe de toekomst eruitziet.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Het is geen toekomstmuziek meer</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Veel mensen zijn nog sceptisch. Zij zien onhandige chatbots die onzin uitkramen of gekke plaatjes maken. "Kan dit écht de wereld veranderen?" vragen ze zich af. Maar zij zien slechts het topje van de ijsberg. Onder het oppervlak raast de vooruitgang in volle vaart door. Elke maand verschijnen nieuwe, krachtigere AI-systemen, die steeds complexere taken autonoom kunnen uitvoeren.
            </p>
            <p className="mt-4">
              In sommige sectoren is de impact al pijnlijk zichtbaar. Neem programmeurs: twee jaar geleden nog sceptisch, nu laten ze AI het grootste deel van hun code schrijven. De wereldwijde vraag naar programmeurs bevindt zich op een dieptepunt, simpelweg omdat bestaande programmeurs met hulp van AI veel productiever zijn geworden. Dit creëert bovendien een vliegwiel: AI helpt programmeurs bij het bouwen van nóg betere AI. Eind vorige maand werd op een AI conferentie een technische innovatie gepresenteerd die volledig door AI was bedacht, getest en opgeschreven en zonder problemen langs de menselijke peer review kwam.
            </p>
            <p className="mt-4">
              Deze overgang van scepticisme naar razendsnelle adoptie – en potentieel vervanging – zullen we in elke industrie gaan zien. Zelfrijdende auto's verzorgen al 20% van de taxiritten in sommige Amerikaanse steden. Farmaceuten gebruiken AI om sneller en goedkoper medicijnen te ontwikkelen. Virtuele collega's worden snel realiteit: razendslim en altijd beschikbaar, alleen niet aanwezig bij de koffieautomaat. Bedrijven hebben geen keus: wie AI niet effectief inzet, verliest het op snelheid, innovatie en kosten.
            </p>
            <p className="mt-4">
              Zelf leven wij met een dubbel gevoel: technisch opent AI ongekende mogelijkheden en maakt het ons eigen werk – als AI onderzoeker en AI ondernemer – interessanter dan ooit. Maar tegelijk zien we hoe snel dit onze samenleving verandert, en hoe slecht we daarop zijn voorbereid.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nederland's positie: van koploper naar achterblijver</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Hoe doet Nederland het in deze race? Om eerlijk te zijn: we lopen achter. Landen als Amerika, China—en in mindere mate het VK en Frankrijk—investeren miljarden in AI. Nederland? Geen plan, geen prioriteit, geen grote investeringen.
            </p>
            <p className="mt-4">
              Vijf jaar geleden stond Nederland nog in de voorhoede. Academisch waren we een internationaal AI-zwaartepunt, Google opende een AI-kantoor in Amsterdam en ASML groeide uit tot een belangrijke speler in AI-chiptechnologie. Het bewijst: Nederland kán een sleutelrol spelen.
            </p>
            <p className="mt-4">
              Maar vandaag de dag gebruiken we vooral Amerikaanse AI-modellen terwijl ons talent wegtrekt. We verliezen controle over een technologie die straks álles raakt—van innovatie tot defensie en dagelijks werk.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">De prijs van niets doen</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Dit verlies aan technologische zelfstandigheid heeft verstrekkende gevolgen. Zonder eigen AI-modellen weten we niet wat ze doen en riskeren we buitensluiting bij geopolitieke spanningen. Soevereiniteitsverlies betekent: geen inzicht in hoe deze systemen werken, geen invloed op hun ontwikkeling en geen zekerheid dat ze in ons belang handelen.
            </p>
            <p className="mt-4">
              Ook onze welvaartsstaat komt in gevaar. Als economische waarde wegvloeit naar buitenlandse techbedrijven die onze 'virtuele werknemers' leveren, dalen onze belastinginkomsten. Ons sociale zekerheidsstelsel kan alleen bestaan met een sterke, zelfstandige economie.
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
              In de twintigste eeuw bouwde Nederland de Deltawerken om ons land te beschermen tegen het water. Geen luxeproject, maar een daad van zelfbescherming—visionair, collectief en onmisbaar. Vandaag staan we opnieuw voor een existentiële dreiging. Niet van water, maar van digitale afhankelijkheid. AI wordt de fundering van economie, defensie, zorg, onderwijs en alle sectoren die ons lief zijn. Als we die systemen niet zelf bouwen en begrijpen, raken we de regie over onze toekomst kwijt.
            </p>
            <p className="mt-4">
              Om deze uitdaging het hoofd te bieden, presenteren wij hieronder een eerste aanzet voor een nationaal AI Deltaplan, bedoeld om de discussie te voeden en tot actie aan te zetten:
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            {planItems.map((item) => (
              <PlanItem
                key={item.number}
                number={item.number}
                title="" // We'll let the component extract the title
                content={item.content}
                isExpanded={expandedItem === item.number}
                toggleExpand={() => toggleItem(item.number)}
              />
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
              Voor Nederland is dit een historisch keuzemoment. Blijven we toekijken en accepteren we technologische afhankelijkheid? Of nemen we, zoals bij de waterdreiging, het heft in eigen hand? De kennis en het kapitaal hebben we—nu moeten we het inzetten.
            </p>
            <p className="mt-4">
              Daarom roepen wij op tot een Nederlandse AI-top, direct na de zomer. Het Verenigd Koninkrijk en Frankrijk organiseerden eerder al succesvolle AI-toppen die hun ambities zichtbaar maakten en versnelden. Maar waar zij kozen voor internationale bijeenkomsten met diplomatieke allure, heeft Nederland behoefte aan iets anders: een nationale top, gericht op het samenbrengen van onze eigen bedrijven, ondernemers, onderzoekers en beleidsmakers. Niet om de wereld te imponeren, maar om in eigen land daadwerkelijk stappen te zetten en AI overal nóg hoger op de agenda te zetten.
            </p>
            <p className="mt-4">
              Zo'n top laat zien dat we de AI-transitie – met al haar kansen en risico's – serieus nemen. Met onze tien aanbevelingen doen we een aanzet voor een concrete agenda. Tijdens de top presenteren overheden hoe zij de aanbevelingen implementeren, terwijl bedrijven uiteenzetten hoe AI hun markt fundamenteel verandert en welke stappen nodig zijn om internationaal competitief te blijven.
            </p>
            <p className="mt-4">
              Het oorspronkelijke Deltaplan werd ook niet zonder slag of stoot aangenomen—er was initiële weerstand tegen de immense kosten en technische complexiteit. Net als nu vroegen sommigen zich af of de dreiging wel zo urgent was. Het vergde visionair leiderschap van mensen als Johan van Veen, die ver vooruit durfden te kijken. Nu staan we opnieuw voor een existentiële uitdaging die om dezelfde Nederlandse vastberadenheid vraagt.
            </p>
          </div>
        </section>
        
        {/* Highlighted contribution section */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50 border border-purple-100">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <Github className="h-8 w-8 text-purple-700 mr-2" />
              <h2 className="text-2xl font-bold text-purple-800">Denk mee over het Deltaplan</h2>
            </div>
            <div className="prose max-w-none text-purple-900">
              <p className="text-center font-medium mb-4">
                Iedereen kan meedoen — alle input wordt serieus genomen.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-purple-800 mb-2">Geef feedback of doe een voorstel</h3>
                  <p className="text-sm">
                    Open een <a href="https://github.com/michielbakker/aiplan-nl/issues" className="text-purple-600 font-medium hover:underline">GitHub Issue</a> en schrijf een korte titel met duidelijke toelichting.
                  </p>
                </div>
                <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-purple-800 mb-2">Reageer op voorstellen</h3>
                  <p className="text-sm">
                    Voeg een comment toe of geef een emoji-reactie: 👍 (upvote), 👎 (downvote), 👀 (volgen), ❤️ / 🎉 (steun)
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/michielbakker/aiplan-nl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Schrijf mee op GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="text-center text-sm text-gray-500 mt-16 pt-8 border-t border-gray-200">
          <p className="mb-2">
            Met dank aan Durk Kingma, Peter van Sabbben, Rick Lamers, Rick Pastoor, Rogier Klimbie, Salar al Khafaji en Sebastiaan Vaessen
          </p>
          <p>
            Schrijf zelf mee via <a href="https://github.com/michielbakker/aiplan-nl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">onze Github</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

