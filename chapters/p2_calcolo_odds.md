## 3. Calcolo delle probabilità e odds

### Regola del complemento

$$P(\text{non } A) = 1 - P(A)$$

Se piove con probabilità 0,3, non piove con 0,7. Spesso è più facile calcolare "l'opposto" e sottrarre.

> 📌 **Somma totale = 1:** le probabilità di tutti gli esiti possibili sommano sempre a 1 (qualcosa deve succedere).

### Odds (quote)

Le odds esprimono la stessa incertezza non come frazione sul totale, ma come **rapporto tra "a favore" e "contro"**:

$$\text{odds}(A) = \frac{P(A)}{1 - P(A)}$$

| Componente | Significato |
|-----------|-------------|
| $P(A)$ | probabilità che accada |
| $1 - P(A)$ | probabilità che non accada |

Esempio: $P(A) = 0{,}75$ → $\text{odds} = 0{,}75/0{,}25 = 3$, cioè **3 a 1**.

Per tornare indietro:

$$P(A) = \frac{\text{odds}}{1 + \text{odds}}$$

> 🎯 **Perché servono:** le odds sono il linguaggio delle scommesse, ma soprattutto il cuore della **regressione logistica** (il modello predice il *log delle odds*). Il legame odds ↔ probabilità tornerà utile lì.
