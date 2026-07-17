# Custom Books

Libri di matematica scritti in HTML, in italiano: concetti spiegati per esteso, formule
smontate simbolo per simbolo, figure e widget interattivi. Ogni libro si apre nel browser,
senza server.

| Libro | Come si apre | Com'è fatto |
|---|---|---|
| [Algebra lineare](algebra%20lineare/) | `algebra%20lineare/index.html` | Un file HTML per capitolo, indice generato da `assets/toc.js`, formule via MathJax (serve la rete) |
| [Analisi 1](analisi%201/) | `analisi%201/index.html` | Come Algebra lineare: un file HTML per capitolo, stesso motore in `assets/` (indice, plot, MathJax) |
| [Analisi 2](analisi%202/) | `analisi%202/index.html` | Come Analisi 1; copre più variabili, campi, integrali multipli ed equazioni differenziali |
| [Statistica](statistica/) | `statistica/Statistica.html` | Un unico HTML self-contained e offline, costruito dai sorgenti `.md` con `build_book.py` + `render_math.js` |

Ogni cartella ha il suo README con la struttura dei file, le istruzioni di build e lo stato
dei capitoli.
