import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from scipy import stats

rcParams["font.family"]="DejaVu Sans"
rcParams["axes.spines.top"]=False
rcParams["axes.spines.right"]=False
rcParams["axes.edgecolor"]="#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"

rng=np.random.default_rng(9)

# ============ PLOT A: Central Limit Theorem ============
# strongly non-normal population: bimodal
pop=np.concatenate([rng.uniform(0,1,100000), rng.uniform(4,5,100000)])

def means(n,reps=8000):
    return np.array([rng.choice(pop,n).mean() for _ in range(reps)])

fig,axes=plt.subplots(1,4,figsize=(14,3.8))
axes[0].hist(pop,bins=50,color=VIOLET,alpha=0.8)
axes[0].set_title("POPOLAZIONE\n(bimodale, per niente normale)",fontsize=10,fontweight="bold")
axes[0].set_yticks([]); axes[0].set_xticks([])
for ax,n in zip(axes[1:],[2,10,30]):
    m=means(n)
    ax.hist(m,bins=40,color=INDIGO,alpha=0.85)
    ax.set_title(f"medie di campioni\nn = {n}",fontsize=10,fontweight="bold")
    ax.set_yticks([]); ax.set_xticks([])
fig.suptitle("Teorema del Limite Centrale \u2014 la distribuzione delle MEDIE tende alla normale, "
             "qualunque sia la popolazione",fontsize=12.5,fontweight="bold",y=1.05)
fig.tight_layout()
fig.savefig("/home/claude/build/img/clt.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("clt.png")

# ============ PLOT B: p-value (one & two tailed) ============
fig,(ax1,ax2)=plt.subplots(1,2,figsize=(13,4.6),sharey=True)
x=np.linspace(-4,4,600)
pdf=stats.norm.pdf(x)
z_obs=1.9

# one-tailed
ax1.plot(x,pdf,color=INDIGO,lw=2.4)
m=x>=z_obs
ax1.fill_between(x[m],pdf[m],color=RED,alpha=0.55)
ax1.axvline(z_obs,color=RED,lw=1.8)
ax1.set_title("Test a UNA coda\np-value = area oltre il valore osservato",fontsize=11,fontweight="bold")
ax1.annotate(f"z = {z_obs}",xy=(z_obs,0.02),xytext=(2.4,0.18),fontsize=10,color=RED,fontweight="bold",
             arrowprops=dict(arrowstyle="->",color=RED))
ax1.text(2.6,0.05,"p",color=RED,fontsize=13,fontweight="bold")
ax1.set_yticks([]); ax1.set_xlabel("statistica test (sotto H\u2080)")

# two-tailed
ax2.plot(x,pdf,color=INDIGO,lw=2.4)
mr=x>=z_obs; ml=x<=-z_obs
ax2.fill_between(x[mr],pdf[mr],color=RED,alpha=0.55)
ax2.fill_between(x[ml],pdf[ml],color=RED,alpha=0.55)
ax2.axvline(z_obs,color=RED,lw=1.6); ax2.axvline(-z_obs,color=RED,lw=1.6)
ax2.set_title("Test a DUE code\np-value = entrambe le code (le due metà)",fontsize=11,fontweight="bold")
ax2.text(2.6,0.05,"p/2",color=RED,fontsize=11,fontweight="bold")
ax2.text(-3.1,0.05,"p/2",color=RED,fontsize=11,fontweight="bold")
ax2.set_yticks([]); ax2.set_xlabel("statistica test (sotto H\u2080)")

fig.suptitle("Il p-value \u2014 quanto sono estremi i dati SE l'ipotesi nulla fosse vera",
             fontsize=13,fontweight="bold",y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/pvalue.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("pvalue.png")
print("done")
