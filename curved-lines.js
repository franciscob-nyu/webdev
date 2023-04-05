const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let t = 0;

function animate() {
  t += 0.05;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 10; i++) {
    const x1 = Math.sin(t + i * 2) * canvas.width / 2 + canvas.width / 2;
    const y1 = Math.cos(t + i * 3) * canvas.height / 2 + canvas.height / 2;
    const x2 = Math.sin(t + i * 4) * canvas.width / 2 + canvas.width / 2;
    const y2 = Math.cos(t + i * 5) * canvas.height / 2 + canvas.height / 2;
    const x3 = Math.sin(t + i * 6) * canvas.width / 2 + canvas.width / 2;
    const y3 = Math.cos(t + i * 7) * canvas.height / 2 + canvas.height / 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(x2, y2, x3, y3, x1, y1);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "turquoise";
    ctx.stroke();
  }
  requestAnimationFrame(animate);
}

animate();