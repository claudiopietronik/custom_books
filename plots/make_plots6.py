import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from scipy import stats

rcParams["font.family"] = "DejaVu Sans"
rcParams["axes.spines.top"] = False
rcParams["axes.spines.right"] = False
rcParams["axes.edgecolor"] = "#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"

# ============ PLOT A: PMF vs PDF ============
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 4.6))

# PMF: binomial (discrete)
k = np.arange(0, 11)
pmf = stats.binom.pmf(k, 10, 0.5)
ax1.bar(k, pmf, color=INDIGO, alpha=0.85, width=0.8)
ax1.set_title("PMF \u2014 variabile DISCRETA\naltezza barra = probabilità VERA  P(X = k)",
              fontsize=11, fontweight="bold")
ax1.set_xlabel("k (numero di successi)")
ax1.set_ylabel("P(X = k)")
ax1.set_xticks(k)
ax1.annotate(f"P(X=5) = {pmf[5]:.3f}", xy=(5, pmf[5]), xytext=(6.3, pmf[5]-0.02),
             fontsize=9, color=INDIGO, fontweight="bold",
             arrowprops=dict(arrowstyle="->", color=INDIGO))

# PDF: normal (continuous)
x = np.linspace(-4, 4, 500)
pdf = stats.norm.pdf(x)
ax2.plot(x, pdf, color=INDIGO, lw=2.6)
a, b = 0.5, 2.0
mask = (x >= a) & (x <= b)
ax2.fill_between(x[mask], pdf[mask], color=VIOLET, alpha=0.5)
ax2.set_title("PDF \u2014 variabile CONTINUA\nprobabilità = AREA sotto la curva (non l'altezza!)",
              fontsize=11, fontweight="bold")
ax2.set_xlabel("x")
ax2.set_ylabel("densità f(x)")
area = stats.norm.cdf(b) - stats.norm.cdf(a)
ax2.annotate(f"P({a} < X < {b})\n= area = {area:.2f}", xy=(1.1, 0.1),
             xytext=(1.8, 0.28), fontsize=9.5, color=INDIGO, fontweight="bold",
             arrowprops=dict(arrowstyle="->", color=INDIGO))

fig.suptitle("Massa vs Densità \u2014 discreto: la barra È la probabilità; continuo: lo è l'area",
             fontsize=12.5, fontweight="bold", y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/pmf_pdf.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("pmf_pdf.png")

# ============ PLOT B: PDF -> CDF ============
fig, (axp, axc) = plt.subplots(2, 1, figsize=(9, 7), sharex=True)
x = np.linspace(-4, 4, 500)
pdf = stats.norm.pdf(x)
cdf = stats.norm.cdf(x)
x0 = 1.0

# top: PDF with area up to x0
axp.plot(x, pdf, color=INDIGO, lw=2.6)
m = x <= x0
axp.fill_between(x[m], pdf[m], color=VIOLET, alpha=0.45)
axp.axvline(x0, color=AMBER, ls="--", lw=1.6)
axp.set_ylabel("densità  f(x)")
axp.set_title("PDF: l'AREA accumulata fino a x\u2080", fontsize=11.5, fontweight="bold")
axp.annotate(f"area a sinistra di x\u2080={x0}\n= {stats.norm.cdf(x0):.2f}",
             xy=(-0.3, 0.12), xytext=(-3.7, 0.25), fontsize=9.5, color=INDIGO,
             fontweight="bold")

# bottom: CDF with point at x0
axc.plot(x, cdf, color=CYAN, lw=2.8)
axc.axvline(x0, color=AMBER, ls="--", lw=1.6)
axc.plot([x0],[stats.norm.cdf(x0)], "o", color=AMBER, ms=11, zorder=5)
axc.hlines(stats.norm.cdf(x0), -4, x0, color=AMBER, ls=":", lw=1.4)
axc.set_ylabel("F(x) = P(X ≤ x)")
axc.set_xlabel("x")
axc.set_title("CDF: la stessa area, letta come ALTEZZA della curva cumulativa",
              fontsize=11.5, fontweight="bold")
axc.annotate(f"F(x\u2080) = {stats.norm.cdf(x0):.2f}", xy=(x0, stats.norm.cdf(x0)),
             xytext=(1.5, 0.55), fontsize=10, color=CYAN, fontweight="bold",
             arrowprops=dict(arrowstyle="->", color=CYAN))
axc.set_ylim(0, 1.05)

fig.suptitle("Dalla densità alla cumulata \u2014 l'area sotto la PDF diventa l'altezza della CDF",
             fontsize=12.5, fontweight="bold", y=1.0)
fig.tight_layout()
fig.savefig("/home/claude/build/img/cdf.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("cdf.png")
print("done")
