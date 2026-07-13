## 2. Misure di tendenza centrale

La domanda: *"qual è il valore tipico, centrale, dei miei dati?"* Tre risposte diverse.

### Media aritmetica (mean)

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

Componente per componente:

| Simbolo | Significato |
|---------|-------------|
| $\bar{x}$ | "x segnato" (x-bar): la media del campione |
| $x_i$ | il singolo dato; $i$ è un indice-contatore ($x_1$ primo dato, $x_2$ secondo…) |
| $n$ | numero totale di dati |
| $\sum_{i=1}^{n}$ | sommatoria: somma tutti gli $x_i$ con $i$ da 1 a $n$, cioè $x_1 + x_2 + \dots + x_n$ |
| $\frac{1}{n}$ | dopo aver sommato, dividi per quanti sono |

**Esempio:** dati $[2, 4, 9]$ → somma $= 15$, $n = 3$ → $\bar{x} = 15/3 = 5$.

> ⚠️ **Punto chiave:** la media è *sensibile agli estremi*. Su $[2, 4, 9]$ la media è 5; se il 9 diventa 900, la media schizza a 302, pur non rappresentando nulla di reale.

### Mediana (median)

Nessuna formula: è una **procedura**. Ordina i dati dal più piccolo al più grande e prendi quello centrale.

- **$n$ dispari** → valore in posizione $\frac{n+1}{2}$.
  Con $[2,4,9]$: posizione $(3+1)/2 = 2$ → secondo valore = **4**.
- **$n$ pari** → media dei due valori centrali.
  Con $[2,4,9,20]$: i centrali sono 4 e 9 → $(4+9)/2 = 6{,}5$.

> ✅ **Punto chiave:** la mediana è *robusta* agli estremi. Se il 9 diventa 900, la mediana resta 4. Per questo su dati "storti" (redditi, prezzi delle case) si preferisce la mediana alla media.

### Moda (mode)

Il valore che compare **più spesso**. Su $[3, 3, 3, 7, 9]$ la moda è 3.

- È l'unica misura di centralità sensata anche su dati **non numerici** (es. il colore più frequente).
- Una distribuzione può avere più mode (bimodale, multimodale…).

### Riepilogo

| Misura | Come si calcola | Robusta agli estremi? | Uso tipico |
|--------|-----------------|:---------------------:|------------|
| Media | somma / conteggio | ❌ No | dati simmetrici |
| Mediana | valore centrale | ✅ Sì | dati asimmetrici |
| Moda | valore più frequente | ✅ Sì | dati categorici |

> 💡 Su dati **simmetrici** le tre misure quasi coincidono. Su dati **asimmetrici** (skewed) divergono: la distanza tra media e mediana è essa stessa un indizio di quanto la distribuzione è storta.
