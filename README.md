# Custom Books

Libri di matematica scritti in HTML, in italiano: concetti spiegati per esteso, formule
smontate simbolo per simbolo, figure e widget interattivi. Ogni libro si apre nel browser,
senza server.

| Libro | Come si apre | Com'è fatto |
|---|---|---|
| [Algebra lineare](algebra_lineare/) | `algebra_lineare/index.html` | Un file HTML per capitolo, indice generato da `assets/toc.js`, formule via MathJax (serve la rete) |
| [Statistica](statistica/) | `statistica/Statistica.html` | Un unico HTML self-contained e offline, costruito dai sorgenti `.md` con `build_book.py` + `render_math.js` |

Ogni cartella ha il suo README con la struttura dei file, le istruzioni di build e lo stato
dei capitoli.
