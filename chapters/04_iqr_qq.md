## 4. IQR e QQ plots

Ancora "quanto sono sparsi i dati", ma con strumenti **robusti** agli estremi.

### I quartili

I **quartili** spingono l'idea della mediana oltre, dividendo i dati ordinati in **quattro parti uguali**:

- **Q1** (primo quartile) → sotto di esso sta il **25%** dei dati ("mediana della metà inferiore").
- **Q2** (secondo quartile) → è la **mediana** (50% sotto).
- **Q3** (terzo quartile) → sotto di esso sta il **75%** dei dati ("mediana della metà superiore").

Sono un caso particolare dei **percentili**: Q1 = 25° percentile, Q3 = 75° percentile. Il percentile $p$ è il valore sotto cui cade il $p\%$ dei dati.

> 📖 **Vocabolario: quantile, quartile, percentile.** Stesso concetto, tre nomi secondo la "griglia":
>
> - **Quantile** → termine generale, un punto di taglio a una frazione qualsiasi (0.1, 0.37, 0.9…).
> - **Quartile** → i quantili a 0.25 / 0.50 / 0.75 (tagliano in *quarti*).
> - **Percentile** → la stessa cosa in percentuale (Q1 = quantile 0.25 = 25° percentile).
>
> Sono tutti **numeri nella stessa unità dei dati** (se misuri in cm, Q1 è in cm), non percentuali.

> 🔢 **Servono dati ordinati.** Tutte le metriche di *posizione* (mediana, quartili, percentili, IQR) richiedono di ordinare prima i dati in senso crescente: il loro senso è "chi sta in che posizione nella fila". È la differenza con media/varianza, a cui l'ordine non importa.
>
> Immagine mentale: ordina i dati e cammina lungo la fila dallo 0% al 100%; il quantile $p$ è il punto dove ti sei lasciato dietro la frazione $p$ dei dati. Se quel punto cade **tra due valori**, si **interpola** (la media dei due è solo il caso "a metà strada"; da qui le piccole differenze tra NumPy e pandas).

### L'interquartile range (IQR)

$$\text{IQR} = Q_3 - Q_1$$

La distanza tra terzo e primo quartile: contiene il **50% centrale** dei dati, la "pancia" della distribuzione.

> ✅ Essendo costruito solo sui quartili, **ignora le code**. Un outlier mostruoso non muove Q1 e Q3, quindi l'IQR resta stabile. È alla dispersione ciò che la mediana è alla tendenza centrale: la versione robusta.

> 📦 **Box plot:** la scatola va da Q1 a Q3, la linea centrale è la mediana, i "baffi" arrivano fino a $1{,}5 \times \text{IQR}$ oltre i quartili. I punti oltre i baffi sono sospetti outlier — regola che rivedremo nella Sezione 7.

**Esempio.** Dati ordinati $[1, 3, 5, 7, 9, 11, 13, 15]$ ($n = 8$):

- Q2 (mediana): $(7+9)/2 = 8$
- Metà inferiore $[1,3,5,7]$ → Q1 $= (3+5)/2 = 4$
- Metà superiore $[9,11,13,15]$ → Q3 $= (11+13)/2 = 12$
- **IQR** $= 12 - 4 = 8$

> ⚠️ Esistono metodi diversi di interpolazione dei quartili: NumPy/pandas possono dare valori un filo diversi su dataset piccoli. Normale.

### QQ plot (quantile-quantile plot)

Scopo **diverso**: non misura lo spread, ma risponde a *"i miei dati seguono una distribuzione normale (gaussiana)?"* — assunzione di moltissimi test statistici.

**Idea:** confronta i **quantili osservati** dei dati con i **quantili teorici** attesi se i dati fossero perfettamente normali. Ogni punto:

- asse **x** → quantile teorico (dove *dovrebbe* stare se gaussiano)
- asse **y** → quantile osservato (dove *sta davvero*)

> 🧍 **Analogia:** immagina due file di persone in ordine di altezza — **Fila A** i tuoi dati veri, **Fila B** persone generate da una gaussiana perfetta. Accoppi il più basso di A con il più basso di B (→ un punto: x = ideale, y = tuo dato), poi il secondo con il secondo, e così via fino al più alto. Se le altezze combaciano, tutti i punti cadono sulla diagonale.

**Come si legge:**

| Aspetto del grafico | Interpretazione |
|---------------------|-----------------|
| Punti su una **retta diagonale** | dati normali ✅ |
| Punti che **si incurvano agli estremi** | code diverse dalla normale (spesso code pesanti, più outlier) |
| Curvatura a **"S" / banana** | asimmetria (skew) |

> 💡 È uno strumento **visivo e qualitativo**: non dà un numero, dà un colpo d'occhio su *quanto* e *in che modo* i dati si discostano dalla normalità.

> 🎯 **Il riferimento non deve per forza essere la normale.** Il meccanismo funziona contro *qualsiasi* distribuzione teorica (normale, esponenziale, uniforme, t, chi-quadro, F…): ordini i tuoi dati, ordini i quantili teorici di quella distribuzione, li accoppi. Ma **non tutte sono a campana**:
>
> - **Gaussiana** e **t di Student** → campane simmetriche (la t con code più pesanti; converge alla normale al crescere dei gradi di libertà).
> - **Chi-quadro** e **F** → **asimmetriche**, sbilanciate a destra e definite solo sui valori positivi: non sono campane.
>
> Quando si dice "QQ plot" senza specificare, si intende quasi sempre il confronto con la **normale**. Incontrerai t, chi-quadro e F più avanti (t-test → Sez. 10, ANOVA → Sez. 13, test su frequenze/varianze).
