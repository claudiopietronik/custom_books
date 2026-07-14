# Libro di Statistica — sistema di build

Questo bundle contiene tutti i sorgenti che compongono il file
`Statistica.html` (un unico HTML self-contained e offline).
Puoi modificare stile, logica e contenuti e **ricostruire** l'HTML finale.

## Struttura

```
.
├── book.json            # MANIFEST: definisce parti e capitoli (ordine, titoli nel menu, file)
├── chapters/            # CONTENUTI: un file .md per capitolo (con immagini base64 incorporate)
│   ├── 00_intro.md
│   ├── 01_fondamenta.md
│   └── ...
├── styles.css           # STILE: tutto il CSS del libro (navbar, tabelle, riquadri, mobile...)
├── app.js               # LOGICA: navigazione (menu, mostra/nascondi capitoli, prev/next)
├── build_book.py        # BUILD 1: assembla manifest + capitoli + styles.css + app.js -> HTML intermedio
├── render_math.js       # BUILD 2: converte le formule LaTeX in SVG statico (offline, niente CDN)
├── plots/               # Script Python che generano i grafici (PNG) usati nei capitoli
│   ├── make_plots.py
│   └── ...
└── img/                 # PNG generati dagli script (già incorporati come base64 nei .md)
```

## Come ricostruire l'HTML finale

Servono **Python 3** (con i pacchetti `markdown` e `pymdownx`) e **Node.js** (con `mathjax-full`).

```bash
# 1) dipendenze (una volta sola)
pip install markdown pymdown-extensions --break-system-packages
npm install            # installa mathjax-full da package.json

# 2) build in due passi
python3 build_book.py book.json _tmp.html          # markdown -> HTML con formule "grezze"
node render_math.js _tmp.html Statistica.html   # formule -> SVG, output finale
rm _tmp.html
```

Il file `Statistica.html` è il libro completo: un unico file, immagini e
formule incorporate, **nessuna dipendenza esterna** (funziona anche offline).

## Come modificare

- **Cambiare lo stile** (colori, font, layout, menu): edita `styles.css`.
  Il segnaposto `/*__MATHJAX_CSS__*/` viene riempito automaticamente da `render_math.js` — non toccarlo.
- **Cambiare la navigazione** (comportamento menu, prev/next): edita `app.js`.
  I segnaposto `__ORDER__` e `__FIRST__` vengono riempiti da `build_book.py`.
- **Aggiungere/modificare un capitolo**: crea/edita un `.md` in `chapters/`, poi aggiungilo
  a `book.json` nella parte giusta (con `id`, `nav`, `file`). Ricostruisci.
- **Aggiungere una nuova parte**: aggiungi un oggetto in `book.json` → `parts` con
  `available: true` e la lista `chapters`.

### Nota sulle formule (importante)

Le formule usano `$...$` (inline) e `$$...$$` (display), stile LaTeX.
Due trappole da evitare nei `.md`:

1. **Dentro le tabelle** non usare la barra verticale `|` grezza in una formula
   (romperebbe la colonna). Usa i comandi LaTeX: `\mid` per la barra di condizionamento
   (es. `P(A \mid B)`), `\lvert x \rvert` per il valore assoluto, `\lVert v \rVert` per la norma.
2. **Il display `$$...$$` non va messo dentro un riquadro** (blockquote `>`): mettilo come
   blocco a sé, fuori dal `>`.

## Come rigenerare i grafici

```bash
cd plots
python3 make_plots.py     # ecc. — scrivono i PNG in ../img/
```
Poi le immagini vanno reincorporate come base64 nei `.md` (gli script attuali
le salvano come PNG; l'incorporamento base64 è stato fatto a mano nei capitoli).
