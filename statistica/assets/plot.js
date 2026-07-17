/* ============================================================================
   plot.js — motore di disegno cartesiano su SVG, condiviso da figure e widget.
   Versione "Analisi": oltre alle primitive geometriche (assi, frecce, punti
   trascinabili) aggiunge il disegno di FUNZIONI y=f(x), AREE sotto una curva,
   RETTANGOLI (somme di Riemann) e CURVE PARAMETRICHE.

   Uso tipico:
     const p = new Plot(svg, {xmin:-4, xmax:4, ymin:-2, ymax:5});
     p.clear(); p.grid(); p.axes({numbers:true});
     p.func(x => x*x, {color:'var(--accent)'});
     p.area(x => x*x, 0, 2, {fill:'...'});

   Convenzioni:
   - le coordinate passate ai metodi sono SEMPRE coordinate matematiche
     (x cresce verso destra, y cresce verso l'ALTO);
   - i colori si passano come stringhe CSS (var(--accent) ecc.) così le figure
     seguono il tema chiaro/scuro;
   - l'aspetto NON è forzato isotropo: in analisi gli assi x e y hanno spesso
     scale diverse. Passa {iso:true} per forzare 1:1 (utile per curve e cerchi).
   ========================================================================= */

const SVGNS = "http://www.w3.org/2000/svg";
let _uid = 0;

function svgEl(name, attrs) {
  const e = document.createElementNS(SVGNS, name);
  for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
  return e;
}

class Plot {
  constructor(svg, opt = {}) {
    this.svg = svg;
    const vb = (svg.getAttribute("viewBox") || "0 0 100 100").split(/\s+/).map(Number);
    this.W = vb[2];
    this.H = vb[3];

    this.xmin = opt.xmin ?? -5;
    this.xmax = opt.xmax ?? 5;
    this.ymin = opt.ymin ?? -4;
    this.ymax = opt.ymax ?? 4;

    if (opt.iso) {
      // scala isotropa: la stessa per x e y (angoli e cerchi onesti)
      this.sx = this.sy = Math.min(this.W / (this.xmax - this.xmin), this.H / (this.ymax - this.ymin));
    } else {
      // scale indipendenti: riempie il riquadro (tipico dei grafici di funzione)
      this.sx = this.W / (this.xmax - this.xmin);
      this.sy = this.H / (this.ymax - this.ymin);
    }
    this.ox = this.W / 2 - this.sx * (this.xmin + this.xmax) / 2;
    this.oy = this.H / 2 + this.sy * (this.ymin + this.ymax) / 2;

    this.id = "p" + _uid++;
    this.defs = svgEl("defs", {});
    const clip = svgEl("clipPath", { id: this.id + "-clip" });
    clip.appendChild(svgEl("rect", { x: 0, y: 0, width: this.W, height: this.H }));
    this.defs.appendChild(clip);

    this.root = svgEl("g", { "clip-path": `url(#${this.id}-clip)` });
    svg.appendChild(this.defs);
    svg.appendChild(this.root);
    this._markers = {};
  }

  /* --- conversioni --- */
  px(x, y) { return [this.ox + this.sx * x, this.oy - this.sy * y]; }         // matematica → pixel
  mx(px, py) { return [(px - this.ox) / this.sx, (this.oy - py) / this.sy]; } // pixel → matematica

  clear() { while (this.root.firstChild) this.root.removeChild(this.root.firstChild); return this; }
  add(el) { this.root.appendChild(el); return el; }

  /* --- marcatore-freccia, creato una volta per colore --- */
  _marker(color) {
    const key = color.replace(/[^a-z0-9]/gi, "");
    if (!this._markers[key]) {
      const id = `${this.id}-a-${key}`;
      const m = svgEl("marker", {
        id, viewBox: "0 0 10 10", refX: 8.5, refY: 5,
        markerWidth: 5, markerHeight: 5, orient: "auto-start-reverse", markerUnits: "strokeWidth"
      });
      m.appendChild(svgEl("path", { d: "M0,0 L10,5 L0,10 z", fill: color }));
      this.defs.appendChild(m);
      this._markers[key] = id;
    }
    return this._markers[key];
  }

