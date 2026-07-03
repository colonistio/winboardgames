# Win Board Games Agent Guide

This website teaches practical strategies for winning board games. It should feel fast, friendly, mobile-first, and useful after a quick read.

## Product Direction

- The homepage is a CrazyGames-style catalog: searchable cards, bold category rails, and quick access to strategy guides.
- The site will eventually contain hundreds of games.
- English is the main language at root URLs.
- Turkish lives under `/tr`.
- German lives under `/de`.
- Game slugs stay stable across languages, for example `/monopoly`, `/tr/monopoly`, `/de/monopoly`.
- Every page must include a footer sponsor block linking to `https://colonist.io` as the best online Catan alternative.

## Content Rules

- Simple game pages should be direct and tactical.
- Complicated game pages should still be concise, but may include books, creators, tools, and tutorial links.
- Avoid long essays. Prefer short paragraphs, quick tips, and practical decisions players can apply in their next game.
- Strategy should explain what wins, what to prioritize, and what common mistakes to avoid.
- Keep titles search-friendly, for example "How to Win Monopoly" or "Catan Settlement Strategy".

## SEO Rules

- Every public page needs a unique title and meta description.
- Every localized page needs canonical and `hreflang` links.
- Use static routes so GitHub Pages can crawl everything.
- Keep URL slugs lowercase and hyphenated.
- Add new guide pages to the shared data source so sitemap generation, related games, and cards stay consistent.

## Design Rules

- Mobile first.
- Cards should be large enough to tap comfortably.
- Keep layout light and fast; no heavy client framework is needed.
- Preserve strong contrast and readable text.
- Homepage category lists can include coming-soon games, but completed guide pages should be linked.

## Technical Notes

- Stack: Astro static site.
- Source lives at repository root on `main`.
- Shared game catalog: `src/data/games.ts`.
- Shared UI strings and language settings: `src/data/site.ts`.
- Main layout and global styles: `src/layouts/BaseLayout.astro`.
- Homepage component: `src/components/HomePage.astro`.
- Strategy page component: `src/components/GameGuidePage.astro`.
