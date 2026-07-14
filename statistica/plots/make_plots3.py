import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams

rcParams["font.family"] = "DejaVu Sans"
rcParams["axes.spines.top"] = False
rcParams["axes.spines.right"] = False
rcParams["axes.edgecolor"] = "#888"
INDIGO = "#4f46e5"; VIOLET = "#6366f1"; CYAN = "#0891b2"; AMBER = "#d97706"

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 5), gridspec_kw={"width_ratios":[1.1,1]})

# ---- LEFT: binary entropy function ----
p = np.linspace(1e-6, 1-1e-6, 500)
H = -p*np.log2(p) - (1-p)*np.log2(1-p)
ax1.plot(p, H, color=INDIGO, lw=2.8)
ax1.fill_between(p, H, color=VIOLET, alpha=0.12)
ax1.axvline(0.5, color=AMBER, ls="--", lw=1.6)
ax1.plot([0.5],[1.0], "o", color=AMBER, ms=9)
ax1.annotate("massima incertezza\nH = 1 bit  (p = 0,5)", xy=(0.5,1.0), xytext=(0.55,0.55),
             fontsize=10, color=AMBER, fontweight="bold",
             arrowprops=dict(arrowstyle="->", color=AMBER))
ax1.annotate("certezza\nH = 0", xy=(0.02,0.02), xytext=(0.08,0.28),
             fontsize=9.5, color="#555",
             arrowprops=dict(arrowstyle="->", color="#888"))
ax1.annotate("certezza\nH = 0", xy=(0.98,0.02), xytext=(0.7,0.28),
             fontsize=9.5, color="#555",
             arrowprops=dict(arrowstyle="->", color="#888"))
ax1.set_xlabel("p  =  probabilità di 'testa'", fontsize=11)
ax1.set_ylabel("H  (bit)", fontsize=11)
ax1.set_title("Entropia di una moneta\nmassima quando è imprevedibile (p = 0,5)",
              fontsize=11.5, fontweight="bold")
ax1.set_ylim(0, 1.1)

# ---- RIGHT: entropy of different distributions ----
def H_of(probs):
    probs = np.array(probs, dtype=float)
    probs = probs/probs.sum()
    nz = probs[probs>0]
    return -np.sum(nz*np.log2(nz))

dists = [
    ("Uniforme\n(max incertezza)", [1,1,1,1,1,1], CYAN),
    ("Intermedia", [1,2,4,4,2,1], VIOLET),
    ("Concentrata\n(quasi certa)", [1,1,20,1,1,1], INDIGO),
]
x = np.arange(6)
for i,(title,probs,color) in enumerate(dists):
    ax = ax2.inset_axes([0.02, 0.68-i*0.33, 0.96, 0.26])
    pr = np.array(probs)/sum(probs)
    ax.bar(x, pr, color=color, alpha=0.85, width=0.8)
    ax.set_title(f"{title}   →   H = {H_of(probs):.2f} bit",
                 fontsize=9.5, fontweight="bold", loc="left")
    ax.set_xticks([]); ax.set_yticks([])
    ax.set_ylim(0, 0.85)
ax2.axis("off")
ax2.set_title("Stessa idea su una distribuzione:\npiù è 'piatta', più entropia",
              fontsize=11.5, fontweight="bold")

fig.suptitle("Entropia di Shannon \u2014 quanta incertezza (informazione) c'è in una distribuzione",
             fontsize=13, fontweight="bold", y=1.03)
fig.tight_layout()
fig.savefig("/home/claude/build/img/entropy.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("entropy.png saved")
print("H fair coin =", H_of([1,1]), "bit")
