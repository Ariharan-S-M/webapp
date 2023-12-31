var canvas = document.getElementById('canvas1');

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 20;

var c = canvas.getContext('2d');
var image = document.getElementById('image1');
var audio = document.getElementById("myAudio1");
var audio2 = document.getElementById("myAudio2");

var x = window.innerWidth/2 - 10;
var y =window.innerHeight - 100;

var a;
var b;

var score = 0;
var startgame = false;

function start(){
    startgame = true;
    document.getElementById("rules").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function Obstacle(ox, oy, dx, dy, oradius){
    this.ox = ox;
    this.oy = oy;
    this.dx = dx;
    this.dy = dy;
    this.oradius = oradius;
    this.draw = () => {
        c.beginPath();
        c.arc(this.ox, this.oy, this.oradius, 0, Math.PI*2, true);
        c.strokeStyle = 'black';
        c.fillStyle = 'white';
        c.fill();
        c.stroke();
    }
    this.update = () => {
        this.dy = dy;
        if(score < 400)
        this.oy += this.dy;
        if(score >= 400 && score < 800)
        this.oy += (this.dy * 0.3) + this.dy
        if(score >= 800 && score < 1200)
        this.oy += (this.dy * 0.6) + this.dy
        if(score >= 1200 && score < 1600)
        this.oy += (this.dy * 1) + this.dy
        this.draw();
        if(this.oy > bullety && (this.ox < bulletx+10 && this.ox > bulletx-10)){
            c.clearRect(this.ox - this.oradius, this.oy - this.oradius, this.oradius * 3, this.oradius * 3);
            this.ox = Math.random() * window.innerWidth;
            this.oy = Math.random() * window.innerHeight/7;
            score += 100;
            document.getElementById("score").innerHTML = "Score: " + score;
        }
        if(this.oy > window.innerHeight * 0.8){
            alert("Game Over");
            this.oy = 0;
            location.reload();
        }
    }
}

var obstacleArray = [];
for(var i=0; i<2; i++){
    var oradius = 4;
    var ox = Math.random() * window.innerWidth;
    var oy = Math.random() * window.innerHeight/7;
    var dx = 3;
    var dy = 0.3;
    obstacleArray.push(new Obstacle(ox, oy, dx, dy, oradius));
}

function moveImage(){
    c.clearRect(a, b, 200, 200);
    c.beginPath();
    c.drawImage(image, x-90, y-90);
    a=x-90;
    b=y-90;
}

window.addEventListener('keydown', (event) => {
    if(event.key === 'd')
    {
        x+=17;
    }
    if(event.key === 'a')
    {
        x-=17;
    }
    if(startgame == true)
    audio2.play();
})

var bulletspeed = 2;
var bulletx = x;
var bullety = y;
var bulletradius = 5;
var fire = false;

window.addEventListener('click', () => {
    if(bullety < 30 || bullety == window.innerHeight - 100){
        bullety = window.innerHeight - 100;
        bulletx = x;
    }
    if(bullety == window.innerHeight - 100)
    {
        if(startgame == true)
        audio.play();
        audio.currentTime = 0;
    }
    fire = true;
})

function createBullet(){
    c.arc(bulletx, bullety-100, bulletradius, 0, Math.PI * 2, true);
    c.strokeStyle = 'red';
    c.stroke();
}

function moveBullet(){
    c.clearRect(bulletx-(bulletradius+2), (bullety-100) + bulletradius, bulletradius * 2 + 5, bulletradius * 2 + 5);
    bullety-=bulletspeed;
}

function animate(){
    requestAnimationFrame(animate);
    if(startgame == true){
    for(var i=0; i<obstacleArray.length; i++)
    {
        obstacleArray[i].update();
    }
    c.clearRect(0, 0, window.innerWidth, 30);
    moveImage();
    if(fire == true)
    {
        createBullet();
        moveBullet();
    }
}
}

animate();