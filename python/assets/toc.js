/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Python).
   Libro della collana di programmazione: imparare a programmare da zero, in
   Python, con laboratori guidati sul proprio computer.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Python", glyph: "🐍", tema: "py-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Il primo programma",
    file: "cap01-primo-programma.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Cos'è programmare" },
      { id: "s1-2", n: "1.2", t: "Perché Python" },
      { id: "s1-3", n: "1.3", t: "Installare Python" },
      { id: "s1-4", n: "1.4", t: "La shell interattiva (REPL)" },
      { id: "s1-5", n: "1.5", t: "print: il tuo primo output" },
      { id: "s1-6", n: "1.6", t: "Laboratorio: ciao mondo" },
      { id: "s1-7", n: "1.7", t: "Esercizi" },
      { id: "s1-8", n: "1.8", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "Variabili e tipi",
    file: "cap02-variabili-tipi.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Cos'è una variabile" },
      { id: "s2-2", n: "2.2", t: "Assegnazione e nomi" },
      { id: "s2-3", n: "2.3", t: "I tipi fondamentali" },
      { id: "s2-4", n: "2.4", t: "type() e conversioni" },
      { id: "s2-5", n: "2.5", t: "input: parlare con l'utente" },
      { id: "s2-6", n: "2.6", t: "Laboratorio: una calcolatrice base" },
      { id: "s2-7", n: "2.7", t: "Esercizi" },
      { id: "s2-8", n: "2.8", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Numeri e operatori",
    file: "cap03-numeri-operatori.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Interi e decimali" },
      { id: "s3-2", n: "3.2", t: "Operatori aritmetici" },
      { id: "s3-3", n: "3.3", t: "Divisione, resto, potenza" },
      { id: "s3-4", n: "3.4", t: "Confronti e booleani" },
      { id: "s3-5", n: "3.5", t: "Precedenza e parentesi" },
      { id: "s3-6", n: "3.6", t: "Laboratorio: conti utili" },
      { id: "s3-7", n: "3.7", t: "Esercizi" },
      { id: "s3-8", n: "3.8", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Le stringhe",
    file: "cap04-stringhe.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Testo tra virgolette" },
      { id: "s4-2", n: "4.2", t: "Concatenare e ripetere" },
      { id: "s4-3", n: "4.3", t: "Indici e slicing" },
      { id: "s4-4", n: "4.4", t: "Metodi utili delle stringhe" },
      { id: "s4-5", n: "4.5", t: "f-string: formattare" },
      { id: "s4-6", n: "4.6", t: "Laboratorio: giocare col testo" },
      { id: "s4-7", n: "4.7", t: "Esercizi" },
      { id: "s4-8", n: "4.8", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Liste e tuple",
    file: "cap05-liste-tuple.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Cos'è una lista" },
      { id: "s5-2", n: "5.2", t: "Aggiungere, togliere, cambiare" },
      { id: "s5-3", n: "5.3", t: "Indici, slicing, lunghezza" },
      { id: "s5-4", n: "5.4", t: "Le tuple (immutabili)" },
      { id: "s5-5", n: "5.5", t: "Ordinare e cercare" },
      { id: "s5-6", n: "5.6", t: "Laboratorio: una lista della spesa" },
      { id: "s5-7", n: "5.7", t: "Esercizi" },
      { id: "s5-8", n: "5.8", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Dizionari e insiemi",
    file: "cap06-dizionari-insiemi.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Il dizionario: chiave → valore" },
      { id: "s6-2", n: "6.2", t: "Leggere, aggiungere, aggiornare" },
      { id: "s6-3", n: "6.3", t: "Scorrere un dizionario" },
      { id: "s6-4", n: "6.4", t: "Gli insiemi (set)" },
      { id: "s6-5", n: "6.5", t: "Quando usare cosa" },
      { id: "s6-6", n: "6.6", t: "Laboratorio: una rubrica" },
      { id: "s6-7", n: "6.7", t: "Esercizi" },
      { id: "s6-8", n: "6.8", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Prendere decisioni",
    file: "cap07-condizioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "if: se allora" },
      { id: "s7-2", n: "7.2", t: "else ed elif" },
      { id: "s7-3", n: "7.3", t: "Condizioni composte (and/or/not)" },
      { id: "s7-4", n: "7.4", t: "L'indentazione conta" },
      { id: "s7-5", n: "7.5", t: "Verità e falsità dei valori" },
      { id: "s7-6", n: "7.6", t: "Laboratorio: un piccolo quiz" },
      { id: "s7-7", n: "7.7", t: "Esercizi" },
      { id: "s7-8", n: "7.8", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "I cicli",
    file: "cap08-cicli.html",
    stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "for: ripetere per ogni elemento" },
      { id: "s8-2", n: "8.2", t: "range()" },
      { id: "s8-3", n: "8.3", t: "while: finché" },
      { id: "s8-4", n: "8.4", t: "break e continue" },
      { id: "s8-5", n: "8.5", t: "Cicli annidati" },
      { id: "s8-6", n: "8.6", t: "Laboratorio: tabelline e figure" },
      { id: "s8-7", n: "8.7", t: "Esercizi" },
      { id: "s8-8", n: "8.8", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Le funzioni",
    file: "cap09-funzioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Perché le funzioni" },
      { id: "s9-2", n: "9.2", t: "def, parametri, return" },
      { id: "s9-3", n: "9.3", t: "Argomenti e valori di default" },
      { id: "s9-4", n: "9.4", t: "Ambito delle variabili (scope)" },
      { id: "s9-5", n: "9.5", t: "Docstring e buone abitudini" },
      { id: "s9-6", n: "9.6", t: "Laboratorio: una libreria di funzioni" },
      { id: "s9-7", n: "9.7", t: "Esercizi" },
      { id: "s9-8", n: "9.8", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Moduli, pacchetti e ambienti",
    file: "cap10-moduli-pacchetti.html",
    stato: "pronto",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "import: usare il codice altrui" },
      { id: "s10-2", n: "10.2", t: "La libreria standard" },
      { id: "s10-3", n: "10.3", t: "pip: installare pacchetti" },
      { id: "s10-4", n: "10.4", t: "Ambienti virtuali (venv)" },
      { id: "s10-5", n: "10.5", t: "Creare un tuo modulo" },
      { id: "s10-6", n: "10.6", t: "Laboratorio: un progetto con più file" },
      { id: "s10-7", n: "10.7", t: "Esercizi" },
      { id: "s10-8", n: "10.8", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Errori ed eccezioni",
    file: "cap11-errori-eccezioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Errori di sintassi vs a runtime" },
      { id: "s11-2", n: "11.2", t: "Leggere un traceback" },
      { id: "s11-3", n: "11.3", t: "try / except" },
      { id: "s11-4", n: "11.4", t: "else, finally e sollevare errori" },
      { id: "s11-5", n: "11.5", t: "Gestire bene, non nascondere" },
      { id: "s11-6", n: "11.6", t: "Laboratorio: input a prova di errore" },
      { id: "s11-7", n: "11.7", t: "Esercizi" },
      { id: "s11-8", n: "11.8", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "File e dati",
    file: "cap12-file-dati.html",
    stato: "pronto",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Leggere e scrivere file di testo" },
      { id: "s12-2", n: "12.2", t: "with: aprire in sicurezza" },
      { id: "s12-3", n: "12.3", t: "Percorsi e cartelle (pathlib)" },
      { id: "s12-4", n: "12.4", t: "CSV: dati a tabella" },
      { id: "s12-5", n: "12.5", t: "JSON: dati strutturati" },
      { id: "s12-6", n: "12.6", t: "Laboratorio: salvare i tuoi dati" },
      { id: "s12-7", n: "12.7", t: "Esercizi" },
      { id: "s12-8", n: "12.8", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Programmazione a oggetti",
    file: "cap13-oggetti-classi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Oggetti: dati + comportamento" },
      { id: "s13-2", n: "13.2", t: "class e __init__" },
      { id: "s13-3", n: "13.3", t: "Metodi e self" },
      { id: "s13-4", n: "13.4", t: "Ereditarietà" },
      { id: "s13-5", n: "13.5", t: "Metodi speciali (__str__, …)" },
      { id: "s13-6", n: "13.6", t: "Laboratorio: modellare qualcosa di reale" },
      { id: "s13-7", n: "13.7", t: "Esercizi" },
      { id: "s13-8", n: "13.8", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Il Python elegante",
    file: "cap14-python-elegante.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Iterare bene (enumerate, zip)" },
      { id: "s14-2", n: "14.2", t: "Comprehension di liste e dizionari" },
      { id: "s14-3", n: "14.3", t: "Generatori e yield" },
      { id: "s14-4", n: "14.4", t: "Funzioni come valori (lambda, map)" },
      { id: "s14-5", n: "14.5", t: "Lo stile «pythonico»" },
      { id: "s14-6", n: "14.6", t: "Laboratorio: riscrivere in bello" },
      { id: "s14-7", n: "14.7", t: "Esercizi" },
      { id: "s14-8", n: "14.8", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "La libreria standard, in pratica",
    file: "cap15-libreria-standard.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Date e tempo (datetime)" },
      { id: "s15-2", n: "15.2", t: "Numeri casuali (random)" },
      { id: "s15-3", n: "15.3", t: "Matematica (math)" },
      { id: "s15-4", n: "15.4", t: "Collezioni utili (collections)" },
      { id: "s15-5", n: "15.5", t: "Il web dal terminale (requests)" },
      { id: "s15-6", n: "15.6", t: "Laboratorio: un piccolo strumento utile" },
      { id: "s15-7", n: "15.7", t: "Esercizi" },
      { id: "s15-8", n: "15.8", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "Un progetto completo",
    file: "cap16-progetto-completo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Dall'idea al piano" },
      { id: "s16-2", n: "16.2", t: "Strutturare il progetto" },
      { id: "s16-3", n: "16.3", t: "Scrivere il codice, pezzo per pezzo" },
      { id: "s16-4", n: "16.4", t: "Provare e correggere" },
      { id: "s16-5", n: "16.5", t: "Migliorare e rifinire" },
      { id: "s16-6", n: "16.6", t: "Dove andare da qui" },
      { id: "s16-7", n: "16.7", t: "Esercizi" },
      { id: "s16-8", n: "16.8", t: "Soluzioni" }
    ]
  }
];
