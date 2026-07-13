## 9. t-test a un campione

Confronta la media di **un gruppo** contro un **valore di riferimento** $\mu_0$. Es: "il QI medio del campione è diverso da 100?"

$$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$$

| Componente | Ruolo |
|-----------|-------|
| $\bar{x} - \mu_0$ | **segnale**: scarto tra media osservata e valore ipotizzato |
| $s/\sqrt{n}$ | **rumore**: l'**errore standard** (dal CLT), variabilità attesa della media per caso |
| $df$ | $n-1$ |

Se $\lvert t\rvert$ è grande, la media osservata è troppo lontana da $\mu_0$ per essere un caso → rifiuti $H_0$.
