# Portfolio – Diego Tosato

Portfolio personale di Diego Tosato, sviluppatore web full stack junior.
Online su **[diego-tosato-dev.it](https://diego-tosato-dev.it)**.

Il sito presenta chi sono, le competenze e cinque case study (galleria, video, stack e repository):

- **DragonBall Collector**
- **LiveLoot** (progetto di gruppo)
- **Trap Italiana**
- **GameVault**
- **Gym Manager**

## Stack

- [React 19](https://react.dev) + [Vite 8](https://vite.dev)
- [React Router 7](https://reactrouter.com) (`BrowserRouter`, sito solo client-side)
- [react-helmet-async](https://github.com/staylor/react-helmet-async) per meta tag e JSON-LD
- CSS puro, Font Awesome e Google Fonts da CDN
- ESLint, con CI su GitHub Actions (lint e build)

## Avvio in locale

Requisiti: Node.js 20 o superiore.

```bash
npm install
npm run dev
```

## Script

| Comando           | Descrizione                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Server di sviluppo con HMR     |
| `npm run build`   | Build di produzione in `dist/` |
| `npm run preview` | Anteprima locale della build   |
| `npm run lint`    | Analisi statica con ESLint     |

## Struttura

```
public/              asset statici (immagini, video, manifest, sitemap, robots)
src/
  components/        componenti della home e dei progetti, SEO/
  data/seoData.js    dati SEO di home e progetti (titoli, descrizioni, JSON-LD)
  layouts/           layout delle pagine progetto
  pages/             Homepage e pagine in projects/
  styles/            fogli di stile
```

## SEO

I meta tag e il JSON-LD (`Person`, `WebSite`, `ProfilePage`, `BreadcrumbList`, `SoftwareSourceCode`) sono generati dal componente `src/components/SEO/SEO.jsx` a partire da `src/data/seoData.js`.
I tag statici in `index.html` (marcati `data-static-seo`) servono come fallback e vengono rimossi al montaggio di React.

Quando si aggiunge un progetto:

1. aggiungere la voce in `seoData.js`;
2. creare la pagina in `src/pages/projects/` e la rotta in `src/App.jsx`;
3. aggiungere l'URL in `public/sitemap.xml` con `lastmod`.

## Deploy

La build è statica (`dist/`). L'hosting deve riscrivere tutte le rotte su `index.html`, perché il routing è lato client.

## Licenza

Codice e contenuti © Diego Tosato. Tutti i diritti riservati, vedi [LICENSE](./LICENSE).
