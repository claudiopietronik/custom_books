import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from scipy import stats

rcParams["font.family"]="DejaVu Sans"
rcParams["axes.spines.top"]=False
rcParams["axes.spines.right"]=False
rcParams["axes.edgecolor"]="#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"; GREEN="#059669"

rng=np.random.default_rng(14)

# ============ PLOT A: signal-to-noise ============
fig,(a1,a2)=plt.subplots(1,2,figsize=(13,4.6),sharex=True)
x=np.linspace(-6,8,600)
for ax,sd,title,tval in [
    (a1,0.7,"Poco rumore → separazione netta\nt GRANDE (significativo)","grande"),
    (a2,2.2,"Molto rumore → forte sovrapposizione\nt PICCOLO (non significativo)","piccolo"),
]:
    g1=stats.norm.pdf(x,0,sd); g2=stats.norm.pdf(x,2,sd)
    ax.plot(x,g1,color=INDIGO,lw=2.4); ax.fill_between(x,g1,color=INDIGO,alpha=0.12)
    ax.plot(x,g2,color=GREEN,lw=2.4); ax.fill_between(x,g2,color=GREEN,alpha=0.12)
    ax.axvline(0,color=INDIGO,ls=":",lw=1.2); ax.axvline(2,color=GREEN,ls=":",lw=1.2)
    ax.annotate("",xy=(2,ax.get_ylim()[1]*0.9),xytext=(0,ax.get_ylim()[1]*0.9),
                arrowprops=dict(arrowstyle="<->",color=AMBER,lw=1.8))
    ax.text(1,stats.norm.pdf(0,0,sd)*1.02,"stessa differenza\ndi medie",ha="center",
            fontsize=8.5,color=AMBER,fontweight="bold")
    ax.set_title(title,fontsize=11,fontweight="bold")
    ax.set_yticks([]); ax.set_xticks([])
fig.suptitle("Anatomia del t-test \u2014 t = SEGNALE / RUMORE = differenza / variabilità",
             fontsize=13,fontweight="bold",y=1.03)
fig.tight_layout()
fig.savefig("/home/claude/build/img/ttest_snr.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("ttest_snr.png")

# ============ PLOT B: t vs normal ============
fig,ax=plt.subplots(figsize=(9.5,5))
x=np.linspace(-5,5,600)
ax.plot(x,stats.norm.pdf(x),color="#111",lw=2.8,label="Normale (df = ∞)")
for df,c in [(1,RED),(3,AMBER),(10,INDIGO)]:
    ax.plot(x,stats.t.pdf(x,df),color=c,lw=2.2,label=f"t di Student (df = {df})")
ax.set_title("Distribuzione t vs Normale \u2014 code più pesanti con pochi gradi di libertà",
             fontsize=12,fontweight="bold")
ax.annotate("code più pesanti\n(più incertezza con n piccolo)",xy=(2.7,stats.t.pdf(2.7,1)),
            xytext=(2.2,0.22),fontsize=9,color=RED,
            arrowprops=dict(arrowstyle="->",color=RED))
ax.set_yticks([]); ax.legend(fontsize=9.5,frameon=False)
fig.tight_layout()
fig.savefig("/home/claude/build/img/t_vs_normal.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("t_vs_normal.png")

# ============ PLOT C: permutation test ============
groupA=rng.normal(5.5,1.5,25); groupB=rng.normal(4.5,1.5,25)
obs=groupA.mean()-groupB.mean()
combined=np.concatenate([groupA,groupB]); nA=len(groupA)
perm=np.empty(10000)
for i in range(10000):
    rng.shuffle(combined)
    perm[i]=combined[:nA].mean()-combined[nA:].mean()
pval=np.mean(np.abs(perm)>=abs(obs))
fig,ax=plt.subplots(figsize=(9.5,5))
ax.hist(perm,bins=60,color=VIOLET,alpha=0.8)
ax.axvline(obs,color=RED,lw=2.6,label=f"differenza osservata = {obs:.2f}")
ax.axvline(-obs,color=RED,lw=1.4,ls=":")
ax.set_title(f"Permutation test \u2014 distribuzione nulla per mescolamento (p ≈ {pval:.3f})",
             fontsize=12,fontweight="bold")
ax.set_xlabel("differenza fra medie rimescolando le etichette")
ax.set_yticks([])
ax.annotate("il vero effetto è\nlontano dal 'caso'",xy=(obs,300),xytext=(obs+0.3,1200),
            fontsize=9,color=RED,fontweight="bold",arrowprops=dict(arrowstyle="->",color=RED))
ax.legend(fontsize=9.5,frameon=False)
fig.tight_layout()
fig.savefig("/home/claude/build/img/permutation.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print(f"permutation.png (obs={obs:.2f}, p={pval:.3f})")
print("done")
