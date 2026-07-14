import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams

rcParams["font.family"]="DejaVu Sans"
rcParams["axes.spines.top"]=False
rcParams["axes.spines.right"]=False
rcParams["axes.edgecolor"]="#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"; GREEN="#059669"
rng=np.random.default_rng(50)

# ============ PLOT A: simple regression + residuals ============
x=np.linspace(1,10,25); y=2.2*x+5+rng.normal(0,3.5,25)
b1,b0=np.polyfit(x,y,1); yhat=b1*x+b0
fig,ax=plt.subplots(figsize=(9.5,5.4))
ax.scatter(x,y,s=45,color=INDIGO,zorder=3,label="dati osservati")
ax.plot(x,yhat,color=AMBER,lw=2.6,label=f"retta stimata: ŷ = {b0:.1f} + {b1:.1f}·x")
for xi,yi,yh in zip(x,y,yhat):
    ax.plot([xi,xi],[yi,yh],color=RED,lw=1.3,alpha=0.7)
ax.plot([],[],color=RED,label="residui (errori)")
ax.set_title("Regressione lineare \u2014 i minimi quadrati minimizzano la somma dei residui AL QUADRATO",
             fontsize=11.5,fontweight="bold")
ax.set_xlabel("x (predittore)"); ax.set_ylabel("y (risposta)")
ax.legend(fontsize=9.5,frameon=False)
fig.tight_layout()
fig.savefig("/home/claude/build/img/regression.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("regression.png")

# ============ PLOT B: logistic regression ============
x=np.linspace(-4,4,200)
# generate binary outcomes
prob=1/(1+np.exp(-(1.5*x)))
xdata=rng.uniform(-4,4,80); ydata=(rng.uniform(0,1,80)<1/(1+np.exp(-1.5*xdata))).astype(int)
fig,ax=plt.subplots(figsize=(9.5,5))
ax.scatter(xdata,ydata,s=40,color=INDIGO,alpha=0.5,zorder=3,label="dati (0 o 1)")
ax.plot(x,prob,color=RED,lw=3,label="curva logistica (sigmoide)")
ax.axhline(0.5,color="#888",ls=":",lw=1.4)
ax.text(-3.8,0.53,"soglia decisione 0,5",fontsize=9,color="#666")
ax.set_title("Regressione logistica \u2014 la sigmoide mappa qualsiasi input in una probabilità [0, 1]",
             fontsize=11.5,fontweight="bold")
ax.set_xlabel("x (predittore)"); ax.set_ylabel("P(y = 1)")
ax.legend(fontsize=9.5,frameon=False,loc="center right")
fig.tight_layout()
fig.savefig("/home/claude/build/img/logistic.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("logistic.png")

# ============ PLOT C: under / good / over-fitting ============
xt=np.sort(rng.uniform(0,1,20))
true=np.sin(2*np.pi*xt)
yt=true+rng.normal(0,0.25,20)
xfine=np.linspace(0,1,300)
fig,axes=plt.subplots(1,3,figsize=(14,4.4),sharey=True)
for ax,deg,title,col in [
    (axes[0],1,"UNDERFITTING (grado 1)\ntroppo semplice: alto bias",AMBER),
    (axes[1],4,"BUON FIT (grado 4)\ncoglie il pattern, ignora il rumore",GREEN),
    (axes[2],15,"OVERFITTING (grado 15)\ninsegue il rumore: alta varianza",RED),
]:
    coef=np.polyfit(xt,yt,deg)
    yf=np.polyval(coef,xfine)
    ax.scatter(xt,yt,s=35,color=INDIGO,zorder=3,alpha=0.7)
    ax.plot(xfine,np.sin(2*np.pi*xfine),color="#bbb",lw=1.8,ls="--",label="vero pattern")
    ax.plot(xfine,yf,color=col,lw=2.6,label="modello")
    ax.set_title(title,fontsize=10.5,fontweight="bold")
    ax.set_ylim(-2,2); ax.set_xticks([]); ax.set_yticks([])
    ax.legend(fontsize=8,frameon=False,loc="upper right")
fig.suptitle("Under- e over-fitting \u2014 il compromesso bias/varianza al cuore del machine learning",
             fontsize=13,fontweight="bold",y=1.03)
fig.tight_layout()
fig.savefig("/home/claude/build/img/overfitting.png",dpi=140,bbox_inches="tight",facecolor="white")
plt.close(fig)
print("overfitting.png")
print("done")
