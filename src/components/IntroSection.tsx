
import React from 'react';

interface IntroSectionProps {
  title: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ title }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="prose max-w-none text-gray-700">
        {title === "De mondiale AI race" && (
          <>
            <p>
              Heel lang was de gedachte dat alleen mensen écht intelligent kunnen zijn. Maar met voldoende rekenkracht en de juiste algoritmes kunnen computers straks alles wat mensen kunnen – en waarschijnlijk veel meer. Dit is geen sciencefiction. Deze technologische ontwikkeling is ingrijpender dan de komst van de smartphone of het internet. AI (artificial intelligence ofwel kunstmatige intelligentie) wordt razendsnel slimmer, dankzij enorme investeringen en supercomputers.
            </p>
            <p className="mt-4">
              AI zal de komende jaren de geopolitieke en militaire machtsbalans laten kantelen naar de naties die deze technologie beheersen. Amerika en China investeren daarom massaal in talent, startups en datacenters. Zelfs de Emiraten hebben een minister voor AI en zetten vol in op het bouwen van zogeheten 'soevereine AI'. Nederland kijkt toe, terwijl anderen bepalen hoe de toekomst eruitziet.
            </p>
          </>
        )}
        
        {title === "Het is geen toekomstmuziek meer" && (
          <>
            <p>
              Veel mensen zijn nog sceptisch. Zij zien onhandige chatbots die onzin uitkramen of gekke plaatjes maken. "Kan dit écht de wereld veranderen?" vragen ze zich af. Maar zij zien slechts het topje van de ijsberg. Onder het oppervlak raast de vooruitgang in volle vaart door. Elke maand verschijnen nieuwe, krachtigere AI-systemen, die steeds complexere taken autonoom kunnen uitvoeren.
            </p>
            <p className="mt-4">
              In sommige sectoren is de impact al pijnlijk zichtbaar. Neem programmeurs: twee jaar geleden nog sceptisch, nu laten ze AI het grootste deel van hun code schrijven. De wereldwijde vraag naar programmeurs bevindt zich op een dieptepunt, simpelweg omdat bestaande programmeurs met hulp van AI veel productiever zijn geworden.
            </p>
            <p className="mt-4">
              Dit creëert bovendien een vliegwiel: AI helpt programmeurs bij het bouwen van nóg betere AI. Eind vorige maand werd op een AI conferentie een technische innovatie gepresenteerd die volledig door AI was bedacht, getest en opgeschreven en zonder problemen langs de menselijke peer-review kwam.
            </p>
            <p className="mt-4">
              Deze overgang van scepticisme naar razendsnelle adoptie – en potentieel vervanging – zullen we in elke industrie gaan zien. Zelfrijdende auto's verzorgen al 20 procent van de taxiritten in sommige Amerikaanse steden. Farmaceuten gebruiken AI om sneller en goedkoper medicijnen te ontwikkelen. Virtuele collega's worden snel een realiteit: razend slim en altijd beschikbaar, alleen niet aanwezig bij de koffieautomaat. Bedrijven hebben geen keus: wie AI niet effectief inzet, verliest het op snelheid, innovatie en kosten.
            </p>
            <p className="mt-4">
              Dit geeft ons een dubbel gevoel: technisch opent AI ongekende mogelijkheden en maakt het ons eigen werk – als AI onderzoeker en AI ondernemer – interessanter dan ooit. Maar tegelijk zien we hoe snel dit onze samenleving verandert, en hoe slecht we daarop zijn voorbereid.
            </p>
          </>
        )}
        
        {title === "Nederland's positie: van koploper naar achterblijver" && (
          <>
            <p>
              Hoe doet Nederland het in deze race? Om eerlijk te zijn: we lopen achter. Landen als Amerika, China – en in mindere mate het VK en Frankrijk – investeren miljarden in AI. Nederland? Geen plan, geen prioriteit, geen grote investeringen.
            </p>
            <p className="mt-4">
              Vijf jaar geleden stond Nederland nog in de voorhoede. Academisch waren we een internationaal AI-zwaartepunt, Google opende een AI-kantoor in Amsterdam en ASML groeide uit tot een belangrijke speler in AI-chiptechnologie. Het bewijst: Nederland kán een sleutelrol spelen.            </p>
            <p className="mt-4">
              Maar vandaag de dag gebruiken we vooral Amerikaanse AI-modellen terwijl ons talent wegtrekt. We verliezen controle over een technologie die straks álles raakt – van innovatie tot defensie en dagelijks werk.
            </p>
          </>
        )}
        
        {title === "De prijs van niets doen" && (
          <>
            <p>
              Dit verlies aan technologische zelfstandigheid heeft verstrekkende gevolgen. Zonder eigen AI-modellen weten we niet precies hoe de technologie écht werkt en riskeren we buitensluiting bij geopolitieke spanningen. Soevereiniteitsverlies betekent: geen invloed op hun ontwikkeling en geen zekerheid dat ze in ons belang handelen.
            </p>
            <p className="mt-4">
              Ook onze welvaartsstaat komt in gevaar. Als economische waarde wegvloeit naar buitenlandse techbedrijven die onze 'virtuele werknemers' leveren, dalen onze belastinginkomsten. Ons sociale zekerheidsstelsel kan alleen bestaan met een sterke, zelfstandige economie.
            </p>
            <p className="mt-4">
              De keuze is helder: nu investeren in onze AI-toekomst, of eindigen als openluchtmuseum voor rijke Chinese en Amerikaanse toeristen.
            </p>
          </>
        )}
        
        {title === "Een nieuw Deltaplan voor AI" && (
          <p>
            In de twintigste eeuw bouwde Nederland de Deltawerken om ons land te beschermen tegen het water. Geen luxeproject, maar een daad van zelfbescherming – visionair, collectief en onmisbaar. Vandaag staan we opnieuw voor een existentiële dreiging. Niet van water, maar van digitale afhankelijkheid. AI wordt de fundering van economie, defensie, zorg, onderwijs en alles wat onze samenleving draaiende houdt. Als we die systemen niet zelf bouwen en begrijpen, raken we de regie over onze toekomst kwijt.
          </p>
        )}
        
        {title === "Een Nederlandse AI top" && (
          <>
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
              Zo'n top laat zien dat we de AI-transitie – met al haar kansen en risico's – serieus nemen. Met onze tien aanbevelingen doen we een aanzet voor een concrete agenda. Tijdens de top presenteert de overheid de invulling van haar rol in de AI-transitie, terwijl bedrijven uiteenzetten hoe AI hun markt fundamenteel verandert en welke stappen nodig zijn om internationaal competitief te blijven.
            </p>
            <p className="mt-4">
              Het oorspronkelijke Deltaplan van 1955 werd ook niet zonder slag of stoot aangenomen – er was initiële weerstand tegen de immense kosten en technische complexiteit. Net als nu vroegen sommigen zich af of de dreiging wel zo urgent was. Het vergde visionair leiderschap van mensen als Johan van Veen, die ver vooruit durfden te kijken. Nu staan we opnieuw voor een existentiële uitdaging die om dezelfde Nederlandse vastberadenheid vraagt.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default IntroSection;
