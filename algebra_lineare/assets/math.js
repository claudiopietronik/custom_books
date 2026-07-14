/* ============================================================================
   math.js — configurazione MathJax (deve essere caricato PRIMA di MathJax).
   Definisce le macro usate in tutto il libro, così la notazione resta coerente:
     \vv{a}  vettore (grassetto)      \mm{A}  matrice (grassetto maiuscolo)
     \T      trasposta                \inv    inversa
     \norm{} norma                    \abs{}  valore assoluto
     \R \C   insiemi numerici         \dotp   prodotto scalare
   ========================================================================= */
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    packages: { "[+]": ["ams", "html", "color", "boldsymbol", "cancel"] },
    macros: {
      vv: ["\\mathbf{#1}", 1],
      mm: ["\\mathbf{#1}", 1],
      T: "^{\\mathsf{T}}",
      H: "^{\\mathsf{H}}",
      inv: "^{-1}",
      norm: ["\\lVert #1 \\rVert", 1],
      abs: ["\\lvert #1 \\rvert", 1],
      R: "\\mathbb{R}",
      C: "\\mathbb{C}",
      Z: "\\mathbb{Z}",
      N: "\\mathbb{N}",
      dotp: ["\\langle #1 , #2 \\rangle", 2],
      tr: "\\operatorname{tr}",
      rank: "\\operatorname{rank}",
      diag: "\\operatorname{diag}",
      span: "\\operatorname{span}",
      Col: "\\operatorname{C}",
      Row: "\\operatorname{R}",
      Null: "\\operatorname{N}",
      proj: "\\operatorname{proj}",
      /* evidenziatori usati nell'“anatomia delle formule”.
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
