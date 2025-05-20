
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const DeltaPlanIntro = () => {
  const { language } = useLanguage();
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {language === 'nl' ? 'Een nieuw Deltaplan voor AI' : 'A new Delta Plan for AI'}
      </h2>
      <div className="prose max-w-none text-gray-700">
        {language === 'nl' ? (
          <>
            <p>
              In de twintigste eeuw bouwde Nederland de Deltawerken om ons land te beschermen tegen het water. Geen luxeproject, maar een daad van zelfbescherming – visionair, collectief en onmisbaar. Vandaag staan we opnieuw voor een existentiële dreiging. Niet van water, maar van digitale afhankelijkheid. AI wordt de fundering van economie, defensie, zorg, onderwijs en alles wat onze samenleving draaiende houdt. Als we die systemen niet zelf bouwen en begrijpen, raken we de regie over onze toekomst kwijt.
            </p>
            <p className="mt-4">
              Om deze uitdaging het hoofd te bieden, presenteren wij een eerste aanzet voor een nationaal AI Deltaplan, bedoeld om de discussie te voeden en tot actie aan te zetten:
            </p>
          </>
        ) : (
          <>
            <p>
              In the twentieth century the Netherlands built the Delta Works to protect the country from the sea. It wasn’t a luxury project but an act of self-preservation—visionary, collective and essential. Today we face another existential threat. Not from water but from digital dependence. AI will underpin our economy, defence, healthcare, education—everything that keeps society running. If we don’t build and understand these systems ourselves, we’ll lose control over our future.
            </p>
            <p className="mt-4">
              To confront this challenge we present an initial outline for a national AI Delta Plan, meant to fuel discussion and spur action:
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default DeltaPlanIntro;
