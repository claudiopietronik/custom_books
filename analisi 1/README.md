# Analisi 1 — un libro visuale e completo

Un libro di matematica in HTML sul calcolo di una variabile (Analisi Matematica 1), in italiano.
Niente formalismo freddo: concetti spiegati per esteso, formule smontate simbolo per simbolo, figure e
widget interattivi. Stesso stile e stesso motore del libro di [Algebra Lineare](../algebra%20lineare/).

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno su SVG: assi, funzioni `y=f(x)`, aree, somme di Riemann, curve |
| `assets/math.js` | Configurazione MathJax e macro della notazione (`\dd`, `\lo`, `\grad`, …) |
| `assets/style.css` | Grafica del libro (condivisa con gli altri libri) |

Aggiungere un capitolo significa: creare il suo file HTML e portare il suo `stato` a `"pronto"` in
`assets/toc.js`. Menu, indice e frecce avanti/indietro si aggiornano da soli.

## Stato

- [x] 1 — Introduzione
- [x] 2 — I numeri reali
- [x] 3 — Numeri complessi
- [x] 4 — Funzioni
- [x] 5 — Successioni e limiti
- [x] 6 — Limiti di funzioni e continuità
- [x] 7 — Teoremi sulle funzioni continue
- [x] 8 — La derivata
- [x] 9 — I teoremi del calcolo differenziale
- [x] 10 — Studio di funzione
- [x] 11 — Formula di Taylor
- [x] 12 — L'integrale di Riemann
- [x] 13 — Tecniche di integrazione
- [x] 14 — Integrali impropri
- [x] 15 — Serie numeriche
- [x] 16 — La fine → verso l'Analisi 2

## Nota

Le formule sono renderizzate con MathJax caricato da CDN: **serve la connessione a internet** per vederle.
Per un uso completamente offline basta scaricare MathJax dentro `assets/` e cambiare il `<script src="…">`
nelle pagine.
