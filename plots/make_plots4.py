import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from matplotlib.patches import Circle

rcParams["font.family"] = "DejaVu Sans"
rcParams["axes.spines.top"] = False
rcParams["axes.spines.right"] = False
rcParams["axes.edgecolor"] = "#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"; GREEN="#059669"

rng = np.random.default_rng(7)

# ============ PLOT A: normalization (raw / z-score / min-max) ============
data = rng.normal(300, 60, 800)  # e.g. values around 300

def zscore(x): return (x - x.mean()) / x.std()
def minmax(x): return (x - x.min()) / (x.max() - x.min())

fig, axes = plt.subplots(1, 3, figsize=(13.5, 4.2))
sets = [
    ("Dati grezzi\nscala arbitraria (~300)", data, VIOLET, None),
    ("Z-score\ncentro 0, dev.std 1", zscore(data), INDIGO, 0),
    ("Min-max\nschiacciati in [0, 1]", minmax(data), CYAN, None),
]
for ax,(title,d,color,ref) in zip(axes,sets):
    ax.hist(d, bins=30, color=color, alpha=0.85, edgecolor="white", linewidth=0.3)
    if ref is not None:
        ax.axvline(ref, color=AMBER, ls="--", lw=1.8)
    ax.set_title(title, fontsize=11, fontweight="bold")
    ax.set_yticks([])
    ax.tick_params(labelsize=9)
fig.suptitle("Normalizzazione \u2014 la FORMA resta identica, cambia solo la SCALA dell'asse",
             fontsize=12.5, fontweight="bold", y=1.03)
fig.tight_layout()
fig.savefig("/home/claude/build/img/normalization.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("normalization.png")

# ============ PLOT B: outliers (1D z-score  +  2D euclidean) ============
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 5))

# --- 1D z-score outliers ---
x = np.concatenate([rng.normal(50, 8, 200), np.array([95, 98, 12, 105])])
mu, sd = x.mean(), x.std()
z = (x - mu) / sd
outl = np.abs(z) > 3
ax1.scatter(x[~outl], rng.uniform(0,1,size=(~outl).sum()), s=22, color=VIOLET, alpha=0.6, label="dati")
ax1.scatter(x[outl], rng.uniform(0,1,size=outl.sum()), s=70, color=RED, edgecolor="black",
            zorder=5, label="outlier (|z| > 3)")
for k in [-3,3]:
    ax1.axvline(mu + k*sd, color=RED, ls="--", lw=1.5)
ax1.axvline(mu, color=AMBER, ls="-", lw=1.6)
ax1.text(mu, 1.08, "media", color=AMBER, ha="center", fontsize=9, fontweight="bold")
ax1.text(mu+3*sd, 1.08, "+3σ", color=RED, ha="center", fontsize=9, fontweight="bold")
ax1.text(mu-3*sd, 1.08, "−3σ", color=RED, ha="center", fontsize=9, fontweight="bold")
ax1.set_yticks([]); ax1.set_ylim(-0.15,1.2)
ax1.set_title("Outlier 1D \u2014 metodo z-score\noltre ±3σ = anomalo", fontsize=11.5, fontweight="bold")
ax1.legend(loc="lower right", fontsize=9, frameon=False)

# --- 2D euclidean distance outliers ---
cloud = rng.normal(0, 1, (200, 2))
outliers2d = np.array([[4.5, 3.8], [-4, 3.5], [3.5, -4]])
allpts = np.vstack([cloud, outliers2d])
centroid = cloud.mean(axis=0)
dist = np.sqrt(((allpts - centroid)**2).sum(axis=1))
thr = 3.5
is_out = dist > thr
ax2.scatter(allpts[~is_out,0], allpts[~is_out,1], s=26, color=VIOLET, alpha=0.6, label="dati")
ax2.scatter(allpts[is_out,0], allpts[is_out,1], s=90, color=RED, edgecolor="black", zorder=5, label="outlier")
ax2.plot(*centroid, "*", color=AMBER, ms=18, zorder=6, label="centroide")
circle = Circle(centroid, thr, fill=False, color=RED, ls="--", lw=1.8)
ax2.add_patch(circle)
ax2.set_aspect("equal")
ax2.set_xticks([]); ax2.set_yticks([])
ax2.set_title("Outlier multivariati \u2014 distanza euclidea\noltre il raggio dal centroide = anomalo",
              fontsize=11.5, fontweight="bold")
ax2.legend(loc="upper left", fontsize=9, frameon=False)

fig.suptitle("Rilevare gli outlier \u2014 in 1D con lo z-score, in pi\u00f9 dimensioni con la distanza",
             fontsize=13, fontweight="bold", y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/outliers.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("outliers.png")
print("done")
