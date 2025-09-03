
// Falling logos (placeholder sources; replace with real PNGs in /assets/logos)
(function(){
  const c = document.getElementById('confetti'); if(!c) return;
  const ctx = c.getContext('2d'); const dpr = devicePixelRatio||1;
  function R(){ c.width=innerWidth*dpr; c.height=innerHeight*dpr; } R(); addEventListener('resize',R);
  const imgs = ['tn','asu','msst','ucla','unlv'].map(n=>{ const i=new Image(); i.src=`assets/logos/${n}.png`; return i; });
  const flakes=[]; setInterval(()=>{ const i=imgs[Math.floor(Math.random()*imgs.length)];
    flakes.push({i,x:Math.random()*c.width,y:-40,s:(24+Math.random()*28)*dpr,vy:(0.4+Math.random()*1.2)*dpr,vx:(Math.random()-0.5)*0.5*dpr,r:Math.random()*Math.PI}); }, 180);
  function tick(){ ctx.clearRect(0,0,c.width,c.height);
    for(const f of flakes){ f.y+=f.vy; f.x+=f.vx; f.r+=0.01; ctx.save(); ctx.translate(f.x,f.y); ctx.rotate(f.r); if(f.i.complete) ctx.drawImage(f.i,-f.s/2,-f.s/2,f.s,f.s); ctx.restore(); }
    for(let k=flakes.length-1;k>=0;k--) if(flakes[k].y>c.height+60) flakes.splice(k,1);
    requestAnimationFrame(tick);
  } tick();
})();
