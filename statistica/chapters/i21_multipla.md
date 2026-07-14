## 22. Regressione multipla e polinomiale

### Regressione multipla

$y$ dipende da tanti predittori:

$$y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_k x_k + \epsilon$$

> 📌 Ogni $\beta_j$ è l'effetto di $x_j$ **tenendo costanti le altre** — l'idea della correlazione parziale (controllare per le confondenti). Il tutto è il **GLM (General Linear Model)**, con soluzione matriciale $\beta = (X^\top X)^{-1} X^\top y$.

> 🔧 **Coefficienti standardizzati:** i $\beta_j$ dipendono dalle unità; per confrontare l'importanza dei predittori si **standardizzano** i dati prima (z-score!). Ecco perché la normalizzazione della Parte II conta.

### Regressione polinomiale

Per relazioni curve si aggiungono potenze di $x$:

$$y = \beta_0 + \beta_1 x + \beta_2 x^2 + \dots + \beta_d x^d$$

> 💡 È **ancora un modello "lineare"** — non nelle $x$, ma nei coefficienti $\beta$. Trattando $x^2, x^3, \dots$ come nuove variabili, usi la stessa macchina dei minimi quadrati per adattare curve. Il grado $d$ controlla quanto la curva ondeggia.
