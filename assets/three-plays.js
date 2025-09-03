
// Minimal "falling logos" effect on the homepage
(function(){
  const c = document.getElementById('confetti');
  if(!c) return;
  const ctx = c.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  function resize(){
    c.width = innerWidth * dpr;
    c.height = innerHeight * dpr;
  }
  resize(); addEventListener('resize', resize);

  const logos = [
    {src:'/assets/logos/tn.png'},
    {src:'/assets/logos/asu.png'},
    {src:'/assets/logos/msst.png'},
    {src:'/assets/logos/ucla.png'},
    {src:'/assets/logos/unlv.png'}
  ];
  const images = [];
  let loaded = 0;
  logos.forEach(l=>{
    const im = new Image();
    im.src = l.src;
    im.onload = ()=>{ loaded++; };
    images.push(im);
  });

  const flakes = [];
  function spawn(){
    if(images.length===0) return;
    const img = images[Math.floor(Math.random()*images.length)];
    const size = 24 + Math.random()*28;
    flakes.push({
      img, x: Math.random()*c.width, y: -50,
      vy: 0.5 + Math.random()*1.2, vx: (Math.random()-0.5)*0.5,
      s: size * dpr, r: Math.random()*Math.PI
    });
  }
  setInterval(spawn, 200);

  function tick(){
    ctx.clearRect(0,0,c.width,c.height);
    for(const f of flakes){
      f.y += f.vy * dpr;
      f.x += f.vx * dpr;
      f.r += 0.01;
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.r);
      if(f.img && f.img.complete) ctx.drawImage(f.img, -f.s/2, -f.s/2, f.s, f.s);
      ctx.restore();
    }
    // remove offscreen
    for(let i=flakes.length-1;i>=0;i--){
      if(flakes[i].y > c.height + 60) flakes.splice(i,1);
    }
    requestAnimationFrame(tick);
  }
  tick();
})();
