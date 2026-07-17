/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Analisi 1).
   Ogni pagina costruisce il menu in alto da qui: aggiungere un capitolo
   significa aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Analisi 1", glyph: "∫", tema: "an1-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Introduzione",
    file: "cap01-introduzione.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Cos'è l'analisi matematica e a cosa serve" },
      { id: "s1-2", n: "1.2", t: "L'idea che regge tutto: il limite" },
      { id: "s1-3", n: "1.3", t: "Com'è fatto questo libro" },
      { id: "s1-4", n: "1.4", t: "Prerequisiti" },
      { id: "s1-5", n: "1.5", t: "Come usare esercizi e widget" }
    ]
  },
  {
    n: 2,
    titolo: "I numeri reali",
    file: "cap02-numeri-reali.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Perché i numeri sono un problema" },
      { id: "s2-2", n: "2.2", t: "Dai naturali ai razionali" },
      { id: "s2-3", n: "2.3", t: "Il buco dei razionali: √2" },
      { id: "s2-4", n: "2.4", t: "L'assioma di completezza" },
      { id: "s2-5", n: "2.5", t: "Estremo superiore e inferiore" },
      { id: "s2-6", n: "2.6", t: "Massimo e minimo" },
      { id: "s2-7", n: "2.7", t: "Valore assoluto e distanza" },
      { id: "s2-8", n: "2.8", t: "Densità, intervalli, intorni" },
      { id: "s2-9", n: "2.9", t: "Il principio di induzione" },
      { id: "s2-10", n: "2.10", t: "Disuguaglianze notevoli" },
      { id: "s2-11", n: "2.11", t: "Esercizi" },
      { id: "s2-12", n: "2.12", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Numeri complessi",
    file: "cap03-numeri-complessi.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Perché servono: chiudere l'algebra" },
      { id: "s3-2", n: "3.2", t: "Il piano complesso" },
      { id: "s3-3", n: "3.3", t: "Aritmetica complessa" },
      { id: "s3-4", n: "3.4", t: "Modulo, coniugato, argomento" },
      { id: "s3-5", n: "3.5", t: "Forma trigonometrica" },
      { id: "s3-6", n: "3.6", t: "Forma esponenziale e formula di Eulero" },
      { id: "s3-7", n: "3.7", t: "Potenze e formula di De Moivre" },
      { id: "s3-8", n: "3.8", t: "Radici n-esime" },
      { id: "s3-9", n: "3.9", t: "Il teorema fondamentale dell'algebra" },
      { id: "s3-10", n: "3.10", t: "Esercizi" },
      { id: "s3-11", n: "3.11", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Funzioni",
    file: "cap04-funzioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Cos'è una funzione" },
      { id: "s4-2", n: "4.2", t: "Dominio, codominio, immagine" },
      { id: "s4-3", n: "4.3", t: "Il grafico" },
      { id: "s4-4", n: "4.4", t: "Iniettiva, suriettiva, biunivoca" },
      { id: "s4-5", n: "4.5", t: "Funzione composta" },
      { id: "s4-6", n: "4.6", t: "Funzione inversa" },
      { id: "s4-7", n: "4.7", t: "Funzioni monotone" },
      { id: "s4-8", n: "4.8", t: "Simmetrie: pari, dispari, periodiche" },
      { id: "s4-9", n: "4.9", t: "Le funzioni elementari" },
      { id: "s4-10", n: "4.10", t: "Trigonometriche e loro inverse" },
      { id: "s4-11", n: "4.11", t: "Funzioni iperboliche" },
      { id: "s4-12", n: "4.12", t: "Esercizi" },
      { id: "s4-13", n: "4.13", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Successioni e limiti",
    file: "cap05-successioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Cos'è una successione" },
      { id: "s5-2", n: "5.2", t: "L'idea di limite" },
      { id: "s5-3", n: "5.3", t: "Definizione rigorosa di limite" },
      { id: "s5-4", n: "5.4", t: "Convergenti, divergenti, irregolari" },
      { id: "s5-5", n: "5.5", t: "Teoremi sui limiti" },
      { id: "s5-6", n: "5.6", t: "Algebra dei limiti e forme indeterminate" },
      { id: "s5-7", n: "5.7", t: "Successioni monotone" },
      { id: "s5-8", n: "5.8", t: "Il numero e" },
      { id: "s5-9", n: "5.9", t: "Gerarchia degli infiniti" },
      { id: "s5-10", n: "5.10", t: "Limiti notevoli" },
      { id: "s5-11", n: "5.11", t: "Sottosuccessioni e Bolzano-Weierstrass" },
      { id: "s5-12", n: "5.12", t: "Il criterio di Cauchy" },
      { id: "s5-13", n: "5.13", t: "Esercizi" },
      { id: "s5-14", n: "5.14", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Limiti di funzioni e continuità",
    file: "cap06-limiti-continuita.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Dal discreto al continuo" },
      { id: "s6-2", n: "6.2", t: "Definizione di limite con gli intorni" },
      { id: "s6-3", n: "6.3", t: "La definizione ε-δ" },
      { id: "s6-4", n: "6.4", t: "Limite destro e sinistro" },
      { id: "s6-5", n: "6.5", t: "Limiti all'infinito e infiniti" },
      { id: "s6-6", n: "6.6", t: "Algebra dei limiti" },
      { id: "s6-7", n: "6.7", t: "I limiti notevoli" },
      { id: "s6-8", n: "6.8", t: "Continuità in un punto" },
      { id: "s6-9", n: "6.9", t: "Tipi di discontinuità" },
      { id: "s6-10", n: "6.10", t: "Asintoti" },
      { id: "s6-11", n: "6.11", t: "Esercizi" },
      { id: "s6-12", n: "6.12", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Teoremi sulle funzioni continue",
    file: "cap07-funzioni-continue.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Perché la continuità è potente" },
      { id: "s7-2", n: "7.2", t: "Il teorema degli zeri" },
      { id: "s7-3", n: "7.3", t: "Il teorema dei valori intermedi" },
      { id: "s7-4", n: "7.4", t: "Il teorema di Weierstrass" },
      { id: "s7-5", n: "7.5", t: "Continuità della funzione inversa" },
      { id: "s7-6", n: "7.6", t: "Uniforme continuità" },
      { id: "s7-7", n: "7.7", t: "Il teorema di Heine-Cantor" },
      { id: "s7-8", n: "7.8", t: "Esercizi" },
      { id: "s7-9", n: "7.9", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "La derivata",
    file: "cap08-derivata.html",
    stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Il problema della tangente e della velocità" },
      { id: "s8-2", n: "8.2", t: "Il rapporto incrementale" },
      { id: "s8-3", n: "8.3", t: "Definizione di derivata" },
      { id: "s8-4", n: "8.4", t: "Significato geometrico: la retta tangente" },
      { id: "s8-5", n: "8.5", t: "Derivabilità e continuità" },
      { id: "s8-6", n: "8.6", t: "Le regole di derivazione" },
      { id: "s8-7", n: "8.7", t: "Derivate delle funzioni elementari" },
      { id: "s8-8", n: "8.8", t: "La regola della catena" },
      { id: "s8-9", n: "8.9", t: "Derivata della funzione inversa" },
      { id: "s8-10", n: "8.10", t: "Derivate di ordine superiore" },
      { id: "s8-11", n: "8.11", t: "Il differenziale" },
      { id: "s8-12", n: "8.12", t: "Esercizi" },
      { id: "s8-13", n: "8.13", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "I teoremi del calcolo differenziale",
    file: "cap09-teoremi-derivate.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Punti stazionari e teorema di Fermat" },
      { id: "s9-2", n: "9.2", t: "Il teorema di Rolle" },
      { id: "s9-3", n: "9.3", t: "Il teorema di Lagrange" },
      { id: "s9-4", n: "9.4", t: "Conseguenze: monotonia e costanza" },
      { id: "s9-5", n: "9.5", t: "Il teorema di Cauchy" },
      { id: "s9-6", n: "9.6", t: "Il teorema di de l'Hôpital" },
      { id: "s9-7", n: "9.7", t: "Esercizi" },
      { id: "s9-8", n: "9.8", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Studio di funzione",
    file: "cap10-studio-funzione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "La mappa completa" },
      { id: "s10-2", n: "10.2", t: "Dominio, simmetrie, segno" },
      { id: "s10-3", n: "10.3", t: "Limiti e asintoti" },
      { id: "s10-4", n: "10.4", t: "Crescenza e decrescenza" },
      { id: "s10-5", n: "10.5", t: "Massimi e minimi" },
      { id: "s10-6", n: "10.6", t: "Concavità, convessità, flessi" },
      { id: "s10-7", n: "10.7", t: "Un esempio completo" },
      { id: "s10-8", n: "10.8", t: "Esercizi" },
      { id: "s10-9", n: "10.9", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Formula di Taylor",
    file: "cap11-taylor.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Approssimare con un polinomio" },
      { id: "s11-2", n: "11.2", t: "Il polinomio di Taylor" },
      { id: "s11-3", n: "11.3", t: "Il resto di Peano" },
      { id: "s11-4", n: "11.4", t: "Il resto di Lagrange" },
      { id: "s11-5", n: "11.5", t: "Gli sviluppi notevoli" },
      { id: "s11-6", n: "11.6", t: "Taylor per calcolare i limiti" },
      { id: "s11-7", n: "11.7", t: "Applicazioni: estremi e approssimazioni" },
      { id: "s11-8", n: "11.8", t: "Esercizi" },
      { id: "s11-9", n: "11.9", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "L'integrale di Riemann",
    file: "cap12-integrale.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Il problema dell'area" },
      { id: "s12-2", n: "12.2", t: "Somme superiori e inferiori" },
      { id: "s12-3", n: "12.3", t: "L'integrale definito" },
      { id: "s12-4", n: "12.4", t: "Funzioni integrabili" },
      { id: "s12-5", n: "12.5", t: "Proprietà dell'integrale" },
      { id: "s12-6", n: "12.6", t: "Il teorema della media integrale" },
      { id: "s12-7", n: "12.7", t: "La funzione integrale" },
      { id: "s12-8", n: "12.8", t: "Il teorema fondamentale del calcolo" },
      { id: "s12-9", n: "12.9", t: "Primitive e integrale indefinito" },
      { id: "s12-10", n: "12.10", t: "Esercizi" },
      { id: "s12-11", n: "12.11", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Tecniche di integrazione",
    file: "cap13-tecniche-integrazione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Integrali immediati" },
      { id: "s13-2", n: "13.2", t: "Integrazione per scomposizione" },
      { id: "s13-3", n: "13.3", t: "Integrazione per sostituzione" },
      { id: "s13-4", n: "13.4", t: "Integrazione per parti" },
      { id: "s13-5", n: "13.5", t: "Integrali di funzioni razionali" },
      { id: "s13-6", n: "13.6", t: "Sostituzioni notevoli" },
      { id: "s13-7", n: "13.7", t: "Esercizi" },
      { id: "s13-8", n: "13.8", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Integrali impropri",
    file: "cap14-integrali-impropri.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Quando l'area è infinita... o no" },
      { id: "s14-2", n: "14.2", t: "Integrali su intervalli illimitati" },
      { id: "s14-3", n: "14.3", t: "Integrali di funzioni illimitate" },
      { id: "s14-4", n: "14.4", t: "Criteri di convergenza" },
      { id: "s14-5", n: "14.5", t: "Confronto e confronto asintotico" },
      { id: "s14-6", n: "14.6", t: "Convergenza assoluta" },
      { id: "s14-7", n: "14.7", t: "Esercizi" },
      { id: "s14-8", n: "14.8", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Serie numeriche",
    file: "cap15-serie.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Sommare infiniti termini" },
      { id: "s15-2", n: "15.2", t: "Convergenza di una serie" },
      { id: "s15-3", n: "15.3", t: "La serie geometrica" },
      { id: "s15-4", n: "15.4", t: "Serie telescopiche" },
      { id: "s15-5", n: "15.5", t: "La condizione necessaria" },
      { id: "s15-6", n: "15.6", t: "Serie a termini positivi: confronto" },
      { id: "s15-7", n: "15.7", t: "Criterio del rapporto e della radice" },
      { id: "s15-8", n: "15.8", t: "Criterio dell'integrale e serie armonica" },
      { id: "s15-9", n: "15.9", t: "Confronto asintotico" },
      { id: "s15-10", n: "15.10", t: "Serie a segni alterni: Leibniz" },
      { id: "s15-11", n: "15.11", t: "Convergenza assoluta e condizionata" },
      { id: "s15-12", n: "15.12", t: "Esercizi" },
      { id: "s15-13", n: "15.13", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "La fine → verso l'Analisi 2",
    file: "cap16-la-fine.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Cosa hai costruito" },
      { id: "s16-2", n: "16.2", t: "I ponti verso l'Analisi 2" },
      { id: "s16-3", n: "16.3", t: "Grazie" }
    ]
  }
];
