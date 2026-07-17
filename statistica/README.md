# Statistica

Un libro in HTML di statistica, in italiano — dalla descrittiva ai modelli predittivi. Stessa filosofia
degli altri libri della libreria (concetti spiegati per esteso, formule smontate simbolo per simbolo,
esempi svolti e widget interattivi), con un'**identità visiva propria** — palette "dati": indaco per i
concetti, verde-acqua per l'intuizione, viola per le formule.

Copre l'intero percorso: statistica descrittiva, normalizzazione, probabilità, e statistica inferenziale
(fino a regressione e machine learning). Nessun prerequisito oltre un po' di algebra delle superiori.

**Apri [`index.html`](index.html) con un doppio clic.** Non serve alcun server.

## Com'è organizzato

| File | Cosa contiene |
|---|---|
| `index.html` | Copertina e indice generale, raggruppato per parte (si genera da `assets/toc.js`) |
| `capNN-*.html` | Un file per capitolo (46 in tutto) |
| `assets/toc.js` | **Sorgente unica dell'indice**: `BOOK` (titolo/tema), parti, capitoli, sezioni, stato |
| `assets/book.js` | Barra di navigazione, mega-menu, indice laterale, tema chiaro/scuro |
| `assets/plot.js` | Motore di disegno su SVG: assi, funzioni, aree, istogrammi, scatter, punti trascinabili |
| `assets/math.js` | Configurazione MathJax e macro della notazione (`\E`, `\Var`, `\Cov`, `\normal`, …) |
| `assets/style.css` | Grafica del libro (tema proprio "dati") |

Aggiungere un capitolo significa: creare il suo file HTML e portare il suo `stato` a `"pronto"` in
`assets/toc.js`. Menu, indice e frecce avanti/indietro si aggiornano da soli.

## Indice

**Parte I — Statistica descrittiva**
- [x] 1 — Introduzione
- [x] 2 — Fondamenta: dati e variabili
- [x] 3 — Tendenza centrale
- [x] 4 — Misure di dispersione
- [x] 5 — Quantili, IQR e QQ plot
- [x] 6 — Momenti statistici
- [x] 7 — Istogrammi
- [x] 8 — Violin plot e KDE
- [x] 9 — Entropia

**Parte II — Normalizzazione e outlier**
- [x] 10 — Z-score e min-max
- [x] 11 — Outlier
- [x] 12 — Dati multivariati

**Parte III — Probabilità**
- [x] 13 — Cos'è la probabilità
- [x] 14 — Probabilità e proporzione
- [x] 15 — Odds e calcolo
- [x] 16 — PMF e PDF
- [x] 17 — La CDF
- [x] 18 — Campionamento e Monte Carlo
- [x] 19 — Valore atteso
- [x] 20 — Probabilità condizionata
- [x] 21 — Il teorema di Bayes
- [x] 22 — Legge dei grandi numeri

**Parte IV — Statistica inferenziale**
- [x] 23 — Teorema del limite centrale
- [x] 24 — Il test d'ipotesi
- [x] 25 — Il p-value
- [x] 26 — Errori di Tipo I e II
- [x] 27 — Gradi di libertà
- [x] 28 — Parametrico o no
- [x] 29 — Confronti multipli
- [x] 30 — Anatomia del t-test
- [x] 31 — t-test a un campione
- [x] 32 — t-test a due campioni
- [x] 33 — Test non parametrici e permutazione
- [x] 34 — Intervalli di confidenza
- [x] 35 — Il bootstrap
- [x] 36 — Covarianza e Pearson
- [x] 37 — Matrice e correlazione parziale
- [x] 38 — Spearman e Kendall
- [x] 39 — Similarità del coseno
- [x] 40 — Cos'è l'ANOVA
- [x] 41 — Somme dei quadrati e F
- [x] 42 — Post-hoc e ANOVA a due vie
- [x] 43 — Regressione lineare
- [x] 44 — Regressione multipla e polinomiale
- [x] 45 — Regressione logistica
- [x] 46 — Under- e overfitting

Ispirato nella scaletta al corso *Master Statistics & Machine Learning* di Mike X Cohen, ma **riscritto
da zero**: prosa, esempi, figure e widget sono originali.
