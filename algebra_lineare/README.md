# Algebra Lineare — un libro visuale e completo

Un libro di matematica in HTML sull'algebra lineare, in italiano. Niente codice: solo
concetti, formule smontate simbolo per simbolo, figure e widget interattivi.

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: capitoli, sottocapitoli, stato di avanzamento |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno cartesiano su SVG (assi, griglia, frecce, punti trascinabili) |
| `assets/math.js` | Configurazione MathJax e macro della notazione (`\vv`, `\mm`, `\norm`, …) |
| `assets/style.css` | Grafica del libro |

Aggiungere un capitolo significa: creare il suo file HTML e portare il suo `stato` a
`"pronto"` in `assets/toc.js`. Menu, indice e frecce avanti/indietro si aggiornano da soli.

## Stato

- [x] 1 — Introduzione
- [x] 2 — Vettori
- [x] 3 — Moltiplicazione tra vettori
- [x] 4 — Spazi vettoriali
- [x] 5 — Matrici
- [x] 6 — Moltiplicazione tra matrici
- [x] 7 — Rango
- [x] 8 — Spazi delle matrici
- [x] 9 — Numeri complessi
- [x] 10 — Sistemi di equazioni
- [x] 11 — Determinante
- [ ] 12 — Inversa di una matrice
- [ ] 13 — Proiezioni
- [ ] 14 — Minimi quadrati
- [ ] 15 — Autodecomposizione
- [ ] 16 — La SVD
- [ ] 17 — Forma quadratica
- [ ] 18 — Matrici di covarianza
- [ ] 19 — PCA
- [ ] 20 — La fine

## Nota

Le formule sono renderizzate con MathJax caricato da CDN: **serve la connessione a
internet** per vederle. Per un uso completamente offline basta scaricare MathJax dentro
`assets/` e cambiare il `<script src="…">` nelle pagine.
