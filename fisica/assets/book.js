/* ============================================================================
   book.js — impalcatura comune a tutte le pagine.
   Costruisce: barra in alto, mega-menu dell'indice (da TOC), indice laterale
   "in questa pagina" con scroll-spy, navigazione capitolo prec./succ.,
   barra di avanzamento, tema chiaro/scuro.
   Richiede: assets/toc.js caricato prima (definisce TOC e BOOK).
   La pagina dichiara il capitolo con <body data-chapter="N"> (0 = copertina).
   ========================================================================= */

(function () {
  // BOOK = { titolo, glyph, tema } è definito in toc.js; fallback prudente.
  const B = (typeof BOOK !== "undefined") ? BOOK : { titolo: "Analisi", glyph: "∫", tema: "an-theme" };
  const chapN = parseInt(document.body.dataset.chapter || "0", 10);
  const cap = TOC.find((c) => c.n === chapN) || null;

  /* ---------- tema ---------- */
  const savedTheme = localStorage.getItem(B.tema);
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.setAttribute("data-theme", "dark");

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(B.tema, next);
    document.getElementById("theme-ico").textContent = next === "dark" ? "☀" : "☾";
  }

  /* ---------- barra in alto ---------- */
  const prev = cap ? TOC.find((c) => c.n === chapN - 1) : null;
  const next = cap ? TOC.find((c) => c.n === chapN + 1) : TOC[0];

  const bar = document.createElement("header");
  bar.className = "topbar";
  bar.innerHTML = `
    <div class="progress" id="progress"></div>
    <a class="brand" href="index.html"><span class="glyph">${B.glyph}</span> ${B.titolo}</a>
    <button class="nav-btn" id="mm-btn" aria-expanded="false" aria-controls="megamenu">
      Indice <span class="chev">▾</span>
    </button>
    ${cap ? `<span class="crumb">Cap. ${cap.n} · <b>${cap.titolo}</b></span>` : ""}
    <span class="spacer"></span>
    <a class="nav-btn icon ghost ${prev ? "" : "disabled"}" ${prev ? `href="${prev.file}"` : ""} title="${prev ? "Cap. " + prev.n + " — " + prev.titolo : ""}">‹</a>
    <a class="nav-btn icon ghost ${next && next.stato !== "da-fare" ? "" : "disabled"}" ${next ? `href="${next.file}"` : ""} title="${next ? "Cap. " + next.n + " — " + next.titolo : ""}">›</a>
    <button class="nav-btn icon ghost" id="theme-btn" title="Tema chiaro/scuro"><span id="theme-ico">☾</span></button>
  `;
  document.body.prepend(bar);

  document.getElementById("theme-ico").textContent =
    document.documentElement.getAttribute("data-theme") === "dark" ? "☀" : "☾";
  document.getElementById("theme-btn").addEventListener("click", toggleTheme);

  /* ---------- mega-menu ---------- */
  const scrim = document.createElement("div");
  scrim.className = "scrim";
  scrim.id = "scrim";

  const mm = document.createElement("nav");
  mm.className = "megamenu";
  mm.id = "megamenu";
  mm.innerHTML = `
    <div class="inner">
      <input class="filter" id="mm-filter" type="search" placeholder="Filtra capitoli e sezioni…  (premi / )" autocomplete="off">
      <div class="mm-grid" id="mm-grid">
        ${TOC.map((c) => {
          const todo = c.stato === "da-fare";
          const cur = c.n === chapN;
          return `
          <div class="mm-chap ${todo ? "todo" : ""} ${cur ? "is-current" : ""}" data-search="${(
            c.n + " " + c.titolo + " " + c.sezioni.map((s) => s.n + " " + s.t).join(" ")
          ).toLowerCase()}">
            <a href="${todo ? "#" : c.file}"><span class="num">${c.n}</span> <span>${c.titolo}</span><span class="dot"></span></a>
            <ul>
              ${c.sezioni
                .map(
                  (s) =>
                    `<li><a href="${todo ? "#" : c.file + "#" + s.id}"><span class="num">${s.n}</span>${s.t}</a></li>`
                )
                .join("")}
            </ul>
          </div>`;
        }).join("")}
      </div>
    </div>`;

  document.body.appendChild(scrim);
  document.body.appendChild(mm);

  const mmBtn = document.getElementById("mm-btn");
  const filter = document.getElementById("mm-filter");

  function setMenu(open) {
    mm.classList.toggle("open", open);
    scrim.classList.toggle("open", open);
    mmBtn.setAttribute("aria-expanded", String(open));
    if (open) setTimeout(() => filter.focus(), 30);
  }
  mmBtn.addEventListener("click", () => setMenu(!mm.classList.contains("open")));
  scrim.addEventListener("click", () => setMenu(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
    if (e.key === "/" && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      setMenu(true);
    }
  });
  filter.addEventListener("input", () => {
    const q = filter.value.trim().toLowerCase();
    mm.querySelectorAll(".mm-chap").forEach((el) => {
      el.style.display = !q || el.dataset.search.includes(q) ? "" : "none";
    });
  });

  /* ---------- indice laterale + scroll-spy ---------- */
  const heads = Array.from(document.querySelectorAll(".page h2[id], .page h3[id]"));
  if (heads.length > 2) {
    const st = document.createElement("nav");
    st.className = "sidetoc";
    st.innerHTML =
      `<div class="st-title">In questa pagina</div>` +
      heads
        .map((h) => {
          const num = h.querySelector(".secnum");
          const t = num ? h.textContent.replace(num.textContent, "").trim() : h.textContent.trim();
          return `<a href="#${h.id}" class="${h.tagName.toLowerCase()}" data-t="${h.id}">${t}</a>`;
        })
        .join("");
    document.body.appendChild(st);
    document.body.classList.add("with-toc");

    const links = new Map(Array.from(st.querySelectorAll("a")).map((a) => [a.dataset.t, a]));
    const seen = new Set();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? seen.add(e.target.id) : seen.delete(e.target.id)));
        let active = null;
        for (const h of heads) if (seen.has(h.id)) { active = h.id; break; }
        if (!active) {
          for (const h of heads) if (h.getBoundingClientRect().top < 120) active = h.id;
        }
        links.forEach((a, id) => a.classList.toggle("active", id === active));
      },
      { rootMargin: "-70px 0px -70% 0px", threshold: 0 }
    );
    heads.forEach((h) => obs.observe(h));
  }

  /* ---------- navigazione capitolo in fondo ---------- */
  const page = document.querySelector(".page");
  if (page && cap) {
    const nav = document.createElement("nav");
    nav.className = "chapnav wide";
    nav.innerHTML = `
      ${
        prev
          ? `<a class="prev" href="${prev.file}"><span class="dir">‹ Precedente</span><span class="t">${prev.n}. ${prev.titolo}</span></a>`
          : `<a class="prev empty" href="#"></a>`
      }
      ${
        next
          ? next.stato === "da-fare"
            ? `<a class="next empty" href="#"></a>`
            : `<a class="next" href="${next.file}"><span class="dir">Successivo ›</span><span class="t">${next.n}. ${next.titolo}</span></a>`
          : `<a class="next empty" href="#"></a>`
      }`;
    page.appendChild(nav);
  }

  /* ---------- barra di avanzamento ---------- */
  const pb = document.getElementById("progress");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    pb.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ============================================================================
   Utilità condivise per i widget interattivi (SVG)
   ========================================================================= */
const W = {
  /* rende trascinabile un elemento SVG; onMove riceve coordinate MATEMATICHE */
  drag(svg, handle, toMath, onMove) {
    const pt = svg.createSVGPoint();
    const loc = (e) => {
      const t = e.touches ? e.touches[0] : e;
      pt.x = t.clientX;
      pt.y = t.clientY;
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    };
    const move = (e) => {
      e.preventDefault();
      const p = loc(e);
      onMove(toMath(p.x, p.y));
    };
    const end = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
    };
    const start = (e) => {
      e.preventDefault();
      window.addEventListener("mousemove", move);
      window.addEventListener("touchmove", move, { passive: false });
      window.addEventListener("mouseup", end);
      window.addEventListener("touchend", end);
    };
    handle.addEventListener("mousedown", start);
    handle.addEventListener("touchstart", start, { passive: false });
  },
  fmt(x, d = 2) {
    const v = Math.abs(x) < 5e-3 ? 0 : x;
    return v.toFixed(d);
  }
};