  /* --- griglia e assi --- */
  grid(step = 1, stepY = null) {
    const sX = step, sY = stepY ?? step;
    const g = svgEl("g", {});
    for (let x = Math.ceil(this.xmin / sX) * sX; x <= this.xmax + 1e-9; x += sX) {
      const [x1, y1] = this.px(x, this.ymin), [x2, y2] = this.px(x, this.ymax);
      g.appendChild(svgEl("line", { x1, y1, x2, y2, class: "grid" }));
    }
    for (let y = Math.ceil(this.ymin / sY) * sY; y <= this.ymax + 1e-9; y += sY) {
      const [x1, y1] = this.px(this.xmin, y), [x2, y2] = this.px(this.xmax, y);
      g.appendChild(svgEl("line", { x1, y1, x2, y2, class: "grid" }));
    }
    return this.add(g);
  }

  axes(opt = {}) {
    const g = svgEl("g", {});
    const [ax1, ay1] = this.px(this.xmin, 0), [ax2, ay2] = this.px(this.xmax, 0);
    const [bx1, by1] = this.px(0, this.ymin), [bx2, by2] = this.px(0, this.ymax);
    g.appendChild(svgEl("line", { x1: ax1, y1: ay1, x2: ax2, y2: ay2, class: "axis" }));
    g.appendChild(svgEl("line", { x1: bx1, y1: by1, x2: bx2, y2: by2, class: "axis" }));

    const stepX = opt.stepX || 1, stepY = opt.stepY || 1;
    if (opt.ticks !== false) {
      for (let x = Math.ceil(this.xmin / stepX) * stepX; x <= this.xmax; x += stepX) {
        if (Math.abs(x) < 1e-9) continue;
        const [px, py] = this.px(x, 0);
        g.appendChild(svgEl("line", { x1: px, y1: py - 3.5, x2: px, y2: py + 3.5, class: "axis" }));
        if (opt.numbers !== false) {
          const t = svgEl("text", { x: px, y: py + 15, class: "lbl", "text-anchor": "middle", "font-size": 10.5 });
          t.textContent = opt.fmtX ? opt.fmtX(x) : +x.toFixed(6);
          g.appendChild(t);
        }
      }
      for (let y = Math.ceil(this.ymin / stepY) * stepY; y <= this.ymax; y += stepY) {
        if (Math.abs(y) < 1e-9) continue;
        const [px, py] = this.px(0, y);
        g.appendChild(svgEl("line", { x1: px - 3.5, y1: py, x2: px + 3.5, y2: py, class: "axis" }));
        if (opt.numbers !== false) {
          const t = svgEl("text", { x: px - 7, y: py + 3.5, class: "lbl", "text-anchor": "end", "font-size": 10.5 });
          t.textContent = opt.fmtY ? opt.fmtY(y) : +y.toFixed(6);
          g.appendChild(t);
        }
      }
    }
    if (opt.names !== false) {
      const tx = svgEl("text", { ...this._xy(this.px(this.xmax, 0), -4, -8), class: "lbl", "text-anchor": "end", "font-style": "italic" });
      tx.textContent = opt.xname ?? "x";
      const ty = svgEl("text", { ...this._xy(this.px(0, this.ymax), 8, 12), class: "lbl", "font-style": "italic" });
      ty.textContent = opt.yname ?? "y";
      g.append(tx, ty);
    }
    return this.add(g);
  }

  _xy(p, dx, dy) { return { x: p[0] + dx, y: p[1] + dy }; }

