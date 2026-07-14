## 10. t-test a due campioni e appaiato

### Due campioni indipendenti

Confronta le medie di **due gruppi diversi** (trattati vs controllo):

$$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\dfrac{s_1^2}{n_1} + \dfrac{s_2^2}{n_2}}}$$

- $\bar{x}_1 - \bar{x}_2$ — segnale: differenza tra le due medie.
- denominatore — rumore: errore standard **della differenza**, combina la variabilità di entrambi.

### t-test appaiato (paired)

Per misure **accoppiate** sugli stessi soggetti (pressione *prima* e *dopo*). Calcoli le differenze individuali $d_i = x_i - y_i$ e fai un t-test a un campione su quelle, contro zero:

$$t = \frac{\bar{d}}{s_d/\sqrt{n}}$$

> 💡 Appaiare **elimina la variabilità tra soggetti**: non conta che Anna parta da un valore diverso da Marco, conta di quanto *ciascuno* è cambiato. Meno rumore → più potenza.
