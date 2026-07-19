/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Il Web).
   Libro della collana di programmazione: HTML, CSS e JavaScript, cioè come si
   costruisce la parte visibile del web. I laboratori si fanno nel browser.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Il Web", glyph: "🌐", tema: "web-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Il web e i suoi tre linguaggi",
    file: "cap01-tre-linguaggi.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Cosa succede aprendo una pagina" },
      { id: "s1-2", n: "1.2", t: "HTML, CSS, JavaScript: i tre ruoli" },
      { id: "s1-3", n: "1.3", t: "La tua prima pagina" },
      { id: "s1-4", n: "1.4", t: "Gli strumenti: editor e browser" },
      { id: "s1-5", n: "1.5", t: "Laboratorio: ciao web" },
      { id: "s1-6", n: "1.6", t: "Esercizi" },
      { id: "s1-7", n: "1.7", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "HTML: la struttura",
    file: "cap02-html-struttura.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "L'anatomia di un documento" },
      { id: "s2-2", n: "2.2", t: "Elementi, tag, attributi" },
      { id: "s2-3", n: "2.3", t: "head e body" },
      { id: "s2-4", n: "2.4", t: "L'annidamento" },
      { id: "s2-5", n: "2.5", t: "Laboratorio: una pagina strutturata" },
      { id: "s2-6", n: "2.6", t: "Esercizi" },
      { id: "s2-7", n: "2.7", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "I tag del testo",
    file: "cap03-tag-testo.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Titoli e paragrafi" },
      { id: "s3-2", n: "3.2", t: "Grassetto, corsivo, enfasi" },
      { id: "s3-3", n: "3.3", t: "span e div" },
      { id: "s3-4", n: "3.4", t: "Semantica: usare il tag giusto" },
      { id: "s3-5", n: "3.5", t: "Laboratorio: un articolo" },
      { id: "s3-6", n: "3.6", t: "Esercizi" },
      { id: "s3-7", n: "3.7", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Link, immagini e liste",
    file: "cap04-link-immagini.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "I link con <a>" },
      { id: "s4-2", n: "4.2", t: "Le immagini con <img>" },
      { id: "s4-3", n: "4.3", t: "Liste ordinate e non" },
      { id: "s4-4", n: "4.4", t: "Percorsi: relativi e assoluti" },
      { id: "s4-5", n: "4.5", t: "Laboratorio: una pagina ricca" },
      { id: "s4-6", n: "4.6", t: "Esercizi" },
      { id: "s4-7", n: "4.7", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Form e input",
    file: "cap05-form.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "A cosa serve un form" },
      { id: "s5-2", n: "5.2", t: "I campi di input" },
      { id: "s5-3", n: "5.3", t: "Etichette e pulsanti" },
      { id: "s5-4", n: "5.4", t: "Select, checkbox, radio" },
      { id: "s5-5", n: "5.5", t: "Laboratorio: un modulo di iscrizione" },
      { id: "s5-6", n: "5.6", t: "Esercizi" },
      { id: "s5-7", n: "5.7", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "CSS: dare stile",
    file: "cap06-css-stile.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Cos'è il CSS" },
      { id: "s6-2", n: "6.2", t: "Come collegare il CSS" },
      { id: "s6-3", n: "6.3", t: "La sintassi: regole e dichiarazioni" },
      { id: "s6-4", n: "6.4", t: "Colori, font, dimensioni" },
      { id: "s6-5", n: "6.5", t: "Laboratorio: una pagina con stile" },
      { id: "s6-6", n: "6.6", t: "Esercizi" },
      { id: "s6-7", n: "6.7", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "I selettori",
    file: "cap07-selettori.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Selettori di tag" },
      { id: "s7-2", n: "7.2", t: "Classi e id" },
      { id: "s7-3", n: "7.3", t: "Combinare i selettori" },
      { id: "s7-4", n: "7.4", t: "Pseudo-classi (:hover…)" },
      { id: "s7-5", n: "7.5", t: "La specificità" },
      { id: "s7-6", n: "7.6", t: "Laboratorio: selezionare con precisione" },
      { id: "s7-7", n: "7.7", t: "Esercizi" },
      { id: "s7-8", n: "7.8", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Il box model",
    file: "cap08-box-model.html",
    stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Ogni elemento è una scatola" },
      { id: "s8-2", n: "8.2", t: "content, padding, border, margin" },
      { id: "s8-3", n: "8.3", t: "Larghezza e altezza" },
      { id: "s8-4", n: "8.4", t: "box-sizing" },
      { id: "s8-5", n: "8.5", t: "block e inline" },
      { id: "s8-6", n: "8.6", t: "Laboratorio: giocare con le scatole" },
      { id: "s8-7", n: "8.7", t: "Esercizi" },
      { id: "s8-8", n: "8.8", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Layout con Flexbox",
    file: "cap09-flexbox.html",
    stato: "pronto",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Il problema del layout" },
      { id: "s9-2", n: "9.2", t: "display: flex" },
      { id: "s9-3", n: "9.3", t: "Direzione e allineamento" },
      { id: "s9-4", n: "9.4", t: "Distribuire lo spazio" },
      { id: "s9-5", n: "9.5", t: "Laboratorio: una barra di navigazione" },
      { id: "s9-6", n: "9.6", t: "Esercizi" },
      { id: "s9-7", n: "9.7", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Responsive: ogni schermo",
    file: "cap10-responsive.html",
    stato: "pronto",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Perché responsive" },
      { id: "s10-2", n: "10.2", t: "Unità relative (%, rem, vw)" },
      { id: "s10-3", n: "10.3", t: "Il meta viewport" },
      { id: "s10-4", n: "10.4", t: "Le media query" },
      { id: "s10-5", n: "10.5", t: "Laboratorio: una pagina adattiva" },
      { id: "s10-6", n: "10.6", t: "Esercizi" },
      { id: "s10-7", n: "10.7", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "JavaScript: le basi",
    file: "cap11-js-basi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Cosa aggiunge JavaScript" },
      { id: "s11-2", n: "11.2", t: "Variabili e tipi" },
      { id: "s11-3", n: "11.3", t: "Funzioni" },
      { id: "s11-4", n: "11.4", t: "Condizioni e cicli" },
      { id: "s11-5", n: "11.5", t: "La console del browser" },
      { id: "s11-6", n: "11.6", t: "Laboratorio: primi script" },
      { id: "s11-7", n: "11.7", t: "Esercizi" },
      { id: "s11-8", n: "11.8", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Il DOM: la pagina come oggetti",
    file: "cap12-dom.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Cos'è il DOM" },
      { id: "s12-2", n: "12.2", t: "L'albero degli elementi" },
      { id: "s12-3", n: "12.3", t: "Selezionare elementi" },
      { id: "s12-4", n: "12.4", t: "Leggere e cambiare il contenuto" },
      { id: "s12-5", n: "12.5", t: "Laboratorio: cambiare la pagina" },
      { id: "s12-6", n: "12.6", t: "Esercizi" },
      { id: "s12-7", n: "12.7", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Manipolare il DOM",
    file: "cap13-manipolare-dom.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Cambiare stili e classi" },
      { id: "s13-2", n: "13.2", t: "Creare e rimuovere elementi" },
      { id: "s13-3", n: "13.3", t: "Attributi via JS" },
      { id: "s13-4", n: "13.4", t: "Scorrere una lista di elementi" },
      { id: "s13-5", n: "13.5", t: "Laboratorio: una lista dinamica" },
      { id: "s13-6", n: "13.6", t: "Esercizi" },
      { id: "s13-7", n: "13.7", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Eventi: reagire all'utente",
    file: "cap14-eventi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Cos'è un evento" },
      { id: "s14-2", n: "14.2", t: "addEventListener" },
      { id: "s14-3", n: "14.3", t: "Click, input, tastiera" },
      { id: "s14-4", n: "14.4", t: "L'oggetto evento" },
      { id: "s14-5", n: "14.5", t: "Laboratorio: una pagina interattiva" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Fetch: dati dal web",
    file: "cap15-fetch.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Parlare con un server da JS" },
      { id: "s15-2", n: "15.2", t: "fetch e le promise" },
      { id: "s15-3", n: "15.3", t: "async / await" },
      { id: "s15-4", n: "15.4", t: "Mostrare i dati nella pagina" },
      { id: "s15-5", n: "15.5", t: "Laboratorio: dati da un'API" },
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
      { id: "s16-1", n: "16.1", t: "L'idea: una lista di cose da fare" },
      { id: "s16-2", n: "16.2", t: "La struttura HTML" },
      { id: "s16-3", n: "16.3", t: "Lo stile CSS" },
      { id: "s16-4", n: "16.4", t: "Il comportamento JS" },
      { id: "s16-5", n: "16.5", t: "Salvare con localStorage" },
      { id: "s16-6", n: "16.6", t: "Dove andare da qui" },
      { id: "s16-7", n: "16.7", t: "Esercizi" },
      { id: "s16-8", n: "16.8", t: "Soluzioni" }
    ]
  }
];
