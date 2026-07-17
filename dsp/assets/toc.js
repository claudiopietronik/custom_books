/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (DSP).
   Ogni pagina costruisce il menu in alto da qui: aggiungere un capitolo
   significa aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "DSP", glyph: "∿", tema: "dsp-theme" };

const TOC = [
  {
    n: 1,
    titolo: "L'ampiezza e la profondità del DSP",
    file: "cap01-ampiezza-profondita.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Cos'è il DSP e perché è dappertutto" },
      { id: "s1-2", n: "1.2", t: "Le radici: dai matematici ai microchip" },
      { id: "s1-3", n: "1.3", t: "Telecomunicazioni" },
      { id: "s1-4", n: "1.4", t: "Elaborazione audio" },
      { id: "s1-5", n: "1.5", t: "Eco-localizzazione: radar, sonar, sismica" },
      { id: "s1-6", n: "1.6", t: "Elaborazione delle immagini" },
      { id: "s1-7", n: "1.7", t: "Com'è fatto questo libro" }
    ]
  },
  {
    n: 2,
    titolo: "Statistica, probabilità e rumore",
    file: "cap02-statistica-rumore.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Media e deviazione standard" },
      { id: "s2-2", n: "2.2", t: "Segnale, rumore e rapporto segnale/rumore" },
      { id: "s2-3", n: "2.3", t: "Varianza: come si calcola davvero" },
      { id: "s2-4", n: "2.4", t: "Istogramma, PMF e PDF" },
      { id: "s2-5", n: "2.5", t: "La distribuzione normale" },
      { id: "s2-6", n: "2.6", t: "Generare numeri casuali" },
      { id: "s2-7", n: "2.7", t: "Precisione e accuratezza" },
      { id: "s2-8", n: "2.8", t: "Esercizi" },
      { id: "s2-9", n: "2.9", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "ADC e DAC: dal mondo analogico al digitale",
    file: "cap03-adc-dac.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Quantizzazione: discretizzare l'ampiezza" },
      { id: "s3-2", n: "3.2", t: "Il teorema del campionamento (Nyquist)" },
      { id: "s3-3", n: "3.3", t: "L'aliasing: quando le frequenze mentono" },
      { id: "s3-4", n: "3.4", t: "Filtri anti-alias" },
      { id: "s3-5", n: "3.5", t: "Come lavora davvero un convertitore" },
      { id: "s3-6", n: "3.6", t: "Ricostruzione: mantieni-e-campiona" },
      { id: "s3-7", n: "3.7", t: "Il campionamento nel dominio della frequenza" },
      { id: "s3-8", n: "3.8", t: "Esercizi" },
      { id: "s3-9", n: "3.9", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Il software del DSP",
    file: "cap04-software-dsp.html",
    stato: "da-fare",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Numeri interi e virgola fissa" },
      { id: "s4-2", n: "4.2", t: "Numeri in virgola mobile" },
      { id: "s4-3", n: "4.3", t: "Rumore di arrotondamento ed errori numerici" },
      { id: "s4-4", n: "4.4", t: "Come il calcolatore rappresenta i numeri" },
      { id: "s4-5", n: "4.5", t: "Velocità di esecuzione e ottimizzazione" },
      { id: "s4-6", n: "4.6", t: "Tabelle e approssimazione di funzioni" },
      { id: "s4-7", n: "4.7", t: "Esercizi" },
      { id: "s4-8", n: "4.8", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Sistemi lineari",
    file: "cap05-sistemi-lineari.html",
    stato: "da-fare",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Cos'è un sistema" },
      { id: "s5-2", n: "5.2", t: "Linearità: omogeneità e additività" },
      { id: "s5-3", n: "5.3", t: "Invarianza nel tempo" },
      { id: "s5-4", n: "5.4", t: "Esempi lineari e non lineari" },
      { id: "s5-5", n: "5.5", t: "Il principio di sovrapposizione" },
      { id: "s5-6", n: "5.6", t: "Decomposizione dei segnali" },
      { id: "s5-7", n: "5.7", t: "Sistemi in cascata e in parallelo" },
      { id: "s5-8", n: "5.8", t: "Esercizi" },
      { id: "s5-9", n: "5.9", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "La convoluzione",
    file: "cap06-convoluzione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "La funzione delta e la risposta all'impulso" },
      { id: "s6-2", n: "6.2", t: "La convoluzione vista dall'ingresso" },
      { id: "s6-3", n: "6.3", t: "La convoluzione vista dall'uscita" },
      { id: "s6-4", n: "6.4", t: "La formula, smontata" },
      { id: "s6-5", n: "6.5", t: "Calcolarla a mano, passo per passo" },
      { id: "s6-6", n: "6.6", t: "Esempi: media, derivata, integrale" },
      { id: "s6-7", n: "6.7", t: "Esercizi" },
      { id: "s6-8", n: "6.8", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Proprietà della convoluzione",
    file: "cap07-proprieta-convoluzione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "La delta come elemento neutro" },
      { id: "s7-2", n: "7.2", t: "Commutativa, associativa, distributiva" },
      { id: "s7-3", n: "7.3", t: "Cosa significano per i sistemi reali" },
      { id: "s7-4", n: "7.4", t: "Derivata e integrale discreti" },
      { id: "s7-5", n: "7.5", t: "La correlazione incrociata" },
      { id: "s7-6", n: "7.6", t: "Il costo di calcolo" },
      { id: "s7-7", n: "7.7", t: "Esercizi" },
      { id: "s7-8", n: "7.8", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "La trasformata di Fourier discreta (DFT)",
    file: "cap08-dft.html",
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "La famiglia delle trasformate di Fourier" },
      { id: "s8-2", n: "8.2", t: "Notazione e formato della DFT reale" },
      { id: "s8-3", n: "8.3", t: "Le funzioni base: seni e coseni" },
      { id: "s8-4", n: "8.4", t: "La sintesi: la DFT inversa" },
      { id: "s8-5", n: "8.5", t: "L'analisi: calcolare la DFT" },
      { id: "s8-6", n: "8.6", t: "Ampiezza e fase: il dominio polare" },
      { id: "s8-7", n: "8.7", t: "Le insidie del dominio polare" },
      { id: "s8-8", n: "8.8", t: "Esercizi" },
      { id: "s8-9", n: "8.9", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Applicazioni della DFT",
    file: "cap09-applicazioni-dft.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Analisi spettrale dei segnali" },
      { id: "s9-2", n: "9.2", t: "Filtrare passando per la frequenza" },
      { id: "s9-3", n: "9.3", t: "Densità spettrale di potenza" },
      { id: "s9-4", n: "9.4", t: "Risoluzione, dispersione e finestre" },
      { id: "s9-5", n: "9.5", t: "Esercizi" },
      { id: "s9-6", n: "9.6", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Proprietà della trasformata di Fourier",
    file: "cap10-proprieta-fourier.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Linearità" },
      { id: "s10-2", n: "10.2", t: "Traslazione e fase" },
      { id: "s10-3", n: "10.3", t: "Simmetria e segnali reali" },
      { id: "s10-4", n: "10.4", t: "Il teorema di convoluzione" },
      { id: "s10-5", n: "10.5", t: "Scala, compressione e dualità" },
      { id: "s10-6", n: "10.6", t: "Esercizi" },
      { id: "s10-7", n: "10.7", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Coppie di trasformate di Fourier",
    file: "cap11-coppie-fourier.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Delta e sinusoidi" },
      { id: "s11-2", n: "11.2", t: "La funzione rettangolare e la sinc" },
      { id: "s11-3", n: "11.3", t: "Il fenomeno di Gibbs" },
      { id: "s11-4", n: "11.4", t: "Segnali periodici: la serie di Fourier" },
      { id: "s11-5", n: "11.5", t: "La DTFT" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "La trasformata di Fourier veloce (FFT)",
    file: "cap12-fft.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Il costo proibitivo della DFT" },
      { id: "s12-2", n: "12.2", t: "L'idea: dividi et impera" },
      { id: "s12-3", n: "12.3", t: "La decomposizione a bit invertiti" },
      { id: "s12-4", n: "12.4", t: "Le farfalle" },
      { id: "s12-5", n: "12.5", t: "Il programma FFT" },
      { id: "s12-6", n: "12.6", t: "FFT inversa e segnali reali" },
      { id: "s12-7", n: "12.7", t: "Esercizi" },
      { id: "s12-8", n: "12.8", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Elaborazione dei segnali continui",
    file: "cap13-segnali-continui.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "La delta e la convoluzione continua" },
      { id: "s13-2", n: "13.2", t: "La risposta all'impulso nel continuo" },
      { id: "s13-3", n: "13.3", t: "La trasformata di Fourier continua" },
      { id: "s13-4", n: "13.4", t: "La serie di Fourier" },
      { id: "s13-5", n: "13.5", t: "Esercizi" },
      { id: "s13-6", n: "13.6", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Introduzione ai filtri digitali",
    file: "cap14-intro-filtri.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "A cosa serve un filtro: due mondi" },
      { id: "s14-2", n: "14.2", t: "Risposta all'impulso, al gradino, in frequenza" },
      { id: "s14-3", n: "14.3", t: "Parametri nel dominio del tempo" },
      { id: "s14-4", n: "14.4", t: "Parametri nel dominio della frequenza" },
      { id: "s14-5", n: "14.5", t: "FIR e IIR: le due famiglie" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Filtri a media mobile",
    file: "cap15-media-mobile.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Il filtro a media mobile" },
      { id: "s15-2", n: "15.2", t: "L'implementazione ricorsiva" },
      { id: "s15-3", n: "15.3", t: "Perché è pessimo in frequenza" },
      { id: "s15-4", n: "15.4", t: "Passaggi multipli e forma gaussiana" },
      { id: "s15-5", n: "15.5", t: "Esercizi" },
      { id: "s15-6", n: "15.6", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "Filtri windowed-sinc",
    file: "cap16-windowed-sinc.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Il passa-basso ideale: la sinc" },
      { id: "s16-2", n: "16.2", t: "Troncare e finestrare" },
      { id: "s16-3", n: "16.3", t: "Progettare: transizione e attenuazione" },
      { id: "s16-4", n: "16.4", t: "Esempi e usi" },
      { id: "s16-5", n: "16.5", t: "Passa-alto, passa-banda, elimina-banda" },
      { id: "s16-6", n: "16.6", t: "Esercizi" },
      { id: "s16-7", n: "16.7", t: "Soluzioni" }
    ]
  },
  {
    n: 17,
    titolo: "Filtri su misura",
    file: "cap17-filtri-su-misura.html",
    stato: "da-fare",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "Quando i filtri standard non bastano" },
      { id: "s17-2", n: "17.2", t: "Progetto dal dominio della frequenza" },
      { id: "s17-3", n: "17.3", t: "La deconvoluzione" },
      { id: "s17-4", n: "17.4", t: "Filtri ottimali: adattato e di Wiener" },
      { id: "s17-5", n: "17.5", t: "Esercizi" },
      { id: "s17-6", n: "17.6", t: "Soluzioni" }
    ]
  },
  {
    n: 18,
    titolo: "Convoluzione tramite FFT",
    file: "cap18-convoluzione-fft.html",
    stato: "da-fare",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "Convoluzione a blocchi: overlap-add" },
      { id: "s18-2", n: "18.2", t: "Perché la FFT accelera tutto" },
      { id: "s18-3", n: "18.3", t: "Il metodo passo per passo" },
      { id: "s18-4", n: "18.4", t: "Quando conviene davvero" },
      { id: "s18-5", n: "18.5", t: "Esercizi" },
      { id: "s18-6", n: "18.6", t: "Soluzioni" }
    ]
  },
  {
    n: 19,
    titolo: "Filtri ricorsivi",
    file: "cap19-filtri-ricorsivi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s19-1", n: "19.1", t: "Come funziona: i coefficienti ricorsivi" },
      { id: "s19-2", n: "19.2", t: "Il filtro a polo singolo" },
      { id: "s19-3", n: "19.3", t: "Passa-banda ed elimina-banda stretti" },
      { id: "s19-4", n: "19.4", t: "Filtri di fase e risonatori" },
      { id: "s19-5", n: "19.5", t: "Esercizi" },
      { id: "s19-6", n: "19.6", t: "Soluzioni" }
    ]
  },
  {
    n: 20,
    titolo: "Filtri di Chebyshev",
    file: "cap20-chebyshev.html",
    stato: "da-fare",
    sezioni: [
      { id: "s20-1", n: "20.1", t: "Butterworth e Chebyshev a confronto" },
      { id: "s20-2", n: "20.2", t: "Il ripple in banda passante" },
      { id: "s20-3", n: "20.3", t: "Calcolare i coefficienti" },
      { id: "s20-4", n: "20.4", t: "Stabilità e limiti pratici" },
      { id: "s20-5", n: "20.5", t: "Esercizi" },
      { id: "s20-6", n: "20.6", t: "Soluzioni" }
    ]
  },
  {
    n: 21,
    titolo: "Confronto tra filtri",
    file: "cap21-confronto-filtri.html",
    stato: "da-fare",
    sezioni: [
      { id: "s21-1", n: "21.1", t: "Confronto nel dominio del tempo" },
      { id: "s21-2", n: "21.2", t: "Confronto nel dominio della frequenza" },
      { id: "s21-3", n: "21.3", t: "Come scegliere il filtro giusto" },
      { id: "s21-4", n: "21.4", t: "Esercizi" },
      { id: "s21-5", n: "21.5", t: "Soluzioni" }
    ]
  },
  {
    n: 22,
    titolo: "Elaborazione audio",
    file: "cap22-audio.html",
    stato: "da-fare",
    sezioni: [
      { id: "s22-1", n: "22.1", t: "Come funziona l'udito umano" },
      { id: "s22-2", n: "22.2", t: "Timbro e percezione del suono" },
      { id: "s22-3", n: "22.3", t: "Sintesi e riconoscimento del parlato" },
      { id: "s22-4", n: "22.4", t: "Compressione: companding e MPEG" },
      { id: "s22-5", n: "22.5", t: "Esercizi" },
      { id: "s22-6", n: "22.6", t: "Soluzioni" }
    ]
  },
  {
    n: 23,
    titolo: "Formazione e visualizzazione delle immagini",
    file: "cap23-immagini-formazione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s23-1", n: "23.1", t: "Cos'è un'immagine digitale" },
      { id: "s23-2", n: "23.2", t: "Camere e formazione dell'immagine" },
      { id: "s23-3", n: "23.3", t: "Visualizzazione e scala di grigi" },
      { id: "s23-4", n: "23.4", t: "Risoluzione spaziale e brillanza" },
      { id: "s23-5", n: "23.5", t: "Esercizi" },
      { id: "s23-6", n: "23.6", t: "Soluzioni" }
    ]
  },
  {
    n: 24,
    titolo: "Elaborazione lineare delle immagini",
    file: "cap24-immagini-lineari.html",
    stato: "da-fare",
    sezioni: [
      { id: "s24-1", n: "24.1", t: "Convoluzione in due dimensioni" },
      { id: "s24-2", n: "24.2", t: "Filtri separabili" },
      { id: "s24-3", n: "24.3", t: "Sfocatura e rilevamento dei bordi" },
      { id: "s24-4", n: "24.4", t: "La trasformata di Fourier delle immagini" },
      { id: "s24-5", n: "24.5", t: "Esercizi" },
      { id: "s24-6", n: "24.6", t: "Soluzioni" }
    ]
  },
  {
    n: 25,
    titolo: "Tecniche speciali di imaging",
    file: "cap25-imaging-speciale.html",
    stato: "da-fare",
    sezioni: [
      { id: "s25-1", n: "25.1", t: "Misurare la qualità di un'immagine" },
      { id: "s25-2", n: "25.2", t: "Risoluzione e MTF" },
      { id: "s25-3", n: "25.3", t: "Rumore nelle immagini" },
      { id: "s25-4", n: "25.4", t: "Morfologia: erosione e dilatazione" },
      { id: "s25-5", n: "25.5", t: "Tomografia computerizzata" },
      { id: "s25-6", n: "25.6", t: "Esercizi" },
      { id: "s25-7", n: "25.7", t: "Soluzioni" }
    ]
  },
  {
    n: 26,
    titolo: "Reti neurali (e altro!)",
    file: "cap26-reti-neurali.html",
    stato: "da-fare",
    sezioni: [
      { id: "s26-1", n: "26.1", t: "Riconoscere forme e pattern" },
      { id: "s26-2", n: "26.2", t: "Architettura di una rete neurale" },
      { id: "s26-3", n: "26.3", t: "L'addestramento: la backpropagation" },
      { id: "s26-4", n: "26.4", t: "Reti neurali e DSP" },
      { id: "s26-5", n: "26.5", t: "Esercizi" },
      { id: "s26-6", n: "26.6", t: "Soluzioni" }
    ]
  },
  {
    n: 27,
    titolo: "Compressione dei dati",
    file: "cap27-compressione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s27-1", n: "27.1", t: "Perché e quando comprimere" },
      { id: "s27-2", n: "27.2", t: "Run-length e Huffman" },
      { id: "s27-3", n: "27.3", t: "Delta encoding e LZW" },
      { id: "s27-4", n: "27.4", t: "Compressione con perdita: JPEG" },
      { id: "s27-5", n: "27.5", t: "Esercizi" },
      { id: "s27-6", n: "27.6", t: "Soluzioni" }
    ]
  },
  {
    n: 28,
    titolo: "I processori DSP",
    file: "cap28-processori-dsp.html",
    stato: "da-fare",
    sezioni: [
      { id: "s28-1", n: "28.1", t: "Cosa distingue un DSP" },
      { id: "s28-2", n: "28.2", t: "Architettura Harvard e pipeline" },
      { id: "s28-3", n: "28.3", t: "Virgola fissa e virgola mobile" },
      { id: "s28-4", n: "28.4", t: "Buffer circolari" },
      { id: "s28-5", n: "28.5", t: "Esercizi" },
      { id: "s28-6", n: "28.6", t: "Soluzioni" }
    ]
  },
  {
    n: 29,
    titolo: "Iniziare con i DSP",
    file: "cap29-iniziare-dsp.html",
    stato: "da-fare",
    sezioni: [
      { id: "s29-1", n: "29.1", t: "Scegliere un processore" },
      { id: "s29-2", n: "29.2", t: "L'ambiente di sviluppo" },
      { id: "s29-3", n: "29.3", t: "Un esempio pratico" },
      { id: "s29-4", n: "29.4", t: "Fissa vs mobile nella pratica" },
      { id: "s29-5", n: "29.5", t: "Esercizi" },
      { id: "s29-6", n: "29.6", t: "Soluzioni" }
    ]
  },
  {
    n: 30,
    titolo: "I numeri complessi",
    file: "cap30-numeri-complessi.html",
    stato: "da-fare",
    sezioni: [
      { id: "s30-1", n: "30.1", t: "Il problema che risolvono" },
      { id: "s30-2", n: "30.2", t: "Il piano complesso" },
      { id: "s30-3", n: "30.3", t: "Aritmetica complessa" },
      { id: "s30-4", n: "30.4", t: "La formula di Eulero" },
      { id: "s30-5", n: "30.5", t: "Perché il DSP li adora" },
      { id: "s30-6", n: "30.6", t: "Esercizi" },
      { id: "s30-7", n: "30.7", t: "Soluzioni" }
    ]
  },
  {
    n: 31,
    titolo: "La trasformata di Fourier complessa",
    file: "cap31-fourier-complessa.html",
    stato: "da-fare",
    sezioni: [
      { id: "s31-1", n: "31.1", t: "Dai seni e coseni agli esponenziali" },
      { id: "s31-2", n: "31.2", t: "La DFT complessa" },
      { id: "s31-3", n: "31.3", t: "Le frequenze negative" },
      { id: "s31-4", n: "31.4", t: "Confronto con la DFT reale" },
      { id: "s31-5", n: "31.5", t: "Esercizi" },
      { id: "s31-6", n: "31.6", t: "Soluzioni" }
    ]
  },
  {
    n: 32,
    titolo: "La trasformata di Laplace",
    file: "cap32-laplace.html",
    stato: "da-fare",
    sezioni: [
      { id: "s32-1", n: "32.1", t: "Dal dominio della frequenza al piano s" },
      { id: "s32-2", n: "32.2", t: "Poli e zeri" },
      { id: "s32-3", n: "32.3", t: "La trasformata di Laplace" },
      { id: "s32-4", n: "32.4", t: "Analizzare i sistemi analogici" },
      { id: "s32-5", n: "32.5", t: "Esercizi" },
      { id: "s32-6", n: "32.6", t: "Soluzioni" }
    ]
  },
  {
    n: 33,
    titolo: "La trasformata z",
    file: "cap33-trasformata-z.html",
    stato: "da-fare",
    sezioni: [
      { id: "s33-1", n: "33.1", t: "L'analogo discreto di Laplace: il piano z" },
      { id: "s33-2", n: "33.2", t: "Poli e zeri nel piano z" },
      { id: "s33-3", n: "33.3", t: "Dalla funzione di trasferimento ai coefficienti" },
      { id: "s33-4", n: "33.4", t: "Analizzare i filtri ricorsivi" },
      { id: "s33-5", n: "33.5", t: "Esercizi" },
      { id: "s33-6", n: "33.6", t: "Soluzioni" }
    ]
  },
  {
    n: 34,
    titolo: "Spiegare la legge di Benford",
    file: "cap34-benford.html",
    stato: "da-fare",
    sezioni: [
      { id: "s34-1", n: "34.1", t: "La legge delle prime cifre" },
      { id: "s34-2", n: "34.2", t: "Perché accade" },
      { id: "s34-3", n: "34.3", t: "La spiegazione logaritmica" },
      { id: "s34-4", n: "34.4", t: "Cosa c'entra il DSP" },
      { id: "s34-5", n: "34.5", t: "Esercizi" },
      { id: "s34-6", n: "34.6", t: "Soluzioni" }
    ]
  }
];
