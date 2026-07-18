/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (C++).
   Libro della collana di programmazione: imparare il C++ da zero, con
   laboratori guidati sul proprio computer. Presuppone che tu abbia già
   incontrato le basi della programmazione (vedi il libro "Python").
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "C++", glyph: "⊕", tema: "cpp-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Il primo programma",
    file: "cap01-primo-programma.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Perché C++" },
      { id: "s1-2", n: "1.2", t: "Compilato, non interpretato" },
      { id: "s1-3", n: "1.3", t: "Installare un compilatore" },
      { id: "s1-4", n: "1.4", t: "Anatomia di un programma" },
      { id: "s1-5", n: "1.5", t: "cout: stampare a schermo" },
      { id: "s1-6", n: "1.6", t: "Laboratorio: compila ed esegui" },
      { id: "s1-7", n: "1.7", t: "Esercizi" },
      { id: "s1-8", n: "1.8", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "Variabili e tipi",
    file: "cap02-variabili-tipi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Tipizzazione statica" },
      { id: "s2-2", n: "2.2", t: "int, double, char, bool" },
      { id: "s2-3", n: "2.3", t: "Dichiarazione e inizializzazione" },
      { id: "s2-4", n: "2.4", t: "const e auto" },
      { id: "s2-5", n: "2.5", t: "cin: leggere dall'utente" },
      { id: "s2-6", n: "2.6", t: "Laboratorio: una calcolatrice" },
      { id: "s2-7", n: "2.7", t: "Esercizi" },
      { id: "s2-8", n: "2.8", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Operatori ed espressioni",
    file: "cap03-operatori.html",
    stato: "da-fare",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Aritmetici e divisione intera" },
      { id: "s3-2", n: "3.2", t: "Confronti e logici" },
      { id: "s3-3", n: "3.3", t: "Incremento e assegnazioni composte" },
      { id: "s3-4", n: "3.4", t: "Overflow e conversioni" },
      { id: "s3-5", n: "3.5", t: "Precedenza" },
      { id: "s3-6", n: "3.6", t: "Laboratorio: conti e conversioni" },
      { id: "s3-7", n: "3.7", t: "Esercizi" },
      { id: "s3-8", n: "3.8", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Prendere decisioni",
    file: "cap04-decisioni.html",
    stato: "da-fare",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "if / else if / else" },
      { id: "s4-2", n: "4.2", t: "Le graffe e i blocchi" },
      { id: "s4-3", n: "4.3", t: "switch" },
      { id: "s4-4", n: "4.4", t: "L'operatore ternario" },
      { id: "s4-5", n: "4.5", t: "Laboratorio: un classificatore" },
      { id: "s4-6", n: "4.6", t: "Esercizi" },
      { id: "s4-7", n: "4.7", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "I cicli",
    file: "cap05-cicli.html",
    stato: "da-fare",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "while e do-while" },
      { id: "s5-2", n: "5.2", t: "Il for classico" },
      { id: "s5-3", n: "5.3", t: "Il for range-based" },
      { id: "s5-4", n: "5.4", t: "break e continue" },
      { id: "s5-5", n: "5.5", t: "Laboratorio: tabelline e figure" },
      { id: "s5-6", n: "5.6", t: "Esercizi" },
      { id: "s5-7", n: "5.7", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Le funzioni",
    file: "cap06-funzioni.html",
    stato: "da-fare",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Dichiarare e definire" },
      { id: "s6-2", n: "6.2", t: "Tipo di ritorno e parametri" },
      { id: "s6-3", n: "6.3", t: "Passaggio per valore e per riferimento" },
      { id: "s6-4", n: "6.4", t: "Overloading e default" },
      { id: "s6-5", n: "6.5", t: "Dichiarazioni e header" },
      { id: "s6-6", n: "6.6", t: "Laboratorio: una libreria di funzioni" },
      { id: "s6-7", n: "6.7", t: "Esercizi" },
      { id: "s6-8", n: "6.8", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Puntatori e riferimenti",
    file: "cap07-puntatori.html",
    stato: "da-fare",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "La memoria e gli indirizzi" },
      { id: "s7-2", n: "7.2", t: "I riferimenti" },
      { id: "s7-3", n: "7.3", t: "I puntatori: & e *" },
      { id: "s7-4", n: "7.4", t: "nullptr e i puntatori pericolosi" },
      { id: "s7-5", n: "7.5", t: "Puntatori e funzioni" },
      { id: "s7-6", n: "7.6", t: "Laboratorio: guardare gli indirizzi" },
      { id: "s7-7", n: "7.7", t: "Esercizi" },
      { id: "s7-8", n: "7.8", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Array e vector",
    file: "cap08-array-vector.html",
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Gli array del C" },
      { id: "s8-2", n: "8.2", t: "std::vector: l'array che cresce" },
      { id: "s8-3", n: "8.3", t: "Aggiungere, accedere, scorrere" },
      { id: "s8-4", n: "8.4", t: "Array e puntatori" },
      { id: "s8-5", n: "8.5", t: "Matrici (vector di vector)" },
      { id: "s8-6", n: "8.6", t: "Laboratorio: statistiche su una lista" },
      { id: "s8-7", n: "8.7", t: "Esercizi" },
      { id: "s8-8", n: "8.8", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Le stringhe",
    file: "cap09-stringhe.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "std::string vs char*" },
      { id: "s9-2", n: "9.2", t: "Concatenare e confrontare" },
      { id: "s9-3", n: "9.3", t: "Indici, lunghezza, sottostringhe" },
      { id: "s9-4", n: "9.4", t: "Metodi utili" },
      { id: "s9-5", n: "9.5", t: "Leggere righe intere" },
      { id: "s9-6", n: "9.6", t: "Laboratorio: analizzare del testo" },
      { id: "s9-7", n: "9.7", t: "Esercizi" },
      { id: "s9-8", n: "9.8", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Struct e classi",
    file: "cap10-classi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "struct: dati insieme" },
      { id: "s10-2", n: "10.2", t: "class: dati + metodi" },
      { id: "s10-3", n: "10.3", t: "public e private" },
      { id: "s10-4", n: "10.4", t: "Costruttori" },
      { id: "s10-5", n: "10.5", t: "Il distruttore" },
      { id: "s10-6", n: "10.6", t: "Laboratorio: modellare qualcosa" },
      { id: "s10-7", n: "10.7", t: "Esercizi" },
      { id: "s10-8", n: "10.8", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Ereditarietà e polimorfismo",
    file: "cap11-ereditarieta.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Ereditare da una classe" },
      { id: "s11-2", n: "11.2", t: "Metodi virtuali" },
      { id: "s11-3", n: "11.3", t: "Il polimorfismo" },
      { id: "s11-4", n: "11.4", t: "Classi astratte" },
      { id: "s11-5", n: "11.5", t: "Laboratorio: una gerarchia di forme" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "La memoria: stack, heap, RAII",
    file: "cap12-memoria.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Stack e heap" },
      { id: "s12-2", n: "12.2", t: "new e delete" },
      { id: "s12-3", n: "12.3", t: "Le fughe di memoria" },
      { id: "s12-4", n: "12.4", t: "RAII: l'idea chiave del C++" },
      { id: "s12-5", n: "12.5", t: "Smart pointer" },
      { id: "s12-6", n: "12.6", t: "Laboratorio: un puntatore intelligente" },
      { id: "s12-7", n: "12.7", t: "Esercizi" },
      { id: "s12-8", n: "12.8", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Template e la STL",
    file: "cap13-template-stl.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Codice generico coi template" },
      { id: "s13-2", n: "13.2", t: "I contenitori della STL" },
      { id: "s13-3", n: "13.3", t: "map e set" },
      { id: "s13-4", n: "13.4", t: "Gli algoritmi (sort, find…)" },
      { id: "s13-5", n: "13.5", t: "Iteratori e lambda" },
      { id: "s13-6", n: "13.6", t: "Laboratorio: usare la STL" },
      { id: "s13-7", n: "13.7", t: "Esercizi" },
      { id: "s13-8", n: "13.8", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Gestione degli errori",
    file: "cap14-errori.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Errori di compilazione vs a runtime" },
      { id: "s14-2", n: "14.2", t: "Le eccezioni: try / catch" },
      { id: "s14-3", n: "14.3", t: "Sollevare eccezioni (throw)" },
      { id: "s14-4", n: "14.4", t: "Quando (non) usare le eccezioni" },
      { id: "s14-5", n: "14.5", t: "Laboratorio: input robusto" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "File e I/O",
    file: "cap15-file-io.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Gli stream" },
      { id: "s15-2", n: "15.2", t: "Scrivere su file (ofstream)" },
      { id: "s15-3", n: "15.3", t: "Leggere da file (ifstream)" },
      { id: "s15-4", n: "15.4", t: "Leggere riga per riga" },
      { id: "s15-5", n: "15.5", t: "Laboratorio: salvare dati" },
      { id: "s15-6", n: "15.6", t: "Esercizi" },
      { id: "s15-7", n: "15.7", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "Un progetto completo",
    file: "cap16-progetto-completo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "L'idea e il piano" },
      { id: "s16-2", n: "16.2", t: "Progettare le classi" },
      { id: "s16-3", n: "16.3", t: "Il codice, pezzo per pezzo" },
      { id: "s16-4", n: "16.4", t: "Compilare e provare" },
      { id: "s16-5", n: "16.5", t: "Migliorare" },
      { id: "s16-6", n: "16.6", t: "Dove andare da qui" },
      { id: "s16-7", n: "16.7", t: "Esercizi" },
      { id: "s16-8", n: "16.8", t: "Soluzioni" }
    ]
  }
];
