import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

type SectionKey = 'globalRace' | 'noLongerFuture' | 'dutchPosition' | 'priceOfInaction' | 'dutchSummit';

interface IntroSectionProps {
  section: SectionKey;
}

const content: Record<SectionKey, { title: { nl: string; en: string }; paragraphs: { nl: string[]; en: string[] } }> = {
  globalRace: {
    title: { nl: 'De mondiale AI race', en: 'The global AI race' },
    paragraphs: {
      nl: [
        'Heel lang was de gedachte dat alleen mensen écht intelligent konden zijn. Maar met voldoende rekenkracht en de juiste algoritmes kunnen computers straks alles wat mensen kunnen – en waarschijnlijk veel meer. Dit is geen sciencefiction. Deze technologische ontwikkeling is ingrijpender dan de komst van de smartphone of het internet. AI wordt razendsnel slimmer, dankzij enorme investeringen en supercomputers.',
        'AI zal de komende jaren de geopolitieke en militaire machtsbalans laten kantelen naar de naties die deze technologie beheersen. Amerika en China investeren daarom massaal in talent, startups en datacenters. Zelfs de Emiraten hebben een minister voor AI en zetten vol in op het bouwen van zogeheten "soevereine AI". Nederland kijkt toe, terwijl anderen bepalen hoe de toekomst eruitziet.'
      ],
      en: [
        'For a long time we believed that only humans could truly be intelligent. But with enough computing power and the right algorithms, computers will soon do everything humans can – and probably much more. This is not science fiction. This shift is more profound than the arrival of the smartphone or the internet. AI is becoming smarter at breakneck speed thanks to huge investments and supercomputers.',
        'In the coming years AI will tilt the geopolitical and military balance toward the nations that control it. The US and China therefore pour money into talent, startups and datacenters. Even the Emirates have a minister for AI and are building so-called "sovereign AI". The Netherlands mostly watches while others shape the future.'
      ]
    }
  },
  noLongerFuture: {
    title: { nl: 'Het is geen toekomstmuziek meer', en: "It's no longer science fiction" },
    paragraphs: {
      nl: [
        'Veel mensen zijn nog sceptisch. Zij zien onhandige chatbots die onzin uitkramen of gekke plaatjes maken. "Kan dit écht de wereld veranderen?" vragen ze zich af. Maar zij zien slechts het topje van de ijsberg. Onder het oppervlak raast de vooruitgang in volle vaart door.',
        'In sommige sectoren is de impact al pijnlijk zichtbaar. Programmeurs laten AI inmiddels het grootste deel van hun code schrijven en andere industrieën volgen snel.',
        'Dit creëert bovendien een vliegwiel: AI helpt programmeurs bij het bouwen van nóg betere AI. Deze overgang van scepticisme naar razendsnelle adoptie zullen we in elke industrie zien.',
        'Dit geeft ons een dubbel gevoel: technisch opent AI ongekende mogelijkheden, maar tegelijk verandert het onze samenleving razendsnel.'
      ],
      en: [
        'Many people remain sceptical, seeing clumsy chatbots or strange images. They only witness the tip of the iceberg while progress races on beneath the surface.',
        'Some sectors already feel the impact. Programmers now let AI write most of their code and other industries will soon follow.',
        'This creates a flywheel where AI helps build even better AI. We will see this shift from scepticism to rapid adoption—perhaps even replacement—in every industry.',
        'It leaves us with mixed feelings: AI opens unprecedented possibilities yet our society is changing faster than we are prepared for.'
      ]
    }
  },
  dutchPosition: {
    title: { nl: "Nederland's positie: van koploper naar achterblijver", en: "The Netherlands' position: from frontrunner to laggard" },
    paragraphs: {
      nl: [
        'Hoe doet Nederland het in deze race? Om eerlijk te zijn: we lopen achter. Landen als Amerika, China – en in mindere mate het VK en Frankrijk – investeren miljarden in AI. Nederland? Geen plan, geen prioriteit, geen grote investeringen.',
        'Vijf jaar geleden stond Nederland nog in de voorhoede. Google opende een AI-kantoor in Amsterdam en ASML groeide uit tot een belangrijke speler in AI-chiptechnologie.',
        'Maar vandaag de dag gebruiken we vooral Amerikaanse AI-modellen terwijl ons talent wegtrekt. We verliezen controle over een technologie die straks álles raakt – van innovatie tot defensie en dagelijks werk.'
      ],
      en: [
        'How is the Netherlands doing in this race? Frankly, we are falling behind. Countries like the US and China invest billions in AI. The Netherlands has no plan, no priority and no major investments.',
        'Five years ago the Netherlands was still ahead. Google opened an AI office in Amsterdam and ASML became a key player in AI chip technology.',
        'But today we mainly use American AI models while our talent leaves. We are losing control over a technology that will soon touch everything—from innovation to defence and daily work.'
      ]
    }
  },
  priceOfInaction: {
    title: { nl: 'De prijs van niets doen', en: 'The price of doing nothing' },
    paragraphs: {
      nl: [
        'Zonder eigen AI-modellen weten we niet precies hoe de technologie werkt en riskeren we buitensluiting bij geopolitieke spanningen.',
        'Ook onze welvaartsstaat komt in gevaar wanneer economische waarde wegvloeit naar buitenlandse techbedrijven.',
        'De keuze is helder: nu investeren in onze AI-toekomst, of eindigen als openluchtmuseum voor rijke toeristen.'
      ],
      en: [
        'Without our own AI models we do not fully understand the technology and risk exclusion when geopolitical tensions rise.',
        'Our welfare state is also threatened if economic value flows to foreign tech firms.',
        'The choice is clear: invest in our AI future now or end up an open-air museum for wealthy tourists.'
      ]
    }
  },
  dutchSummit: {
    title: { nl: 'Een Nederlandse AI top', en: 'A Dutch AI summit' },
    paragraphs: {
      nl: [
        'AI-modellen zijn nu al krachtig genoeg om ons leven ingrijpend te veranderen. Sommigen denken dat AI zichzelf binnenkort kan verbeteren.',
        'Voor Nederland is dit een historisch keuzemoment. Blijven we toekijken of nemen we het heft in eigen hand?',
        'Daarom roepen wij op tot een Nederlandse AI-top om bedrijven, ondernemers, onderzoekers en beleidsmakers te verenigen en AI hoger op de agenda te zetten.'
      ],
      en: [
        'AI models are already powerful enough to drastically change our lives. Some think AI will soon start improving itself.',
        'For the Netherlands this is a historic moment. Do we keep watching or take matters into our own hands?',
        'That is why we call for a Dutch AI summit to unite companies, entrepreneurs, researchers and policymakers and push AI higher on the agenda.'
      ]
    }
  }
};

const IntroSection: React.FC<IntroSectionProps> = ({ section }) => {
  const { language } = useLanguage();
  const data = content[section];
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{data.title[language]}</h2>
      <div className="prose max-w-none text-gray-700">
        {data.paragraphs[language].map((p, idx) => (
          <p key={idx} className={idx > 0 ? 'mt-4' : undefined}>{p}</p>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
