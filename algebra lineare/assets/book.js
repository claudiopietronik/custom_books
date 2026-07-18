/* ============================================================================
   book.js — impalcatura comune a tutte le pagine.
   Costruisce: barra in alto, mega-menu dell'indice (da TOC), indice laterale
   "in questa pagina" con scroll-spy, navigazione capitolo prec./succ.,
   barra di avanzamento, tema chiaro/scuro.
   Richiede: assets/toc.js caricato prima.
   La pagina dichiara il capitolo con <body data-chapter="N"> (0 = copertina).
   ========================================================================= */

(function () {
  const chapN = parseInt(document.body.dataset.chapter || "0", 10);
  const cap = TOC.find((c) => c.n === chapN) || null;

  /* ---------- tema ---------- */
  const savedTheme = localStorage.getItem("al-theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.setAttribute("data-theme", "dark");

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("al-theme", next);
    document.getElementById("theme-ico").textContent = next === "dark" ? "☀" : "☾";
  }

  /* ---------- barra in alto ---------- */
  const prev = cap ? TOC.find((c) => c.n === chapN - 1) : null;
  const next = cap ? TOC.find((c) => c.n === chapN + 1) : TOC[0];

  const bar = document.createElement("header");
  bar.className = "topbar";
  bar.innerHTML = `
    <div class="progress" id="progress"></div>
    <a class="brand" href="index.html"><span class="glyph">λ</span> Algebra Lineare</a>
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
    // riserva la colonna di destra: da qui in poi il testo si ricentra nello
    // spazio rimanente e non può più finire sotto l'indice laterale
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
    /* I listener su window vengono agganciati SOLO durante il trascinamento e
       staccati al rilascio. È importante: i widget ridisegnano la scena a ogni
       movimento, quindi il pallino viene ricreato di continuo — se registrassimo
       i listener alla creazione, se ne accumulerebbero centinaia. */
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

/* ============================================================================
   Segnalibro — salva e riprendi la posizione di lettura (per libro).
   Aggiunge un pulsante 🔖 nella barra in alto; memorizza in localStorage.
   Modulo autonomo: non dipende dal resto di book.js. Sicuro se caricato una volta.
   ========================================================================= */
(function () {
  if (window.__bmInit) return;
  window.__bmInit = true;

  function init() {
    const bar = document.querySelector(".topbar");
    if (!bar) return;
    const brand = bar.querySelector(".brand");
    const bookKey = "custombooks:bm:" + ((brand ? brand.textContent : document.title) || "libro").trim();
    const curFile = location.pathname.split("/").pop() || "index.html";

    function getBM() { try { return JSON.parse(localStorage.getItem(bookKey) || "null"); } catch (e) { return null; } }
    function setBM(v) { try { localStorage.setItem(bookKey, JSON.stringify(v)); } catch (e) {} }
    function clearBM() { try { localStorage.removeItem(bookKey); } catch (e) {} }

    function currentSection() {
      const heads = Array.from(document.querySelectorAll(".page h2[id], .page h3[id]"));
      let chosen = null;
      for (const h of heads) { if (h.getBoundingClientRect().top < 140) chosen = h; }
      if (!chosen && heads.length) chosen = heads[0];
      if (!chosen) return null;
      const num = chosen.querySelector(".secnum");
      const label = num ? chosen.textContent.replace(num.textContent, "").trim() : chosen.textContent.trim();
      return { id: chosen.id, label: label };
    }

    function saveHere() {
      const crumb = bar.querySelector(".crumb");
      const h1 = document.querySelector(".page h1, h1");
      const sec = currentSection();
      setBM({
        file: curFile,
        chapText: crumb ? crumb.textContent.trim() : (h1 ? h1.textContent.trim() : "Copertina"),
        sectionId: sec ? sec.id : null,
        sectionLabel: sec ? sec.label : null,
        scrollY: Math.round(window.scrollY || 0)
      });
    }

    function goToBM() {
      const bm = getBM();
      if (!bm) return;
      if (bm.file === curFile) {
        if (bm.sectionId && document.getElementById(bm.sectionId)) location.hash = "#" + bm.sectionId;
        else window.scrollTo({ top: bm.scrollY || 0, behavior: "smooth" });
      } else {
        location.href = bm.file + (bm.sectionId ? "#" + bm.sectionId : "");
      }
    }

    /* pulsante nella barra, subito prima del tema */
    const btn = document.createElement("button");
    btn.className = "nav-btn icon ghost";
    btn.id = "bm-btn";
    btn.type = "button";
    btn.textContent = "🔖";
    const themeBtn = document.getElementById("theme-btn");
    if (themeBtn && themeBtn.parentNode === bar) bar.insertBefore(btn, themeBtn);
    else bar.appendChild(btn);

    function refreshBtn() {
      const bm = getBM();
      btn.title = bm ? "Segnalibro: " + (bm.chapText || "") : "Segnalibro — salva dove sei arrivato";
      btn.style.opacity = bm ? "1" : "0.75";
    }

    /* popover */
    const pop = document.createElement("div");
    pop.id = "bm-pop";
    pop.style.cssText = "position:fixed;z-index:1200;display:none;min-width:210px;max-width:290px;" +
      "background:var(--paper,#fff);color:var(--ink,#1c1b19);border:1px solid var(--rule,#e7e4dd);" +
      "border-radius:12px;box-shadow:var(--shadow,0 10px 30px rgba(0,0,0,.18));padding:.4rem;font-size:.9rem;";
    document.body.appendChild(pop);

    const IB = "display:block;width:100%;text-align:left;padding:.5rem .6rem;border:0;border-radius:8px;background:transparent;color:inherit;cursor:pointer;font:inherit;line-height:1.35";

    function renderPop() {
      const bm = getBM();
      let html = '<button data-act="save" style="' + IB + '">📌&nbsp;&nbsp;Salva qui</button>';
      if (bm) {
        html += '<div style="height:1px;background:var(--rule,#e7e4dd);margin:.3rem .2rem"></div>';
        html += '<button data-act="go" style="' + IB + '">↪&nbsp;&nbsp;Riprendi da qui' +
          '<br><span style="color:var(--ink-soft,#6b6862);font-size:.82em">' +
          (bm.chapText || "") + (bm.sectionLabel ? " · " + bm.sectionLabel : "") + '</span></button>';
        html += '<button data-act="del" style="' + IB + ';color:var(--ink-soft,#6b6862);font-size:.84em">🗑&nbsp;&nbsp;Rimuovi</button>';
      } else {
        html += '<div style="padding:.3rem .6rem;color:var(--ink-soft,#6b6862);font-size:.82em">Nessun segnalibro ancora</div>';
      }
      pop.innerHTML = html;
    }

    function openPop(open) {
      if (open) {
        renderPop();
        pop.style.display = "block";
        const r = btn.getBoundingClientRect();
        const w = pop.offsetWidth;
        pop.style.top = (r.bottom + 8) + "px";
        pop.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.right - w)) + "px";
      } else {
        pop.style.display = "none";
      }
    }

    /* toast */
    let toastEl = null, toastT = null;
    function toast(msg) {
      if (!toastEl) {
        toastEl = document.createElement("div");
        toastEl.style.cssText = "position:fixed;z-index:1300;left:50%;bottom:26px;transform:translateX(-50%);" +
          "background:var(--ink,#1c1b19);color:var(--paper,#faf9f6);padding:.55rem 1.05rem;border-radius:999px;" +
          "font-size:.9rem;box-shadow:0 8px 24px rgba(0,0,0,.25);opacity:0;transition:opacity .2s;pointer-events:none;";
        document.body.appendChild(toastEl);
      }
      toastEl.textContent = msg;
      toastEl.style.opacity = "1";
      clearTimeout(toastT);
      toastT = setTimeout(function () { toastEl.style.opacity = "0"; }, 1700);
    }

    btn.addEventListener("click", function (e) { e.stopPropagation(); openPop(pop.style.display !== "block"); });
    document.addEventListener("click", function (e) { if (e.target !== btn && !pop.contains(e.target)) openPop(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") openPop(false); });
    pop.addEventListener("click", function (e) {
      const b = e.target.closest("button[data-act]");
      if (!b) return;
      const act = b.dataset.act;
      if (act === "save") { saveHere(); refreshBtn(); openPop(false); toast("📌 Segnalibro salvato"); }
      else if (act === "go") { openPop(false); goToBM(); }
      else if (act === "del") { clearBM(); refreshBtn(); openPop(false); toast("Segnalibro rimosso"); }
    });

    refreshBtn();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

/* ============================================================================
   Fix barra sempre visibile — forza la topbar in position:fixed via JS.
   Gli stili inline vincono su qualsiasi CSS (anche vecchio in cache del browser),
   così la barra (indice + segnalibro + tema) resta ancorata in cima allo scroll.
   ========================================================================= */
(function () {
  if (window.__barFix) return;
  window.__barFix = true;
  function fixBar() {
    var bar = document.querySelector(".topbar");
    if (!bar) return;
    var navH = (getComputedStyle(document.documentElement).getPropertyValue("--nav-h") || "").trim() || "56px";
    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.left = "0";
    bar.style.right = "0";
    bar.style.zIndex = "200";
    document.body.style.paddingTop = navH;
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fixBar);
  else fixBar();
})();
