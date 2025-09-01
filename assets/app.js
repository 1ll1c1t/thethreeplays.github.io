async function fetchData(path){
  const tryPaths = [path, '../'+path];
  for(const p of tryPaths){
    try{ const r = await fetch(p, {cache:'no-store'}); if(r.ok) return r.json(); }catch(e){}
  }
  throw new Error('Failed to load '+path);
}
function computeScore(picks){
  const done = picks.filter(x => x.result && x.result.toLowerCase() !== 'pending');
  const wins = done.filter(x => x.result.toLowerCase() === 'win').length;
  const losses = done.filter(x => x.result.toLowerCase() === 'loss').length;
  const total = wins + losses;
  const pct = total ? (wins/total*100).toFixed(1) : '0.0';
  return {wins, losses, total, pct};
}
function seedLogos(){
  const host = document.getElementById('logos-layer');
  if(!host) return;
  const logos = ["TEN","SYR","ALA","FSU","ND","MIA","TEX","OSU","LSU","CLEM","WF","KEN","AUB","BAY","BSU","USF","GT","COLO"];
  for(let i=0;i<24;i++){
    const img = document.createElement('img');
    img.src = `assets/logos/${logos[i % logos.length]}.svg`;
    img.className = 'floating-logo';
    img.style.left = Math.random()*100 + 'vw';
    img.style.animationDuration = (8 + Math.random()*10) + 's';
    img.style.animationDelay = (-Math.random()*8) + 's';
    host.appendChild(img);
  }
}
async function load(){
  const data = await fetchData('data/predictions.json');
  window.__DATA__ = data;
  // scoreboard totals across all picks
  const allPicks = data.weeks.flatMap(w => w.matches.flatMap(m => m.picks));
  const s = computeScore(allPicks);
  const by = id => document.getElementById(id);
  if(by('m-total')) by('m-total').textContent = s.total;
  if(by('m-wins')) by('m-wins').textContent = s.wins;
  if(by('m-losses')) by('m-losses').textContent = s.losses;
  if(by('m-winpct')) by('m-winpct').textContent = `${s.pct}%`;

  // week 1 list
  const wk = data.weeks.find(w => w.week === 1);
  const list = document.getElementById('week-list');
  if(list && wk){
    wk.matches.forEach(m => {
      const s2 = computeScore(m.picks);
      const a = document.createElement('a');
      a.className = 'match';
      a.href = `../predictions/${m.id}.html`;
      a.innerHTML = `<div><strong>${m.home}</strong> vs <strong>${m.away}</strong> &nbsp; <span class="muted">Final: ${m.score || '—'}</span></div>
      <div class="badge ${s2.total ? (s2.wins> s2.losses ? 'win':'loss'):'pending'}">${s2.wins}-${s2.losses}${s2.total ? ` (${s2.pct}%)` : ''}</div>`;
      list.appendChild(a);
    });
  }
  seedLogos();
}
document.addEventListener('DOMContentLoaded', load);
