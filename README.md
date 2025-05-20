
# Welkom bij je Lovable project

## Project informatie

**URL**: https://lovable.dev/projects/8dc61c7e-8f7f-452d-9c6d-c7ec4aeb70d7

## Hoe kan ik items bewerken en links toevoegen?

### Items bewerken

Om de planpunten in het Deltaplan voor AI Transitie te bewerken:

1. Ga naar de map `plan-items` in de hoofddirectory
2. Open het gewenste bestand (bijvoorbeeld `item-1.md`, `item-2.md`, etc.)
3. Bewerk de inhoud in Markdown-formaat
4. Sla het bestand op en de wijzigingen worden automatisch toegepast

### Links toevoegen

Je kunt links toevoegen aan de Markdown-bestanden met de volgende syntax:

```markdown
[Link tekst](https://voorbeeld.nl)
```

Bijvoorbeeld:
```markdown
Zie [onze website](https://voorbeeld.nl) voor meer informatie.
```

## Hoe kan ik deze code bewerken?

Er zijn verschillende manieren om je applicatie te bewerken:

**Gebruik Lovable**

Bezoek simpelweg het [Lovable Project](https://lovable.dev/projects/8dc61c7e-8f7f-452d-9c6d-c7ec4aeb70d7) en begin met het geven van instructies.

Wijzigingen gemaakt via Lovable worden automatisch gecommit naar deze repo.

**Gebruik je eigen IDE**

Als je lokaal wilt werken met je eigen IDE, kun je deze repo klonen en wijzigingen pushen. Gepushte wijzigingen worden ook weergegeven in Lovable.

De enige vereiste is het hebben van Node.js & npm - [installeer met nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Volg deze stappen:

```sh
# Stap 1: Clone de repository met de Git URL van het project.
git clone <JOUW_GIT_URL>

# Stap 2: Navigeer naar de projectdirectory.
cd <JOUW_PROJECT_NAAM>

# Stap 3: Installeer de benodigde dependencies.
npm i

# Stap 4: Start de ontwikkelingsserver met auto-reloading en een instant preview.
npm run dev
```

**Bewerk een bestand direct in GitHub**

- Navigeer naar het gewenste bestand/bestanden.
- Klik op de "Edit" knop (potlood-icoon) rechtsboven in de bestandsweergave.
- Maak je wijzigingen en commit de veranderingen.

**Gebruik GitHub Codespaces**

- Navigeer naar de hoofdpagina van je repository.
- Klik op de "Code" knop (groene knop) rechtsboven.
- Selecteer het tabblad "Codespaces".
- Klik op "New codespace" om een nieuwe Codespace-omgeving te starten.
- Bewerk bestanden direct in de Codespace en commit en push je wijzigingen wanneer je klaar bent.

## Welke technologieën worden gebruikt voor dit project?

Dit project is gebouwd met:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Hoe kan ik dit project deployen?

Open simpelweg [Lovable](https://lovable.dev/projects/8dc61c7e-8f7f-452d-9c6d-c7ec4aeb70d7) en klik op Delen -> Publiceren.

## Kan ik een eigen domein verbinden met mijn Lovable project?

Ja, dat kan!

Om een domein te verbinden, navigeer naar Project > Instellingen > Domeinen en klik op Domein Verbinden.

Lees meer hier: [Een eigen domein instellen](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
