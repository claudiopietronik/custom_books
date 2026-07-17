# Analisi 2 — un libro visuale e completo

Un libro di matematica in HTML sull'analisi di più variabili (Analisi Matematica 2), in italiano.
Concetti spiegati per esteso, formule smontate simbolo per simbolo, figure e widget interattivi.
Stesso stile e stesso motore del libro di [Algebra Lineare](../algebra_lineare/) e di
[Analisi 1](../analisi_1/), di cui è il seguito naturale.

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno su SVG: funzioni, aree, curve, **campi vettoriali e curve di livello** |
| `assets/math.js` | Configurazione MathJax e macro della notazione (`\grad`, `\pdv`, `\dd`, …) |
| `assets/style.css` | Grafica del libro (condivisa con gli altri libri) |

## Stato

- [x] 1 — Introduzione
- [x] 2 — Successioni e serie di funzioni
- [x] 3 — Serie di potenze
- [x] 4 — Serie di Fourier
- [x] 5 — Lo spazio ℝⁿ e la topologia
- [x] 6 — Funzioni di più variabili: limiti e continuità
- [x] 7 — Calcolo differenziale in più variabili
- [ ] 8 — Taylor e ottimizzazione libera
- [ ] 9 — Ottimizzazione vincolata
- [ ] 10 — Curve e integrali di linea
- [ ] 11 — Campi vettoriali e forme differenziali
- [ ] 12 — Integrali multipli
- [ ] 13 — Superfici e integrali di superficie
- [ ] 14 — I teoremi del calcolo vettoriale
- [ ] 15 — Equazioni differenziali ordinarie
- [ ] 16 — La fine

## Nota

Le formule sono renderizzate con MathJax caricato da CDN: **serve la connessione a internet** per vederle.
