## 17. Cosine similarity

La **similarità del coseno** misura l'**angolo** tra due vettori, ignorandone la lunghezza:

$$\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{\lVert\mathbf{a}\rVert\,\lVert\mathbf{b}\rVert} = \frac{\sum_i a_i b_i}{\sqrt{\sum_i a_i^2}\,\sqrt{\sum_i b_i^2}}$$

| Componente | Significato |
|-----------|-------------|
| $\mathbf{a}\cdot\mathbf{b}=\sum a_i b_i$ | **prodotto scalare** dei due vettori |
| $\lVert\mathbf{a}\rVert,\lVert\mathbf{b}\rVert$ | **lunghezze** (norme), normalizzano |

> 💡 **Legame con Pearson:** la correlazione di Pearson è la cosine similarity calcolata sui **dati centrati** (dopo aver sottratto la media). Pearson toglie la media, il coseno no.

Il coseno guarda alla **direzione** pura ed è lo standard per confrontare vettori ad alta dimensione — testi, embedding, segnali — dove conta l'orientamento più che l'ampiezza.

---

> 🏁 **Sezione 12 completata.** Sai misurare e interpretare le relazioni tra variabili (Pearson, Spearman, Kendall, parziale, coseno). Prossimo: confrontare **più di due gruppi** insieme con l'**ANOVA**.