  /* --- primitive geometriche --- */
  arrow(x1, y1, x2, y2, o = {}) {
    const c = o.color || "var(--accent)";
    const [a, b] = this.px(x1, y1), [c2, d2] = this.px(x2, y2);
    const g = svgEl("g", {});
    g.appendChild(svgEl("line", {
      x1: a, y1: b, x2: c2, y2: d2,
      stroke: c, "stroke-width": o.width || 2.6,
      "stroke-dasharray": o.dash || null,
      "marker-end": `url(#${this._marker(c)})`,
      opacity: o.opacity ?? 1
    }));
    if (o.label) {
      const ux = c2 - a, uy = d2 - b, L = Math.hypot(ux, uy) || 1;
      const nx = -uy / L, ny = ux / L;
      const t = svgEl("text", {
        x: (a + c2) / 2 + nx * (o.lx ?? 14) + (o.ldx || 0),
        y: (b + d2) / 2 + ny * (o.ly ?? 14) + 4 + (o.ldy || 0),
        fill: c, class: "lbl-b", "text-anchor": "middle"
      });
      t.textContent = o.label;
      g.appendChild(t);
    }
    return this.add(g);
  }

  line(x1, y1, x2, y2, o = {}) {
    const [a, b] = this.px(x1, y1), [c2, d2] = this.px(x2, y2);
    return this.add(svgEl("line", {
      x1: a, y1: b, x2: c2, y2: d2,
      stroke: o.color || "var(--ink-faint)",
      "stroke-width": o.width || 1.4,
      "stroke-dasharray": o.dash || null,
      opacity: o.opacity ?? 1
    }));
  }

  poly(pts, o = {}) {
    const d = pts.map((p, i) => (i ? "L" : "M") + this.px(p[0], p[1]).join(",")).join("") + (o.close === false ? "" : "Z");
    return this.add(svgEl("path", {
      d, fill: o.fill || "none", stroke: o.color || "none",
      "stroke-width": o.width || 1.4, "stroke-dasharray": o.dash || null,
      "stroke-linejoin": "round", "stroke-linecap": "round",
      opacity: o.opacity ?? 1
    }));
  }

  rect(x1, y1, x2, y2, o = {}) {
    return this.poly([[x1, y1], [x2, y1], [x2, y2], [x1, y2]], {
      fill: o.fill || "none", color: o.color || "var(--ink-faint)",
      width: o.width ?? 1.2, close: true, opacity: o.opacity, dash: o.dash
    });
  }

  dot(x, y, o = {}) {
    const [a, b] = this.px(x, y);
    return this.add(svgEl("circle", {
      cx: a, cy: b, r: o.r || 4,
      fill: o.color || "var(--ink)",
      stroke: o.stroke || "var(--paper)", "stroke-width": o.sw ?? 1.5
    }));
  }

  text(x, y, s, o = {}) {
    const [a, b] = this.px(x, y);
    const t = svgEl("text", {
      x: a + (o.dx || 0), y: b + (o.dy || 0),
      class: o.bold ? "lbl-b" : "lbl",
      fill: o.color || null,
      "text-anchor": o.anchor || "middle",
      "font-size": o.size || null,
      "font-style": o.italic ? "italic" : null
    });
    t.textContent = s;
    return this.add(t);
  }

  /* angolo tra due direzioni, disegnato come archetto sul vertice */
  angle(cx, cy, a1, a2, o = {}) {
    const r = (o.r || 0.6) * Math.min(this.sx, this.sy);
    const [px0, py0] = this.px(cx, cy);
    const p1 = [px0 + r * Math.cos(-a1), py0 + r * Math.sin(-a1)];
    const p2 = [px0 + r * Math.cos(-a2), py0 + r * Math.sin(-a2)];
    let diff = a2 - a1;
    while (diff <= -Math.PI) diff += 2 * Math.PI;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    const sweep = diff > 0 ? 0 : 1;
    return this.add(svgEl("path", {
      d: `M${p1[0]},${p1[1]} A${r},${r} 0 0 ${sweep} ${p2[0]},${p2[1]}`,
      fill: "none", stroke: o.color || "var(--ink-faint)", "stroke-width": o.width || 1.4
    }));
  }

