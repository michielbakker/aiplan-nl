import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const Opinie = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EDE9F4' }}>
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-8">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ChevronLeft size={16} />
            <span>Terug naar hoofdpagina</span>
          </Button>
        </Link>
        
        <div className="px-16 py-12 max-md:px-8" style={{ backgroundColor: '#101E59' }}>
          <div className="prose max-w-none text-white font-inter">
            <h1 className="text-3xl font-bold mb-8 text-white font-space-grotesk">
              AI vraagt om politieke keuzes – nu
            </h1>
            
            <div className="space-y-6 text-white leading-relaxed">
              <p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinie;