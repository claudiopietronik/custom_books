/* ============================================================================
   math.js — configurazione MathJax (deve essere caricato PRIMA di MathJax).
   Definisce le macro usate in tutto il libro, così la notazione resta coerente.
   Blocco "Statistica": media, varianza, covarianza, valore atteso, probabilità,
   distribuzioni notevoli, stimatori.
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
      N: "\\mathbb{N}",
      Z: "\\mathbb{Z}",

      /* --- statistica: operatori e stimatori --- */
      E: "\\operatorname{\\mathbb{E}}",           /* valore atteso: \E[X] */
      Var: "\\operatorname{Var}",                  /* varianza */
      Cov: "\\operatorname{Cov}",                  /* covarianza */
      Corr: "\\operatorname{Corr}",                /* correlazione */
      SD: "\\operatorname{SD}",                    /* deviazione standard */
      Prob: "\\operatorname{P}",                   /* probabilità: \Prob(A) */
      med: "\\bar",                                /* media campionaria: \med{x} → x̄ */
      xbar: "\\bar{x}",
      normal: "\\mathcal{N}",                      /* distribuzione normale */
      indep: "\\perp\\!\\!\\!\\perp",              /* indipendenza */
      iid: "\\overset{\\text{iid}}{\\sim}",        /* i.i.d. */
      given: "\\mid",                              /* condizionamento: P(A \given B) */
      abs: ["\\left| #1 \\right|", 1],
      norm: ["\\left\\lVert #1 \\right\\rVert", 1],
      set: ["\\left\\{ #1 \\right\\}", 1],
      inner: ["\\langle #1 , #2 \\rangle", 2],
      to: "\\longrightarrow",
      pto: "\\overset{P}{\\longrightarrow}",       /* convergenza in probabilità */
      dto: "\\overset{d}{\\longrightarrow}",       /* convergenza in distribuzione */
      argmin: "\\operatorname*{arg\\,min}",
      argmax: "\\operatorname*{arg\\,max}",
      vv: ["\\mathbf{#1}", 1],                     /* vettori (covarianza multivariata) */
      T: "^{\\mathsf{T}}",

      /* --- evidenziatori per l'"anatomia delle formule".
         Usano \class (non \color) così il colore arriva dal CSS e segue il tema. */
      hA: ["\\class{mj-a}{#1}", 1],
      hB: ["\\class{mj-b}{#1}", 1],
      hC: ["\\class{mj-c}{#1}", 1],
      hD: ["\\class{mj-d}{#1}", 1]
    },
    tags: "none"
  },
  loader: { load: ["[tex]/html", "[tex]/color", "[tex]/cancel", "[tex]/boldsymbol"] },
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
