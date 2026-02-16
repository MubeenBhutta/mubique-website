// Ultra professional background animation with moving lines and dots
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 60;

// Particle constructor
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 2 + Math.random() * 3;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.color = `rgba(255,255,255,${0.3 + Math.random() * 0.7})`;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
}

// Initialize particles
for(let i=0;i<particleCount;i++){
  particles.push(new Particle());
}

// Draw lines between close particles
function drawLines() {
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let distance = Math.sqrt(dx*dx + dy*dy);
      if(distance < 120){
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${1-distance/120})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  drawLines();
  requestAnimationFrame(animate);
}
animate();

// Adjust canvas on resize
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
