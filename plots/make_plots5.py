import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams

rcParams["font.family"] = "DejaVu Sans"
rcParams["axes.spines.top"] = False
rcParams["axes.spines.right"] = False
rcParams["axes.edgecolor"] = "#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"

rng = np.random.default_rng(3)

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 4.6), sharey=True)
faces = np.arange(1,7)

# Theoretical probability: uniform 1/6
ax1.bar(faces, [1/6]*6, color=INDIGO, alpha=0.85, width=0.7)
ax1.axhline(1/6, color=AMBER, ls="--", lw=1.5)
ax1.set_title("PROBABILITÀ (teorica)\nogni faccia = 1/6 ≈ 0,167  — sempre",
              fontsize=11.5, fontweight="bold")
ax1.set_xlabel("faccia del dado")
ax1.set_ylabel("probabilità / proporzione")
ax1.set_xticks(faces)

# Empirical proportion from a small sample
n = 60
rolls = rng.integers(1,7,size=n)
counts = np.array([(rolls==f).sum() for f in faces])
props = counts / n
ax2.bar(faces, props, color=VIOLET, alpha=0.85, width=0.7)
ax2.axhline(1/6, color=AMBER, ls="--", lw=1.5, label="probabilità teorica 1/6")
ax2.set_title(f"PROPORZIONE (empirica)\n{n} lanci reali — deviazioni dal caso",
              fontsize=11.5, fontweight="bold")
ax2.set_xlabel("faccia del dado")
ax2.set_xticks(faces)
ax2.legend(fontsize=9, frameon=False)

fig.suptitle("Probabilità vs Proporzione \u2014 attesa teorica vs conteggio osservato",
             fontsize=13, fontweight="bold", y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/prob_vs_prop.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("prob_vs_prop.png saved; counts:", counts.tolist())
