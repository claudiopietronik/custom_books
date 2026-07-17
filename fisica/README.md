# Fisica 1 — un libro visuale e completo

Un libro di fisica universitaria in HTML, in italiano — **Volume 1: Meccanica, Onde e acustica,
Termodinamica**. Concetti spiegati per esteso, leggi motivate, formule smontate simbolo per simbolo,
esempi pratici svolti passo passo e widget interattivi. Stesso stile e stesso motore dei libri di
[Algebra Lineare](../algebra%20lineare/) e [Analisi](../analisi%201/).

Contenuto originale scritto ex novo: l'indice segue l'ordine classico della fisica universitaria
(scope ispirato a testi standard), ma prosa, esempi e numeri sono tutti nuovi.

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno su SVG: funzioni, vettori, traiettorie, campi, grafici |
| `assets/math.js` | Configurazione MathJax e macro della notazione (`\vv`, `\uu`, `\dd`, …) |
| `assets/style.css` | Grafica del libro (condivisa con gli altri libri) |

## Stato

- [x] 1 — Grandezze, unità e vettori
- [x] 2 — Il moto rettilineo
- [x] 3 — Moto nel piano e nello spazio
- [x] 4 — Le leggi di Newton
- [x] 5 — Applicazioni delle leggi di Newton
- [x] 6 — Lavoro ed energia cinetica
- [x] 7 — Energia potenziale e conservazione
- [x] 8 — Quantità di moto, impulso e urti
- [ ] 9 — Rotazione dei corpi rigidi
- [ ] 10 — Dinamica rotazionale
- [ ] 11 — Equilibrio ed elasticità
- [ ] 12 — Gravitazione
- [ ] 13 — Le oscillazioni
- [ ] 14 — La meccanica dei fluidi
- [ ] 15 — Le onde meccaniche
- [ ] 16 — Il suono e l'acustica
- [ ] 17 — Temperatura e calore
- [ ] 18 — Le proprietà termiche della materia
- [ ] 19 — La prima legge della termodinamica
- [ ] 20 — La seconda legge della termodinamica

## Nota

Le formule sono renderizzate con MathJax caricato da CDN: **serve la connessione a internet** per vederle.
