/* ============================================================================
   math.js — configurazione MathJax (deve essere caricato PRIMA di MathJax).
   Definisce le macro usate in tutto il libro del DSP, così la notazione resta
   coerente: segnali, indici di campione, DFT/FFT, trasformate, numeri complessi.
     x[n]      campione n-esimo         \sig{x}   nome di un segnale
     \DFT \IDFT  trasformate discrete   \conv     convoluzione
     \Real \Imag parti reale/immag.     \unit{}   unità immaginaria
   ========================================================================= */
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    packages: { "[+]": ["ams", "html", "color", "boldsymbol", "cancel"] },
    macros: {
      /* --- insiemi numerici --- */
      R: "\\mathbb{R}",
      C: "\\mathbb{C}",
      Z: "\\mathbb{Z}",
      N: "\\mathbb{N}",

      /* --- segnali e campioni --- */
      eu: "\\mathrm{e}",                     /* numero di Nepero (dritto) */
      ii: "\\mathrm{j}",                     /* unità immaginaria: gli ingegneri usano j */
      unit: "\\mathrm{j}",
      abs: ["\\left| #1 \\right|", 1],
      norm: ["\\left\\lVert #1 \\right\\rVert", 1],
      sig: ["\\mathrm{#1}", 1],
      conv: "\\ast",                          /* convoluzione */
      corr: "\\star",                         /* correlazione incrociata */

      /* --- trasformate --- */
      DFT: "\\operatorname{DFT}",
      IDFT: "\\operatorname{IDFT}",
      DTFT: "\\operatorname{DTFT}",
      FT: "\\operatorname{F}",
      Lap: "\\operatorname{L}",
      Zt: "\\operatorname{Z}",
      Real: "\\operatorname{Re}",
      Imag: "\\operatorname{Im}",
      sinc: "\\operatorname{sinc}",
      sgn: "\\operatorname{sgn}",
      rect: "\\operatorname{rect}",

      /* --- comodità --- */
      dd: "\\mathop{}\\!\\mathrm{d}",
      abhere: ["\\left. #1 \\right|", 1],
      floor: ["\\left\\lfloor #1 \\right\\rfloor", 1],
      ceil: ["\\left\\lceil #1 \\right\\rceil", 1],

      /* --- evidenziatori per l'"anatomia delle formule".
         Usano \class (non \color) così il colore arriva dal CSS e segue il tema. */
      hA: ["\\class{mj-a}{#1}", 1],
      hB: ["\\class{mj-b}{#1}", 1],
      hC: ["\\class{mj-c}{#1}", 1],
      hD: ["\\class{mj-d}{#1}", 1]
    },
    tags: "none"
  },
  loader: { load: ["[tex]/html", "[tex]/color", "[tex]/cancel"] },
  chtml: { scale: 1.02, matchFontHeight: false },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"],
    menuOptions: { settings: { zoom: "Click" } }
  },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(() => document.body.classList.add("math-ready"));
    }
  }
};
