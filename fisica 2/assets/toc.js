/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Fisica 2).
   Copre il Volume 2: Elettromagnetismo, Ottica, Fisica moderna.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Fisica 2", glyph: "⚛", tema: "fis-theme" };

const TOC = [
  {
    n: 1,
    titolo: "La carica elettrica e il campo elettrico",
    file: "cap01-carica-campo.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "La carica elettrica" },
      { id: "s1-2", n: "1.2", t: "Conduttori e isolanti" },
      { id: "s1-3", n: "1.3", t: "La legge di Coulomb" },
      { id: "s1-4", n: "1.4", t: "Il campo elettrico" },
      { id: "s1-5", n: "1.5", t: "Il campo di distribuzioni di cariche" },
      { id: "s1-6", n: "1.6", t: "Le linee di campo" },
      { id: "s1-7", n: "1.7", t: "I dipoli elettrici" },
      { id: "s1-8", n: "1.8", t: "Esercizi" },
      { id: "s1-9", n: "1.9", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "La legge di Gauss",
    file: "cap02-gauss.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Il flusso del campo elettrico" },
      { id: "s2-2", n: "2.2", t: "La legge di Gauss" },
      { id: "s2-3", n: "2.3", t: "Applicazioni con le simmetrie" },
      { id: "s2-4", n: "2.4", t: "Le cariche sui conduttori" },
      { id: "s2-5", n: "2.5", t: "Esercizi" },
      { id: "s2-6", n: "2.6", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Il potenziale elettrico",
    file: "cap03-potenziale.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "L'energia potenziale elettrica" },
      { id: "s3-2", n: "3.2", t: "Il potenziale elettrico" },
      { id: "s3-3", n: "3.3", t: "Il calcolo del potenziale" },
      { id: "s3-4", n: "3.4", t: "Le superfici equipotenziali" },
      { id: "s3-5", n: "3.5", t: "Il gradiente del potenziale" },
      { id: "s3-6", n: "3.6", t: "Esercizi" },
      { id: "s3-7", n: "3.7", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Condensatori e dielettrici",
    file: "cap04-condensatori.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "La capacità" },
      { id: "s4-2", n: "4.2", t: "Condensatori in serie e in parallelo" },
      { id: "s4-3", n: "4.3", t: "L'energia immagazzinata" },
      { id: "s4-4", n: "4.4", t: "I dielettrici" },
      { id: "s4-5", n: "4.5", t: "Esercizi" },
      { id: "s4-6", n: "4.6", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Corrente, resistenza e forza elettromotrice",
    file: "cap05-corrente-resistenza.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "La corrente elettrica" },
      { id: "s5-2", n: "5.2", t: "Resistività e resistenza" },
      { id: "s5-3", n: "5.3", t: "La legge di Ohm" },
      { id: "s5-4", n: "5.4", t: "La forza elettromotrice" },
      { id: "s5-5", n: "5.5", t: "La potenza nei circuiti" },
      { id: "s5-6", n: "5.6", t: "Esercizi" },
      { id: "s5-7", n: "5.7", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "I circuiti in corrente continua",
    file: "cap06-circuiti-dc.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Resistori in serie e in parallelo" },
      { id: "s6-2", n: "6.2", t: "Le leggi di Kirchhoff" },
      { id: "s6-3", n: "6.3", t: "Gli strumenti di misura" },
      { id: "s6-4", n: "6.4", t: "I circuiti RC" },
      { id: "s6-5", n: "6.5", t: "Esercizi" },
      { id: "s6-6", n: "6.6", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Il campo magnetico e le forze magnetiche",
    file: "cap07-campo-magnetico.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Il magnetismo e il campo magnetico" },
      { id: "s7-2", n: "7.2", t: "La forza di Lorentz" },
      { id: "s7-3", n: "7.3", t: "Il moto di cariche in un campo magnetico" },
      { id: "s7-4", n: "7.4", t: "La forza su un filo percorso da corrente" },
      { id: "s7-5", n: "7.5", t: "La spira e il momento magnetico" },
      { id: "s7-6", n: "7.6", t: "Esercizi" },
      { id: "s7-7", n: "7.7", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Le sorgenti del campo magnetico",
    file: "cap08-sorgenti-magnetiche.html",
    stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Il campo di una carica in moto" },
      { id: "s8-2", n: "8.2", t: "La legge di Biot-Savart" },
      { id: "s8-3", n: "8.3", t: "Il campo di un filo e di una spira" },
      { id: "s8-4", n: "8.4", t: "La legge di Ampère" },
      { id: "s8-5", n: "8.5", t: "Solenoidi e materiali magnetici" },
      { id: "s8-6", n: "8.6", t: "Esercizi" },
      { id: "s8-7", n: "8.7", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "L'induzione elettromagnetica",
    file: "cap09-induzione.html",
    stato: "pronto",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Gli esperimenti di Faraday" },
      { id: "s9-2", n: "9.2", t: "La legge di Faraday" },
      { id: "s9-3", n: "9.3", t: "La legge di Lenz" },
      { id: "s9-4", n: "9.4", t: "La forza elettromotrice mozionale" },
      { id: "s9-5", n: "9.5", t: "I campi elettrici indotti" },
      { id: "s9-6", n: "9.6", t: "Esercizi" },
      { id: "s9-7", n: "9.7", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "L'induttanza",
    file: "cap10-induttanza.html",
    stato: "pronto",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "L'induttanza mutua" },
      { id: "s10-2", n: "10.2", t: "L'autoinduttanza" },
      { id: "s10-3", n: "10.3", t: "L'energia del campo magnetico" },
      { id: "s10-4", n: "10.4", t: "Il circuito RL" },
      { id: "s10-5", n: "10.5", t: "Il circuito LC e le oscillazioni" },
      { id: "s10-6", n: "10.6", t: "Esercizi" },
      { id: "s10-7", n: "10.7", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Le correnti alternate",
    file: "cap11-corrente-alternata.html",
    stato: "pronto",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "I fasori e la corrente alternata" },
      { id: "s11-2", n: "11.2", t: "Resistenza e reattanza" },
      { id: "s11-3", n: "11.3", t: "Il circuito RLC in serie" },
      { id: "s11-4", n: "11.4", t: "La potenza nei circuiti in c.a." },
      { id: "s11-5", n: "11.5", t: "La risonanza" },
      { id: "s11-6", n: "11.6", t: "Il trasformatore" },
      { id: "s11-7", n: "11.7", t: "Esercizi" },
      { id: "s11-8", n: "11.8", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Le onde elettromagnetiche",
    file: "cap12-onde-em.html",
    stato: "pronto",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Le equazioni di Maxwell" },
      { id: "s12-2", n: "12.2", t: "Le onde elettromagnetiche" },
      { id: "s12-3", n: "12.3", t: "La velocità della luce" },
      { id: "s12-4", n: "12.4", t: "L'energia e il vettore di Poynting" },
      { id: "s12-5", n: "12.5", t: "Lo spettro elettromagnetico" },
      { id: "s12-6", n: "12.6", t: "Esercizi" },
      { id: "s12-7", n: "12.7", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "La natura e la propagazione della luce",
    file: "cap13-natura-luce.html",
    stato: "pronto",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "La natura della luce" },
      { id: "s13-2", n: "13.2", t: "Riflessione e rifrazione" },
      { id: "s13-3", n: "13.3", t: "La legge di Snell" },
      { id: "s13-4", n: "13.4", t: "La riflessione totale interna" },
      { id: "s13-5", n: "13.5", t: "La dispersione" },
      { id: "s13-6", n: "13.6", t: "La polarizzazione" },
      { id: "s13-7", n: "13.7", t: "Esercizi" },
      { id: "s13-8", n: "13.8", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "L'ottica geometrica e gli strumenti ottici",
    file: "cap14-ottica-geometrica.html",
    stato: "pronto",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Gli specchi piani" },
      { id: "s14-2", n: "14.2", t: "Gli specchi sferici" },
      { id: "s14-3", n: "14.3", t: "La rifrazione sulle superfici" },
      { id: "s14-4", n: "14.4", t: "Le lenti sottili" },
      { id: "s14-5", n: "14.5", t: "Gli strumenti ottici" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "L'interferenza",
    file: "cap15-interferenza.html",
    stato: "pronto",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Sovrapposizione e coerenza" },
      { id: "s15-2", n: "15.2", t: "L'esperimento di Young" },
      { id: "s15-3", n: "15.3", t: "L'intensità delle figure d'interferenza" },
      { id: "s15-4", n: "15.4", t: "L'interferenza nei film sottili" },
      { id: "s15-5", n: "15.5", t: "Esercizi" },
      { id: "s15-6", n: "15.6", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "La diffrazione",
    file: "cap16-diffrazione.html",
    stato: "pronto",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "La diffrazione da una fenditura" },
      { id: "s16-2", n: "16.2", t: "Il reticolo di diffrazione" },
      { id: "s16-3", n: "16.3", t: "Il potere risolutivo" },
      { id: "s16-4", n: "16.4", t: "La diffrazione dei raggi X" },
      { id: "s16-5", n: "16.5", t: "Esercizi" },
      { id: "s16-6", n: "16.6", t: "Soluzioni" }
    ]
  },
  {
    n: 17,
    titolo: "La relatività ristretta",
    file: "cap17-relativita.html",
    stato: "da-fare",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "I postulati di Einstein" },
      { id: "s17-2", n: "17.2", t: "La relatività della simultaneità" },
      { id: "s17-3", n: "17.3", t: "La dilatazione dei tempi" },
      { id: "s17-4", n: "17.4", t: "La contrazione delle lunghezze" },
      { id: "s17-5", n: "17.5", t: "Le trasformazioni di Lorentz" },
      { id: "s17-6", n: "17.6", t: "Quantità di moto ed energia (E=mc²)" },
      { id: "s17-7", n: "17.7", t: "Esercizi" },
      { id: "s17-8", n: "17.8", t: "Soluzioni" }
    ]
  },
  {
    n: 18,
    titolo: "Fotoni, elettroni e la fisica quantistica",
    file: "cap18-quantistica.html",
    stato: "da-fare",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "L'effetto fotoelettrico" },
      { id: "s18-2", n: "18.2", t: "I fotoni" },
      { id: "s18-3", n: "18.3", t: "L'effetto Compton" },
      { id: "s18-4", n: "18.4", t: "Il dualismo onda-particella" },
      { id: "s18-5", n: "18.5", t: "Il principio di indeterminazione" },
      { id: "s18-6", n: "18.6", t: "Esercizi" },
      { id: "s18-7", n: "18.7", t: "Soluzioni" }
    ]
  },
  {
    n: 19,
    titolo: "La struttura dell'atomo",
    file: "cap19-atomo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s19-1", n: "19.1", t: "Gli spettri a righe" },
      { id: "s19-2", n: "19.2", t: "Il modello di Bohr" },
      { id: "s19-3", n: "19.3", t: "I livelli energetici" },
      { id: "s19-4", n: "19.4", t: "L'atomo nella meccanica quantistica" },
      { id: "s19-5", n: "19.5", t: "Il laser" },
      { id: "s19-6", n: "19.6", t: "Esercizi" },
      { id: "s19-7", n: "19.7", t: "Soluzioni" }
    ]
  },
  {
    n: 20,
    titolo: "Il nucleo e le particelle",
    file: "cap20-nucleo-particelle.html",
    stato: "da-fare",
    sezioni: [
      { id: "s20-1", n: "20.1", t: "Il nucleo atomico" },
      { id: "s20-2", n: "20.2", t: "La radioattività" },
      { id: "s20-3", n: "20.3", t: "La legge del decadimento" },
      { id: "s20-4", n: "20.4", t: "Fissione e fusione nucleare" },
      { id: "s20-5", n: "20.5", t: "Le particelle elementari e le forze fondamentali" },
      { id: "s20-6", n: "20.6", t: "Esercizi" },
      { id: "s20-7", n: "20.7", t: "Soluzioni" }
    ]
  }
];
