var canvas = document.getElementById('canvas1');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*c.fillStyle = 'white';
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 200, 100, 100);

c.beginPath();
c.moveTo(50, 300);
c.lineTo(100, 100);
c.lineTo(400, 400);
c.lineTo(120, 130);
c.strokeStyle = 'red';
c.stroke();

for(var j=0; j<10; j++){
for(var i=0; i<3; i++)
{
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, true);
    c.strokeStyle = 'black';
    c.stroke();
}
}
*/

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 200;
let mouseDistance = 50;
var colorArray = [
    '#F4110B',
    '#BC2ED1',
    '#F4700B',
    '#1760E8',
    '#E3DEFE'
];

window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

window.addEventListener('resize', 
    function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

function Circle(x, y, dx, dy, radius)
{
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.radius_copy = radius;
    this.color = colorArray[Math.floor(Math.random() * (colorArray.length-0.1))];
    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        c.strokeStyle = 'black';
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }
    this.update = () =>{
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
        {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
        {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        if((mouse.x - this.x) < mouseDistance && (mouse.x - this.x) > -mouseDistance
            && (mouse.y - this.y) < mouseDistance && (mouse.y - this.y) > -mouseDistance)
        {
            if(this.radius < maxRadius)
            this.radius += 0.3;
        }
        else{
            if(this.radius > this.radius_copy)
            this.radius -= 0.3;
        }

        this.draw();
    }
}

var circleArray = [];
for(var i=0; i<150; i++)
{
    var radius = Math.random() * 20;
    var x = Math.random() * (window.innerWidth - radius*2) + radius;
    var y = Math.random() * (window.innerHeight - radius*2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i=0; i<circleArray.length; i++)
    {
        circleArray[i].update();
    }
}

animate();