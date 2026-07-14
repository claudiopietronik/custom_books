## 5. Gradi di libertà

I **gradi di libertà** (df) sono il **numero di valori liberi di variare** nel calcolo di una statistica. Già visti: nella varianza campionaria si divide per $n-1$.

Il perché: fissata la **media** (calcolata dai dati), gli scarti non sono più tutti liberi. Noti $n-1$ scarti e la media, l'ultimo è **determinato** (la somma deve fare zero). Hai "speso" un df per stimare la media.

$$df = n - k$$

dove $k$ = numero di parametri stimati dai dati.

> 💡 I df ricompaiono ovunque (t-test, chi-quadro, ANOVA) perché determinano la **forma esatta** della distribuzione di riferimento — la t di Student si avvicina alla normale al crescere dei df.
