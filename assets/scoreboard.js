
async function renderScoreboard(){
  const el=document.querySelector('[data-scoreboard]'); if(!el) return;
  const candidates=['data/scoreboard.json','/data/scoreboard.json'];
  let data=null;
  for(const u of candidates){ try{ const res=await fetch(u,{cache:'no-store'}); if(res.ok){ data=await res.json(); break; } }catch(e){} }
  if(!data){ el.innerHTML='<div class="h2">Scoreboard</div><p class="meta">Totals file missing. Create /data/scoreboard.json.</p>'; return; }
  const t=data.totals||{}; const pct=(t.wins+t.losses)?(100*t.wins/(t.wins+t.losses)).toFixed(1):'—';
  el.innerHTML=`<div class="h2">Scoreboard</div>
    <ul class="inline">
      <li><strong>Picks</strong> ${t.picks ?? '—'}</li>
      <li><strong>Wins</strong> ${t.wins ?? '—'}</li>
      <li><strong>Losses</strong> ${t.losses ?? '—'}</li>
      <li><strong>Pending</strong> ${t.pending ?? '—'}</li>
      <li><strong>Win %</strong> ${pct}</li>
    </ul>`;
}
document.addEventListener('DOMContentLoaded', renderScoreboard);
