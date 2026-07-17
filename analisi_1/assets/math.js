/* ============================================================================
   math.js — configurazione MathJax (deve essere caricato PRIMA di MathJax).
   Definisce le macro usate in tutto il libro, così la notazione resta coerente.
   Blocco "Analisi": derivate, differenziali, limiti, Landau, operatori.
   Blocco "Vettori/Matrici": mantenuto per l'Analisi 2 (gradiente, Hessiana…).
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
      Q: "\\mathbb{Q}",

      /* --- analisi: differenziali, derivate, limiti --- */
      dd: "\\mathop{}\\!\\mathrm{d}",            /* differenziale: \dd x  →  d x */
      eu: "\\mathrm{e}",                          /* numero di Nepero (dritto) */
      ii: "\\mathrm{i}",                          /* unità immaginaria (dritta) */
      abs: ["\\left| #1 \\right|", 1],
      norm: ["\\left\\lVert #1 \\right\\rVert", 1],
      abhere: ["\\left. #1 \\right|", 1],         /* valutazione con barra */
      dfrac2: ["\\dfrac{\\mathrm{d} #1}{\\mathrm{d} #2}", 2],   /* derivata dy/dx */
      pdv: ["\\dfrac{\\partial #1}{\\partial #2}", 2],         /* parziale */
      sgn: "\\operatorname{sgn}",
      lo: "\\operatorname{o}",                    /* o-piccolo di Landau */
      Ord: "\\operatorname{O}",                   /* O-grande di Landau */
      supp: "\\operatorname{supp}",
      dom: "\\operatorname{dom}",
      Imm: "\\operatorname{Im}",
      to: "\\longrightarrow",

      /* --- operatori vettoriali (Analisi 2) --- */
      grad: "\\nabla",
      divg: "\\operatorname{div}",
      rot: "\\operatorname{rot}",
      lapl: "\\nabla^2",

      /* --- vettori e matrici (riuso dall'Algebra Lineare) --- */
      vv: ["\\mathbf{#1}", 1],
      mm: ["\\mathbf{#1}", 1],
      T: "^{\\mathsf{T}}",
      inv: "^{-1}",
      dotp: ["\\langle #1 , #2 \\rangle", 2],
      tr: "\\operatorname{tr}",
      diag: "\\operatorname{diag}",

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
