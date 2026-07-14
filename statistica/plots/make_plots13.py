import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from scipy import stats

rcParams["font.family"]="DejaVu Sans"
rcParams["axes.spines.top"]=False
rcParams["axes.spines.right"]=False
rcParams["axes.edgecolor"]="#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"; GREEN="#059669"
rng=np.random.default_rng(30)

def corr_data(r,n=200):
    x=rng.normal(0,1,n)
    y=r*x+np.sqrt(1-r**2)*rng.normal(0,1,n)
    return x,y

# ============ PLOT A: gallery ============
fig,axes=plt.subplots(1,4,figsize=(14,3.7))
for ax,r in zip(axes,[0.9,0.4,0.0,-0.8]):
    x,y=corr_data(r)
    ax.scatter(x,y,s=14,color=INDIGO,alpha=0.55)
    ax.set_title(f"r = {r:+.1f}",fontsize=13,fontweight="bold")
    ax.set_xticks([]); ax.set_yticks([])
fig.suptitle("Che aspetto ha la correlazione \u2014 da +1 (retta crescente) a −1 (retta calante), 0 = nessun legame lineare",
             fontsize=12.5,fontweight="bold",y=1.04)
fig.tight_layout()
fig.savefig("/home/claude/build/img/corr_gallery.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("corr_gallery.png")

# ============ PLOT B: problems with Pearson ============
fig,(a1,a2)=plt.subplots(1,2,figsize=(13,4.8))

# nonlinear parabola -> pearson ~0
x=np.linspace(-3,3,120); y=x**2+rng.normal(0,0.6,120)
rp=stats.pearsonr(x,y)[0]; rs=stats.spearmanr(x,y)[0]
a1.scatter(x,y,s=16,color=VIOLET,alpha=0.6)
a1.set_title(f"Relazione NON lineare (parabola)\nPearson r = {rp:.2f}  →  'non vede' il legame!",
             fontsize=11,fontweight="bold")
a1.set_xticks([]); a1.set_yticks([])

# monotonic curved -> spearman beats pearson
x2=np.sort(rng.uniform(0,3,120)); y2=np.exp(x2)+rng.normal(0,1.2,120)
rp2=stats.pearsonr(x2,y2)[0]; rs2=stats.spearmanr(x2,y2)[0]
a2.scatter(x2,y2,s=16,color=GREEN,alpha=0.6)
a2.set_title(f"Monotona ma curva (esponenziale)\nPearson r = {rp2:.2f}   vs   Spearman = {rs2:.2f}",
             fontsize=11,fontweight="bold")
a2.set_xticks([]); a2.set_yticks([])

fig.suptitle("Il problema di Pearson \u2014 misura solo legami LINEARI; Spearman (sui ranghi) coglie la monotonìa",
             fontsize=12.5,fontweight="bold",y=1.02)
fig.tight_layout()
fig.savefig("/home/claude/build/img/pearson_problem.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print(f"pearson_problem.png (parab rp={rp:.2f}, exp rp={rp2:.2f} rs={rs2:.2f})")

# ============ PLOT C: correlation matrix ============
n=300
age=rng.normal(40,10,n)
income=0.6*age+rng.normal(0,8,n)+20
spending=0.5*income+rng.normal(0,6,n)
health=-0.4*age+rng.normal(0,7,n)+80
random_v=rng.normal(0,1,n)
data=np.column_stack([age,income,spending,health,random_v])
labels=["Età","Reddito","Spesa","Salute","Casuale"]
C=np.corrcoef(data,rowvar=False)

fig,ax=plt.subplots(figsize=(7,6))
im=ax.imshow(C,cmap="RdBu_r",vmin=-1,vmax=1)
ax.set_xticks(range(5)); ax.set_yticks(range(5))
ax.set_xticklabels(labels,fontsize=10); ax.set_yticklabels(labels,fontsize=10)
for i in range(5):
    for j in range(5):
        ax.text(j,i,f"{C[i,j]:.2f}",ha="center",va="center",
                color="white" if abs(C[i,j])>0.5 else "#333",fontsize=10,fontweight="bold")
cb=fig.colorbar(im,fraction=0.046,pad=0.04); cb.set_label("coefficiente r")
ax.set_title("Matrice di correlazione \u2014 tutte le coppie in un colpo d'occhio",
             fontsize=12,fontweight="bold")
fig.tight_layout()
fig.savefig("/home/claude/build/img/corr_matrix.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("corr_matrix.png")
print("done")
