/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Analisi 2).
   Ogni pagina costruisce il menu in alto da qui: aggiungere un capitolo
   significa aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Analisi 2", glyph: "∇", tema: "an2-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Introduzione",
    file: "cap01-introduzione.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Cosa aggiunge l'Analisi 2" },
      { id: "s1-2", n: "1.2", t: "Il filo con l'Algebra Lineare" },
      { id: "s1-3", n: "1.3", t: "Com'è fatto questo libro e prerequisiti" }
    ]
  },
  {
    n: 2,
    titolo: "Successioni e serie di funzioni",
    file: "cap02-successioni-funzioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Da numeri a funzioni" },
      { id: "s2-2", n: "2.2", t: "Convergenza puntuale" },
      { id: "s2-3", n: "2.3", t: "Convergenza uniforme" },
      { id: "s2-4", n: "2.4", t: "Continuità del limite" },
      { id: "s2-5", n: "2.5", t: "Limite sotto derivata e integrale" },
      { id: "s2-6", n: "2.6", t: "Serie di funzioni" },
      { id: "s2-7", n: "2.7", t: "Convergenza totale (Weierstrass)" },
      { id: "s2-8", n: "2.8", t: "Esercizi" },
      { id: "s2-9", n: "2.9", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Serie di potenze",
    file: "cap03-serie-potenze.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Cos'è una serie di potenze" },
      { id: "s3-2", n: "3.2", t: "Il raggio di convergenza" },
      { id: "s3-3", n: "3.3", t: "Calcolare il raggio" },
      { id: "s3-4", n: "3.4", t: "Derivare e integrare termine a termine" },
      { id: "s3-5", n: "3.5", t: "Serie di Taylor e funzioni analitiche" },
      { id: "s3-6", n: "3.6", t: "Serie notevoli e applicazioni" },
      { id: "s3-7", n: "3.7", t: "Esercizi" },
      { id: "s3-8", n: "3.8", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Serie di Fourier",
    file: "cap04-serie-fourier.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "L'idea: scomporre in armoniche" },
      { id: "s4-2", n: "4.2", t: "I coefficienti di Fourier" },
      { id: "s4-3", n: "4.3", t: "Convergenza della serie" },
      { id: "s4-4", n: "4.4", t: "Simmetrie e periodo qualunque" },
      { id: "s4-5", n: "4.5", t: "L'uguaglianza di Parseval" },
      { id: "s4-6", n: "4.6", t: "Applicazioni" },
      { id: "s4-7", n: "4.7", t: "Esercizi" },
      { id: "s4-8", n: "4.8", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Lo spazio ℝⁿ e la topologia",
    file: "cap05-spazio-rn.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Vettori, norma, distanza" },
      { id: "s5-2", n: "5.2", t: "Prodotto scalare e disuguaglianze" },
      { id: "s5-3", n: "5.3", t: "Palle e intorni" },
      { id: "s5-4", n: "5.4", t: "Insiemi aperti e chiusi" },
      { id: "s5-5", n: "5.5", t: "Accumulazione e frontiera" },
      { id: "s5-6", n: "5.6", t: "Insiemi compatti" },
      { id: "s5-7", n: "5.7", t: "Insiemi connessi" },
      { id: "s5-8", n: "5.8", t: "Esercizi" },
      { id: "s5-9", n: "5.9", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Funzioni di più variabili: limiti e continuità",
    file: "cap06-piu-variabili.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Funzioni da ℝⁿ a ℝᵐ" },
      { id: "s6-2", n: "6.2", t: "Grafici e insiemi di livello" },
      { id: "s6-3", n: "6.3", t: "Limiti in più variabili" },
      { id: "s6-4", n: "6.4", t: "Il problema delle direzioni" },
      { id: "s6-5", n: "6.5", t: "Continuità" },
      { id: "s6-6", n: "6.6", t: "Esercizi" },
      { id: "s6-7", n: "6.7", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Calcolo differenziale in più variabili",
    file: "cap07-derivate-parziali.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Derivate parziali" },
      { id: "s7-2", n: "7.2", t: "Il gradiente" },
      { id: "s7-3", n: "7.3", t: "Derivate direzionali" },
      { id: "s7-4", n: "7.4", t: "Differenziabilità" },
      { id: "s7-5", n: "7.5", t: "Il piano tangente" },
      { id: "s7-6", n: "7.6", t: "La regola della catena" },
      { id: "s7-7", n: "7.7", t: "Il teorema di Schwarz" },
      { id: "s7-8", n: "7.8", t: "Ordini superiori e Hessiana" },
      { id: "s7-9", n: "7.9", t: "Esercizi" },
      { id: "s7-10", n: "7.10", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Taylor e ottimizzazione libera",
    file: "cap08-ottimizzazione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Formula di Taylor in più variabili" },
      { id: "s8-2", n: "8.2", t: "Punti critici" },
      { id: "s8-3", n: "8.3", t: "La matrice Hessiana" },
      { id: "s8-4", n: "8.4", t: "Il test dell'Hessiana (definitezza)" },
      { id: "s8-5", n: "8.5", t: "Punti di sella" },
      { id: "s8-6", n: "8.6", t: "Un esempio completo" },
      { id: "s8-7", n: "8.7", t: "Esercizi" },
      { id: "s8-8", n: "8.8", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Ottimizzazione vincolata",
    file: "cap09-vincolata.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Il problema dei vincoli" },
      { id: "s9-2", n: "9.2", t: "Funzioni implicite (Dini)" },
      { id: "s9-3", n: "9.3", t: "Il teorema della funzione inversa" },
      { id: "s9-4", n: "9.4", t: "I moltiplicatori di Lagrange" },
      { id: "s9-5", n: "9.5", t: "Interpretazione geometrica" },
      { id: "s9-6", n: "9.6", t: "Esercizi" },
      { id: "s9-7", n: "9.7", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Curve e integrali di linea",
    file: "cap10-curve.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Curve parametrizzate" },
      { id: "s10-2", n: "10.2", t: "Curve regolari e versori" },
      { id: "s10-3", n: "10.3", t: "Lunghezza di una curva" },
      { id: "s10-4", n: "10.4", t: "Ascissa curvilinea" },
      { id: "s10-5", n: "10.5", t: "Integrale di linea di prima specie" },
      { id: "s10-6", n: "10.6", t: "Esercizi" },
      { id: "s10-7", n: "10.7", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Campi vettoriali e forme differenziali",
    file: "cap11-campi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Campi vettoriali" },
      { id: "s11-2", n: "11.2", t: "Integrale di linea di seconda specie" },
      { id: "s11-3", n: "11.3", t: "Campi conservativi e potenziale" },
      { id: "s11-4", n: "11.4", t: "Forme esatte e chiuse" },
      { id: "s11-5", n: "11.5", t: "Quando un campo è conservativo" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Integrali multipli",
    file: "cap12-integrali-multipli.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "L'integrale doppio" },
      { id: "s12-2", n: "12.2", t: "Formule di riduzione (Fubini)" },
      { id: "s12-3", n: "12.3", t: "Domini normali" },
      { id: "s12-4", n: "12.4", t: "Cambio di variabili e Jacobiano" },
      { id: "s12-5", n: "12.5", t: "Coordinate polari" },
      { id: "s12-6", n: "12.6", t: "Integrali tripli" },
      { id: "s12-7", n: "12.7", t: "Coordinate cilindriche e sferiche" },
      { id: "s12-8", n: "12.8", t: "Applicazioni: volumi e baricentri" },
      { id: "s12-9", n: "12.9", t: "Esercizi" },
      { id: "s12-10", n: "12.10", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Superfici e integrali di superficie",
    file: "cap13-superfici.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Superfici parametrizzate" },
      { id: "s13-2", n: "13.2", t: "Piano tangente e versore normale" },
      { id: "s13-3", n: "13.3", t: "Area di una superficie" },
      { id: "s13-4", n: "13.4", t: "Integrale di superficie" },
      { id: "s13-5", n: "13.5", t: "Flusso di un campo" },
      { id: "s13-6", n: "13.6", t: "Esercizi" },
      { id: "s13-7", n: "13.7", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "I teoremi del calcolo vettoriale",
    file: "cap14-teoremi-vettoriali.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Divergenza e rotore" },
      { id: "s14-2", n: "14.2", t: "Il teorema di Gauss-Green" },
      { id: "s14-3", n: "14.3", t: "Il teorema della divergenza" },
      { id: "s14-4", n: "14.4", t: "Il teorema di Stokes" },
      { id: "s14-5", n: "14.5", t: "Il grande quadro: un unico teorema" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Equazioni differenziali ordinarie",
    file: "cap15-edo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Cosa sono e a cosa servono" },
      { id: "s15-2", n: "15.2", t: "Il problema di Cauchy" },
      { id: "s15-3", n: "15.3", t: "Variabili separabili" },
      { id: "s15-4", n: "15.4", t: "Lineari del primo ordine" },
      { id: "s15-5", n: "15.5", t: "Esistenza e unicità" },
      { id: "s15-6", n: "15.6", t: "Lineari del secondo ordine omogenee" },
      { id: "s15-7", n: "15.7", t: "Equazioni non omogenee" },
      { id: "s15-8", n: "15.8", t: "Sistemi lineari e autovalori" },
      { id: "s15-9", n: "15.9", t: "Esercizi" },
      { id: "s15-10", n: "15.10", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "La fine",
    file: "cap16-la-fine.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Cosa hai costruito" },
      { id: "s16-2", n: "16.2", t: "Dove si va da qui" },
      { id: "s16-3", n: "16.3", t: "Grazie" }
    ]
  }
];
