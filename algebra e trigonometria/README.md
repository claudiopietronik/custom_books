# Algebra e Trigonometria — un libro visuale e completo

Un libro di matematica in HTML che copre l'algebra e la trigonometria di livello universitario/pre-analisi,
in italiano. Niente formalismo freddo: concetti spiegati per esteso, formule smontate simbolo per simbolo,
figure e widget interattivi. Stesso stile e stesso motore dei libri di
[Algebra Lineare](../algebra_lineare/) e [Analisi 1](../analisi_1/).

L'indice segue *College Algebra & Trigonometry* di **Julie Miller** e **Donna Gerken** (McGraw-Hill, 2017),
ma il testo è **riscritto daccapo**: prosa, esempi, figure e widget originali. Il capitolo *R* del testo
originale è qui il **Capitolo 1**, e i capitoli 1–12 diventano 2–13 (numerazione consecutiva).

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno su SVG: assi, funzioni `y=f(x)`, aree, curve parametriche |
| `assets/math.js` | Configurazione MathJax e macro della notazione |
| `assets/style.css` | Grafica del libro (condivisa con gli altri libri) |

Aggiungere un capitolo significa: creare il suo file HTML e portare il suo `stato` a `"pronto"` in
`assets/toc.js`. Menu, indice e frecce avanti/indietro si aggiornano da soli.

## Stato

- [x] 1 — Ripasso dei prerequisiti
- [x] 2 — Equazioni e disequazioni
- [x] 3 — Funzioni e relazioni
- [x] 4 — Funzioni polinomiali e razionali
- [x] 5 — Funzioni esponenziali e logaritmiche
- [x] 6 — Le funzioni trigonometriche
- [x] 7 — Trigonometria analitica
- [x] 8 — Applicazioni della trigonometria
- [ ] 9 — Coordinate polari, complessi e vettori
- [ ] 10 — Sistemi di equazioni e disequazioni
- [ ] 11 — Matrici e determinanti
- [ ] 12 — Geometria analitica: le coniche
- [ ] 13 — Successioni, serie, induzione e probabilità

## Nota

Le formule sono renderizzate con MathJax caricato da CDN: **serve la connessione a internet** per vederle.
Per un uso completamente offline basta scaricare MathJax dentro `assets/` e cambiare il `<script src="…">`
nelle pagine.
