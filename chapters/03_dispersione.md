## 3. Misure di dispersione

La domanda: *"quanto sono sparsi i dati?"* Due dataset possono avere la **stessa media** ma essere completamente diversi — uno concentrato, uno sparpagliato ovunque.

### L'idea di partenza: lo scarto (deviation)

Per misurare quanto un dato è lontano dal centro, calcolo il suo **scarto dalla media**:

$$x_i - \bar{x}$$

Se un dato vale 9 e la media è 5, lo scarto è $+4$; se vale 2, lo scarto è $-3$.

> ⚠️ Prima idea ingenua: "media degli scarti". **Non funziona**: positivi e negativi si annullano e la somma fa *sempre* zero. Serve un trucco per eliminare i segni.

### La varianza (variance)

Il trucco è **elevare al quadrato** ogni scarto prima di sommare: i segni spariscono e gli scarti grandi vengono puniti di più.

$$\sigma^2 = \frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2$$

| Simbolo | Significato |
|---------|-------------|
| $\sigma^2$ | "sigma quadro": varianza della **popolazione** |
| $\mu$ | "mu": media della **popolazione** |
| $N$ | dimensione della popolazione |
| $(x_i - \mu)$ | scarto del singolo dato dalla media |
| $(x_i - \mu)^2$ | scarto **al quadrato** → rende tutto positivo |
| $\sum$ | somma di tutti gli scarti quadrati |
| $\frac{1}{N}$ | divide per il conteggio → media degli scarti quadrati |

> 📌 A parole: **la varianza è la media degli scarti al quadrato**.

### Campione vs. popolazione: il famigerato $n-1$

Con un **campione** (non tutta la popolazione), la formula cambia in un punto:

$$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

- $s^2$ → varianza del **campione** (lettera latina)
- $\bar{x}$ → media del campione
- $n-1$ → **correzione di Bessel**

> 💡 **Perché $n-1$?** Sto usando $\bar{x}$, calcolata dai dati stessi. Fissata la media, gli scarti non sono più tutti liberi: noti $n-1$ scarti, l'ultimo è già determinato (la somma deve fare zero). Ho "consumato" un **grado di libertà**. Dividere per $n-1$ compensa e dà una stima *non distorta*; dividere per $n$ la sottostimerebbe.

#### Approfondimento: l'intuizione profonda del $n-1$

La media campionaria $\bar{x}$ si posiziona nel **punto di equilibrio dei tuoi dati**: il valore che rende gli scarti quadrati totali più piccoli possibile *per quel campione specifico*. Ma la vera media della popolazione $\mu$ sta altrove (non la conosci), e rispetto a quel $\mu$ vero i tuoi dati sarebbero in genere **un po' più lontani**. Usando $\bar{x}$ quindi **sottostimi** sistematicamente la dispersione reale. Dividere per $n-1$ (numero più piccolo) gonfia il risultato quel tanto che basta a compensare.

Il caso estremo **$n = 1$** lo dimostra: con un solo dato, $\bar{x}$ coincide con il dato e lo scarto è 0.

- Con $\frac{1}{n}$ → varianza $= 0/1 = 0$: dice "dispersione zero", assurdo (un punto non dice nulla sulla variabilità).
- Con $\frac{1}{n-1}$ → varianza $= 0/0 =$ **indefinita**: la risposta onesta, un solo dato non contiene informazione sullo spread.

> 🔍 **Campione o popolazione? Non lo leggi dai numeri, ma dalla domanda.** Gli stessi $[2,4,9]$ sono:
>
> - **popolazione** ($N$) se quei valori sono *tutto ciò che ti interessa* (i 3 voti di quei 3 studenti, punto);
> - **campione** ($n-1$) se sono un *estratto* da un gruppo più grande a cui vuoi generalizzare.
>
> Nell'analisi dati reale hai **quasi sempre un campione**, quindi $n-1$ è il default.

> 🐍 **Nota di programmazione (bug classico):** le librerie non concordano sul default.
>
> - **NumPy**: `np.std()` / `np.var()` usano $n$ (`ddof=0`, popolazione).
> - **pandas**: `.std()` / `.var()` usano $n-1$ (`ddof=1`, campione).
>
> Il parametro `ddof` ("delta degrees of freedom") controlla tutto: `ddof=1` → formula con $n-1$. Fonte frequente di bug silenziosi.

### La deviazione standard (standard deviation)

La varianza è in **unità al quadrato** (cm² se misuro in cm): poco intuitiva. La radice quadrata riporta tutto alle unità originali:

$$\sigma = \sqrt{\sigma^2} \qquad\qquad s = \sqrt{s^2}$$

> ✅ La deviazione standard è la dispersione "leggibile": di quanto, in media e nelle stesse unità dei dati, i valori si discostano dal centro. È la misura di spread che userai il 90% delle volte.

### Esempio numerico completo

Dati $[2, 4, 9]$, media $\bar{x} = 5$.

| $x_i$ | scarto $x_i - \bar{x}$ | scarto² |
|------|:---:|:---:|
| 2 | −3 | 9 |
| 4 | −1 | 1 |
| 9 | +4 | 16 |
| | **somma** | **26** |

- Popolazione: $\sigma^2 = 26/3 \approx 8{,}67$ → $\sigma = \sqrt{8{,}67} \approx 2{,}94$
- Campione: $s^2 = 26/2 = 13$ → $s = \sqrt{13} \approx 3{,}61$

La versione campionaria (con $n-1$) è più grande: è la correzione all'opera.
