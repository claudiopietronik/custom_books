/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Statistica).
   Ogni pagina costruisce il menu in alto da qui: aggiungere un capitolo
   significa aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   `parte`: etichetta della parte del libro (raggruppa le card in copertina).
   La numerazione `n` è globale 1…46 (serve alla navigazione prec./succ.).
   ========================================================================= */

const BOOK = { titolo: "Statistica", glyph: "σ", tema: "stat-theme" };

const TOC = [
  /* ===================== PARTE I — STATISTICA DESCRITTIVA ================= */
  {
    n: 1, parte: "I · Statistica descrittiva",
    titolo: "Introduzione", file: "cap01-introduzione.html", stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "A cosa serve la statistica" },
      { id: "s1-2", n: "1.2", t: "Descrittiva, probabilità, inferenza" },
      { id: "s1-3", n: "1.3", t: "Com'è fatto questo libro" }
    ]
  },
  {
    n: 2, parte: "I · Statistica descrittiva",
    titolo: "Fondamenta: dati e variabili", file: "cap02-fondamenta.html", stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Popolazione e campione" },
      { id: "s2-2", n: "2.2", t: "Tipi di variabile" },
      { id: "s2-3", n: "2.3", t: "Parametri e statistiche" },
      { id: "s2-4", n: "2.4", t: "Notazione: μ, σ, N contro x̄, s, n" },
      { id: "s2-5", n: "2.5", t: "Esercizi" },
      { id: "s2-6", n: "2.6", t: "Soluzioni" }
    ]
  },
  {
    n: 3, parte: "I · Statistica descrittiva",
    titolo: "Tendenza centrale", file: "cap03-tendenza-centrale.html", stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Media aritmetica" },
      { id: "s3-2", n: "3.2", t: "Mediana" },
      { id: "s3-3", n: "3.3", t: "Moda" },
      { id: "s3-4", n: "3.4", t: "Quale scegliere: robustezza e asimmetria" },
      { id: "s3-5", n: "3.5", t: "Esercizi" },
      { id: "s3-6", n: "3.6", t: "Soluzioni" }
    ]
  },
  {
    n: 4, parte: "I · Statistica descrittiva",
    titolo: "Misure di dispersione", file: "cap04-dispersione.html", stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Lo scarto dalla media" },
      { id: "s4-2", n: "4.2", t: "La varianza" },
      { id: "s4-3", n: "4.3", t: "Campione contro popolazione: n−1" },
      { id: "s4-4", n: "4.4", t: "La deviazione standard" },
      { id: "s4-5", n: "4.5", t: "Esercizi" },
      { id: "s4-6", n: "4.6", t: "Soluzioni" }
    ]
  },
  {
    n: 5, parte: "I · Statistica descrittiva",
    titolo: "Quantili, IQR e QQ plot", file: "cap05-quantili-iqr.html", stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Percentili e quartili" },
      { id: "s5-2", n: "5.2", t: "Lo scarto interquartile (IQR)" },
      { id: "s5-3", n: "5.3", t: "Il box plot" },
      { id: "s5-4", n: "5.4", t: "Il QQ plot: i dati sono normali?" },
      { id: "s5-5", n: "5.5", t: "Esercizi" },
      { id: "s5-6", n: "5.6", t: "Soluzioni" }
    ]
  },
  {
    n: 6, parte: "I · Statistica descrittiva",
    titolo: "Momenti statistici", file: "cap06-momenti.html", stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "L'idea di momento" },
      { id: "s6-2", n: "6.2", t: "Media e varianza come momenti" },
      { id: "s6-3", n: "6.3", t: "Asimmetria (skewness)" },
      { id: "s6-4", n: "6.4", t: "Curtosi" },
      { id: "s6-5", n: "6.5", t: "Esercizi" },
      { id: "s6-6", n: "6.6", t: "Soluzioni" }
    ]
  },
  {
    n: 7, parte: "I · Statistica descrittiva",
    titolo: "Istogrammi", file: "cap07-istogrammi.html", stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Contare in intervalli" },
      { id: "s7-2", n: "7.2", t: "Il numero di bin cambia tutto" },
      { id: "s7-3", n: "7.3", t: "Densità e frequenza relativa" },
      { id: "s7-4", n: "7.4", t: "Leggere la forma di una distribuzione" },
      { id: "s7-5", n: "7.5", t: "Esercizi" },
      { id: "s7-6", n: "7.6", t: "Soluzioni" }
    ]
  },
  {
    n: 8, parte: "I · Statistica descrittiva",
    titolo: "Violin plot e KDE", file: "cap08-violin-kde.html", stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Dal box plot al violin" },
      { id: "s8-2", n: "8.2", t: "La stima di densità kernel" },
      { id: "s8-3", n: "8.3", t: "La bandwidth: liscio o frastagliato" },
      { id: "s8-4", n: "8.4", t: "Confrontare gruppi" },
      { id: "s8-5", n: "8.5", t: "Esercizi" },
      { id: "s8-6", n: "8.6", t: "Soluzioni" }
    ]
  },
  {
    n: 9, parte: "I · Statistica descrittiva",
    titolo: "Entropia", file: "cap09-entropia.html", stato: "pronto",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Sorpresa e informazione" },
      { id: "s9-2", n: "9.2", t: "La formula di Shannon" },
      { id: "s9-3", n: "9.3", t: "Perché il logaritmo" },
      { id: "s9-4", n: "9.4", t: "Entropia come dispersione" },
      { id: "s9-5", n: "9.5", t: "Esercizi" },
      { id: "s9-6", n: "9.6", t: "Soluzioni" }
    ]
  },

  /* ===================== PARTE II — NORMALIZZAZIONE E OUTLIER ============= */
  {
    n: 10, parte: "II · Normalizzazione e outlier",
    titolo: "Z-score e min-max", file: "cap10-scaling.html", stato: "pronto",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Perché scalare i dati" },
      { id: "s10-2", n: "10.2", t: "Lo z-score (standardizzazione)" },
      { id: "s10-3", n: "10.3", t: "Il min-max scaling" },
      { id: "s10-4", n: "10.4", t: "Quale usare e quando" },
      { id: "s10-5", n: "10.5", t: "Esercizi" },
      { id: "s10-6", n: "10.6", t: "Soluzioni" }
    ]
  },
  {
    n: 11, parte: "II · Normalizzazione e outlier",
    titolo: "Outlier", file: "cap11-outlier.html", stato: "pronto",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Cos'è un outlier" },
      { id: "s11-2", n: "11.2", t: "Il criterio z-score" },
      { id: "s11-3", n: "11.3", t: "Il criterio IQR" },
      { id: "s11-4", n: "11.4", t: "Rimuovere o no: le strategie" },
      { id: "s11-5", n: "11.5", t: "Esercizi" },
      { id: "s11-6", n: "11.6", t: "Soluzioni" }
    ]
  },
  {
    n: 12, parte: "II · Normalizzazione e outlier",
    titolo: "Dati multivariati", file: "cap12-multivariati.html", stato: "pronto",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Outlier in più dimensioni" },
      { id: "s12-2", n: "12.2", t: "La distanza di Mahalanobis" },
      { id: "s12-3", n: "12.3", t: "Scalare feature multiple" },
      { id: "s12-4", n: "12.4", t: "Strategie pratiche" },
      { id: "s12-5", n: "12.5", t: "Esercizi" },
      { id: "s12-6", n: "12.6", t: "Soluzioni" }
    ]
  },

  /* ===================== PARTE III — PROBABILITÀ ========================= */
  {
    n: 13, parte: "III · Probabilità",
    titolo: "Cos'è la probabilità", file: "cap13-cos-e-probabilita.html", stato: "pronto",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Frequentista e soggettiva" },
      { id: "s13-2", n: "13.2", t: "Gli assiomi" },
      { id: "s13-3", n: "13.3", t: "Eventi, unione, intersezione" },
      { id: "s13-4", n: "13.4", t: "Esercizi" },
      { id: "s13-5", n: "13.5", t: "Soluzioni" }
    ]
  },
  {
    n: 14, parte: "III · Probabilità",
    titolo: "Probabilità e proporzione", file: "cap14-probabilita-proporzione.html", stato: "pronto",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Frequenza relativa" },
      { id: "s14-2", n: "14.2", t: "Dalla proporzione alla probabilità" },
      { id: "s14-3", n: "14.3", t: "Densità di probabilità" },
      { id: "s14-4", n: "14.4", t: "Esercizi" },
      { id: "s14-5", n: "14.5", t: "Soluzioni" }
    ]
  },
  {
    n: 15, parte: "III · Probabilità",
    titolo: "Odds e calcolo", file: "cap15-odds.html", stato: "pronto",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Regola della somma e del prodotto" },
      { id: "s15-2", n: "15.2", t: "Le odds (quote)" },
      { id: "s15-3", n: "15.3", t: "Da probabilità a odds e ritorno" },
      { id: "s15-4", n: "15.4", t: "Esercizi" },
      { id: "s15-5", n: "15.5", t: "Soluzioni" }
    ]
  },
  {
    n: 16, parte: "III · Probabilità",
    titolo: "PMF e PDF", file: "cap16-pmf-pdf.html", stato: "pronto",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Variabili discrete e continue" },
      { id: "s16-2", n: "16.2", t: "La funzione di massa (PMF)" },
      { id: "s16-3", n: "16.3", t: "La densità (PDF)" },
      { id: "s16-4", n: "16.4", t: "Perché P(X=x)=0 nel continuo" },
      { id: "s16-5", n: "16.5", t: "Esercizi" },
      { id: "s16-6", n: "16.6", t: "Soluzioni" }
    ]
  },
  {
    n: 17, parte: "III · Probabilità",
    titolo: "La CDF", file: "cap17-cdf.html", stato: "pronto",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "Probabilità cumulata" },
      { id: "s17-2", n: "17.2", t: "Dalla PDF alla CDF e ritorno" },
      { id: "s17-3", n: "17.3", t: "Percentili dalla CDF" },
      { id: "s17-4", n: "17.4", t: "Esercizi" },
      { id: "s17-5", n: "17.5", t: "Soluzioni" }
    ]
  },
  {
    n: 18, parte: "III · Probabilità",
    titolo: "Campionamento e Monte Carlo", file: "cap18-sampling.html", stato: "pronto",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "Estrarre da una distribuzione" },
      { id: "s18-2", n: "18.2", t: "Variabilità campionaria" },
      { id: "s18-3", n: "18.3", t: "Il metodo Monte Carlo" },
      { id: "s18-4", n: "18.4", t: "Esercizi" },
      { id: "s18-5", n: "18.5", t: "Soluzioni" }
    ]
  },
  {
    n: 19, parte: "III · Probabilità",
    titolo: "Valore atteso", file: "cap19-valore-atteso.html", stato: "da-fare",
    sezioni: [
      { id: "s19-1", n: "19.1", t: "La media di una distribuzione" },
      { id: "s19-2", n: "19.2", t: "La formula del valore atteso" },
      { id: "s19-3", n: "19.3", t: "Linearità e varianza" },
      { id: "s19-4", n: "19.4", t: "Esercizi" },
      { id: "s19-5", n: "19.5", t: "Soluzioni" }
    ]
  },
  {
    n: 20, parte: "III · Probabilità",
    titolo: "Probabilità condizionata", file: "cap20-condizionata.html", stato: "da-fare",
    sezioni: [
      { id: "s20-1", n: "20.1", t: "Aggiornare con l'informazione" },
      { id: "s20-2", n: "20.2", t: "La formula e la regola del prodotto" },
      { id: "s20-3", n: "20.3", t: "Indipendenza" },
      { id: "s20-4", n: "20.4", t: "Alberi di probabilità" },
      { id: "s20-5", n: "20.5", t: "Esercizi" },
      { id: "s20-6", n: "20.6", t: "Soluzioni" }
    ]
  },
  {
    n: 21, parte: "III · Probabilità",
    titolo: "Il teorema di Bayes", file: "cap21-bayes.html", stato: "da-fare",
    sezioni: [
      { id: "s21-1", n: "21.1", t: "Invertire il condizionamento" },
      { id: "s21-2", n: "21.2", t: "Prior, likelihood, posterior" },
      { id: "s21-3", n: "21.3", t: "Il test medico che inganna tutti" },
      { id: "s21-4", n: "21.4", t: "Esercizi" },
      { id: "s21-5", n: "21.5", t: "Soluzioni" }
    ]
  },
  {
    n: 22, parte: "III · Probabilità",
    titolo: "Legge dei grandi numeri", file: "cap22-lln.html", stato: "da-fare",
    sezioni: [
      { id: "s22-1", n: "22.1", t: "La media si stabilizza" },
      { id: "s22-2", n: "22.2", t: "Enunciato e intuizione" },
      { id: "s22-3", n: "22.3", t: "Cosa NON dice (la fallacia del giocatore)" },
      { id: "s22-4", n: "22.4", t: "Esercizi" },
      { id: "s22-5", n: "22.5", t: "Soluzioni" }
    ]
  },

  /* ===================== PARTE IV — STATISTICA INFERENZIALE ============== */
  {
    n: 23, parte: "IV · Statistica inferenziale",
    titolo: "Il teorema del limite centrale", file: "cap23-clt.html", stato: "da-fare",
    sezioni: [
      { id: "s23-1", n: "23.1", t: "La distribuzione delle medie" },
      { id: "s23-2", n: "23.2", t: "L'enunciato del TLC" },
      { id: "s23-3", n: "23.3", t: "L'errore standard" },
      { id: "s23-4", n: "23.4", t: "Perché la normale è ovunque" },
      { id: "s23-5", n: "23.5", t: "Esercizi" },
      { id: "s23-6", n: "23.6", t: "Soluzioni" }
    ]
  },
  {
    n: 24, parte: "IV · Statistica inferenziale",
    titolo: "Il test d'ipotesi", file: "cap24-test-ipotesi.html", stato: "da-fare",
    sezioni: [
      { id: "s24-1", n: "24.1", t: "H₀ e H₁" },
      { id: "s24-2", n: "24.2", t: "La logica per assurdo" },
      { id: "s24-3", n: "24.3", t: "Statistica test e regione di rifiuto" },
      { id: "s24-4", n: "24.4", t: "Le variabili: IV e DV" },
      { id: "s24-5", n: "24.5", t: "Esercizi" },
      { id: "s24-6", n: "24.6", t: "Soluzioni" }
    ]
  },
  {
    n: 25, parte: "IV · Statistica inferenziale",
    titolo: "Il p-value", file: "cap25-pvalue.html", stato: "da-fare",
    sezioni: [
      { id: "s25-1", n: "25.1", t: "Cosa misura davvero" },
      { id: "s25-2", n: "25.2", t: "La soglia α" },
      { id: "s25-3", n: "25.3", t: "Una e due code" },
      { id: "s25-4", n: "25.4", t: "Cosa il p-value NON è" },
      { id: "s25-5", n: "25.5", t: "Esercizi" },
      { id: "s25-6", n: "25.6", t: "Soluzioni" }
    ]
  },
  {
    n: 26, parte: "IV · Statistica inferenziale",
    titolo: "Errori di Tipo I e II", file: "cap26-errori.html", stato: "da-fare",
    sezioni: [
      { id: "s26-1", n: "26.1", t: "La tabella 2×2 delle decisioni" },
      { id: "s26-2", n: "26.2", t: "α, β e il loro conflitto" },
      { id: "s26-3", n: "26.3", t: "La potenza statistica" },
      { id: "s26-4", n: "26.4", t: "Dimensione del campione" },
      { id: "s26-5", n: "26.5", t: "Esercizi" },
      { id: "s26-6", n: "26.6", t: "Soluzioni" }
    ]
  },
  {
    n: 27, parte: "IV · Statistica inferenziale",
    titolo: "Gradi di libertà", file: "cap27-gradi-liberta.html", stato: "da-fare",
    sezioni: [
      { id: "s27-1", n: "27.1", t: "Un'intuizione con esempi" },
      { id: "s27-2", n: "27.2", t: "Perché n−1 negli stimatori" },
      { id: "s27-3", n: "27.3", t: "Gradi di libertà nei test" },
      { id: "s27-4", n: "27.4", t: "Esercizi" },
      { id: "s27-5", n: "27.5", t: "Soluzioni" }
    ]
  },
  {
    n: 28, parte: "IV · Statistica inferenziale",
    titolo: "Parametrico o no", file: "cap28-parametrico.html", stato: "da-fare",
    sezioni: [
      { id: "s28-1", n: "28.1", t: "Le assunzioni dei test parametrici" },
      { id: "s28-2", n: "28.2", t: "Quando cadono" },
      { id: "s28-3", n: "28.3", t: "L'alternativa non parametrica" },
      { id: "s28-4", n: "28.4", t: "Esercizi" },
      { id: "s28-5", n: "28.5", t: "Soluzioni" }
    ]
  },
  {
    n: 29, parte: "IV · Statistica inferenziale",
    titolo: "Confronti multipli", file: "cap29-confronti-multipli.html", stato: "da-fare",
    sezioni: [
      { id: "s29-1", n: "29.1", t: "Il problema del test ripetuto" },
      { id: "s29-2", n: "29.2", t: "L'errore familywise" },
      { id: "s29-3", n: "29.3", t: "Bonferroni e alternative" },
      { id: "s29-4", n: "29.4", t: "Il false discovery rate" },
      { id: "s29-5", n: "29.5", t: "Esercizi" },
      { id: "s29-6", n: "29.6", t: "Soluzioni" }
    ]
  },
  {
    n: 30, parte: "IV · Statistica inferenziale",
    titolo: "Anatomia del t-test", file: "cap30-anatomia-ttest.html", stato: "da-fare",
    sezioni: [
      { id: "s30-1", n: "30.1", t: "Segnale su rumore" },
      { id: "s30-2", n: "30.2", t: "La statistica t" },
      { id: "s30-3", n: "30.3", t: "La distribuzione t di Student" },
      { id: "s30-4", n: "30.4", t: "Dalla t al p-value" },
      { id: "s30-5", n: "30.5", t: "Esercizi" },
      { id: "s30-6", n: "30.6", t: "Soluzioni" }
    ]
  },
  {
    n: 31, parte: "IV · Statistica inferenziale",
    titolo: "t-test a un campione", file: "cap31-ttest-uno.html", stato: "da-fare",
    sezioni: [
      { id: "s31-1", n: "31.1", t: "Confrontare con un valore atteso" },
      { id: "s31-2", n: "31.2", t: "La formula" },
      { id: "s31-3", n: "31.3", t: "Esempio completo" },
      { id: "s31-4", n: "31.4", t: "Esercizi" },
      { id: "s31-5", n: "31.5", t: "Soluzioni" }
    ]
  },
  {
    n: 32, parte: "IV · Statistica inferenziale",
    titolo: "t-test a due campioni", file: "cap32-ttest-due.html", stato: "da-fare",
    sezioni: [
      { id: "s32-1", n: "32.1", t: "Campioni indipendenti" },
      { id: "s32-2", n: "32.2", t: "Il t-test appaiato" },
      { id: "s32-3", n: "32.3", t: "Indipendente o appaiato?" },
      { id: "s32-4", n: "32.4", t: "Esempio completo" },
      { id: "s32-5", n: "32.5", t: "Esercizi" },
      { id: "s32-6", n: "32.6", t: "Soluzioni" }
    ]
  },
  {
    n: 33, parte: "IV · Statistica inferenziale",
    titolo: "Test non parametrici", file: "cap33-nonparametrici.html", stato: "da-fare",
    sezioni: [
      { id: "s33-1", n: "33.1", t: "Lavorare sui ranghi" },
      { id: "s33-2", n: "33.2", t: "Mann-Whitney e Wilcoxon" },
      { id: "s33-3", n: "33.3", t: "Il test di permutazione" },
      { id: "s33-4", n: "33.4", t: "Esercizi" },
      { id: "s33-5", n: "33.5", t: "Soluzioni" }
    ]
  },
  {
    n: 34, parte: "IV · Statistica inferenziale",
    titolo: "Intervalli di confidenza", file: "cap34-intervalli-confidenza.html", stato: "da-fare",
    sezioni: [
      { id: "s34-1", n: "34.1", t: "Dalla stima puntuale all'intervallo" },
      { id: "s34-2", n: "34.2", t: "La formula e il margine d'errore" },
      { id: "s34-3", n: "34.3", t: "Cosa significa «95%»" },
      { id: "s34-4", n: "34.4", t: "Legame con il test d'ipotesi" },
      { id: "s34-5", n: "34.5", t: "Esercizi" },
      { id: "s34-6", n: "34.6", t: "Soluzioni" }
    ]
  },
  {
    n: 35, parte: "IV · Statistica inferenziale",
    titolo: "Il bootstrap", file: "cap35-bootstrap.html", stato: "da-fare",
    sezioni: [
      { id: "s35-1", n: "35.1", t: "Ricampionare dai propri dati" },
      { id: "s35-2", n: "35.2", t: "L'algoritmo" },
      { id: "s35-3", n: "35.3", t: "Intervalli col bootstrap" },
      { id: "s35-4", n: "35.4", t: "Quando è utile" },
      { id: "s35-5", n: "35.5", t: "Esercizi" },
      { id: "s35-6", n: "35.6", t: "Soluzioni" }
    ]
  },
  {
    n: 36, parte: "IV · Statistica inferenziale",
    titolo: "Covarianza e Pearson", file: "cap36-covarianza-pearson.html", stato: "da-fare",
    sezioni: [
      { id: "s36-1", n: "36.1", t: "Variare insieme" },
      { id: "s36-2", n: "36.2", t: "La covarianza" },
      { id: "s36-3", n: "36.3", t: "Il coefficiente di Pearson" },
      { id: "s36-4", n: "36.4", t: "Correlazione non è causa" },
      { id: "s36-5", n: "36.5", t: "Esercizi" },
      { id: "s36-6", n: "36.6", t: "Soluzioni" }
    ]
  },
  {
    n: 37, parte: "IV · Statistica inferenziale",
    titolo: "Matrice e parziale", file: "cap37-matrice-parziale.html", stato: "da-fare",
    sezioni: [
      { id: "s37-1", n: "37.1", t: "La matrice di correlazione" },
      { id: "s37-2", n: "37.2", t: "Leggere una heatmap" },
      { id: "s37-3", n: "37.3", t: "La correlazione parziale" },
      { id: "s37-4", n: "37.4", t: "Variabili confondenti" },
      { id: "s37-5", n: "37.5", t: "Esercizi" },
      { id: "s37-6", n: "37.6", t: "Soluzioni" }
    ]
  },
  {
    n: 38, parte: "IV · Statistica inferenziale",
    titolo: "Spearman e Kendall", file: "cap38-spearman-kendall.html", stato: "da-fare",
    sezioni: [
      { id: "s38-1", n: "38.1", t: "Correlazione di rango" },
      { id: "s38-2", n: "38.2", t: "Il ρ di Spearman" },
      { id: "s38-3", n: "38.3", t: "Il τ di Kendall" },
      { id: "s38-4", n: "38.4", t: "Quando preferirle a Pearson" },
      { id: "s38-5", n: "38.5", t: "Esercizi" },
      { id: "s38-6", n: "38.6", t: "Soluzioni" }
    ]
  },
  {
    n: 39, parte: "IV · Statistica inferenziale",
    titolo: "Similarità del coseno", file: "cap39-cosine.html", stato: "da-fare",
    sezioni: [
      { id: "s39-1", n: "39.1", t: "Dati come vettori" },
      { id: "s39-2", n: "39.2", t: "L'angolo tra due vettori" },
      { id: "s39-3", n: "39.3", t: "Coseno e correlazione" },
      { id: "s39-4", n: "39.4", t: "Esercizi" },
      { id: "s39-5", n: "39.5", t: "Soluzioni" }
    ]
  },
  {
    n: 40, parte: "IV · Statistica inferenziale",
    titolo: "Cos'è l'ANOVA", file: "cap40-anova.html", stato: "da-fare",
    sezioni: [
      { id: "s40-1", n: "40.1", t: "Confrontare più di due gruppi" },
      { id: "s40-2", n: "40.2", t: "Varianza tra e dentro i gruppi" },
      { id: "s40-3", n: "40.3", t: "L'idea della statistica F" },
      { id: "s40-4", n: "40.4", t: "Esercizi" },
      { id: "s40-5", n: "40.5", t: "Soluzioni" }
    ]
  },
  {
    n: 41, parte: "IV · Statistica inferenziale",
    titolo: "Somme dei quadrati e F", file: "cap41-ss-f.html", stato: "da-fare",
    sezioni: [
      { id: "s41-1", n: "41.1", t: "Decomporre la variabilità" },
      { id: "s41-2", n: "41.2", t: "SS totale, tra, entro" },
      { id: "s41-3", n: "41.3", t: "Dai quadrati medi alla F" },
      { id: "s41-4", n: "41.4", t: "La tavola ANOVA" },
      { id: "s41-5", n: "41.5", t: "Esercizi" },
      { id: "s41-6", n: "41.6", t: "Soluzioni" }
    ]
  },
  {
    n: 42, parte: "IV · Statistica inferenziale",
    titolo: "Post-hoc e due vie", file: "cap42-posthoc.html", stato: "da-fare",
    sezioni: [
      { id: "s42-1", n: "42.1", t: "Dopo un'ANOVA significativa" },
      { id: "s42-2", n: "42.2", t: "I test post-hoc" },
      { id: "s42-3", n: "42.3", t: "ANOVA a due vie e interazione" },
      { id: "s42-4", n: "42.4", t: "Esercizi" },
      { id: "s42-5", n: "42.5", t: "Soluzioni" }
    ]
  },
  {
    n: 43, parte: "IV · Statistica inferenziale",
    titolo: "Regressione lineare", file: "cap43-regressione.html", stato: "da-fare",
    sezioni: [
      { id: "s43-1", n: "43.1", t: "La retta che meglio si adatta" },
      { id: "s43-2", n: "43.2", t: "I minimi quadrati" },
      { id: "s43-3", n: "43.3", t: "Pendenza, intercetta, residui" },
      { id: "s43-4", n: "43.4", t: "Il coefficiente R²" },
      { id: "s43-5", n: "43.5", t: "Esercizi" },
      { id: "s43-6", n: "43.6", t: "Soluzioni" }
    ]
  },
  {
    n: 44, parte: "IV · Statistica inferenziale",
    titolo: "Multipla e polinomiale", file: "cap44-regressione-multipla.html", stato: "da-fare",
    sezioni: [
      { id: "s44-1", n: "44.1", t: "Più predittori" },
      { id: "s44-2", n: "44.2", t: "Coefficienti e interpretazione" },
      { id: "s44-3", n: "44.3", t: "La regressione polinomiale" },
      { id: "s44-4", n: "44.4", t: "Esercizi" },
      { id: "s44-5", n: "44.5", t: "Soluzioni" }
    ]
  },
  {
    n: 45, parte: "IV · Statistica inferenziale",
    titolo: "Regressione logistica", file: "cap45-logistica.html", stato: "da-fare",
    sezioni: [
      { id: "s45-1", n: "45.1", t: "Prevedere una classe" },
      { id: "s45-2", n: "45.2", t: "La funzione logistica" },
      { id: "s45-3", n: "45.3", t: "Log-odds e coefficienti" },
      { id: "s45-4", n: "45.4", t: "Esercizi" },
      { id: "s45-5", n: "45.5", t: "Soluzioni" }
    ]
  },
  {
    n: 46, parte: "IV · Statistica inferenziale",
    titolo: "Under e overfitting", file: "cap46-overfitting.html", stato: "da-fare",
    sezioni: [
      { id: "s46-1", n: "46.1", t: "Il compromesso bias-varianza" },
      { id: "s46-2", n: "46.2", t: "Riconoscere l'overfitting" },
      { id: "s46-3", n: "46.3", t: "Validazione e regolarizzazione" },
      { id: "s46-4", n: "46.4", t: "Dove finisce il libro" },
      { id: "s46-5", n: "46.5", t: "Esercizi" },
      { id: "s46-6", n: "46.6", t: "Soluzioni" }
    ]
  }
];
