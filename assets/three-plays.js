
(function(){
  const c=document.getElementById('confetti'); if(!c) return;
  const ctx=c.getContext('2d'); const dpr=devicePixelRatio||1;
  function R(){c.width=innerWidth*dpr;c.height=innerHeight*dpr} R(); addEventListener('resize',R);
  const names=['tn','asu','msst','ucla','unlv']; const imgs=names.map(n=>{const i=new Image(); i.src='assets/logos/'+n+'.png'; return i;});
  const flakes=[]; setInterval(()=>{const i=imgs[Math.floor(Math.random()*imgs.length)];const s=(24+Math.random()*28)*dpr;
    flakes.push({i,x:Math.random()*c.width,y:-50,s,vy:(.5+Math.random()*1.1)*dpr,vx:(Math.random()-.5)*.5*dpr,r:Math.random()*Math.PI});},180);
  (function loop(){ctx.clearRect(0,0,c.width,c.height);for(const f of flakes){f.y+=f.vy;f.x+=f.vx;f.r+=.01;ctx.save();ctx.translate(f.x,f.y);ctx.rotate(f.r);
    if(f.i.complete) ctx.drawImage(f.i,-f.s/2,-f.s/2,f.s,f.s);ctx.restore();}for(let i=flakes.length-1;i>=0;i--) if(flakes[i].y>c.height+60) flakes.splice(i,1);
    requestAnimationFrame(loop);})();
})();
