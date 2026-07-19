/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Python per la Data Science).
   Companion pratico del libro "Python": l'uso delle librerie del data scientist
   (NumPy, pandas, Matplotlib, seaborn, SciPy, scikit-learn, PyTorch). La teoria
   e la matematica dei modelli stanno nei libri "Machine Learning" e "Deep Learning";
   qui si impara a MANEGGIARE gli strumenti e i workflow reali.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Python per la Data Science", glyph: "📊", tema: "pds-theme" };

const TOC = [
  {
    n: 1,
    titolo: "L'ecosistema scientifico di Python",
    file: "cap01-ecosistema.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Perché uno stack di librerie" },
      { id: "s1-2", n: "1.2", t: "Le librerie del data scientist" },
      { id: "s1-3", n: "1.3", t: "Ambienti: pip, venv, conda" },
      { id: "s1-4", n: "1.4", t: "Jupyter e i notebook" },
      { id: "s1-5", n: "1.5", t: "Laboratorio: preparare l'ambiente" },
      { id: "s1-6", n: "1.6", t: "Esercizi" },
      { id: "s1-7", n: "1.7", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "NumPy: l'array n-dimensionale",
    file: "cap02-numpy-array.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Perché non bastano le liste" },
      { id: "s2-2", n: "2.2", t: "Creare array" },
      { id: "s2-3", n: "2.3", t: "dtype, shape, dimensioni" },
      { id: "s2-4", n: "2.4", t: "Indicizzazione e slicing" },
      { id: "s2-5", n: "2.5", t: "Reshape e assi" },
      { id: "s2-6", n: "2.6", t: "Laboratorio" },
      { id: "s2-7", n: "2.7", t: "Esercizi" },
      { id: "s2-8", n: "2.8", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "NumPy: vettorizzazione e broadcasting",
    file: "cap03-numpy-vettori.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Operazioni vettorizzate" },
      { id: "s3-2", n: "3.2", t: "Le ufunc e le funzioni matematiche" },
      { id: "s3-3", n: "3.3", t: "Il broadcasting" },
      { id: "s3-4", n: "3.4", t: "Riduzioni e assi" },
      { id: "s3-5", n: "3.5", t: "Maschere booleane e fancy indexing" },
      { id: "s3-6", n: "3.6", t: "Laboratorio" },
      { id: "s3-7", n: "3.7", t: "Esercizi" },
      { id: "s3-8", n: "3.8", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "pandas: Series e DataFrame",
    file: "cap04-pandas-strutture.html",
    stato: "da-fare",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "La Series" },
      { id: "s4-2", n: "4.2", t: "Il DataFrame" },
      { id: "s4-3", n: "4.3", t: "Caricare i dati (CSV, Excel…)" },
      { id: "s4-4", n: "4.4", t: "Ispezionare: head, info, describe" },
      { id: "s4-5", n: "4.5", t: "Indice e colonne" },
      { id: "s4-6", n: "4.6", t: "Laboratorio" },
      { id: "s4-7", n: "4.7", t: "Esercizi" },
      { id: "s4-8", n: "4.8", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "pandas: selezionare e filtrare",
    file: "cap05-pandas-selezione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Selezionare colonne e righe" },
      { id: "s5-2", n: "5.2", t: "loc e iloc" },
      { id: "s5-3", n: "5.3", t: "Filtri con maschere booleane" },
      { id: "s5-4", n: "5.4", t: "query e altre scorciatoie" },
      { id: "s5-5", n: "5.5", t: "Modificare e aggiungere colonne" },
      { id: "s5-6", n: "5.6", t: "Laboratorio" },
      { id: "s5-7", n: "5.7", t: "Esercizi" },
      { id: "s5-8", n: "5.8", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "pandas: pulire i dati",
    file: "cap06-pandas-pulizia.html",
    stato: "da-fare",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Il lavoro sporco (data cleaning)" },
      { id: "s6-2", n: "6.2", t: "Valori mancanti (NaN)" },
      { id: "s6-3", n: "6.3", t: "Tipi, conversioni, categorie" },
      { id: "s6-4", n: "6.4", t: "Stringhe e testo (.str)" },
      { id: "s6-5", n: "6.5", t: "Duplicati e outlier" },
      { id: "s6-6", n: "6.6", t: "Laboratorio" },
      { id: "s6-7", n: "6.7", t: "Esercizi" },
      { id: "s6-8", n: "6.8", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "pandas: raggruppare e combinare",
    file: "cap07-pandas-groupby.html",
    stato: "da-fare",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "groupby: split-apply-combine" },
      { id: "s7-2", n: "7.2", t: "Aggregazioni e trasformazioni" },
      { id: "s7-3", n: "7.3", t: "Tabelle pivot" },
      { id: "s7-4", n: "7.4", t: "Unire dati: merge e join" },
      { id: "s7-5", n: "7.5", t: "concat e append" },
      { id: "s7-6", n: "7.6", t: "Laboratorio" },
      { id: "s7-7", n: "7.7", t: "Esercizi" },
      { id: "s7-8", n: "7.8", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "pandas: date e serie temporali",
    file: "cap08-pandas-tempo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Il tipo datetime" },
      { id: "s8-2", n: "8.2", t: "L'indice temporale" },
      { id: "s8-3", n: "8.3", t: "Ricampionare (resample)" },
      { id: "s8-4", n: "8.4", t: "Finestre mobili (rolling)" },
      { id: "s8-5", n: "8.5", t: "Fusi orari e periodi (cenni)" },
      { id: "s8-6", n: "8.6", t: "Laboratorio" },
      { id: "s8-7", n: "8.7", t: "Esercizi" },
      { id: "s8-8", n: "8.8", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Visualizzare: Matplotlib",
    file: "cap09-matplotlib.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Figure e Axes" },
      { id: "s9-2", n: "9.2", t: "I tipi di grafico" },
      { id: "s9-3", n: "9.3", t: "Personalizzare (colori, assi, legende)" },
      { id: "s9-4", n: "9.4", t: "Sottografici (subplots)" },
      { id: "s9-5", n: "9.5", t: "Salvare le figure" },
      { id: "s9-6", n: "9.6", t: "Laboratorio" },
      { id: "s9-7", n: "9.7", t: "Esercizi" },
      { id: "s9-8", n: "9.8", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Visualizzare meglio: seaborn",
    file: "cap10-seaborn.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Perché seaborn" },
      { id: "s10-2", n: "10.2", t: "Distribuzioni (hist, kde, box)" },
      { id: "s10-3", n: "10.3", t: "Relazioni (scatter, regplot, pairplot)" },
      { id: "s10-4", n: "10.4", t: "Dati categorici" },
      { id: "s10-5", n: "10.5", t: "Heatmap e correlazioni" },
      { id: "s10-6", n: "10.6", t: "Laboratorio" },
      { id: "s10-7", n: "10.7", t: "Esercizi" },
      { id: "s10-8", n: "10.8", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "SciPy: statistica e ottimizzazione",
    file: "cap11-scipy.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Cos'è SciPy" },
      { id: "s11-2", n: "11.2", t: "scipy.stats: distribuzioni e test" },
      { id: "s11-3", n: "11.3", t: "Ottimizzazione (optimize)" },
      { id: "s11-4", n: "11.4", t: "Interpolazione e integrazione" },
      { id: "s11-5", n: "11.5", t: "Cenni: signal, linalg, sparse" },
      { id: "s11-6", n: "11.6", t: "Laboratorio" },
      { id: "s11-7", n: "11.7", t: "Esercizi" },
      { id: "s11-8", n: "11.8", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "scikit-learn: l'API in pratica",
    file: "cap12-sklearn-api.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "L'estimator API (fit/predict/transform)" },
      { id: "s12-2", n: "12.2", t: "Dataset e train/test split" },
      { id: "s12-3", n: "12.3", t: "Preprocessing (scaling, encoding, imputer)" },
      { id: "s12-4", n: "12.4", t: "Le Pipeline" },
      { id: "s12-5", n: "12.5", t: "Metriche e cross-validation" },
      { id: "s12-6", n: "12.6", t: "Laboratorio" },
      { id: "s12-7", n: "12.7", t: "Esercizi" },
      { id: "s12-8", n: "12.8", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Modelli in pratica: dalla regressione al boosting",
    file: "cap13-sklearn-modelli.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Regressione e classificazione con sklearn" },
      { id: "s13-2", n: "13.2", t: "Tuning: GridSearchCV e RandomizedSearchCV" },
      { id: "s13-3", n: "13.3", t: "XGBoost e LightGBM" },
      { id: "s13-4", n: "13.4", t: "statsmodels (regressione statistica)" },
      { id: "s13-5", n: "13.5", t: "Salvare e caricare i modelli (joblib)" },
      { id: "s13-6", n: "13.6", t: "Laboratorio" },
      { id: "s13-7", n: "13.7", t: "Esercizi" },
      { id: "s13-8", n: "13.8", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "PyTorch: i tensori",
    file: "cap14-pytorch-tensori.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Cos'è PyTorch" },
      { id: "s14-2", n: "14.2", t: "I tensori (creazione, dtype, shape)" },
      { id: "s14-3", n: "14.3", t: "Operazioni e broadcasting" },
      { id: "s14-4", n: "14.4", t: "La GPU (device, .to)" },
      { id: "s14-5", n: "14.5", t: "Interoperabilità con NumPy" },
      { id: "s14-6", n: "14.6", t: "Laboratorio" },
      { id: "s14-7", n: "14.7", t: "Esercizi" },
      { id: "s14-8", n: "14.8", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "PyTorch: autograd e discesa del gradiente",
    file: "cap15-pytorch-autograd.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Il grafo di calcolo" },
      { id: "s15-2", n: "15.2", t: "requires_grad e backward" },
      { id: "s15-3", n: "15.3", t: "Un training loop da zero" },
      { id: "s15-4", n: "15.4", t: "Gli optimizer (SGD, Adam)" },
      { id: "s15-5", n: "15.5", t: "Laboratorio" },
      { id: "s15-6", n: "15.6", t: "Esercizi" },
      { id: "s15-7", n: "15.7", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "PyTorch: reti neurali con nn.Module",
    file: "cap16-pytorch-reti.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "nn.Module e i layer" },
      { id: "s16-2", n: "16.2", t: "Perdite e attivazioni" },
      { id: "s16-3", n: "16.3", t: "Dataset e DataLoader" },
      { id: "s16-4", n: "16.4", t: "Il training loop completo" },
      { id: "s16-5", n: "16.5", t: "Valutazione e inferenza" },
      { id: "s16-6", n: "16.6", t: "Laboratorio" },
      { id: "s16-7", n: "16.7", t: "Esercizi" },
      { id: "s16-8", n: "16.8", t: "Soluzioni" }
    ]
  },
  {
    n: 17,
    titolo: "PyTorch: un progetto di classificazione",
    file: "cap17-pytorch-progetto.html",
    stato: "da-fare",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "Il problema e i dati" },
      { id: "s17-2", n: "17.2", t: "Costruire il modello" },
      { id: "s17-3", n: "17.3", t: "Addestrare (con GPU)" },
      { id: "s17-4", n: "17.4", t: "Valutare e salvare" },
      { id: "s17-5", n: "17.5", t: "Migliorare: overfitting e regolarizzazione" },
      { id: "s17-6", n: "17.6", t: "Laboratorio" },
      { id: "s17-7", n: "17.7", t: "Esercizi" },
      { id: "s17-8", n: "17.8", t: "Soluzioni" }
    ]
  },
  {
    n: 18,
    titolo: "Un progetto data science end-to-end",
    file: "cap18-progetto-completo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "Dal problema ai dati" },
      { id: "s18-2", n: "18.2", t: "EDA con pandas e seaborn" },
      { id: "s18-3", n: "18.3", t: "Preparazione e feature engineering" },
      { id: "s18-4", n: "18.4", t: "Modello, valutazione, interpretazione" },
      { id: "s18-5", n: "18.5", t: "Comunicare i risultati" },
      { id: "s18-6", n: "18.6", t: "Dove andare da qui" },
      { id: "s18-7", n: "18.7", t: "Esercizi" },
      { id: "s18-8", n: "18.8", t: "Soluzioni" }
    ]
  }
];
