import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from scipy import stats

rcParams["font.family"]="DejaVu Sans"
rcParams["axes.spines.top"]=False
rcParams["axes.spines.right"]=False
rcParams["axes.edgecolor"]="#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"; GREEN="#059669"

# ============ PLOT A: Type 1 / Type 2 errors ============
fig,(axt,axd)=plt.subplots(1,2,figsize=(13.5,5),gridspec_kw={"width_ratios":[1,1.25]})

# left: 2x2 table
axt.axis("off")
axt.set_xlim(0,2); axt.set_ylim(0,2)
cells=[
    (0,1,"#d1fae5","Corretto\n(vero negativo)","#065f46"),
    (1,1,"#fee2e2","Errore Tipo 1\n(falso positivo)  α","#991b1b"),
    (0,0,"#ffedd5","Errore Tipo 2\n(falso negativo)  β","#9a3412"),
    (1,0,"#d1fae5","Corretto  (potenza)\n1 − β","#065f46"),
]
for x,y,c,txt,tc in cells:
    axt.add_patch(plt.Rectangle((x,y),1,1,facecolor=c,edgecolor="white",lw=3))
    axt.text(x+0.5,y+0.5,txt,ha="center",va="center",fontsize=10.5,fontweight="bold",color=tc)
axt.text(-0.05,1.5,"H\u2080 vera",rotation=90,ha="center",va="center",fontsize=10,fontweight="bold")
axt.text(-0.05,0.5,"H\u2080 falsa",rotation=90,ha="center",va="center",fontsize=10,fontweight="bold")
axt.text(0.5,2.08,"NON rifiuti H\u2080",ha="center",fontsize=10,fontweight="bold")
axt.text(1.5,2.08,"Rifiuti H\u2080",ha="center",fontsize=10,fontweight="bold")
axt.text(1,2.32,"LA TUA DECISIONE",ha="center",fontsize=10.5,fontweight="bold",color=INDIGO)
axt.text(-0.32,1,"REALTÀ",rotation=90,ha="center",va="center",fontsize=10.5,fontweight="bold",color=INDIGO)
axt.set_title("Le quattro possibilità",fontsize=12,fontweight="bold")

# right: overlapping distributions
x=np.linspace(-4,7,700)
h0=stats.norm.pdf(x,0,1); h1=stats.norm.pdf(x,3,1)
crit=1.645
axd.plot(x,h0,color=INDIGO,lw=2.2,label="H\u2080 (nessun effetto)")
axd.plot(x,h1,color=GREEN,lw=2.2,label="H\u2081 (effetto reale)")
axd.fill_between(x[x>=crit],h0[x>=crit],color=RED,alpha=0.5)
axd.fill_between(x[x<=crit],h1[x<=crit],color=AMBER,alpha=0.45)
axd.axvline(crit,color="#333",ls="--",lw=1.6)
axd.text(crit+0.1,0.42,"soglia\ncritica",fontsize=9,color="#333")
axd.text(2.0,0.02,"α",color=RED,fontsize=15,fontweight="bold")
axd.text(1.0,0.02,"β",color=AMBER,fontsize=15,fontweight="bold")
axd.set_yticks([]); axd.legend(fontsize=9.5,frameon=False,loc="upper right")
axd.set_title("α (Tipo 1) e β (Tipo 2) sulle due distribuzioni",fontsize=12,fontweight="bold")

fig.suptitle("Errori di Tipo 1 e Tipo 2 \u2014 due modi di sbagliare una decisione statistica",
             fontsize=13,fontweight="bold",y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/errors.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("errors.png")

# ============ PLOT B: multiple comparisons ============
m=np.arange(1,51)
alpha=0.05
fwer=1-(1-alpha)**m
fwer_bonf=1-(1-alpha/m)**m
fig,ax=plt.subplots(figsize=(9.5,5))
ax.plot(m,fwer,color=RED,lw=2.6,label="senza correzione: 1 − (1−α)$^m$")
ax.plot(m,fwer_bonf,color=GREEN,lw=2.6,label="con Bonferroni (α/m): resta ~0,05")
ax.axhline(0.05,color="#888",ls=":",lw=1.4)
ax.text(50,0.075,"soglia voluta 0,05",ha="right",fontsize=9,color="#666")
ax.fill_between(m,fwer,fwer_bonf,color=RED,alpha=0.08)
ax.set_xlabel("numero di test eseguiti (m)")
ax.set_ylabel("prob. di ALMENO un falso positivo")
ax.set_title("Confronti multipli \u2014 fare tanti test gonfia i falsi positivi\n(a 20 test: ~64% di beccarne almeno uno per caso)",
             fontsize=12,fontweight="bold")
ax.legend(fontsize=10,frameon=False,loc="center right")
ax.set_ylim(0,1)
fig.tight_layout()
fig.savefig("/home/claude/build/img/multiple.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print(f"multiple.png (FWER@20={1-(1-0.05)**20:.2f})")
print("done")
