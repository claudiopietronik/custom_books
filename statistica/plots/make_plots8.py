import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rcParams
from matplotlib.patches import FancyBboxPatch

rcParams["font.family"] = "DejaVu Sans"
rcParams["axes.spines.top"] = False
rcParams["axes.spines.right"] = False
rcParams["axes.edgecolor"] = "#888"
INDIGO="#4f46e5"; VIOLET="#6366f1"; CYAN="#0891b2"; AMBER="#d97706"; RED="#dc2626"; GREEN="#059669"

# scenario: malattia rara + test
pD=0.01; pND=0.99; sens=0.99; fpr=0.05

# ============ PLOT A: tree diagram ============
fig, ax = plt.subplots(figsize=(10, 6))
ax.axis("off")
def node(x,y,txt,color="#333",fs=11,bold=False):
    ax.text(x,y,txt,ha="center",va="center",fontsize=fs,color=color,
            fontweight="bold" if bold else "normal",
            bbox=dict(boxstyle="round,pad=0.35",fc="white",ec=color,lw=1.6))
def branch(x1,y1,x2,y2,label,color):
    ax.annotate("",xy=(x2,y2),xytext=(x1,y1),arrowprops=dict(arrowstyle="-",color=color,lw=1.8))
    ax.text((x1+x2)/2-0.02,(y1+y2)/2+0.03,label,fontsize=9.5,color=color,fontweight="bold")

node(0.1,0.5,"10.000\npersone",INDIGO,12,True)
# level 1
branch(0.16,0.5,0.4,0.78,"P(D)=0,01",RED)
branch(0.16,0.5,0.4,0.22,"P(¬D)=0,99",GREEN)
node(0.45,0.78,"Malati\n100",RED,11,True)
node(0.45,0.22,"Sani\n9.900",GREEN,11,True)
# level 2 from malati
branch(0.51,0.80,0.78,0.90,"P(+|D)=0,99",INDIGO)
branch(0.51,0.76,0.78,0.66,"P(−|D)=0,01","#999")
node(0.85,0.90,"test +  →  99",INDIGO,10,True)
node(0.85,0.66,"test −  →  1","#999",10)
# level 2 from sani
branch(0.51,0.24,0.78,0.40,"P(+|¬D)=0,05",RED)
branch(0.51,0.20,0.78,0.10,"P(−|¬D)=0,95","#999")
node(0.85,0.40,"test +  →  495",RED,10,True)
node(0.85,0.10,"test −  →  9.405","#999",10)
ax.set_title("Diagramma ad albero \u2014 probabilità condizionate in cascata",
             fontsize=13,fontweight="bold")
ax.set_xlim(0,1); ax.set_ylim(0,1)
fig.tight_layout()
fig.savefig("/home/claude/build/img/tree.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("tree.png")

# ============ PLOT B: Bayes natural frequencies ============
TP=99; FP=495; total_pos=TP+FP
ppv=TP/total_pos
fig,(axa,axb)=plt.subplots(1,2,figsize=(13,4.8))
# left: all positives split
axa.bar(["Malati veri\n(veri +)","Sani\n(falsi +)"],[TP,FP],color=[INDIGO,RED],alpha=0.85)
axa.set_title(f"Fra i {total_pos} test POSITIVI...\nsolo {TP} sono davvero malati",
              fontsize=11.5,fontweight="bold")
axa.set_ylabel("numero di persone")
for i,v in enumerate([TP,FP]):
    axa.text(i,v+8,str(v),ha="center",fontsize=11,fontweight="bold")
# right: the resulting probability
axb.barh([0],[ppv],color=INDIGO,alpha=0.85,height=0.5)
axb.barh([0],[1-ppv],left=[ppv],color="#e5e3df",height=0.5)
axb.set_xlim(0,1); axb.set_yticks([])
axb.text(ppv/2,0,f"{ppv*100:.1f}%",ha="center",va="center",color="white",fontsize=15,fontweight="bold")
axb.set_title("P(malato | test +)  =  99 / 594  ≈  16,7%\nun positivo è più spesso un FALSO allarme",
              fontsize=11.5,fontweight="bold")
axb.set_xlabel("probabilità di essere davvero malato dato un test positivo")
fig.suptitle("Teorema di Bayes \u2014 perché un test 'quasi perfetto' inganna con malattie rare",
             fontsize=13,fontweight="bold",y=1.03)
fig.tight_layout()
fig.savefig("/home/claude/build/img/bayes.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print(f"bayes.png (PPV={ppv:.3f})")

# ============ PLOT C: Law of Large Numbers ============
rng=np.random.default_rng(5)
N=3000
rolls=rng.integers(1,7,size=N)
running=np.cumsum(rolls)/np.arange(1,N+1)
fig,ax=plt.subplots(figsize=(10,4.8))
ax.plot(np.arange(1,N+1),running,color=INDIGO,lw=1.3)
ax.axhline(3.5,color=AMBER,ls="--",lw=2,label="valore atteso E[X] = 3,5")
ax.set_xscale("log")
ax.set_xlabel("numero di lanci (scala log)")
ax.set_ylabel("media corrente")
ax.set_title("Legge dei Grandi Numeri \u2014 la media campionaria converge al valore atteso",
             fontsize=12.5,fontweight="bold")
ax.legend(fontsize=10,frameon=False)
ax.set_ylim(2.5,4.5)
fig.tight_layout()
fig.savefig("/home/claude/build/img/lln.png", dpi=140, bbox_inches="tight", facecolor="white")
plt.close(fig)
print("lln.png")
print("done")