  /* ==========================================================================
     GRAFICI DI FUNZIONE — le aggiunte "Analisi"
     ======================================================================== */

  /* disegna y = f(x) campionando l'intervallo visibile.
     Spezza la curva sugli asintoti (salti enormi o valori non finiti). */
  func(f, o = {}) {
    const N = o.samples || 480;
    const dx = (this.xmax - this.xmin) / N;
    const span = this.ymax - this.ymin;
    const yLo = this.ymin - span * 0.6, yHi = this.ymax + span * 0.6;   // margine oltre il riquadro
    const from = o.from ?? this.xmin, to = o.to ?? this.xmax;
    let seg = [], prevY = null;
    const flush = () => {
      if (seg.length > 1) this.poly(seg, {
        color: o.color || "var(--accent)", width: o.width || 2.4,
        close: false, dash: o.dash, opacity: o.opacity
      });
      seg = [];
    };
    for (let i = 0; i <= N; i++) {
      const x = this.xmin + i * dx;
      if (x < from - 1e-9 || x > to + 1e-9) { flush(); prevY = null; continue; }
      const y = f(x);
      if (!isFinite(y)) { flush(); prevY = null; continue; }
      if (prevY !== null && Math.abs(y - prevY) > span * 6) { flush(); }      // asintoto verticale
      if (y < yLo || y > yHi) {
        seg.push([x, Math.max(yLo, Math.min(yHi, y))]);
        flush();
      } else {
        seg.push([x, y]);
      }
      prevY = y;
    }
    flush();
    return this;
  }

  /* regione tra la curva f e l'asse x su [a,b] (per gli integrali) */
  area(f, a, b, o = {}) {
    const N = o.samples || 240;
    const dx = (b - a) / N;
    const clampY = y => Math.max(this.ymin, Math.min(this.ymax, isFinite(y) ? y : 0));
    const pts = [[a, 0]];
    for (let i = 0; i <= N; i++) { const x = a + i * dx; pts.push([x, clampY(f(x))]); }
    pts.push([b, 0]);
    return this.poly(pts, {
      fill: o.fill || "color-mix(in srgb, var(--accent) 16%, transparent)",
      color: o.color || "none", width: o.width || 0, close: true, opacity: o.opacity
    });
  }

  /* n rettangoli di una somma di Riemann; mode: 'left' | 'right' | 'mid' */
  riemann(f, a, b, n, o = {}) {
    const mode = o.mode || "mid";
    const w = (b - a) / n;
    const g = svgEl("g", {});
    this.add(g);
    for (let i = 0; i < n; i++) {
      const xL = a + i * w, xR = xL + w;
      const xs = mode === "left" ? xL : mode === "right" ? xR : (xL + xR) / 2;
      const h = f(xs);
      const r = this.rect(xL, 0, xR, h, {
        fill: o.fill || "color-mix(in srgb, var(--violet) 20%, transparent)",
        color: o.color || "var(--violet)", width: o.width ?? 1, opacity: o.opacity
      });
      g.appendChild(r);
    }
    return g;
  }

  /* curva parametrica (x(t), y(t)) per t in [t0, t1] */
  param(fx, fy, t0, t1, o = {}) {
    const N = o.samples || 360;
    const dt = (t1 - t0) / N;
    const pts = [];
    for (let i = 0; i <= N; i++) { const t = t0 + i * dt; pts.push([fx(t), fy(t)]); }
    return this.poly(pts, {
      color: o.color || "var(--accent)", width: o.width || 2.4,
      close: false, dash: o.dash, opacity: o.opacity
    });
  }

