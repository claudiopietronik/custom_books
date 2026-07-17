/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Fisica 1).
   Copre il Volume 1: Meccanica, Onde e acustica, Termodinamica.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Fisica 1", glyph: "⚛", tema: "fis-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Grandezze, unità e vettori",
    file: "cap01-grandezze-vettori.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Cos'è la fisica (e com'è fatto il libro)" },
      { id: "s1-2", n: "1.2", t: "Grandezze fisiche e unità di misura" },
      { id: "s1-3", n: "1.3", t: "Analisi dimensionale e conversioni" },
      { id: "s1-4", n: "1.4", t: "Cifre significative e ordini di grandezza" },
      { id: "s1-5", n: "1.5", t: "I vettori: cosa sono" },
      { id: "s1-6", n: "1.6", t: "Somma di vettori" },
      { id: "s1-7", n: "1.7", t: "Componenti di un vettore" },
      { id: "s1-8", n: "1.8", t: "Versori" },
      { id: "s1-9", n: "1.9", t: "Prodotto scalare" },
      { id: "s1-10", n: "1.10", t: "Prodotto vettoriale" },
      { id: "s1-11", n: "1.11", t: "Esercizi" },
      { id: "s1-12", n: "1.12", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "Il moto rettilineo",
    file: "cap02-moto-rettilineo.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Posizione, spostamento e tempo" },
      { id: "s2-2", n: "2.2", t: "Velocità media" },
      { id: "s2-3", n: "2.3", t: "Velocità istantanea" },
      { id: "s2-4", n: "2.4", t: "Accelerazione" },
      { id: "s2-5", n: "2.5", t: "Moto uniformemente accelerato" },
      { id: "s2-6", n: "2.6", t: "Le equazioni del moto" },
      { id: "s2-7", n: "2.7", t: "La caduta libera" },
      { id: "s2-8", n: "2.8", t: "Dal grafico al moto" },
      { id: "s2-9", n: "2.9", t: "Esercizi" },
      { id: "s2-10", n: "2.10", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Moto nel piano e nello spazio",
    file: "cap03-moto-piano.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Vettori posizione e velocità" },
      { id: "s3-2", n: "3.2", t: "Il vettore accelerazione" },
      { id: "s3-3", n: "3.3", t: "Il moto dei proiettili" },
      { id: "s3-4", n: "3.4", t: "Gittata e traiettoria parabolica" },
      { id: "s3-5", n: "3.5", t: "Il moto circolare uniforme" },
      { id: "s3-6", n: "3.6", t: "L'accelerazione centripeta" },
      { id: "s3-7", n: "3.7", t: "La velocità relativa" },
      { id: "s3-8", n: "3.8", t: "Esercizi" },
      { id: "s3-9", n: "3.9", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Le leggi di Newton",
    file: "cap04-leggi-newton.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Forza e interazioni" },
      { id: "s4-2", n: "4.2", t: "La prima legge: l'inerzia" },
      { id: "s4-3", n: "4.3", t: "La seconda legge: F = ma" },
      { id: "s4-4", n: "4.4", t: "Massa e peso" },
      { id: "s4-5", n: "4.5", t: "La terza legge: azione e reazione" },
      { id: "s4-6", n: "4.6", t: "I diagrammi di corpo libero" },
      { id: "s4-7", n: "4.7", t: "Esercizi" },
      { id: "s4-8", n: "4.8", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Applicazioni delle leggi di Newton",
    file: "cap05-applicazioni-newton.html",
    stato: "da-fare",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "L'equilibrio delle particelle" },
      { id: "s5-2", n: "5.2", t: "La dinamica delle particelle" },
      { id: "s5-3", n: "5.3", t: "Le forze di attrito" },
      { id: "s5-4", n: "5.4", t: "Attrito statico e dinamico" },
      { id: "s5-5", n: "5.5", t: "La dinamica del moto circolare" },
      { id: "s5-6", n: "5.6", t: "Esercizi" },
      { id: "s5-7", n: "5.7", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Lavoro ed energia cinetica",
    file: "cap06-lavoro-energia.html",
    stato: "da-fare",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Il lavoro di una forza" },
      { id: "s6-2", n: "6.2", t: "L'energia cinetica" },
      { id: "s6-3", n: "6.3", t: "Il teorema dell'energia cinetica" },
      { id: "s6-4", n: "6.4", t: "Lavoro di una forza variabile (la molla)" },
      { id: "s6-5", n: "6.5", t: "La potenza" },
      { id: "s6-6", n: "6.6", t: "Esercizi" },
      { id: "s6-7", n: "6.7", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Energia potenziale e conservazione",
    file: "cap07-energia-potenziale.html",
    stato: "da-fare",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "L'energia potenziale gravitazionale" },
      { id: "s7-2", n: "7.2", t: "L'energia potenziale elastica" },
      { id: "s7-3", n: "7.3", t: "La conservazione dell'energia meccanica" },
      { id: "s7-4", n: "7.4", t: "Forze conservative e dissipative" },
      { id: "s7-5", n: "7.5", t: "Forza dall'energia potenziale" },
      { id: "s7-6", n: "7.6", t: "I diagrammi di energia" },
      { id: "s7-7", n: "7.7", t: "Esercizi" },
      { id: "s7-8", n: "7.8", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Quantità di moto, impulso e urti",
    file: "cap08-quantita-moto.html",
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "La quantità di moto" },
      { id: "s8-2", n: "8.2", t: "L'impulso e il suo teorema" },
      { id: "s8-3", n: "8.3", t: "La conservazione della quantità di moto" },
      { id: "s8-4", n: "8.4", t: "Gli urti anelastici" },
      { id: "s8-5", n: "8.5", t: "Gli urti elastici" },
      { id: "s8-6", n: "8.6", t: "Il centro di massa" },
      { id: "s8-7", n: "8.7", t: "Esercizi" },
      { id: "s8-8", n: "8.8", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Rotazione dei corpi rigidi",
    file: "cap09-rotazione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Le grandezze angolari" },
      { id: "s9-2", n: "9.2", t: "Rotazione uniformemente accelerata" },
      { id: "s9-3", n: "9.3", t: "Legame tra grandezze lineari e angolari" },
      { id: "s9-4", n: "9.4", t: "Il momento d'inerzia" },
      { id: "s9-5", n: "9.5", t: "L'energia cinetica di rotazione" },
      { id: "s9-6", n: "9.6", t: "Il teorema degli assi paralleli" },
      { id: "s9-7", n: "9.7", t: "Esercizi" },
      { id: "s9-8", n: "9.8", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Dinamica rotazionale",
    file: "cap10-dinamica-rotazionale.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Il momento torcente" },
      { id: "s10-2", n: "10.2", t: "La seconda legge per la rotazione" },
      { id: "s10-3", n: "10.3", t: "Il rotolamento" },
      { id: "s10-4", n: "10.4", t: "Lavoro e potenza nella rotazione" },
      { id: "s10-5", n: "10.5", t: "Il momento angolare" },
      { id: "s10-6", n: "10.6", t: "La conservazione del momento angolare" },
      { id: "s10-7", n: "10.7", t: "Esercizi" },
      { id: "s10-8", n: "10.8", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Equilibrio ed elasticità",
    file: "cap11-equilibrio.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Le condizioni di equilibrio" },
      { id: "s11-2", n: "11.2", t: "Il centro di gravità" },
      { id: "s11-3", n: "11.3", t: "Risolvere problemi di equilibrio" },
      { id: "s11-4", n: "11.4", t: "Sforzo e deformazione" },
      { id: "s11-5", n: "11.5", t: "I moduli di elasticità" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Gravitazione",
    file: "cap12-gravitazione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "La legge di gravitazione universale" },
      { id: "s12-2", n: "12.2", t: "Il peso e l'accelerazione g" },
      { id: "s12-3", n: "12.3", t: "L'energia potenziale gravitazionale" },
      { id: "s12-4", n: "12.4", t: "Il moto dei satelliti" },
      { id: "s12-5", n: "12.5", t: "Le leggi di Keplero" },
      { id: "s12-6", n: "12.6", t: "Velocità di fuga e buchi neri" },
      { id: "s12-7", n: "12.7", t: "Esercizi" },
      { id: "s12-8", n: "12.8", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Le oscillazioni",
    file: "cap13-oscillazioni.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Il moto periodico" },
      { id: "s13-2", n: "13.2", t: "Il moto armonico semplice" },
      { id: "s13-3", n: "13.3", t: "Le equazioni del MAS" },
      { id: "s13-4", n: "13.4", t: "L'energia nel MAS" },
      { id: "s13-5", n: "13.5", t: "Il pendolo semplice" },
      { id: "s13-6", n: "13.6", t: "Il pendolo fisico" },
      { id: "s13-7", n: "13.7", t: "Oscillazioni smorzate" },
      { id: "s13-8", n: "13.8", t: "Oscillazioni forzate e risonanza" },
      { id: "s13-9", n: "13.9", t: "Esercizi" },
      { id: "s13-10", n: "13.10", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "La meccanica dei fluidi",
    file: "cap14-fluidi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Densità e pressione" },
      { id: "s14-2", n: "14.2", t: "La pressione in un fluido (Stevino)" },
      { id: "s14-3", n: "14.3", t: "Il principio di Pascal" },
      { id: "s14-4", n: "14.4", t: "Il principio di Archimede" },
      { id: "s14-5", n: "14.5", t: "Il flusso e la continuità" },
      { id: "s14-6", n: "14.6", t: "L'equazione di Bernoulli" },
      { id: "s14-7", n: "14.7", t: "Esercizi" },
      { id: "s14-8", n: "14.8", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Le onde meccaniche",
    file: "cap15-onde.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Cos'è un'onda" },
      { id: "s15-2", n: "15.2", t: "Onde trasversali e longitudinali" },
      { id: "s15-3", n: "15.3", t: "Onde periodiche" },
      { id: "s15-4", n: "15.4", t: "La descrizione matematica di un'onda" },
      { id: "s15-5", n: "15.5", t: "La velocità di un'onda su una corda" },
      { id: "s15-6", n: "15.6", t: "L'energia trasportata" },
      { id: "s15-7", n: "15.7", t: "Interferenza e sovrapposizione" },
      { id: "s15-8", n: "15.8", t: "Onde stazionarie e modi normali" },
      { id: "s15-9", n: "15.9", t: "Esercizi" },
      { id: "s15-10", n: "15.10", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "Il suono e l'acustica",
    file: "cap16-suono.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Le onde sonore" },
      { id: "s16-2", n: "16.2", t: "La velocità del suono" },
      { id: "s16-3", n: "16.3", t: "Intensità e livello sonoro (decibel)" },
      { id: "s16-4", n: "16.4", t: "Onde stazionarie nei tubi" },
      { id: "s16-5", n: "16.5", t: "La risonanza" },
      { id: "s16-6", n: "16.6", t: "I battimenti" },
      { id: "s16-7", n: "16.7", t: "L'effetto Doppler" },
      { id: "s16-8", n: "16.8", t: "Esercizi" },
      { id: "s16-9", n: "16.9", t: "Soluzioni" }
    ]
  },
  {
    n: 17,
    titolo: "Temperatura e calore",
    file: "cap17-temperatura-calore.html",
    stato: "da-fare",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "Temperatura ed equilibrio termico" },
      { id: "s17-2", n: "17.2", t: "Le scale di temperatura" },
      { id: "s17-3", n: "17.3", t: "La dilatazione termica" },
      { id: "s17-4", n: "17.4", t: "Il calore e la capacità termica" },
      { id: "s17-5", n: "17.5", t: "Cambiamenti di fase e calore latente" },
      { id: "s17-6", n: "17.6", t: "La calorimetria" },
      { id: "s17-7", n: "17.7", t: "La trasmissione del calore" },
      { id: "s17-8", n: "17.8", t: "Esercizi" },
      { id: "s17-9", n: "17.9", t: "Soluzioni" }
    ]
  },
  {
    n: 18,
    titolo: "Le proprietà termiche della materia",
    file: "cap18-proprieta-termiche.html",
    stato: "da-fare",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "L'equazione di stato del gas ideale" },
      { id: "s18-2", n: "18.2", t: "Il modello cinetico del gas" },
      { id: "s18-3", n: "18.3", t: "Temperatura ed energia molecolare" },
      { id: "s18-4", n: "18.4", t: "Le capacità termiche dei gas" },
      { id: "s18-5", n: "18.5", t: "La distribuzione delle velocità" },
      { id: "s18-6", n: "18.6", t: "Le fasi della materia" },
      { id: "s18-7", n: "18.7", t: "Esercizi" },
      { id: "s18-8", n: "18.8", t: "Soluzioni" }
    ]
  },
  {
    n: 19,
    titolo: "La prima legge della termodinamica",
    file: "cap19-prima-legge.html",
    stato: "da-fare",
    sezioni: [
      { id: "s19-1", n: "19.1", t: "Sistemi e stati termodinamici" },
      { id: "s19-2", n: "19.2", t: "Il lavoro termodinamico" },
      { id: "s19-3", n: "19.3", t: "Il calore e i percorsi" },
      { id: "s19-4", n: "19.4", t: "L'energia interna e la prima legge" },
      { id: "s19-5", n: "19.5", t: "I processi termodinamici" },
      { id: "s19-6", n: "19.6", t: "L'energia interna del gas ideale" },
      { id: "s19-7", n: "19.7", t: "Il processo adiabatico" },
      { id: "s19-8", n: "19.8", t: "Esercizi" },
      { id: "s19-9", n: "19.9", t: "Soluzioni" }
    ]
  },
  {
    n: 20,
    titolo: "La seconda legge della termodinamica",
    file: "cap20-seconda-legge.html",
    stato: "da-fare",
    sezioni: [
      { id: "s20-1", n: "20.1", t: "La direzione dei processi" },
      { id: "s20-2", n: "20.2", t: "Le macchine termiche" },
      { id: "s20-3", n: "20.3", t: "I frigoriferi" },
      { id: "s20-4", n: "20.4", t: "La seconda legge" },
      { id: "s20-5", n: "20.5", t: "Il ciclo di Carnot" },
      { id: "s20-6", n: "20.6", t: "L'entropia" },
      { id: "s20-7", n: "20.7", t: "L'interpretazione microscopica" },
      { id: "s20-8", n: "20.8", t: "Esercizi" },
      { id: "s20-9", n: "20.9", t: "Soluzioni" }
    ]
  }
];
