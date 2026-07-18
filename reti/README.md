# Reti e Internet — un libro visuale e pratico

Il primo libro della collana di **informatica**, in italiano: come funziona internet, dal filo
fisico al click che carica una pagina. Spiegazioni discorsive, ogni comando smontato pezzo per
pezzo, widget interattivi e **laboratori guidati** da fare sul proprio computer (con l'output
atteso mostrato). Stesso stile e stesso motore dei libri di [Algebra Lineare](../algebra%20lineare/),
[Analisi](../analisi%201/) e [Fisica](../fisica%201/).

Contenuto originale scritto ex novo.

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema, segnalibro 🔖 |
| `assets/plot.js` | Motore di disegno su SVG (diagrammi e animazioni di rete) |
| `assets/math.js` | Configurazione MathJax (usata poco: qualche potenza di 2) |
| `assets/style.css` | Grafica del libro + stili terminale/codice per l'informatica |

## Stato

- [x] 1 — Cos'è una rete
- [x] 2 — Il modello a livelli
- [ ] 3 — Il livello fisico
- [ ] 4 — Ethernet e la LAN
- [ ] 5 — Il WiFi
- [ ] 6 — L'indirizzo IP
- [ ] 7 — Il routing
- [ ] 8 — La rete di casa
- [ ] 9 — UDP e TCP
- [ ] 10 — Il DNS
- [ ] 11 — HTTP
- [ ] 12 — HTTPS e TLS
- [ ] 13 — Il web veloce
- [ ] 14 — Email e altri protocolli
- [ ] 15 — La sicurezza in rete
- [ ] 16 — Il viaggio completo di un click

## La collana di informatica (piano)

1. **Reti e Internet** (questo libro)
2. Python
3. Il Web (browser, DOM, JS)
4. Backend con FastAPI
5. Linux e server (nginx, Hetzner)
6. Docker
7. Cloud (AWS)
