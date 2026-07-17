/* ============================================================================
   math.js — configurazione MathJax (caricato PRIMA di MathJax).
   Macro condivise da tutto il libro "Deep Learning", così la notazione resta
   coerente con quella di Goodfellow–Bengio–Courville.
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
      dd: "\\mathop{}\\!\\mathrm{d}",
      eu: "\\mathrm{e}",
      ii: "\\mathrm{i}",
      abs: ["\\left| #1 \\right|", 1],
      norm: ["\\left\\lVert #1 \\right\\rVert", 1],
      abhere: ["\\left. #1 \\right|", 1],
      dfrac2: ["\\dfrac{\\mathrm{d} #1}{\\mathrm{d} #2}", 2],
      pdv: ["\\dfrac{\\partial #1}{\\partial #2}", 2],
      sgn: "\\operatorname{sgn}",
      lo: "\\operatorname{o}",
      Ord: "\\operatorname{O}",
      supp: "\\operatorname{supp}",
      dom: "\\operatorname{dom}",
      to: "\\longrightarrow",

      /* --- operatori vettoriali --- */
      grad: "\\nabla",
      divg: "\\operatorname{div}",
      rot: "\\operatorname{rot}",
      lapl: "\\nabla^2",

      /* --- vettori, matrici, tensori --- */
      vv: ["\\mathbf{#1}", 1],       /* vettore (minuscolo grassetto) */
      mm: ["\\mathbf{#1}", 1],       /* matrice (maiuscolo grassetto) */
      tens: ["\\mathsf{#1}", 1],     /* tensore */
      T: "^{\\mathsf{T}}",
      inv: "^{-1}",
      dotp: ["\\langle #1 , #2 \\rangle", 2],
      tr: "\\operatorname{tr}",
      diag: "\\operatorname{diag}",
      rank: "\\operatorname{rank}",
      odot: "\\odot",                /* prodotto di Hadamard (elemento a elemento) */

      /* --- probabilità e statistica --- */
      E: "\\mathbb{E}",              /* aspettazione */
      Var: "\\operatorname{Var}",
      Cov: "\\operatorname{Cov}",
      Prob: "\\operatorname{P}",     /* probabilità */
      given: "\\mid",
      dist: "\\sim",
      Norm: "\\mathcal{N}",          /* gaussiana */
      Uni: "\\mathcal{U}",           /* uniforme */
      KL: "D_{\\mathrm{KL}}",        /* divergenza di Kullback-Leibler */
      Hent: "H",                     /* entropia (Shannon) */
      CE: "H",                       /* cross-entropy (stesso simbolo, due argomenti) */

      /* --- machine learning --- */
      argmax: "\\operatorname*{arg\\,max}",
      argmin: "\\operatorname*{arg\\,min}",
      softmax: "\\operatorname{softmax}",
      sigmoid: "\\sigma",
      relu: "\\operatorname{ReLU}",
      Loss: "\\mathcal{L}",          /* funzione di costo */
      Data: "\\mathbb{X}",           /* insieme di dati */
      model: "p_{\\text{model}}",
      pdata: "p_{\\text{data}}",

      /* --- evidenziatori per l'"anatomia delle formule" --- */
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
