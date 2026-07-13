// Converte le formule arithmatex (\(...\) inline, \[...\] display) in SVG statico.
// Rende l'HTML self-contained e leggibile offline (glifi come path, nessun font esterno).
const fs = require('fs');
const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const texInput = new TeX({ packages: AllPackages });
const svgOutput = new SVG({ fontCache: 'local' });
const doc = mathjax.document('', { InputJax: texInput, OutputJax: svgOutput });

function decode(s) {
  return s.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
          .replace(/&quot;/g,'"').replace(/&#39;/g,"'");
}
function toSVG(tex, display) {
  const node = doc.convert(decode(tex).trim(), { display });
  return adaptor.outerHTML(node);
}

const [,, inPath, outPath] = process.argv;
let html = fs.readFileSync(inPath, 'utf8');
let nDisplay = 0, nInline = 0;

// display: <div class="arithmatex">\[ ... \]</div>
html = html.replace(/<div class="arithmatex">\s*\\\[([\s\S]*?)\\\]\s*<\/div>/g,
  (_, tex) => { nDisplay++; return '<div class="math-display">' + toSVG(tex, true) + '</div>'; });
// inline: <span class="arithmatex">\( ... \)</span>
html = html.replace(/<span class="arithmatex">\s*\\\(([\s\S]*?)\\\)\s*<\/span>/g,
  (_, tex) => { nInline++; return toSVG(tex, false); });

// inietta il CSS di MathJax SVG una sola volta
const css = adaptor.textContent(svgOutput.styleSheet(doc));
html = html.replace('/*__MATHJAX_CSS__*/', css);

fs.writeFileSync(outPath, html);
console.log(`formule display: ${nDisplay}, inline: ${nInline}`);
console.log('HTML finale:', outPath, `(${Math.round(html.length/1024)} KB)`);
