# Fisica 2 — un libro visuale e completo

Un libro di fisica universitaria in HTML, in italiano — **Volume 2: Elettromagnetismo, Ottica,
Fisica moderna**. Il seguito di [Fisica 1](../fisica%201/). Concetti spiegati per esteso, leggi
motivate, formule smontate simbolo per simbolo, esempi pratici svolti passo passo e widget
interattivi. Stesso stile e stesso motore dei libri di [Algebra Lineare](../algebra%20lineare/),
[Analisi](../analisi%201/) e Fisica 1.

Contenuto originale scritto ex novo: l'indice segue l'ordine classico della fisica universitaria
(scope ispirato ai testi standard), ma prosa, esempi e numeri sono tutti nuovi.

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno su SVG: funzioni, vettori, campi, grafici |
| `assets/math.js` | Configurazione MathJax e macro della notazione (`\vv`, `\uu`, `\dd`, …) |
| `assets/style.css` | Grafica del libro (condivisa con gli altri libri) |

## Stato

### Elettromagnetismo
- [x] 1 — La carica elettrica e il campo elettrico
- [x] 2 — La legge di Gauss
- [x] 3 — Il potenziale elettrico
- [x] 4 — Condensatori e dielettrici
- [x] 5 — Corrente, resistenza e forza elettromotrice
- [x] 6 — I circuiti in corrente continua
- [x] 7 — Il campo magnetico e le forze magnetiche
- [x] 8 — Le sorgenti del campo magnetico
- [x] 9 — L'induzione elettromagnetica
- [x] 10 — L'induttanza
- [x] 11 — Le correnti alternate
- [x] 12 — Le onde elettromagnetiche

### Ottica
- [x] 13 — La natura e la propagazione della luce
- [x] 14 — L'ottica geometrica e gli strumenti ottici
- [ ] 15 — L'interferenza
- [ ] 16 — La diffrazione

### Fisica moderna
- [ ] 17 — La relatività ristretta
- [ ] 18 — Fotoni, elettroni e la fisica quantistica
- [ ] 19 — La struttura dell'atomo
- [ ] 20 — Il nucleo e le particelle

## Nota

Le formule sono renderizzate con MathJax caricato da CDN: **serve la connessione a internet** per vederle.
