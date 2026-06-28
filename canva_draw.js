/* base ascess of html elem*/
const can = document.getElementById("can");
const ctx = can.getContext("2d");
const rect = can.getBoundingClientRect();





/*getting theme color from css*/
let theme_color = getComputedStyle(document.documentElement).getPropertyValue('--clr');



can.width = window.innerWidth;
can.height = window.innerHeight;




const particle = [];
let x, hue = 1;
let y;
/*particle class instance*/
class Part {
  constructor() {
    this.x = x;
    this.y = y;

    this.size = 0; // start from 0
    this.maxSize = Math.random() * 5 + 2; // random final size

    this.growing = true;

    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;

    this.color = theme_color;
  }

  draw() {
    ctx.shadowColor = theme_color;
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.growing) {
      this.size += 0.08;

      if (this.size >= this.maxSize) {
        this.growing = false;
      }
    } else {
      this.size -= 0.03;
    }
  }
}


/*creating partical on clicking*/
can.addEventListener("click", (event) => {
  const rect = can.getBoundingClientRect();
  x = event.clientX - rect.left;
  y = event.clientY - rect.top;
  // hue=Math.random() * 360;
  for (let i = 0; i < 100; i++) {
    particle.push(new Part());
  }
});




/*for rendom spottinh initially*/
function rendom_spotting() {
  x = Math.floor(Math.random() * (window.innerWidth)) - rect.left;
  y = Math.floor(Math.random() * (window.innerHeight)) - rect.top;
  particle.push(new Part());
}
setTimeout(rendom_spotting, 10);


/*appering particle*/
function appear() {
  for (let i = 0; i < particle.length; i++) {
    particle[i].draw();
    particle[i].update();
    if (particle[i].size <= 0) {
      particle.splice(i, 1);
      i--;

      if (particle.length < 60) {
        for (let ok = 0; ok < 5; ok++) {
          x = Math.floor(Math.random() * window.innerWidth);
          y = Math.floor(Math.random() * window.innerHeight);
          particle.push(new Part());
        }
      }
    }
  }
}

/*animated each frame by clearing previous one*/
function animate() {
  ctx.clearRect(0, 0, can.width, can.height);
  appear();
  hue++;
  requestAnimationFrame(animate);
}
animate();

