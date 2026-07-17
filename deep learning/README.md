# Deep Learning — un libro visuale e completo

Il testo di **Ian Goodfellow, Yoshua Bengio & Aaron Courville, *Deep Learning* (MIT Press, 2016)**
riscritto per intero in italiano, in HTML: concetti spiegati per esteso, idee motivate, formule smontate
simbolo per simbolo, esempi svolti passo passo e widget interattivi. Stesso stile e stesso motore dei libri
di [Algebra Lineare](../algebra%20lineare/), [Analisi](../analisi%201/) e [Statistica](../statistica/).

L'indice segue quello del libro originale (20 capitoli in tre parti); prosa, esempi, figure e widget sono
tutti nuovi, pensati per il web e per l'autodidatta.

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno su SVG: funzioni, vettori, campi, curve di livello |
| `assets/math.js` | Configurazione MathJax e macro della notazione (`\E`, `\argmax`, `\KL`, …) |
| `assets/style.css` | Grafica del libro (tema "tensore": indaco + teal) |

## Le tre parti

- **Parte I — Matematica applicata e fondamenti di ML** (cap. 2–5): algebra lineare, probabilità e
  teoria dell'informazione, calcolo numerico, fondamenti di machine learning.
- **Parte II — Reti profonde: le pratiche moderne** (cap. 6–12): feedforward, regolarizzazione,
  ottimizzazione, reti convoluzionali, reti ricorrenti, metodologia, applicazioni.
- **Parte III — La ricerca nel deep learning** (cap. 13–20): modelli a fattori lineari, autoencoder,
  apprendimento di rappresentazioni, modelli grafici, Monte Carlo, funzione di partizione, inferenza
  approssimata, modelli generativi profondi.

## Stato

- [x] 1 — Introduzione
- [x] 2 — Algebra lineare
- [x] 3 — Probabilità e teoria dell'informazione
- [x] 4 — Calcolo numerico
- [ ] 5 — Fondamenti di machine learning
- [ ] 6 — Reti feedforward profonde
- [ ] 7 — Regolarizzazione per il deep learning
- [ ] 8 — Ottimizzazione per l'addestramento
- [ ] 9 — Reti convoluzionali
- [ ] 10 — Modellazione di sequenze: reti ricorrenti
- [ ] 11 — Metodologia pratica
- [ ] 12 — Applicazioni
- [ ] 13 — Modelli a fattori lineari
- [ ] 14 — Autoencoder
- [ ] 15 — Apprendimento di rappresentazioni
- [ ] 16 — Modelli probabilistici strutturati
- [ ] 17 — Metodi Monte Carlo
- [ ] 18 — Affrontare la funzione di partizione
- [ ] 19 — Inferenza approssimata
- [ ] 20 — Modelli generativi profondi

## Nota

Le formule sono renderizzate con MathJax caricato da CDN: **serve la connessione a internet** per vederle.
