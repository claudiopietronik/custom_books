import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams

rcParams["font.family"] = "DejaVu Sans"
rcParams["axes.spines.top"] = False
rcParams["axes.spines.right"] = False
rcParams["axes.edgecolor"] = "#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"

rng = np.random.default_rng(11)

# ============ PLOT A: sampling variability / Monte Carlo ============
# population: skewed (exponential-ish)
pop = rng.exponential(2.0, 200000)
true_mean = pop.mean()

def sample_means(n, reps=5000):
    return np.array([rng.choice(pop, n).mean() for _ in range(reps)])

fig, axes = plt.subplots(1, 3, figsize=(13.8, 4.3))

axes[0].hist(pop, bins=60, color=VIOLET, alpha=0.8, range=(0,12))
axes[0].axvline(true_mean, color=AMBER, ls="--", lw=2)
axes[0].set_title(f"POPOLAZIONE (asimmetrica)\nmedia vera = {true_mean:.2f}", fontsize=10.5, fontweight="bold")
axes[0].set_yticks([]); axes[0].set_xlim(0,12)

for ax, n in zip(axes[1:], [5, 50]):
    sm = sample_means(n)
    ax.hist(sm, bins=45, color=INDIGO, alpha=0.85)
    ax.axvline(true_mean, color=AMBER, ls="--", lw=2)
    ax.set_title(f"Medie di 5000 campioni\nognuno di n = {n}  (dev.std = {sm.std():.2f})",
                 fontsize=10.5, fontweight="bold")
    ax.set_yticks([]); ax.set_xlim(0,5)

fig.suptitle("Distribuzione delle stime (Monte Carlo) \u2014 più grande il campione, meno variabilità",
             fontsize=12.5, fontweight="bold", y=1.03)
fig.tight_layout()
fig.savefig("/home/claude/build/img/sampling_var.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("sampling_var.png")

# ============ PLOT B: expected value as balance point ============
vals = np.array([1,2,3,4,5,6])
w = np.array([1,1,1,2,3,4], dtype=float); probs = w/w.sum()
EV = (vals*probs).sum()

fig, ax = plt.subplots(figsize=(9, 4.8))
ax.bar(vals, probs, color=INDIGO, alpha=0.85, width=0.6)
for v,p in zip(vals,probs):
    ax.text(v, p+0.005, f"{p:.2f}", ha="center", fontsize=9, color="#333")
# fulcrum at EV
ax.plot([EV],[0],'^', color=RED, ms=20, zorder=5, clip_on=False)
ax.axvline(EV, color=RED, ls="--", lw=1.6)
ax.text(EV, 0.30, f"E[X] = {EV:.2f}\n(punto di equilibrio)", color=RED, ha="center",
        fontsize=11, fontweight="bold")
ax.set_title("Valore atteso \u2014 il baricentro della distribuzione\n(somma dei valori pesata per le probabilità)",
             fontsize=12, fontweight="bold")
ax.set_xlabel("valore x"); ax.set_ylabel("P(X = x)")
ax.set_ylim(0, 0.40); ax.set_yticks([0,0.1,0.2,0.3])
fig.tight_layout()
fig.savefig("/home/claude/build/img/expected_value.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print(f"expected_value.png  (E[X]={EV:.3f})")
print("done")