  /* punto trascinabile: onMove(x, y) riceve coordinate matematiche.
     Con {axis:'x'} o {axis:'y'} il trascinamento è vincolato a un asse. */
  handle(x, y, o = {}, onMove) {
    const [a, b] = this.px(x, y);
    const g = svgEl("g", { style: "cursor:grab" });
    g.appendChild(svgEl("circle", { cx: a, cy: b, r: 13, fill: "transparent" }));
    g.appendChild(svgEl("circle", {
      cx: a, cy: b, r: o.r || 6,
      fill: o.color || "var(--accent)",
      stroke: "var(--paper)", "stroke-width": 2
    }));
    this.add(g);
    if (onMove) {
      W.drag(this.svg, g, (px, py) => this.mx(px, py), ([mx, my]) => {
        let X = o.axis === "y" ? x : mx, Y = o.axis === "x" ? y : my;
        if (o.snap) { X = Math.round(X / o.snap) * o.snap; Y = Math.round(Y / o.snap) * o.snap; }
        X = Math.max(this.xmin, Math.min(this.xmax, X));
        Y = Math.max(this.ymin, Math.min(this.ymax, Y));
        onMove(X, Y);
      });
    }
    return g;
  }

  /* ==========================================================================
     SEGNALI DISCRETI — le aggiunte "DSP"
     ======================================================================== */

  /* grafico a stelo (lollipop): un campione = un bastoncino + un pallino.
     `data` è un array di valori y; `x0` è l'indice del primo campione e `dxs`
     il passo tra gli indici (di norma 1). Colora i campioni con o.color. */
  stem(data, o = {}) {
    const x0 = o.x0 ?? 0, dxs = o.dxs ?? 1;
    const col = o.color || "var(--accent)";
    const r = o.r ?? 3.2;
    const g = svgEl("g", {});
    this.add(g);
    const [, baseY] = this.px(0, 0);
    for (let i = 0; i < data.length; i++) {
      const x = x0 + i * dxs, y = data[i];
      if (!isFinite(y)) continue;
      const [cx, cy] = this.px(x, y);
      g.appendChild(svgEl("line", {
        x1: cx, y1: baseY, x2: cx, y2: cy,
        stroke: col, "stroke-width": o.width ?? 1.6, opacity: o.opacity ?? 1
      }));
      if (o.dots !== false)
        g.appendChild(svgEl("circle", {
          cx, cy, r, fill: col, stroke: o.stroke || "var(--paper)", "stroke-width": 1.2,
          opacity: o.opacity ?? 1
        }));
    }
    return g;
  }

  /* barre verticali (istogrammi, magnitudo di spettri): come stem ma con
     rettangoli pieni di larghezza o.bw (in unità matematiche). */
  bars(data, o = {}) {
    const x0 = o.x0 ?? 0, dxs = o.dxs ?? 1;
    const bw = o.bw ?? dxs * 0.6;
    const g = svgEl("g", {});
    this.add(g);
    for (let i = 0; i < data.length; i++) {
      const x = x0 + i * dxs, y = data[i];
      if (!isFinite(y)) continue;
      g.appendChild(this.rect(x - bw / 2, 0, x + bw / 2, y, {
        fill: o.fill || "color-mix(in srgb, var(--accent) 55%, transparent)",
        color: o.color || "var(--accent)", width: o.width ?? 1, opacity: o.opacity
      }));
    }
    return g;
  }

  /* spezzata che unisce i campioni (utile per confrontare il discreto col
     "continuo" sottostante): come poly ma prende un array di sole y. */
  seq(data, o = {}) {
    const x0 = o.x0 ?? 0, dxs = o.dxs ?? 1;
    const pts = data.map((y, i) => [x0 + i * dxs, y]).filter(p => isFinite(p[1]));
    return this.poly(pts, {
      color: o.color || "var(--ink-faint)", width: o.width || 1.6,
      close: false, dash: o.dash, opacity: o.opacity
    });
  }
}
