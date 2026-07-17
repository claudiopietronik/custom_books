/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro
   (Algebra e Trigonometria). Ogni pagina costruisce il menu in alto da qui:
   aggiungere un capitolo significa aggiungere una voce a questo array.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'

   La struttura segue "College Algebra & Trigonometry" di Julie Miller e
   Donna Gerken (McGraw-Hill, 2017): il capitolo R del testo è qui il
   Capitolo 1, e i capitoli 1–12 diventano 2–13 (numerazione consecutiva).
   ========================================================================= */

const BOOK = { titolo: "Algebra e Trigonometria", glyph: "△", tema: "at-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Ripasso dei prerequisiti",
    file: "cap01-ripasso.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Insiemi e la retta dei numeri reali" },
      { id: "s1-2", n: "1.2", t: "Esponenti interi e notazione scientifica" },
      { id: "s1-3", n: "1.3", t: "Esponenti razionali e radicali" },
      { id: "s1-4", n: "1.4", t: "Polinomi e prodotti notevoli" },
      { id: "s1-5", n: "1.5", t: "Scomposizione in fattori" },
      { id: "s1-6", n: "1.6", t: "Le espressioni razionali" },
      { id: "s1-7", n: "1.7", t: "Esercizi" },
      { id: "s1-8", n: "1.8", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "Equazioni e disequazioni",
    file: "cap02-equazioni-disequazioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Equazioni lineari e razionali" },
      { id: "s2-2", n: "2.2", t: "Problemi e applicazioni" },
      { id: "s2-3", n: "2.3", t: "I numeri complessi" },
      { id: "s2-4", n: "2.4", t: "Equazioni di secondo grado" },
      { id: "s2-5", n: "2.5", t: "Applicazioni delle equazioni quadratiche" },
      { id: "s2-6", n: "2.6", t: "Altre equazioni (radicali, valore assoluto)" },
      { id: "s2-7", n: "2.7", t: "Disequazioni lineari, doppie e con modulo" },
      { id: "s2-8", n: "2.8", t: "Esercizi" },
      { id: "s2-9", n: "2.9", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Funzioni e relazioni",
    file: "cap03-funzioni-relazioni.html",
    stato: "da-fare",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Il piano cartesiano e la distanza" },
      { id: "s3-2", n: "3.2", t: "Le circonferenze" },
      { id: "s3-3", n: "3.3", t: "Funzioni e relazioni" },
      { id: "s3-4", n: "3.4", t: "Equazioni e funzioni lineari" },
      { id: "s3-5", n: "3.5", t: "Applicazioni e modelli lineari" },
      { id: "s3-6", n: "3.6", t: "Trasformazioni dei grafici" },
      { id: "s3-7", n: "3.7", t: "Studio del grafico e funzioni a tratti" },
      { id: "s3-8", n: "3.8", t: "Algebra e composizione di funzioni" },
      { id: "s3-9", n: "3.9", t: "Esercizi" },
      { id: "s3-10", n: "3.10", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Funzioni polinomiali e razionali",
    file: "cap04-polinomiali-razionali.html",
    stato: "da-fare",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Funzioni quadratiche e parabole" },
      { id: "s4-2", n: "4.2", t: "Introduzione alle funzioni polinomiali" },
      { id: "s4-3", n: "4.3", t: "Divisione di polinomi, resto e fattore" },
      { id: "s4-4", n: "4.4", t: "Gli zeri dei polinomi" },
      { id: "s4-5", n: "4.5", t: "Funzioni razionali e asintoti" },
      { id: "s4-6", n: "4.6", t: "Disequazioni polinomiali e razionali" },
      { id: "s4-7", n: "4.7", t: "Proporzionalità e variazione" },
      { id: "s4-8", n: "4.8", t: "Esercizi" },
      { id: "s4-9", n: "4.9", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Funzioni esponenziali e logaritmiche",
    file: "cap05-esponenziali-logaritmiche.html",
    stato: "da-fare",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Funzioni inverse" },
      { id: "s5-2", n: "5.2", t: "Funzioni esponenziali" },
      { id: "s5-3", n: "5.3", t: "Funzioni logaritmiche" },
      { id: "s5-4", n: "5.4", t: "Proprietà dei logaritmi" },
      { id: "s5-5", n: "5.5", t: "Equazioni esponenziali e logaritmiche" },
      { id: "s5-6", n: "5.6", t: "Modelli di crescita e decadimento" },
      { id: "s5-7", n: "5.7", t: "Esercizi" },
      { id: "s5-8", n: "5.8", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Le funzioni trigonometriche",
    file: "cap06-funzioni-trigonometriche.html",
    stato: "da-fare",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Angoli e loro misura" },
      { id: "s6-2", n: "6.2", t: "Trigonometria del triangolo rettangolo" },
      { id: "s6-3", n: "6.3", t: "Funzioni di un angolo qualsiasi" },
      { id: "s6-4", n: "6.4", t: "Le funzioni sul cerchio unitario" },
      { id: "s6-5", n: "6.5", t: "Grafici di seno e coseno" },
      { id: "s6-6", n: "6.6", t: "Grafici delle altre funzioni" },
      { id: "s6-7", n: "6.7", t: "Funzioni trigonometriche inverse" },
      { id: "s6-8", n: "6.8", t: "Esercizi" },
      { id: "s6-9", n: "6.9", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Trigonometria analitica",
    file: "cap07-trigonometria-analitica.html",
    stato: "da-fare",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Identità trigonometriche fondamentali" },
      { id: "s7-2", n: "7.2", t: "Formule di addizione e sottrazione" },
      { id: "s7-3", n: "7.3", t: "Duplicazione, bisezione, riduzione di potenza" },
      { id: "s7-4", n: "7.4", t: "Prostaferesi e formule di Werner" },
      { id: "s7-5", n: "7.5", t: "Equazioni trigonometriche" },
      { id: "s7-6", n: "7.6", t: "Esercizi" },
      { id: "s7-7", n: "7.7", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Applicazioni della trigonometria",
    file: "cap08-applicazioni-trigonometria.html",
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Applicazioni dei triangoli rettangoli" },
      { id: "s8-2", n: "8.2", t: "Il teorema dei seni" },
      { id: "s8-3", n: "8.3", t: "Il teorema del coseno" },
      { id: "s8-4", n: "8.4", t: "Il moto armonico" },
      { id: "s8-5", n: "8.5", t: "Esercizi" },
      { id: "s8-6", n: "8.6", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Coordinate polari, complessi e vettori",
    file: "cap09-polari-vettori.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Le coordinate polari" },
      { id: "s9-2", n: "9.2", t: "Grafici di equazioni polari" },
      { id: "s9-3", n: "9.3", t: "Numeri complessi in forma polare" },
      { id: "s9-4", n: "9.4", t: "I vettori" },
      { id: "s9-5", n: "9.5", t: "Il prodotto scalare" },
      { id: "s9-6", n: "9.6", t: "Esercizi" },
      { id: "s9-7", n: "9.7", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Sistemi di equazioni e disequazioni",
    file: "cap10-sistemi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Sistemi lineari in due incognite" },
      { id: "s10-2", n: "10.2", t: "Sistemi lineari in tre incognite" },
      { id: "s10-3", n: "10.3", t: "Decomposizione in fratti semplici" },
      { id: "s10-4", n: "10.4", t: "Sistemi non lineari" },
      { id: "s10-5", n: "10.5", t: "Disequazioni in due variabili" },
      { id: "s10-6", n: "10.6", t: "La programmazione lineare" },
      { id: "s10-7", n: "10.7", t: "Esercizi" },
      { id: "s10-8", n: "10.8", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Matrici e determinanti",
    file: "cap11-matrici-determinanti.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Risolvere sistemi con le matrici" },
      { id: "s11-2", n: "11.2", t: "Sistemi impossibili e indeterminati" },
      { id: "s11-3", n: "11.3", t: "Operazioni tra matrici" },
      { id: "s11-4", n: "11.4", t: "Matrice inversa ed equazioni matriciali" },
      { id: "s11-5", n: "11.5", t: "Determinanti e regola di Cramer" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Geometria analitica: le coniche",
    file: "cap12-coniche.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "L'ellisse" },
      { id: "s12-2", n: "12.2", t: "L'iperbole" },
      { id: "s12-3", n: "12.3", t: "La parabola" },
      { id: "s12-4", n: "12.4", t: "Rotazione degli assi" },
      { id: "s12-5", n: "12.5", t: "Equazioni polari delle coniche" },
      { id: "s12-6", n: "12.6", t: "Curve piane ed equazioni parametriche" },
      { id: "s12-7", n: "12.7", t: "Esercizi" },
      { id: "s12-8", n: "12.8", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Successioni, serie, induzione e probabilità",
    file: "cap13-successioni-probabilita.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Successioni e serie" },
      { id: "s13-2", n: "13.2", t: "Successioni e serie aritmetiche" },
      { id: "s13-3", n: "13.3", t: "Successioni e serie geometriche" },
      { id: "s13-4", n: "13.4", t: "L'induzione matematica" },
      { id: "s13-5", n: "13.5", t: "Il teorema binomiale" },
      { id: "s13-6", n: "13.6", t: "Principi del calcolo combinatorio" },
      { id: "s13-7", n: "13.7", t: "Introduzione alla probabilità" },
      { id: "s13-8", n: "13.8", t: "Esercizi" },
      { id: "s13-9", n: "13.9", t: "Soluzioni" }
    ]
  }
];
