# PROBABILITÀ

> *Corso: Master Statistics & Machine Learning — Mike X Cohen*  
> Parte III — corrisponde alla Sezione 8 del corso.

Cambio di marcia: si smette di **descrivere** i dati e si inizia a **ragionare sotto incertezza**. La probabilità è il linguaggio con cui quantifichiamo il caso, ed è la base di tutta la statistica inferenziale che seguirà.

## 1. Cos'è la probabilità

La **probabilità** è un numero tra **0 e 1** che quantifica quanto è verosimile che un evento accada:

- **0** → impossibile
- **1** → certo
- **0,5** → tanto probabile quanto improbabile

Due modi di intenderla, da tenere distinti:

- **Teorica (a priori)** — deriva dalla struttura del problema. Un dado equo ha 6 facce uguali → ogni faccia ha probabilità $1/6$ *per costruzione*, senza lanciarlo.
- **Empirica (frequentista)** — deriva dall'osservazione: lanci il dado tante volte e guardi con che frequenza esce ogni faccia (frequenza relativa a lungo termine).

> 💡 Esiste anche l'interpretazione **bayesiana/soggettiva** — la probabilità come "grado di convinzione" — che sta dietro al teorema di Bayes.

Per esiti **ugualmente probabili**:

$$P(A) = \frac{\text{esiti favorevoli}}{\text{esiti totali}}$$

Esempio: numero pari con un dado → favorevoli $\{2,4,6\}=3$, totali $=6$ → $P = 3/6 = 0{,}5$.
