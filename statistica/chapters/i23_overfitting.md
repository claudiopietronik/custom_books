## 24. Under- e overfitting

Il concetto al cuore del machine learning: il compromesso tra **underfitting** e **overfitting**.

![Underfit, buon fit, overfit](data:image/png;base64,IMGOVER)

Stesso dataset, tre modelli:

- **Underfitting** — troppo semplice (retta su dati curvi): non coglie il pattern. **Bias alto** (troppo rigido).
- **Buon fit** — coglie l'andamento vero ignorando il rumore. L'equilibrio cercato.
- **Overfitting** — troppo complesso: passa per ogni punto inseguendo il **rumore**. **Varianza alta** (predice male su dati nuovi).

> ⚖️ **Compromesso bias-varianza:** troppo semplice → underfit (bias); troppo complesso → overfit (varianza). Il modello giusto sta nel mezzo.

> 🛡️ **Cross-validation:** alleni su una parte dei dati e testi su una parte *mai vista*. Un modello che overfitta va bene sul training ma male sul test: la cross-validation lo smaschera. È la difesa fondamentale contro l'overfitting — il motivo per cui in ML si separano sempre training e test.

---

> 🏁 **CORSO COMPLETATO.** Dalla statistica descrittiva alla regressione, hai costruito l'intera catena: **descrivere** i dati → **pulirli** → **ragionare sul caso** (probabilità) → **inferire** (test, intervalli) → **modellare relazioni** (correlazione, ANOVA, regressione). L'ultimo passo — bias/varianza e cross-validation — è già, a tutti gli effetti, machine learning.
