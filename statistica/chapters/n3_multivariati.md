## 3. Outlier multivariati e altre strategie

### Distanza in più dimensioni

In più dimensioni un punto può essere anomalo *nella combinazione* di variabili anche se su ciascuna singola sembra normale. Serve una **distanza** dal centro della nuvola:

$$d_i = \sqrt{\sum_{j=1}^{k}(x_{ij} - \bar{x}_j)^2}$$

| Componente | Significato |
|-----------|-------------|
| $x_{ij}$ | valore del punto $i$ sulla dimensione $j$ |
| $\bar{x}_j$ | media (centroide) su quella dimensione |
| $\sqrt{\sum(\dots)^2}$ | **Pitagora** in $k$ dimensioni: distanza in linea d'aria dal centro |

Punti oltre un certo raggio = outlier (fuori dal cerchio rosso nel grafico del capitolo precedente).

> 💡 Cohen menziona anche la **distanza di Mahalanobis**: stessa idea, ma "corretta" per la forma della nuvola quando le variabili sono correlate. La incontrerai con la correlazione.

### Tre strategie complementari

- **Data trimming** — tagli via una percentuale fissa agli estremi (es. il 5% più alto e più basso), senza soglia statistica. Semplice e diretto.
- **Soluzioni non-parametriche** — lavori sui **ranghi** (posizioni ordinate) invece dei valori grezzi: un outlier diventa solo "l'ultimo della fila" e perde il suo potere di sballare i conti. Base dei test non-parametrici più avanti.
- **Trasformazioni non lineari** — applichi una funzione (tipicamente il **logaritmo**) che comprime la coda lunga, avvicina i valori grandi e raddrizza una distribuzione asimmetrica. Classica per redditi, prezzi, conteggi.

---

> 🏁 **Fine della Parte II.** Ora sai portare i dati su scale confrontabili e gestire i valori anomali in modo robusto. I dati sono "puliti": si può iniziare a ragionare sotto incertezza con la **Probabilità**.
