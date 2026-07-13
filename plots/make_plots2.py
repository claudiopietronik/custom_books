import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
import os

rcParams["font.family"] = "DejaVu Sans"
rcParams["axes.spines.top"] = False
rcParams["axes.spines.right"] = False
rcParams["axes.edgecolor"] = "#888"
INDIGO = "#4f46e5"; VIOLET = "#6366f1"; CYAN = "#0891b2"; AMBER = "#d97706"

os.makedirs("/home/claude/build/img", exist_ok=True)
rng = np.random.default_rng(42)

# Bimodal-ish dataset (two humps + a bit of skew)
data = np.concatenate([
    rng.normal(-2, 0.7, 400),
    rng.normal(2.2, 1.1, 600),
])

# ---------- PLOT 1: number of bins ----------
def fd_bins(x):
    q75, q25 = np.percentile(x, [75, 25])
    iqr = q75 - q25
    h = 2 * iqr / (len(x) ** (1/3))
    return max(1, int(np.ceil((x.max() - x.min()) / h))), h, iqr

k_fd, h_fd, iqr = fd_bins(data)

fig, axes = plt.subplots(1, 3, figsize=(13.5, 4.3))
configs = [
    ("Troppo pochi bin (5)\nnascondono la struttura", 5, "#9ca3af"),
    (f"Freedman-Diaconis ({k_fd} bin)\ngiusto compromesso", k_fd, INDIGO),
    ("Troppi bin (200)\nrumore, seghettato", 200, "#9ca3af"),
]
for ax, (title, bins, color) in zip(axes, configs):
    ax.hist(data, bins=bins, color=color, alpha=0.85, edgecolor="white", linewidth=0.3)
    ax.set_title(title, fontsize=11, fontweight="bold")
    ax.set_yticks([]); ax.set_xticks([])
fig.suptitle("Quanti bin? La scelta cambia completamente la lettura dell'istogramma",
             fontsize=13, fontweight="bold", y=1.03)
fig.tight_layout()
fig.savefig("/home/claude/build/img/histogram_bins.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print(f"histogram_bins.png  (IQR={iqr:.2f}, h={h_fd:.3f}, k={k_fd})")

# ---------- PLOT 2: box vs violin ----------
groups = [
    np.concatenate([rng.normal(-2, 0.6, 300), rng.normal(2.5, 0.7, 300)]),  # bimodale
    rng.normal(0, 1.2, 600),                                                # unimodale
    np.concatenate([rng.normal(0, 0.5, 500), rng.normal(3.5, 0.8, 120)]),   # asimmetrica
]
labels = ["Bimodale", "Unimodale", "Asimmetrica"]

fig, (axb, axv) = plt.subplots(1, 2, figsize=(13, 5), sharey=True)

# Box plot
bp = axb.boxplot(groups, patch_artist=True, widths=0.5)
for patch in bp["boxes"]:
    patch.set_facecolor("#c7d2fe"); patch.set_edgecolor(INDIGO)
for med in bp["medians"]:
    med.set_color(AMBER); med.set_linewidth(2)
axb.set_xticks([1,2,3]); axb.set_xticklabels(labels, fontsize=10)
axb.set_title("Box plot\nla forma bimodale è INVISIBILE", fontsize=11.5, fontweight="bold")
axb.set_yticks([])

# Violin plot
vp = axv.violinplot(groups, showmedians=True, widths=0.8)
for body in vp["bodies"]:
    body.set_facecolor(VIOLET); body.set_edgecolor(INDIGO); body.set_alpha(0.55)
for key in ("cmedians","cmaxes","cmins","cbars"):
    if key in vp: vp[key].set_color(INDIGO)
axv.set_xticks([1,2,3]); axv.set_xticklabels(labels, fontsize=10)
axv.set_title("Violin plot\nla forma (i due picchi) si VEDE", fontsize=11.5, fontweight="bold")

# annotate the two humps on the bimodal violin
axv.annotate("due picchi\n= due gruppi", xy=(1, 2.5), xytext=(1.35, 4.3),
             fontsize=9, color=INDIGO, fontweight="bold",
             arrowprops=dict(arrowstyle="->", color=INDIGO))
fig.suptitle("Box plot vs Violin plot \u2014 stessa mediana, informazione diversa",
             fontsize=13, fontweight="bold", y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/violin.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("violin.png")
print("done")
