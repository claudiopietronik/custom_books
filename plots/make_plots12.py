import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from scipy import stats

rcParams["font.family"]="DejaVu Sans"
rcParams["axes.spines.top"]=False
rcParams["axes.spines.right"]=False
rcParams["axes.edgecolor"]="#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"; GREEN="#059669"

rng=np.random.default_rng(20)
TRUE_MU=50; SIGMA=10; n=30

# ============ PLOT A: many CIs (caterpillar) ============
fig,ax=plt.subplots(figsize=(9,7))
K=30; contain=0
for i in range(K):
    s=rng.normal(TRUE_MU,SIGMA,n)
    m=s.mean(); se=s.std(ddof=1)/np.sqrt(n)
    tcrit=stats.t.ppf(0.975,n-1)
    lo,hi=m-tcrit*se,m+tcrit*se
    ok=lo<=TRUE_MU<=hi
    contain+=ok
    c=GREEN if ok else RED
    ax.plot([lo,hi],[i,i],color=c,lw=2.4)
    ax.plot(m,i,"o",color=c,ms=5)
ax.axvline(TRUE_MU,color="#111",ls="--",lw=2)
ax.text(TRUE_MU+0.4,K+0.3,"media VERA (fissa)",fontsize=10,fontweight="bold")
ax.set_yticks([])
ax.set_xlabel("valore stimato")
ax.set_title(f"30 campioni, 30 intervalli di confidenza al 95%\n{contain}/30 contengono la media vera "
             f"(il verde), gli altri no (rosso)",fontsize=12,fontweight="bold")
fig.tight_layout()
fig.savefig("/home/claude/build/img/ci_caterpillar.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print(f"ci_caterpillar.png ({contain}/30)")

# ============ PLOT B: bootstrap ============
data=rng.normal(TRUE_MU,SIGMA,n)
B=10000
boot=np.array([rng.choice(data,n,replace=True).mean() for _ in range(B)])
lo,hi=np.percentile(boot,[2.5,97.5])
fig,ax=plt.subplots(figsize=(9.5,5))
ax.hist(boot,bins=60,color=VIOLET,alpha=0.8)
ax.axvline(lo,color=RED,lw=2.2); ax.axvline(hi,color=RED,lw=2.2)
ax.axvline(data.mean(),color=AMBER,lw=2,ls="--",label=f"media campione = {data.mean():.1f}")
ax.axvspan(lo,hi,color=GREEN,alpha=0.08)
ax.set_title(f"Bootstrap \u2014 ricampiona con reinserimento, poi prendi i percentili 2,5 e 97,5\n"
             f"IC 95% = [{lo:.1f}, {hi:.1f}]",fontsize=11.5,fontweight="bold")
ax.set_xlabel("media dei campioni bootstrap")
ax.set_yticks([])
ax.text(lo,ax.get_ylim()[1]*0.9,"2,5%",color=RED,ha="right",fontsize=9,fontweight="bold")
ax.text(hi,ax.get_ylim()[1]*0.9,"97,5%",color=RED,ha="left",fontsize=9,fontweight="bold")
ax.legend(fontsize=9.5,frameon=False)
fig.tight_layout()
fig.savefig("/home/claude/build/img/bootstrap.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print(f"bootstrap.png [{lo:.1f},{hi:.1f}]")
print("done")
