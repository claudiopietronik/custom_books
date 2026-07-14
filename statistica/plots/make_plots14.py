import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from scipy import stats

rcParams["font.family"]="DejaVu Sans"
rcParams["axes.spines.top"]=False
rcParams["axes.spines.right"]=False
rcParams["axes.edgecolor"]="#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"; GREEN="#059669"
COLORS=[INDIGO,GREEN,AMBER]
rng=np.random.default_rng(40)

# ============ PLOT A: between vs within ============
fig,(a1,a2)=plt.subplots(1,2,figsize=(13,5),sharey=True)

def draw(ax,groups,title):
    alld=np.concatenate(groups); grand=alld.mean()
    for j,g in enumerate(groups):
        xj=np.full(len(g),j+1)+rng.uniform(-0.12,0.12,len(g))
        ax.scatter(xj,g,s=18,color=COLORS[j],alpha=0.5)
        ax.hlines(g.mean(),j+0.7,j+1.3,color=COLORS[j],lw=3)
    ax.axhline(grand,color="#333",ls="--",lw=1.6)
    ax.set_title(title,fontsize=11,fontweight="bold")
    ax.set_xticks([1,2,3]); ax.set_xticklabels(["Gruppo A","Gruppo B","Gruppo C"])

sep=[rng.normal(10,1.0,30),rng.normal(14,1.0,30),rng.normal(18,1.0,30)]
ovl=[rng.normal(13,3.2,30),rng.normal(14,3.2,30),rng.normal(15,3.2,30)]
F1=stats.f_oneway(*sep)[0]; F2=stats.f_oneway(*ovl)[0]
draw(a1,sep,f"Molta varianza TRA i gruppi, poca DENTRO\nF grande = {F1:.0f}  → significativo")
draw(a2,ovl,f"Poca varianza tra, molta dentro\nF piccolo = {F2:.1f}  → non significativo")
a1.set_ylabel("valore")
fig.suptitle("L'idea dell'ANOVA \u2014 F = varianza TRA i gruppi / varianza DENTRO i gruppi",
             fontsize=13,fontweight="bold",y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/anova_variance.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print(f"anova_variance.png (F1={F1:.0f}, F2={F2:.1f})")

# ============ PLOT B: F-distribution ============
fig,ax=plt.subplots(figsize=(9.5,4.8))
df1,df2=2,87
x=np.linspace(0,6,500)
fpdf=stats.f.pdf(x,df1,df2)
ax.plot(x,fpdf,color=INDIGO,lw=2.6)
crit=stats.f.ppf(0.95,df1,df2)
m=x>=crit
ax.fill_between(x[m],fpdf[m],color=RED,alpha=0.5)
ax.axvline(crit,color=RED,ls="--",lw=1.6)
ax.text(crit+0.1,0.5,f"soglia α=0,05\nF*={crit:.2f}",fontsize=9,color=RED)
Fobs=4.2
ax.axvline(Fobs,color=GREEN,lw=2.4)
ax.text(Fobs+0.1,0.3,f"F osservato\n= {Fobs}",fontsize=9,color=GREEN,fontweight="bold")
ax.set_title("Distribuzione F \u2014 asimmetrica e solo positiva; si rifiuta H\u2080 se F cade nella coda destra",
             fontsize=11.5,fontweight="bold")
ax.set_xlabel("F"); ax.set_yticks([])
fig.tight_layout()
fig.savefig("/home/claude/build/img/f_dist.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("f_dist.png")

# ============ PLOT C: two-way interaction ============
fig,(a1,a2)=plt.subplots(1,2,figsize=(13,4.8),sharey=True)
xf=[0,1]
# no interaction: parallel
a1.plot(xf,[10,14],"-o",color=INDIGO,lw=2.6,ms=9,label="Fattore B = basso")
a1.plot(xf,[13,17],"-o",color=AMBER,lw=2.6,ms=9,label="Fattore B = alto")
a1.set_title("NESSUNA interazione\nlinee parallele: gli effetti si sommano",fontsize=11,fontweight="bold")
# interaction: crossing
a2.plot(xf,[10,16],"-o",color=INDIGO,lw=2.6,ms=9,label="Fattore B = basso")
a2.plot(xf,[16,10],"-o",color=AMBER,lw=2.6,ms=9,label="Fattore B = alto")
a2.set_title("INTERAZIONE\nlinee incrociate: l'effetto di A dipende da B",fontsize=11,fontweight="bold")
for ax in (a1,a2):
    ax.set_xticks([0,1]); ax.set_xticklabels(["A = basso","A = alto"])
    ax.legend(fontsize=9,frameon=False); ax.set_yticks([])
a1.set_ylabel("risposta media")
fig.suptitle("ANOVA a due vie \u2014 l'interazione: quando l'effetto di un fattore cambia secondo l'altro",
             fontsize=12.5,fontweight="bold",y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/interaction.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("interaction.png")
print("done")
