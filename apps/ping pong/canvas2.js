var canvas = document.getElementById('canvas2');
var score = document.getElementById('score');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var highscore = 0;

var c = canvas.getContext('2d');

var x = window.innerWidth/2;
var y = window.innerHeight - 100;

var cx = Math.random() * window.innerWidth;
var cy = Math.random() * (window.innerHeight - 300);
var cdx = 1;
var cdy = 1;

var mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x - 50;
    mouse.y = window.innerHeight - 100;
    c.clearRect(0, window.innerHeight - 101, window.innerWidth, window.innerHeight);
    slider();
});

function slider() {
    c.beginPath();
    c.rect(mouse.x, mouse.y, 100, 10);
    c.fillStyle = 'red';
    c.fill();
    c.stroke();
}

function randomCircle(){
    c.beginPath();
    c.arc(cx, cy, 10, 0, Math.PI * 2, true);
    c.fillStyle = 'grey';
    c.fill();
}

function moveCircle(){
    if(cx > window.innerWidth || cx < 0)
    {
        cdx = -cdx;
    }
    if((cy > window.innerHeight - 110 && (mouse.x - 5 < cx && mouse.x + 105 > cx)) || cy < 0)
    {
        cdx = 1.03 * cdx;
        cdy = 1.03 * cdy;
        cdy = -cdy;
    }
    else if(cy > window.innerHeight - 110){
        alert('Game Ended');
        cx = Math.random() * window.innerWidth;
        cy = Math.random() * (window.innerHeight - 300);
        cdx = 1;
        cdy = 1;
        multiplier= 0;
        highscore = scoreNum;
        randomCircle();

        fetch("canvas2.php", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            },
            "body": JSON.stringify(highscore)
        }).then(function(response){
            return response.text();
        }).then(function(data){
            console.log(data);
        })
        location.reload();
    }
    cx += cdx;
    cy += cdy;
}

var multiplier = 1;
var scoreNum;
var canvasCount = 0;
var canvasColor = [
    "rgb(84, 146, 228)",
    "#4720DF",
    "#6F0FF0",
    "#F30C7B",
    "#FF0016",
    "#131113"
];

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight - 101);
    scoreNum = Math.floor(1 * multiplier); 
    score.innerHTML = "Score: " + scoreNum;
    multiplier += 0.1;
    randomCircle();
    moveCircle();
    if(scoreNum - (300 * (canvasCount + 1)) > 1)
    {
        canvasCount++;
        document.getElementById("canvas2").style.backgroundColor = canvasColor[canvasCount];
    }
}

animate();
