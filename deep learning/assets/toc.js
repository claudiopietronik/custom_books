/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Deep Learning).
   Traduce e ricostruisce, nello stile della collana, il testo di
   Goodfellow, Bengio & Courville, "Deep Learning" (MIT Press, 2016).
   Aggiungere un capitolo = cambiare il suo `stato` a "pronto", nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Deep Learning", glyph: "∇", tema: "dl-theme" };

const P1 = "Parte I · Matematica applicata e fondamenti di ML";
const P2 = "Parte II · Reti profonde: le pratiche moderne";
const P3 = "Parte III · La ricerca nel deep learning";

const TOC = [
  {
    n: 1,
    titolo: "Introduzione",
    file: "cap01-introduzione.html",
    parte: "Prologo",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Che cos'è il deep learning" },
      { id: "s1-2", n: "1.2", t: "L'intelligenza artificiale e il problema della conoscenza" },
      { id: "s1-3", n: "1.3", t: "Rappresentazioni: la profondità come gerarchia di concetti" },
      { id: "s1-4", n: "1.4", t: "A chi si rivolge questo libro" },
      { id: "s1-5", n: "1.5", t: "Le tendenze storiche del deep learning" },
      { id: "s1-6", n: "1.6", t: "Come è fatto questo libro" }
    ]
  },
  {
    n: 2,
    titolo: "Algebra lineare",
    file: "cap02-algebra-lineare.html",
    parte: P1,
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Scalari, vettori, matrici e tensori" },
      { id: "s2-2", n: "2.2", t: "Moltiplicare matrici e vettori" },
      { id: "s2-3", n: "2.3", t: "Matrici identità e inverse" },
      { id: "s2-4", n: "2.4", t: "Dipendenza lineare e span" },
      { id: "s2-5", n: "2.5", t: "Le norme" },
      { id: "s2-6", n: "2.6", t: "Matrici e vettori speciali" },
      { id: "s2-7", n: "2.7", t: "L'autodecomposizione" },
      { id: "s2-8", n: "2.8", t: "La decomposizione ai valori singolari (SVD)" },
      { id: "s2-9", n: "2.9", t: "La pseudoinversa di Moore-Penrose" },
      { id: "s2-10", n: "2.10", t: "Traccia e determinante" },
      { id: "s2-11", n: "2.11", t: "Esempio: l'analisi delle componenti principali (PCA)" },
      { id: "s2-12", n: "2.12", t: "Esercizi" },
      { id: "s2-13", n: "2.13", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Probabilità e teoria dell'informazione",
    file: "cap03-probabilita.html",
    parte: P1,
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Perché la probabilità" },
      { id: "s3-2", n: "3.2", t: "Variabili aleatorie e distribuzioni" },
      { id: "s3-3", n: "3.3", t: "Probabilità marginale e condizionata" },
      { id: "s3-4", n: "3.4", t: "La regola della catena e l'indipendenza" },
      { id: "s3-5", n: "3.5", t: "Aspettazione, varianza e covarianza" },
      { id: "s3-6", n: "3.6", t: "Le distribuzioni notevoli" },
      { id: "s3-7", n: "3.7", t: "La regola di Bayes" },
      { id: "s3-8", n: "3.8", t: "Teoria dell'informazione: entropia e divergenza KL" },
      { id: "s3-9", n: "3.9", t: "I modelli probabilistici strutturati" },
      { id: "s3-10", n: "3.10", t: "Esercizi" },
      { id: "s3-11", n: "3.11", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Calcolo numerico",
    file: "cap04-calcolo-numerico.html",
    parte: P1,
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Overflow e underflow" },
      { id: "s4-2", n: "4.2", t: "Il malcondizionamento" },
      { id: "s4-3", n: "4.3", t: "L'ottimizzazione basata sul gradiente" },
      { id: "s4-4", n: "4.4", t: "Oltre il gradiente: Jacobiana e Hessiana" },
      { id: "s4-5", n: "4.5", t: "L'ottimizzazione vincolata" },
      { id: "s4-6", n: "4.6", t: "Esempio: minimi quadrati lineari" },
      { id: "s4-7", n: "4.7", t: "Esercizi" },
      { id: "s4-8", n: "4.8", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Fondamenti di machine learning",
    file: "cap05-machine-learning.html",
    parte: P1,
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Gli algoritmi di apprendimento" },
      { id: "s5-2", n: "5.2", t: "Capacità, overfitting e underfitting" },
      { id: "s5-3", n: "5.3", t: "Iperparametri e insiemi di validazione" },
      { id: "s5-4", n: "5.4", t: "Stimatori, bias e varianza" },
      { id: "s5-5", n: "5.5", t: "La stima di massima verosimiglianza" },
      { id: "s5-6", n: "5.6", t: "La statistica bayesiana" },
      { id: "s5-7", n: "5.7", t: "Apprendimento supervisionato" },
      { id: "s5-8", n: "5.8", t: "Apprendimento non supervisionato" },
      { id: "s5-9", n: "5.9", t: "La discesa del gradiente stocastica" },
      { id: "s5-10", n: "5.10", t: "Costruire un algoritmo di ML" },
      { id: "s5-11", n: "5.11", t: "Le sfide che motivano il deep learning" },
      { id: "s5-12", n: "5.12", t: "Esercizi" },
      { id: "s5-13", n: "5.13", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Reti feedforward profonde",
    file: "cap06-feedforward.html",
    parte: P2,
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Esempio: imparare lo XOR" },
      { id: "s6-2", n: "6.2", t: "L'apprendimento basato sul gradiente" },
      { id: "s6-3", n: "6.3", t: "Le unità nascoste" },
      { id: "s6-4", n: "6.4", t: "La progettazione dell'architettura" },
      { id: "s6-5", n: "6.5", t: "La backpropagation" },
      { id: "s6-6", n: "6.6", t: "Note storiche" },
      { id: "s6-7", n: "6.7", t: "Esercizi" },
      { id: "s6-8", n: "6.8", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Regolarizzazione per il deep learning",
    file: "cap07-regolarizzazione.html",
    parte: P2,
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Penalità sulla norma dei parametri (L2, L1)" },
      { id: "s7-2", n: "7.2", t: "Le penalità come ottimizzazione vincolata" },
      { id: "s7-3", n: "7.3", t: "Data augmentation" },
      { id: "s7-4", n: "7.4", t: "Robustezza al rumore" },
      { id: "s7-5", n: "7.5", t: "Apprendimento multi-task" },
      { id: "s7-6", n: "7.6", t: "Early stopping" },
      { id: "s7-7", n: "7.7", t: "Condivisione dei parametri" },
      { id: "s7-8", n: "7.8", t: "Rappresentazioni sparse" },
      { id: "s7-9", n: "7.9", t: "Bagging e metodi ensemble" },
      { id: "s7-10", n: "7.10", t: "Dropout" },
      { id: "s7-11", n: "7.11", t: "Addestramento avversario" },
      { id: "s7-12", n: "7.12", t: "Esercizi" },
      { id: "s7-13", n: "7.13", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Ottimizzazione per l'addestramento",
    file: "cap08-ottimizzazione.html",
    parte: P2,
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Come l'apprendimento differisce dall'ottimizzazione" },
      { id: "s8-2", n: "8.2", t: "Le sfide dell'ottimizzazione delle reti" },
      { id: "s8-3", n: "8.3", t: "Algoritmi di base: SGD e momentum" },
      { id: "s8-4", n: "8.4", t: "Strategie di inizializzazione dei parametri" },
      { id: "s8-5", n: "8.5", t: "Learning rate adattivi: AdaGrad, RMSProp, Adam" },
      { id: "s8-6", n: "8.6", t: "Metodi approssimati del secondo ordine" },
      { id: "s8-7", n: "8.7", t: "Meta-algoritmi: batch normalization" },
      { id: "s8-8", n: "8.8", t: "Esercizi" },
      { id: "s8-9", n: "8.9", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Reti convoluzionali",
    file: "cap09-convoluzionali.html",
    parte: P2,
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "L'operazione di convoluzione" },
      { id: "s9-2", n: "9.2", t: "Le tre idee: sparsità, condivisione, equivarianza" },
      { id: "s9-3", n: "9.3", t: "Il pooling" },
      { id: "s9-4", n: "9.4", t: "Convoluzione e pooling come prior infinitamente forte" },
      { id: "s9-5", n: "9.5", t: "Varianti della convoluzione (stride, padding)" },
      { id: "s9-6", n: "9.6", t: "Output strutturati e tipi di dati" },
      { id: "s9-7", n: "9.7", t: "Algoritmi di convoluzione efficienti" },
      { id: "s9-8", n: "9.8", t: "Le basi neuroscientifiche" },
      { id: "s9-9", n: "9.9", t: "Esercizi" },
      { id: "s9-10", n: "9.10", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Modellazione di sequenze: reti ricorrenti",
    file: "cap10-ricorrenti.html",
    parte: P2,
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Srotolare i grafi computazionali" },
      { id: "s10-2", n: "10.2", t: "Le reti neurali ricorrenti (RNN)" },
      { id: "s10-3", n: "10.3", t: "La backpropagation nel tempo" },
      { id: "s10-4", n: "10.4", t: "RNN bidirezionali ed encoder-decoder" },
      { id: "s10-5", n: "10.5", t: "RNN profonde e ricorsive" },
      { id: "s10-6", n: "10.6", t: "La sfida delle dipendenze a lungo termine" },
      { id: "s10-7", n: "10.7", t: "LSTM e le reti con gate" },
      { id: "s10-8", n: "10.8", t: "La memoria esplicita" },
      { id: "s10-9", n: "10.9", t: "Esercizi" },
      { id: "s10-10", n: "10.10", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Metodologia pratica",
    file: "cap11-metodologia.html",
    parte: P2,
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Le metriche di prestazione" },
      { id: "s11-2", n: "11.2", t: "I modelli di base predefiniti" },
      { id: "s11-3", n: "11.3", t: "Serve raccogliere più dati?" },
      { id: "s11-4", n: "11.4", t: "La selezione degli iperparametri" },
      { id: "s11-5", n: "11.5", t: "Le strategie di debug" },
      { id: "s11-6", n: "11.6", t: "Esempio: riconoscere numeri a più cifre" },
      { id: "s11-7", n: "11.7", t: "Esercizi" },
      { id: "s11-8", n: "11.8", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Applicazioni",
    file: "cap12-applicazioni.html",
    parte: P2,
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Deep learning su larga scala" },
      { id: "s12-2", n: "12.2", t: "La visione artificiale" },
      { id: "s12-3", n: "12.3", t: "Il riconoscimento vocale" },
      { id: "s12-4", n: "12.4", t: "L'elaborazione del linguaggio naturale" },
      { id: "s12-5", n: "12.5", t: "Altre applicazioni" },
      { id: "s12-6", n: "12.6", t: "Esercizi" },
      { id: "s12-7", n: "12.7", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Modelli a fattori lineari",
    file: "cap13-fattori-lineari.html",
    parte: P3,
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "PCA probabilistica e analisi fattoriale" },
      { id: "s13-2", n: "13.2", t: "L'analisi delle componenti indipendenti (ICA)" },
      { id: "s13-3", n: "13.3", t: "Slow feature analysis" },
      { id: "s13-4", n: "13.4", t: "Sparse coding" },
      { id: "s13-5", n: "13.5", t: "L'interpretazione a varietà della PCA" },
      { id: "s13-6", n: "13.6", t: "Esercizi" },
      { id: "s13-7", n: "13.7", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Autoencoder",
    file: "cap14-autoencoder.html",
    parte: P3,
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Autoencoder sottocompleti" },
      { id: "s14-2", n: "14.2", t: "Autoencoder regolarizzati" },
      { id: "s14-3", n: "14.3", t: "Potere rappresentativo, dimensione e profondità" },
      { id: "s14-4", n: "14.4", t: "Encoder e decoder stocastici" },
      { id: "s14-5", n: "14.5", t: "Autoencoder di denoising" },
      { id: "s14-6", n: "14.6", t: "Imparare le varietà con gli autoencoder" },
      { id: "s14-7", n: "14.7", t: "Autoencoder contrattivi" },
      { id: "s14-8", n: "14.8", t: "Applicazioni degli autoencoder" },
      { id: "s14-9", n: "14.9", t: "Esercizi" },
      { id: "s14-10", n: "14.10", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Apprendimento di rappresentazioni",
    file: "cap15-rappresentazioni.html",
    parte: P3,
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Pretraining non supervisionato greedy" },
      { id: "s15-2", n: "15.2", t: "Transfer learning e domain adaptation" },
      { id: "s15-3", n: "15.3", t: "Disentangling dei fattori causali" },
      { id: "s15-4", n: "15.4", t: "La rappresentazione distribuita" },
      { id: "s15-5", n: "15.5", t: "Guadagni esponenziali dalla profondità" },
      { id: "s15-6", n: "15.6", t: "Fornire indizi per scoprire le cause" },
      { id: "s15-7", n: "15.7", t: "Esercizi" },
      { id: "s15-8", n: "15.8", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "Modelli probabilistici strutturati",
    file: "cap16-modelli-strutturati.html",
    parte: P3,
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "La sfida della modellazione non strutturata" },
      { id: "s16-2", n: "16.2", t: "Usare i grafi per descrivere la struttura" },
      { id: "s16-3", n: "16.3", t: "Grafi diretti e non diretti" },
      { id: "s16-4", n: "16.4", t: "Campionare dai modelli grafici" },
      { id: "s16-5", n: "16.5", t: "Vantaggi della modellazione strutturata" },
      { id: "s16-6", n: "16.6", t: "Inferenza e inferenza approssimata" },
      { id: "s16-7", n: "16.7", t: "L'approccio del deep learning" },
      { id: "s16-8", n: "16.8", t: "Esercizi" },
      { id: "s16-9", n: "16.9", t: "Soluzioni" }
    ]
  },
  {
    n: 17,
    titolo: "Metodi Monte Carlo",
    file: "cap17-monte-carlo.html",
    parte: P3,
    stato: "da-fare",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "Campionamento e metodi Monte Carlo" },
      { id: "s17-2", n: "17.2", t: "Importance sampling" },
      { id: "s17-3", n: "17.3", t: "I metodi Markov Chain Monte Carlo (MCMC)" },
      { id: "s17-4", n: "17.4", t: "Il Gibbs sampling" },
      { id: "s17-5", n: "17.5", t: "La sfida del mixing tra modi separati" },
      { id: "s17-6", n: "17.6", t: "Esercizi" },
      { id: "s17-7", n: "17.7", t: "Soluzioni" }
    ]
  },
  {
    n: 18,
    titolo: "Affrontare la funzione di partizione",
    file: "cap18-partizione.html",
    parte: P3,
    stato: "da-fare",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "Il gradiente della log-verosimiglianza" },
      { id: "s18-2", n: "18.2", t: "Massima verosimiglianza stocastica e contrastive divergence" },
      { id: "s18-3", n: "18.3", t: "La pseudo-verosimiglianza" },
      { id: "s18-4", n: "18.4", t: "Score matching e ratio matching" },
      { id: "s18-5", n: "18.5", t: "Noise-contrastive estimation" },
      { id: "s18-6", n: "18.6", t: "Stimare la funzione di partizione" },
      { id: "s18-7", n: "18.7", t: "Esercizi" },
      { id: "s18-8", n: "18.8", t: "Soluzioni" }
    ]
  },
  {
    n: 19,
    titolo: "Inferenza approssimata",
    file: "cap19-inferenza.html",
    parte: P3,
    stato: "da-fare",
    sezioni: [
      { id: "s19-1", n: "19.1", t: "L'inferenza come ottimizzazione" },
      { id: "s19-2", n: "19.2", t: "Expectation Maximization (EM)" },
      { id: "s19-3", n: "19.3", t: "Inferenza MAP e sparse coding" },
      { id: "s19-4", n: "19.4", t: "Inferenza variazionale e apprendimento" },
      { id: "s19-5", n: "19.5", t: "L'inferenza approssimata appresa" },
      { id: "s19-6", n: "19.6", t: "Esercizi" },
      { id: "s19-7", n: "19.7", t: "Soluzioni" }
    ]
  },
  {
    n: 20,
    titolo: "Modelli generativi profondi",
    file: "cap20-generativi.html",
    parte: P3,
    stato: "da-fare",
    sezioni: [
      { id: "s20-1", n: "20.1", t: "Le macchine di Boltzmann" },
      { id: "s20-2", n: "20.2", t: "Le macchine di Boltzmann ristrette (RBM)" },
      { id: "s20-3", n: "20.3", t: "Deep belief network e deep Boltzmann machine" },
      { id: "s20-4", n: "20.4", t: "Backpropagation attraverso operazioni casuali" },
      { id: "s20-5", n: "20.5", t: "Gli autoencoder variazionali (VAE)" },
      { id: "s20-6", n: "20.6", t: "Le reti generative avversarie (GAN)" },
      { id: "s20-7", n: "20.7", t: "Valutare i modelli generativi" },
      { id: "s20-8", n: "20.8", t: "Conclusione" },
      { id: "s20-9", n: "20.9", t: "Esercizi" },
      { id: "s20-10", n: "20.10", t: "Soluzioni" }
    ]
  }
];
