#!/usr/bin/env python3
"""Assembla i capitoli (definiti in book.json) in un unico HTML-libro navigabile.
Legge lo stile da styles.css e la logica da app.js (fonti separate, editabili).
Output: HTML intermedio con formule arithmatex; poi render_math.js -> SVG statico.
Uso: python3 build_book.py book.json intermediate.html
"""
import sys, json, markdown

def md2html(path):
    with open(path, encoding="utf-8") as f:
        txt = f.read()
    return markdown.markdown(
        txt,
        extensions=["tables", "fenced_code", "sane_lists", "pymdownx.arithmatex"],
        extension_configs={"pymdownx.arithmatex": {"generic": True}},
    )

def build(manifest_path, out_path):
    with open(manifest_path, encoding="utf-8") as f:
        book = json.load(f)
    with open("styles.css", encoding="utf-8") as f:
        css = f.read()
    with open("app.js", encoding="utf-8") as f:
        appjs = f.read()

    chapters_html, nav_parts, order = [], [], []
    first_id = None

    for part in book["parts"]:
        pid, ptitle = part["id"], part["title"]
        if part.get("available") and part["chapters"]:
            items = []
            for ch in part["chapters"]:
                cid = "chap-" + ch["id"]
                if first_id is None:
                    first_id = cid
                order.append({"id": cid, "nav": ch["nav"], "part": ptitle})
                body = md2html(ch["file"])
                chapters_html.append(
                    f'<section class="chapter" id="{cid}" data-part="{pid}">\n'
                    f'<div class="crumb">{ptitle}</div>\n{body}\n</section>'
                )
                items.append(f'<button class="nav-item" data-target="{cid}">{ch["nav"]}</button>')
            nav_parts.append(
                f'<div class="nav-part"><button class="nav-part-btn">{ptitle}'
                f'<span class="caret">\u25be</span></button>'
                f'<div class="nav-menu">{"".join(items)}</div></div>'
            )
        else:
            nav_parts.append(
                f'<div class="nav-part disabled"><button class="nav-part-btn" disabled>'
                f'{ptitle}<span class="soon">in arrivo</span></button></div>'
            )

    appjs = appjs.replace("__ORDER__", json.dumps(order, ensure_ascii=False)).replace("__FIRST__", first_id or "")

    html = TEMPLATE
    html = html.replace("__TITLE__", book["title"])
    html = html.replace("__SUBTITLE__", book.get("subtitle", ""))
    html = html.replace("__CSS__", css)
    html = html.replace("__NAVBAR__", "".join(nav_parts))
    html = html.replace("__CONTENT__", "\n".join(chapters_html))
    html = html.replace("__APPJS__", appjs)

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print("intermedio:", out_path, f"({len(html)//1024} KB) — capitoli:", len(order))


TEMPLATE = r"""<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>__TITLE__</title>
<style>
__CSS__
</style>
</head>
<body>
<header class="nav">
  <div class="nav-inner">
    <div class="brand">__TITLE__<small>__SUBTITLE__</small></div>
    <button class="hamburger" aria-label="menu">&#9776;</button>
    <nav class="nav-links">__NAVBAR__</nav>
  </div>
</header>

<div class="wrap">
__CONTENT__
  <div class="pager">
    <button class="prevbtn"><span class="lbl">Precedente</span><span class="prevlbl">—</span></button>
    <button class="nextbtn"><span class="lbl">Successivo</span><span class="nextlbl">—</span></button>
  </div>
</div>

<script>
__APPJS__
</script>
</body>
</html>"""

if __name__ == "__main__":
    build(sys.argv[1], sys.argv[2])
