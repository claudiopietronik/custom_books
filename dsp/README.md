# DSP — Processamento dei segnali digitali

Un libro in HTML sul *Digital Signal Processing*, in italiano. Stessa filosofia degli altri libri
della libreria (concetti spiegati per esteso, formule smontate simbolo per simbolo, figure e widget
interattivi), ma con un'**identità visiva propria** — estetica "laboratorio/oscilloscopio": carta a
griglia, accento teal + ambra, testate di capitolo in stile *canale*.

Ispirato nella scaletta a *The Scientist and Engineer's Guide to Digital Signal Processing* di
Steven W. Smith, ma **riscritto da zero**: prosa, esempi, figure e widget sono originali.

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno su SVG: assi, funzioni, aree, e le primitive DSP `stem`/`bars`/`seq` |
| `assets/math.js` | Configurazione MathJax e macro della notazione (`\DFT`, `\conv`, `\sinc`, …) |
| `assets/style.css` | Grafica del libro (tema proprio del DSP) |

Aggiungere un capitolo significa: creare il suo file HTML e portare il suo `stato` a `"pronto"` in
`assets/toc.js`. Menu, indice e frecce avanti/indietro si aggiornano da soli.

## Stato

- [x] 1 — L'ampiezza e la profondità del DSP
- [x] 2 — Statistica, probabilità e rumore
- [x] 3 — ADC e DAC
- [x] 4 — Il software del DSP
- [x] 5 — Sistemi lineari
- [x] 6 — La convoluzione
- [x] 7 — Proprietà della convoluzione
- [x] 8 — La trasformata di Fourier discreta (DFT)
- [x] 9 — Applicazioni della DFT
- [x] 10 — Proprietà della trasformata di Fourier
- [x] 11 — Coppie di trasformate di Fourier
- [x] 12 — La trasformata di Fourier veloce (FFT)
- [x] 13 — Elaborazione dei segnali continui
- [x] 14 — Introduzione ai filtri digitali
- [x] 15 — Filtri a media mobile
- [x] 16 — Filtri windowed-sinc
- [x] 17 — Filtri su misura
- [x] 18 — Convoluzione tramite FFT
- [x] 19 — Filtri ricorsivi
- [x] 20 — Filtri di Chebyshev
- [x] 21 — Confronto tra filtri
- [ ] 22 — Elaborazione audio
- [ ] 23 — Formazione e visualizzazione delle immagini
- [ ] 24 — Elaborazione lineare delle immagini
- [ ] 25 — Tecniche speciali di imaging
- [ ] 26 — Reti neurali (e altro!)
- [ ] 27 — Compressione dei dati
- [ ] 28 — I processori DSP
- [ ] 29 — Iniziare con i DSP
- [ ] 30 — I numeri complessi
- [ ] 31 — La trasformata di Fourier complessa
- [ ] 32 — La trasformata di Laplace
- [ ] 33 — La trasformata z
- [ ] 34 — Spiegare la legge di Benford

## Nota

Le formule sono renderizzate con MathJax caricato da CDN: **serve la connessione a internet** per vederle.
Per un uso completamente offline basta scaricare MathJax dentro `assets/` e cambiare il `<script src="…">`.
