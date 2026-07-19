/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Machine Learning).
   Libro della collana Dati, segnali & ML: il machine learning "classico" (fuori
   dalle reti neurali), dal punto di vista matematico, step by step. Impianto
   ispirato a "The Elements of Statistical Learning". Laboratori con scikit-learn.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Machine Learning", glyph: "ŷ", tema: "ml-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Cos'è il machine learning",
    file: "cap01-cos-e-il-ml.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Imparare dai dati" },
      { id: "s1-2", n: "1.2", t: "Supervisionato, non supervisionato, rinforzo" },
      { id: "s1-3", n: "1.3", t: "La notazione: X, y, f" },
      { id: "s1-4", n: "1.4", t: "Il flusso di un progetto ML" },
      { id: "s1-5", n: "1.5", t: "Laboratorio: il primo modello" },
      { id: "s1-6", n: "1.6", t: "Esercizi" },
      { id: "s1-7", n: "1.7", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "L'apprendimento supervisionato",
    file: "cap02-supervisionato.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "La funzione target e il rumore" },
      { id: "s2-2", n: "2.2", t: "Loss e rischio atteso" },
      { id: "s2-3", n: "2.3", t: "Minimi quadrati: il primo modello" },
      { id: "s2-4", n: "2.4", t: "k-NN: il secondo modello" },
      { id: "s2-5", n: "2.5", t: "Rischio empirico vs atteso" },
      { id: "s2-6", n: "2.6", t: "Laboratorio" },
      { id: "s2-7", n: "2.7", t: "Esercizi" },
      { id: "s2-8", n: "2.8", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Bias, varianza e generalizzazione",
    file: "cap03-bias-varianza.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Overfitting e underfitting" },
      { id: "s3-2", n: "3.2", t: "La scomposizione bias-varianza" },
      { id: "s3-3", n: "3.3", t: "La maledizione della dimensionalità" },
      { id: "s3-4", n: "3.4", t: "Train, validation, test" },
      { id: "s3-5", n: "3.5", t: "Laboratorio" },
      { id: "s3-6", n: "3.6", t: "Esercizi" },
      { id: "s3-7", n: "3.7", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Regressione lineare",
    file: "cap04-regressione-lineare.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Il modello lineare" },
      { id: "s4-2", n: "4.2", t: "Minimi quadrati: la derivazione" },
      { id: "s4-3", n: "4.3", t: "Le equazioni normali" },
      { id: "s4-4", n: "4.4", t: "Interpretare i coefficienti" },
      { id: "s4-5", n: "4.5", t: "Laboratorio (scikit-learn)" },
      { id: "s4-6", n: "4.6", t: "Esercizi" },
      { id: "s4-7", n: "4.7", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Regolarizzazione: Ridge, Lasso, Elastic Net",
    file: "cap05-regolarizzazione.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Perché regolarizzare" },
      { id: "s5-2", n: "5.2", t: "Ridge (penalità L2)" },
      { id: "s5-3", n: "5.3", t: "Lasso (L1) e la sparsità" },
      { id: "s5-4", n: "5.4", t: "Elastic Net e la scelta di λ" },
      { id: "s5-5", n: "5.5", t: "Laboratorio" },
      { id: "s5-6", n: "5.6", t: "Esercizi" },
      { id: "s5-7", n: "5.7", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Oltre il lineare: basi e spline",
    file: "cap06-basi-spline.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Espansioni di base" },
      { id: "s6-2", n: "6.2", t: "Regressione polinomiale" },
      { id: "s6-3", n: "6.3", t: "Spline e smoothing" },
      { id: "s6-4", n: "6.4", t: "Flessibilità contro regolarità" },
      { id: "s6-5", n: "6.5", t: "Laboratorio" },
      { id: "s6-6", n: "6.6", t: "Esercizi" },
      { id: "s6-7", n: "6.7", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Classificazione lineare: LDA e QDA",
    file: "cap07-lda-qda.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Il problema della classificazione" },
      { id: "s7-2", n: "7.2", t: "I confini decisionali" },
      { id: "s7-3", n: "7.3", t: "Analisi discriminante lineare" },
      { id: "s7-4", n: "7.4", t: "QDA e il confronto" },
      { id: "s7-5", n: "7.5", t: "Laboratorio" },
      { id: "s7-6", n: "7.6", t: "Esercizi" },
      { id: "s7-7", n: "7.7", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Regressione logistica",
    file: "cap08-logistica.html",
    stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Dalla regressione alla probabilità" },
      { id: "s8-2", n: "8.2", t: "La sigmoide e i log-odds" },
      { id: "s8-3", n: "8.3", t: "La verosimiglianza e la loss" },
      { id: "s8-4", n: "8.4", t: "Ottimizzazione e multiclasse (softmax)" },
      { id: "s8-5", n: "8.5", t: "Laboratorio" },
      { id: "s8-6", n: "8.6", t: "Esercizi" },
      { id: "s8-7", n: "8.7", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Naive Bayes e k-NN",
    file: "cap09-naive-bayes-knn.html",
    stato: "pronto",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Generativi vs discriminativi" },
      { id: "s9-2", n: "9.2", t: "Naive Bayes e l'indipendenza" },
      { id: "s9-3", n: "9.3", t: "k-NN per la classificazione" },
      { id: "s9-4", n: "9.4", t: "Scegliere k e la distanza" },
      { id: "s9-5", n: "9.5", t: "Laboratorio" },
      { id: "s9-6", n: "9.6", t: "Esercizi" },
      { id: "s9-7", n: "9.7", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Support Vector Machines",
    file: "cap10-svm.html",
    stato: "pronto",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Il margine massimo" },
      { id: "s10-2", n: "10.2", t: "Il problema di ottimizzazione" },
      { id: "s10-3", n: "10.3", t: "Soft margin e il parametro C" },
      { id: "s10-4", n: "10.4", t: "Il kernel trick" },
      { id: "s10-5", n: "10.5", t: "Laboratorio" },
      { id: "s10-6", n: "10.6", t: "Esercizi" },
      { id: "s10-7", n: "10.7", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Metodi kernel e Gaussian Processes",
    file: "cap11-kernel-gp.html",
    stato: "pronto",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Cos'è un kernel" },
      { id: "s11-2", n: "11.2", t: "Il trucco del kernel, generalizzato" },
      { id: "s11-3", n: "11.3", t: "Gaussian Processes (cenni)" },
      { id: "s11-4", n: "11.4", t: "Quando usarli" },
      { id: "s11-5", n: "11.5", t: "Laboratorio" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Alberi di decisione",
    file: "cap12-alberi.html",
    stato: "pronto",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Dividere lo spazio (CART)" },
      { id: "s12-2", n: "12.2", t: "Impurità: Gini ed entropia" },
      { id: "s12-3", n: "12.3", t: "Costruire l'albero" },
      { id: "s12-4", n: "12.4", t: "Pruning e overfitting" },
      { id: "s12-5", n: "12.5", t: "Laboratorio" },
      { id: "s12-6", n: "12.6", t: "Esercizi" },
      { id: "s12-7", n: "12.7", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Bagging e Random Forests",
    file: "cap13-random-forests.html",
    stato: "pronto",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "La varianza degli alberi" },
      { id: "s13-2", n: "13.2", t: "Bagging (bootstrap aggregating)" },
      { id: "s13-3", n: "13.3", t: "Random Forests: la decorrelazione" },
      { id: "s13-4", n: "13.4", t: "Importanza delle feature e OOB" },
      { id: "s13-5", n: "13.5", t: "Laboratorio" },
      { id: "s13-6", n: "13.6", t: "Esercizi" },
      { id: "s13-7", n: "13.7", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Boosting: AdaBoost e Gradient Boosting",
    file: "cap14-boosting.html",
    stato: "pronto",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "L'idea del boosting" },
      { id: "s14-2", n: "14.2", t: "AdaBoost" },
      { id: "s14-3", n: "14.3", t: "Gradient Boosting" },
      { id: "s14-4", n: "14.4", t: "XGBoost e LightGBM in pratica" },
      { id: "s14-5", n: "14.5", t: "Laboratorio" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Clustering: k-means e gerarchico",
    file: "cap15-clustering.html",
    stato: "pronto",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "L'apprendimento non supervisionato" },
      { id: "s15-2", n: "15.2", t: "k-means: l'algoritmo" },
      { id: "s15-3", n: "15.3", t: "Scegliere k (gomito, silhouette)" },
      { id: "s15-4", n: "15.4", t: "Clustering gerarchico" },
      { id: "s15-5", n: "15.5", t: "Laboratorio" },
      { id: "s15-6", n: "15.6", t: "Esercizi" },
      { id: "s15-7", n: "15.7", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "DBSCAN e Gaussian Mixture Models",
    file: "cap16-dbscan-gmm.html",
    stato: "pronto",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "I limiti di k-means" },
      { id: "s16-2", n: "16.2", t: "DBSCAN (densità)" },
      { id: "s16-3", n: "16.3", t: "Mixture di Gaussiane" },
      { id: "s16-4", n: "16.4", t: "L'algoritmo EM" },
      { id: "s16-5", n: "16.5", t: "Laboratorio" },
      { id: "s16-6", n: "16.6", t: "Esercizi" },
      { id: "s16-7", n: "16.7", t: "Soluzioni" }
    ]
  },
  {
    n: 17,
    titolo: "Riduzione della dimensionalità: PCA",
    file: "cap17-pca.html",
    stato: "pronto",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "Perché ridurre le dimensioni" },
      { id: "s17-2", n: "17.2", t: "PCA: la derivazione" },
      { id: "s17-3", n: "17.3", t: "Autovalori, autovettori, componenti" },
      { id: "s17-4", n: "17.4", t: "t-SNE e UMAP (cenni)" },
      { id: "s17-5", n: "17.5", t: "Laboratorio" },
      { id: "s17-6", n: "17.6", t: "Esercizi" },
      { id: "s17-7", n: "17.7", t: "Soluzioni" }
    ]
  },
  {
    n: 18,
    titolo: "Valutare i modelli",
    file: "cap18-valutazione.html",
    stato: "pronto",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "Il problema della valutazione" },
      { id: "s18-2", n: "18.2", t: "Cross-validation" },
      { id: "s18-3", n: "18.3", t: "Metriche: precision, recall, F1" },
      { id: "s18-4", n: "18.4", t: "Curve ROC e AUC" },
      { id: "s18-5", n: "18.5", t: "Laboratorio" },
      { id: "s18-6", n: "18.6", t: "Esercizi" },
      { id: "s18-7", n: "18.7", t: "Soluzioni" }
    ]
  },
  {
    n: 19,
    titolo: "Feature engineering e pipeline",
    file: "cap19-pipeline.html",
    stato: "da-fare",
    sezioni: [
      { id: "s19-1", n: "19.1", t: "Preparare i dati" },
      { id: "s19-2", n: "19.2", t: "Scaling, encoding, valori mancanti" },
      { id: "s19-3", n: "19.3", t: "Le pipeline di scikit-learn" },
      { id: "s19-4", n: "19.4", t: "Ricerca degli iperparametri" },
      { id: "s19-5", n: "19.5", t: "Laboratorio" },
      { id: "s19-6", n: "19.6", t: "Esercizi" },
      { id: "s19-7", n: "19.7", t: "Soluzioni" }
    ]
  },
  {
    n: 20,
    titolo: "Un progetto completo",
    file: "cap20-progetto-completo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s20-1", n: "20.1", t: "Il problema e i dati" },
      { id: "s20-2", n: "20.2", t: "Esplorazione e preparazione" },
      { id: "s20-3", n: "20.3", t: "Scelta e confronto dei modelli" },
      { id: "s20-4", n: "20.4", t: "Valutazione e interpretazione" },
      { id: "s20-5", n: "20.5", t: "Laboratorio: end-to-end" },
      { id: "s20-6", n: "20.6", t: "Dove andare da qui" },
      { id: "s20-7", n: "20.7", t: "Esercizi" },
      { id: "s20-8", n: "20.8", t: "Soluzioni" }
    ]
  }
];
