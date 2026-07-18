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
   Segnalibro — salva/riprendi la posizione di lettura (per libro) + SINCRONIZZA
   tra dispositivi con un "codice di sincronizzazione".
   Locale: localStorage. Remoto: jsonblob.com (archivio JSON gratuito, CORS).
   v3: pull all'apertura del menù (no reload), sincronizza anche le cancellazioni
   (timestamp per capitolo), feedback di stato. Guardia __bmInit.
   ========================================================================= */
(function () {
  if (window.__bmInit) return;
  window.__bmInit = true;

  var SYNC_BASE = "https://jsonblob.com/api/jsonBlob";
  var SYNC_KEY = "custombooks:synccode"; // codice globale (stesso per tutti i libri)

  function init() {
    var bar = document.querySelector(".topbar");
    if (!bar) return;
    var brand = bar.querySelector(".brand");
    var bookKey = ((brand ? brand.textContent : document.title) || "libro").trim();
    var lsKey = "custombooks:bm:" + bookKey;
    var tsKey = "custombooks:bmts:" + bookKey;
    var curFile = location.pathname.split("/").pop() || "index.html";

    /* ---- bookmark + timestamp locali ---- */
    function getBM() { try { return JSON.parse(localStorage.getItem(lsKey) || "null"); } catch (e) { return null; } }
    function setBM(v) { try { if (v) localStorage.setItem(lsKey, JSON.stringify(v)); else localStorage.removeItem(lsKey); } catch (e) {} }
    function getTS() { try { return parseInt(localStorage.getItem(tsKey) || "0", 10) || 0; } catch (e) { return 0; } }
    function setTS(t) { try { localStorage.setItem(tsKey, String(t || Date.now())); } catch (e) {} }

    /* ---- codice sync ---- */
    function getCode() { try { return localStorage.getItem(SYNC_KEY) || ""; } catch (e) { return ""; } }
    function setCode(c) { try { if (c) localStorage.setItem(SYNC_KEY, c); else localStorage.removeItem(SYNC_KEY); } catch (e) {} }

    /* ---- remoto (jsonblob) ---- */
    function remoteGet(code) {
      return fetch(SYNC_BASE + "/" + encodeURIComponent(code), { headers: { "Accept": "application/json" }, cache: "no-store" })
        .then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
    }
    function remotePut(code, obj) {
      return fetch(SYNC_BASE + "/" + encodeURIComponent(code), { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj) })
        .then(function (r) { return r.ok; }).catch(function () { return false; });
    }
    function remoteCreate(obj) {
      return fetch(SYNC_BASE, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj) })
        .then(function (r) {
          if (!r.ok) return null;
          var id = r.headers.get("X-jsonblob-id");
          if (!id) { var loc = r.headers.get("Location"); id = loc ? loc.split("/").pop() : null; }
          return id;
        }).catch(function () { return null; });
    }

    /* legge l'entry del libro corrente in formato normalizzato {at, bm} */
    function readEntry(data) {
      if (!data || !data.books) return null;
      var e = data.books[bookKey];
      if (e === undefined) return null;
      if (e && typeof e === "object" && ("bm" in e || "at" in e)) return { at: e.at || 0, bm: e.bm || null };
      return { at: (e && e.updatedAt) || 0, bm: e || null }; // formato vecchio: entry = bookmark
    }

    function syncPush() {
      var code = getCode(); if (!code) return Promise.resolve(true);
      return remoteGet(code).then(function (data) {
        if (!data || typeof data !== "object") data = { v: 1, books: {} };
        if (!data.books) data.books = {};
        data.books[bookKey] = { at: getTS() || Date.now(), bm: getBM() };
        data.updatedAt = Date.now();
        return remotePut(code, data);
      });
    }
    function syncPull() {
      var code = getCode(); if (!code) return Promise.resolve(false);
      return remoteGet(code).then(function (data) {
        var e = readEntry(data);
        if (!e) return false;
        var localTs = getTS() || (getBM() && getBM().updatedAt) || 0;
        if (e.at > localTs) { setBM(e.bm); setTS(e.at); return true; }
        return false;
      });
    }

    /* ---- posizione corrente ---- */
    function currentSection() {
      var heads = Array.prototype.slice.call(document.querySelectorAll(".page h2[id], .page h3[id]"));
      var chosen = null;
      for (var i = 0; i < heads.length; i++) if (heads[i].getBoundingClientRect().top < 140) chosen = heads[i];
      if (!chosen && heads.length) chosen = heads[0];
      if (!chosen) return null;
      var num = chosen.querySelector(".secnum");
      var label = num ? chosen.textContent.replace(num.textContent, "").trim() : chosen.textContent.trim();
      return { id: chosen.id, label: label };
    }
    function saveHere() {
      var crumb = bar.querySelector(".crumb");
      var h1 = document.querySelector(".page h1, h1");
      var sec = currentSection();
      var now = Date.now();
      setBM({
        file: curFile,
        chapText: crumb ? crumb.textContent.trim() : (h1 ? h1.textContent.trim() : "Copertina"),
        sectionId: sec ? sec.id : null,
        sectionLabel: sec ? sec.label : null,
        scrollY: Math.round(window.scrollY || 0),
        updatedAt: now
      });
      setTS(now);
    }
    function removeHere() { setBM(null); setTS(Date.now()); }
    function goToBM() {
      var bm = getBM(); if (!bm) return;
      if (bm.file === curFile) {
        if (bm.sectionId && document.getElementById(bm.sectionId)) location.hash = "#" + bm.sectionId;
        else window.scrollTo({ top: bm.scrollY || 0, behavior: "smooth" });
      } else { location.href = bm.file + (bm.sectionId ? "#" + bm.sectionId : ""); }
    }

    /* ---- pulsante ---- */
    var btn = document.createElement("button");
    btn.className = "nav-btn icon ghost"; btn.id = "bm-btn"; btn.type = "button"; btn.textContent = "🔖";
    var themeBtn = document.getElementById("theme-btn");
    if (themeBtn && themeBtn.parentNode === bar) bar.insertBefore(btn, themeBtn); else bar.appendChild(btn);
    function refreshBtn() {
      var bm = getBM();
      btn.title = bm ? "Segnalibro: " + (bm.chapText || "") : "Segnalibro — salva dove sei arrivato";
      btn.style.opacity = bm ? "1" : "0.75";
    }

    /* ---- popover ---- */
    var pop = document.createElement("div");
    pop.id = "bm-pop";
    pop.style.cssText = "position:fixed;z-index:1200;display:none;min-width:236px;max-width:300px;" +
      "background:var(--paper,#fff);color:var(--ink,#1c1b19);border:1px solid var(--rule,#e7e4dd);" +
      "border-radius:12px;box-shadow:var(--shadow,0 10px 30px rgba(0,0,0,.18));padding:.4rem;font-size:.9rem;";
    document.body.appendChild(pop);
    var IB = "display:block;width:100%;text-align:left;padding:.5rem .6rem;border:0;border-radius:8px;background:transparent;color:inherit;cursor:pointer;font:inherit;line-height:1.35";
    var HR = '<div style="height:1px;background:var(--rule,#e7e4dd);margin:.3rem .2rem"></div>';

    function renderPop() {
      var bm = getBM(), code = getCode();
      var h = '<button data-act="save" style="' + IB + '">📌&nbsp;&nbsp;Salva qui</button>';
      if (bm) {
        h += HR;
        h += '<button data-act="go" style="' + IB + '">↪&nbsp;&nbsp;Riprendi da qui<br><span style="color:var(--ink-soft,#6b6862);font-size:.82em">' +
          (bm.chapText || "") + (bm.sectionLabel ? " · " + bm.sectionLabel : "") + '</span></button>';
        h += '<button data-act="del" style="' + IB + ';color:var(--ink-soft,#6b6862);font-size:.84em">🗑&nbsp;&nbsp;Rimuovi</button>';
      }
      h += HR;
      if (code) {
        h += '<div style="padding:.35rem .6rem;font-size:.8em;color:var(--ink-soft,#6b6862)">🔗 Sync attivo · codice ' + (code.length > 10 ? code.slice(0, 6) + "…" : code) + '</div>';
        h += '<button data-act="syncnow" style="' + IB + ';font-size:.86em">🔄&nbsp;&nbsp;Sincronizza ora</button>';
        h += '<button data-act="synccopy" style="' + IB + ';font-size:.86em">📋&nbsp;&nbsp;Copia codice</button>';
        h += '<button data-act="syncoff" style="' + IB + ';color:var(--ink-soft,#6b6862);font-size:.84em">✖&nbsp;&nbsp;Disattiva sync</button>';
      } else {
        h += '<div style="padding:.35rem .6rem .1rem;font-size:.8em;color:var(--ink-soft,#6b6862)">Sincronizza tra telefono e PC:</div>';
        h += '<button data-act="synccreate" style="' + IB + ';font-size:.86em">🔗&nbsp;&nbsp;Crea codice sync</button>';
        h += '<button data-act="syncenter" style="' + IB + ';font-size:.86em">⌨&nbsp;&nbsp;Inserisci un codice</button>';
      }
      pop.innerHTML = h;
    }
    function positionPop() {
      var r = btn.getBoundingClientRect(), w = pop.offsetWidth;
      pop.style.top = (r.bottom + 8) + "px";
      pop.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.right - w)) + "px";
    }
    function openPop(open) {
      if (open) {
        renderPop(); pop.style.display = "block"; positionPop();
        if (getCode()) syncPull().then(function (ch) { if (pop.style.display === "block") { renderPop(); positionPop(); } if (ch) refreshBtn(); });
      } else { pop.style.display = "none"; }
    }

    /* ---- toast ---- */
    var toastEl = null, toastT = null;
    function toast(msg) {
      if (!toastEl) {
        toastEl = document.createElement("div");
        toastEl.style.cssText = "position:fixed;z-index:1300;left:50%;bottom:26px;transform:translateX(-50%);" +
          "background:var(--ink,#1c1b19);color:var(--paper,#faf9f6);padding:.55rem 1.05rem;border-radius:999px;" +
          "font-size:.9rem;box-shadow:0 8px 24px rgba(0,0,0,.25);opacity:0;transition:opacity .2s;pointer-events:none;max-width:82vw;text-align:center;";
        document.body.appendChild(toastEl);
      }
      toastEl.textContent = msg; toastEl.style.opacity = "1";
      clearTimeout(toastT); toastT = setTimeout(function () { toastEl.style.opacity = "0"; }, 2400);
    }
    function copyText(t) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(function () { toast("📋 Codice copiato"); }, function () { window.prompt("Copia il codice di sincronizzazione:", t); });
      } else { window.prompt("Copia il codice di sincronizzazione:", t); }
    }

    btn.addEventListener("click", function (e) { e.stopPropagation(); openPop(pop.style.display !== "block"); });
    document.addEventListener("click", function (e) { if (e.target !== btn && !pop.contains(e.target)) openPop(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") openPop(false); });

    pop.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-act]"); if (!b) return;
      var act = b.dataset.act;
      if (act === "save") {
        saveHere(); refreshBtn(); openPop(false);
        if (getCode()) { toast("📌 Salvato · sincronizzo…"); syncPush().then(function (ok) { toast(ok ? "🔗 Sincronizzato" : "⚠ Salvato in locale (sync non riuscito)"); }); }
        else toast("📌 Segnalibro salvato");
      } else if (act === "go") {
        openPop(false); goToBM();
      } else if (act === "del") {
        removeHere(); refreshBtn(); openPop(false);
        if (getCode()) { toast("sincronizzo…"); syncPush().then(function (ok) { toast(ok ? "🔗 Rimosso e sincronizzato" : "⚠ Rimosso in locale"); }); }
        else toast("Segnalibro rimosso");
      } else if (act === "syncnow") {
        openPop(false); toast("🔄 Sincronizzo…");
        syncPull().then(function (ch) { refreshBtn(); toast(ch ? "🔗 Aggiornato dall'altro dispositivo" : "🔗 Già aggiornato"); });
      } else if (act === "synccopy") {
        copyText(getCode()); openPop(false);
      } else if (act === "syncoff") {
        setCode(""); openPop(false); toast("Sync disattivato");
      } else if (act === "synccreate") {
        openPop(false); toast("Creo il codice…");
        remoteCreate({ v: 1, books: { }, updatedAt: Date.now() }).then(function (id) {
          if (!id) { toast("⚠ Errore: serve connessione, riprova"); return; }
          setCode(id);
          syncPush().then(function () {
            window.prompt("✅ Sync attivato! Questo è il tuo CODICE. Copialo e, sull'altro dispositivo, apri 🔖 → «Inserisci un codice»:", id);
            toast("🔗 Sync attivato");
          });
        });
      } else if (act === "syncenter") {
        openPop(false);
        var c = window.prompt("Incolla qui il codice di sincronizzazione (creato sull'altro dispositivo):", "");
        if (!c) return; c = c.trim(); if (!c) return;
        setCode(c); toast("🔄 Sincronizzo…");
        syncPull().then(function (ch) { refreshBtn(); toast(ch ? "🔗 Sincronizzato" : "🔗 Sync attivato (nessun segnalibro remoto)"); });
      }
    });

    /* aggiorna quando torni sulla scheda/finestra (es. dopo aver modificato sull'altro dispositivo) */
    function pullOnFocus() {
      if (!getCode()) return;
      syncPull().then(function (ch) { if (ch) { refreshBtn(); if (pop.style.display === "block") { renderPop(); positionPop(); } } });
    }
    window.addEventListener("focus", pullOnFocus);
    document.addEventListener("visibilitychange", function () { if (!document.hidden) pullOnFocus(); });

    refreshBtn();
    if (getCode()) syncPull().then(function (ch) { if (ch) refreshBtn(); });
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

/* ============================================================================
   Fix layout barra (mobile) — iniettato via JS per bypassare la cache della CSS.
   - forza la topbar fixed (regge anche con CSS vecchia in cache)
   - niente scroll orizzontale (il pulsante segnalibro non finisce fuori schermo)
   - su schermi stretti nasconde le frecce ‹ › (ridondanti: c'è la nav a fondo pagina)
   ========================================================================= */
(function () {
  if (window.__barCSS) return;
  window.__barCSS = true;
  var css =
    ".topbar{position:fixed !important;top:0;left:0;right:0;z-index:200;max-width:100%}" +
    "body{padding-top:var(--nav-h,56px)}" +
    "html,body{overflow-x:hidden;max-width:100%}" +
    ".topbar .brand{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
    ".topbar .spacer{min-width:.25rem}" +
    "@media (max-width:640px){.topbar a.nav-btn.icon{display:none}.topbar{gap:.35rem;padding:0 .6rem}}";
  var s = document.createElement("style");
  s.id = "__barFixStyle";
  s.textContent = css;
  (document.head || document.documentElement).appendChild(s);
})();
