
async function renderScoreboard(){
  const el=document.querySelector('[data-scoreboard]'); if(!el) return;
  try{
    const res=await fetch('data/scoreboard.json'); const data=await res.json(); const t=data.totals||{};
    const pct=(t.wins+t.losses)?(100*t.wins/(t.wins+t.losses)).toFixed(1):'—';
    el.innerHTML=`<div class="h2">Scoreboard</div>
    <ul class="inline">
      <li><strong>Picks</strong> ${t.picks??'—'}</li>
      <li><strong>Wins</strong> ${t.wins??'—'}</li>
      <li><strong>Losses</strong> ${t.losses??'—'}</li>
      <li><strong>Pending</strong> ${t.pending??'—'}</li>
      <li><strong>Win %</strong> ${pct}</li>
    </ul>`;
  }catch(e){ console.warn(e); }
}
document.addEventListener('DOMContentLoaded', renderScoreboard);
