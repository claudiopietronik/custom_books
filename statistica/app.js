/* ============================================================
   Statistica & Machine Learning — logica di navigazione
   __ORDER__ e __FIRST__ vengono sostituiti da build_book.py
   con la sequenza dei capitoli e l'id del primo capitolo.
   ============================================================ */
var ORDER = __ORDER__;
var FIRST = "__FIRST__";

function show(id, push){
  var target = document.getElementById(id);
  if(!target) return;
  document.querySelectorAll('.chapter').forEach(function(c){ c.classList.remove('active'); });
  target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(function(b){
    b.classList.toggle('active', b.dataset.target === id);
  });
  updatePager(id);
  closeMenus();
  window.scrollTo({ top:0, behavior:'auto' });
  if(push) history.replaceState(null, '', '#' + id);
}

function updatePager(id){
  var i = ORDER.findIndex(function(o){ return o.id === id; });
  var prev = document.querySelector('.prevbtn'), next = document.querySelector('.nextbtn');
  if(i > 0){ prev.disabled=false; prev.querySelector('.prevlbl').textContent=ORDER[i-1].nav; prev.dataset.target=ORDER[i-1].id; }
  else{ prev.disabled=true; prev.querySelector('.prevlbl').textContent='—'; }
  if(i < ORDER.length-1){ next.disabled=false; next.querySelector('.nextlbl').textContent=ORDER[i+1].nav; next.dataset.target=ORDER[i+1].id; }
  else{ next.disabled=true; next.querySelector('.nextlbl').textContent='—'; }
}

function closeMenus(){
  document.querySelectorAll('.nav-part.open').forEach(function(p){ p.classList.remove('open'); });
  document.querySelector('.nav-links').classList.remove('open');
}

document.querySelectorAll('.nav-item').forEach(function(btn){
  btn.addEventListener('click', function(){ show(btn.dataset.target, true); });
});
document.querySelectorAll('.nav-part:not(.disabled) .nav-part-btn').forEach(function(btn){
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    var part = btn.parentElement;
    var wasOpen = part.classList.contains('open');
    document.querySelectorAll('.nav-part.open').forEach(function(p){ if(p!==part) p.classList.remove('open'); });
    part.classList.toggle('open', !wasOpen);
  });
});
document.querySelector('.hamburger').addEventListener('click', function(e){
  e.stopPropagation();
  document.querySelector('.nav-links').classList.toggle('open');
});
document.addEventListener('click', function(e){
  if(!e.target.closest('.nav-part') && !e.target.closest('.hamburger')) closeMenus();
});
['prevbtn','nextbtn'].forEach(function(cls){
  document.querySelector('.'+cls).addEventListener('click', function(){
    if(!this.disabled && this.dataset.target) show(this.dataset.target, true);
  });
});

var start = (location.hash && document.getElementById(location.hash.slice(1))) ? location.hash.slice(1) : FIRST;
show(start, false);
