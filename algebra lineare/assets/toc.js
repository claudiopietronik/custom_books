/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro.
   Ogni pagina costruisce il menu in alto da qui: aggiungere un capitolo
   significa aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const TOC = [
  {
    n: 1,
    titolo: "Introduzione",
    file: "cap01-introduzione.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Cos'è l'algebra lineare e perché impararla" },
      { id: "s1-2", n: "1.2", t: "Come è fatto questo libro" },
      { id: "s1-3", n: "1.3", t: "Prerequisiti" },
      { id: "s1-4", n: "1.4", t: "Esercizi: come usarli davvero" },
      { id: "s1-5", n: "1.5", t: "Risorse e come proseguire" }
    ]
  },
  {
    n: 2,
    titolo: "Vettori",
    file: "cap02-vettori.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Scalari" },
      { id: "s2-2", n: "2.2", t: "Vettori: geometria e algebra" },
      { id: "s2-3", n: "2.3", t: "L'operazione di trasposizione" },
      { id: "s2-4", n: "2.4", t: "Addizione e sottrazione di vettori" },
      { id: "s2-5", n: "2.5", t: "Moltiplicazione vettore-scalare" },
      { id: "s2-6", n: "2.6", t: "Esercizi" },
      { id: "s2-7", n: "2.7", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Moltiplicazione tra vettori",
    file: "cap03-moltiplicazione-vettori.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Prodotto scalare: l'algebra" },
      { id: "s3-2", n: "3.2", t: "Proprietà del prodotto scalare" },
      { id: "s3-3", n: "3.3", t: "Prodotto scalare: la geometria" },
      { id: "s3-4", n: "3.4", t: "Algebra e geometria: perché coincidono" },
      { id: "s3-5", n: "3.5", t: "Combinazione lineare pesata" },
      { id: "s3-6", n: "3.6", t: "Il prodotto esterno" },
      { id: "s3-7", n: "3.7", t: "Moltiplicazione di Hadamard" },
      { id: "s3-8", n: "3.8", t: "Prodotto vettoriale" },
      { id: "s3-9", n: "3.9", t: "Vettori unitari" },
      { id: "s3-10", n: "3.10", t: "Esercizi" },
      { id: "s3-11", n: "3.11", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Spazi vettoriali",
    file: "cap04-spazi-vettoriali.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Dimensioni e campi" },
      { id: "s4-2", n: "4.2", t: "Spazi vettoriali" },
      { id: "s4-3", n: "4.3", t: "Sottospazi e spazi ambiente" },
      { id: "s4-4", n: "4.4", t: "Sottoinsiemi" },
      { id: "s4-5", n: "4.5", t: "Span (copertura lineare)" },
      { id: "s4-6", n: "4.6", t: "Indipendenza lineare" },
      { id: "s4-7", n: "4.7", t: "Base" },
      { id: "s4-8", n: "4.8", t: "Esercizi" },
      { id: "s4-9", n: "4.9", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Matrici",
    file: "cap05-matrici.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Interpretazioni e usi delle matrici" },
      { id: "s5-2", n: "5.2", t: "Termini e notazione" },
      { id: "s5-3", n: "5.3", t: "Dimensionalità" },
      { id: "s5-4", n: "5.4", t: "L'operazione di trasposizione" },
      { id: "s5-5", n: "5.5", t: "Zoologia delle matrici" },
      { id: "s5-6", n: "5.6", t: "Addizione e sottrazione" },
      { id: "s5-7", n: "5.7", t: "Moltiplicazione scalare-matrice" },
      { id: "s5-8", n: "5.8", t: "Lo “shifting” di una matrice" },
      { id: "s5-9", n: "5.9", t: "Diagonale e traccia" },
      { id: "s5-10", n: "5.10", t: "Esercizi" },
      { id: "s5-11", n: "5.11", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Moltiplicazione tra matrici",
    file: "cap06-moltiplicazione-matrici.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "La moltiplicazione “standard”" },
      { id: "s6-2", n: "6.2", t: "Moltiplicazione ed equazioni" },
      { id: "s6-3", n: "6.3", t: "Moltiplicazione con matrici diagonali" },
      { id: "s6-4", n: "6.4", t: "LIVE EVIL: la trasposta di un prodotto" },
      { id: "s6-5", n: "6.5", t: "Moltiplicazione matrice-vettore" },
      { id: "s6-6", n: "6.6", t: "Creare matrici simmetriche" },
      { id: "s6-7", n: "6.7", t: "Moltiplicare matrici simmetriche" },
      { id: "s6-8", n: "6.8", t: "Moltiplicazione di Hadamard" },
      { id: "s6-9", n: "6.9", t: "Prodotto scalare di Frobenius" },
      { id: "s6-10", n: "6.10", t: "Norme di matrici" },
      { id: "s6-11", n: "6.11", t: "E la divisione tra matrici?" },
      { id: "s6-12", n: "6.12", t: "Esercizi" },
      { id: "s6-13", n: "6.13", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Rango",
    file: "cap07-rango.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Sei cose da sapere sul rango" },
      { id: "s7-2", n: "7.2", t: "Interpretazioni del rango" },
      { id: "s7-3", n: "7.3", t: "Calcolare il rango" },
      { id: "s7-4", n: "7.4", t: "Rango e moltiplicazione scalare" },
      { id: "s7-5", n: "7.5", t: "Rango di matrici sommate" },
      { id: "s7-6", n: "7.6", t: "Rango di matrici moltiplicate" },
      { id: "s7-7", n: "7.7", t: "Rango di A, Aᵀ, AᵀA e AAᵀ" },
      { id: "s7-8", n: "7.8", t: "Rango di matrici casuali" },
      { id: "s7-9", n: "7.9", t: "Aumentare il rango con lo shifting" },
      { id: "s7-10", n: "7.10", t: "Le insidie del rango" },
      { id: "s7-11", n: "7.11", t: "Rango e span" },
      { id: "s7-12", n: "7.12", t: "Esercizi" },
      { id: "s7-13", n: "7.13", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Spazi delle matrici",
    file: "cap08-spazi-matrici.html",
    stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Spazio delle colonne" },
      { id: "s8-2", n: "8.2", t: "Spazio delle colonne: A e AAᵀ" },
      { id: "s8-3", n: "8.3", t: "Stabilire se v ∈ C(A)" },
      { id: "s8-4", n: "8.4", t: "Spazio delle righe" },
      { id: "s8-5", n: "8.5", t: "Spazi delle righe di A e AᵀA" },
      { id: "s8-6", n: "8.6", t: "Spazio nullo" },
      { id: "s8-7", n: "8.7", t: "Geometria dello spazio nullo" },
      { id: "s8-8", n: "8.8", t: "Sottospazi ortogonali" },
      { id: "s8-9", n: "8.9", t: "Le ortogonalità dei quattro spazi" },
      { id: "s8-10", n: "8.10", t: "Dimensionalità degli spazi" },
      { id: "s8-11", n: "8.11", t: "Ancora su Ax = b e Ay = 0" },
      { id: "s8-12", n: "8.12", t: "Esercizi" },
      { id: "s8-13", n: "8.13", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Numeri complessi",
    file: "cap09-numeri-complessi.html",
    stato: "pronto",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "I numeri complessi e ℂ" },
      { id: "s9-2", n: "9.2", t: "Cosa sono davvero i numeri complessi" },
      { id: "s9-3", n: "9.3", t: "Il coniugato complesso" },
      { id: "s9-4", n: "9.4", t: "Aritmetica complessa" },
      { id: "s9-5", n: "9.5", t: "Prodotto scalare complesso" },
      { id: "s9-6", n: "9.6", t: "Matrici complesse speciali" },
      { id: "s9-7", n: "9.7", t: "Esercizi" },
      { id: "s9-8", n: "9.8", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Sistemi di equazioni",
    file: "cap10-sistemi-equazioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Algebra e geometria delle equazioni" },
      { id: "s10-2", n: "10.2", t: "Dai sistemi alle matrici" },
      { id: "s10-3", n: "10.3", t: "Riduzione per righe" },
      { id: "s10-4", n: "10.4", t: "Eliminazione di Gauss" },
      { id: "s10-5", n: "10.5", t: "Forma a scala ridotta (RREF)" },
      { id: "s10-6", n: "10.6", t: "Eliminazione di Gauss-Jordan" },
      { id: "s10-7", n: "10.7", t: "Le possibilità per le soluzioni" },
      { id: "s10-8", n: "10.8", t: "Spazi delle matrici e riduzione per righe" },
      { id: "s10-9", n: "10.9", t: "Esercizi" },
      { id: "s10-10", n: "10.10", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Determinante",
    file: "cap11-determinante.html",
    stato: "pronto",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Caratteristiche del determinante" },
      { id: "s11-2", n: "11.2", t: "Determinante di una 2×2" },
      { id: "s11-3", n: "11.3", t: "Il polinomio caratteristico" },
      { id: "s11-4", n: "11.4", t: "Determinante di una 3×3" },
      { id: "s11-5", n: "11.5", t: "La procedura completa" },
      { id: "s11-6", n: "11.6", t: "Il Δ dei triangoli" },
      { id: "s11-7", n: "11.7", t: "Determinante e riduzione per righe" },
      { id: "s11-8", n: "11.8", t: "Δ e moltiplicazione scalare" },
      { id: "s11-9", n: "11.9", t: "Teoria vs pratica" },
      { id: "s11-10", n: "11.10", t: "Esercizi" },
      { id: "s11-11", n: "11.11", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Inversa di una matrice",
    file: "cap12-inversa.html",
    stato: "pronto",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Concetti e applicazioni" },
      { id: "s12-2", n: "12.2", t: "Inversa di una matrice diagonale" },
      { id: "s12-3", n: "12.3", t: "Inversa di una 2×2" },
      { id: "s12-4", n: "12.4", t: "L'algoritmo MCA" },
      { id: "s12-5", n: "12.5", t: "Inversa via riduzione per righe" },
      { id: "s12-6", n: "12.6", t: "Inversa sinistra" },
      { id: "s12-7", n: "12.7", t: "Inversa destra" },
      { id: "s12-8", n: "12.8", t: "La pseudoinversa, parte 1" },
      { id: "s12-9", n: "12.9", t: "Esercizi" },
      { id: "s12-10", n: "12.10", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Proiezioni",
    file: "cap13-proiezioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Proiezioni in ℝ²" },
      { id: "s13-2", n: "13.2", t: "Proiezioni in ℝᴺ" },
      { id: "s13-3", n: "13.3", t: "Componenti ortogonale e parallela" },
      { id: "s13-4", n: "13.4", t: "Matrici ortogonali" },
      { id: "s13-5", n: "13.5", t: "Ortogonalizzazione di Gram-Schmidt" },
      { id: "s13-6", n: "13.6", t: "Decomposizione QR" },
      { id: "s13-7", n: "13.7", t: "Inversa tramite QR" },
      { id: "s13-8", n: "13.8", t: "Esercizi" },
      { id: "s13-9", n: "13.9", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Minimi quadrati",
    file: "cap14-minimi-quadrati.html",
    stato: "pronto",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Introduzione" },
      { id: "s14-2", n: "14.2", t: "I 5 passi del model fitting" },
      { id: "s14-3", n: "14.3", t: "Terminologia" },
      { id: "s14-4", n: "14.4", t: "Minimi quadrati via inversa sinistra" },
      { id: "s14-5", n: "14.5", t: "Minimi quadrati via proiezione" },
      { id: "s14-6", n: "14.6", t: "Minimi quadrati via riduzione per righe" },
      { id: "s14-7", n: "14.7", t: "Previsioni e residui" },
      { id: "s14-8", n: "14.8", t: "Un esempio completo" }
    ]
  },
  {
    n: 15,
    titolo: "Autodecomposizione",
    file: "cap15-autodecomposizione.html",
    stato: "pronto",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Eigen-che?" },
      { id: "s15-2", n: "15.2", t: "Trovare gli autovalori" },
      { id: "s15-3", n: "15.3", t: "Trovare gli autovettori" },
      { id: "s15-4", n: "15.4", t: "Diagonalizzazione" },
      { id: "s15-5", n: "15.5", t: "Condizioni per la diagonalizzazione" },
      { id: "s15-6", n: "15.6", t: "Autovalori distinti e ripetuti" },
      { id: "s15-7", n: "15.7", t: "Soluzioni complesse" },
      { id: "s15-8", n: "15.8", t: "Matrici simmetriche" },
      { id: "s15-9", n: "15.9", t: "Autovalori di matrici singolari" },
      { id: "s15-10", n: "15.10", t: "Gli “eigenlayer” di una matrice" },
      { id: "s15-11", n: "15.11", t: "Potenze e inversa di una matrice" },
      { id: "s15-12", n: "15.12", t: "Autodecomposizione generalizzata" },
      { id: "s15-13", n: "15.13", t: "Esercizi" },
      { id: "s15-14", n: "15.14", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "La SVD",
    file: "cap16-svd.html",
    stato: "pronto",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Decomposizione ai valori singolari" },
      { id: "s16-2", n: "16.2", t: "Calcolare la SVD" },
      { id: "s16-3", n: "16.3", t: "Valori singolari e autovalori" },
      { id: "s16-4", n: "16.4", t: "SVD di una matrice simmetrica" },
      { id: "s16-5", n: "16.5", t: "SVD e i quattro sottospazi" },
      { id: "s16-6", n: "16.6", t: "SVD e rango" },
      { id: "s16-7", n: "16.7", t: "Teoria spettrale via SVD" },
      { id: "s16-8", n: "16.8", t: "Approssimazioni a rango basso" },
      { id: "s16-9", n: "16.9", t: "Normalizzare i valori singolari" },
      { id: "s16-10", n: "16.10", t: "Numero di condizionamento" },
      { id: "s16-11", n: "16.11", t: "SVD e inversa di una matrice" },
      { id: "s16-12", n: "16.12", t: "La pseudoinversa MP, parte 2" }
    ]
  },
  {
    n: 17,
    titolo: "Forma quadratica",
    file: "cap17-forma-quadratica.html",
    stato: "pronto",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "Cos'è, in poche parole" },
      { id: "s17-2", n: "17.2", t: "Prospettiva geometrica" },
      { id: "s17-3", n: "17.3", t: "La forma quadratica normalizzata" },
      { id: "s17-4", n: "17.4", t: "Autovettori e superficie della forma quadratica" },
      { id: "s17-5", n: "17.5", t: "A cosa serve: la definitezza" },
      { id: "s17-6", n: "17.6", t: "La definitezza di AᵀA" },
      { id: "s17-7", n: "17.7", t: "λ e definitezza" }
    ]
  },
  {
    n: 18,
    titolo: "Matrici di covarianza",
    file: "cap18-covarianza.html",
    stato: "pronto",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "Correlazione" },
      { id: "s18-2", n: "18.2", t: "Varianza e deviazione standard" },
      { id: "s18-3", n: "18.3", t: "Covarianza" },
      { id: "s18-4", n: "18.4", t: "Coefficiente di correlazione" },
      { id: "s18-5", n: "18.5", t: "Matrici di covarianza" },
      { id: "s18-6", n: "18.6", t: "Da correlazione a covarianza" }
    ]
  },
  {
    n: 19,
    titolo: "PCA",
    file: "cap19-pca.html",
    stato: "pronto",
    sezioni: [
      { id: "s19-1", n: "19.1", t: "PCA: interpretazioni e applicazioni" },
      { id: "s19-2", n: "19.2", t: "Come si esegue una PCA" },
      { id: "s19-3", n: "19.3", t: "L'algebra della PCA" },
      { id: "s19-4", n: "19.4", t: "Regolarizzazione" },
      { id: "s19-5", n: "19.5", t: "La PCA è sempre la scelta giusta?" }
    ]
  },
  {
    n: 20,
    titolo: "La fine",
    file: "cap20-la-fine.html",
    stato: "pronto",
    sezioni: [
      { id: "s20-1", n: "20.1", t: "La fine… dell'inizio!" },
      { id: "s20-2", n: "20.2", t: "Grazie" }
    ]
  }
];
