let player1 = 'imageAdd';
let player2 = 'imageAddm';

var num1 = 0;
var num2 = 0;

var count = 0;

function random_Num(max) {
    return Math.floor(Math.random() * max);
}

function check(num){
    if(num < 25)
    {
        if(num == 5)
        {
            num=15;
        }
        if(num == 10)
        {
            num=3;
        }
        if(num == 12)
        {
            num=21;
        }
        if(num == 17)
        {
            num=13;
        }
        if(num == 24)
        {
            num=13;
        }
    }
    return num;
}

function block1()
{
    if(count != 1)
    document.getElementById(player1 + num1).style.display = 'none';
    result = random_Num(7);
    if(result == 0)
    result = 1;
    num1 = num1 + result;
    num1 = check(num1);
    if(num1 > 25)
    {
        document.getElementById("result1").innerHTML = "You have rolled: " + result + "<br>Current block: " + (num1 - result) + "<br>Retry";
        num1 = num1 - result;
    }
    if(num1 < 25)
    {
        document.getElementById("result1").innerHTML = "You have rolled: " + result + "<br>Current block: " + num1;
    }
    if(num1 == 25)
    {
        document.getElementById("result1").innerHTML = "You have rolled: " + result + "<br>Current block: " + num1 + "<br>Player 2 Wins";
    }
    if(document.getElementById(player1 + num1).style.display != 'block')
    document.getElementById(player1 + num1).style.display = 'block';
    if(num1 != 25)
    document.getElementById("roll2").disabled = false;
    document.getElementById("roll1").disabled = true;
}

function block2()
{
    if(count != 0)
    document.getElementById(player2 + num2).style.display = 'none';
    result = random_Num(7);
    if(result == 0)
    result = 1;
    num2 = num2 + result;
    num2 = check(num2);
    if(num2 > 25)
    {
        document.getElementById("result2").innerHTML = "You have rolled: " + result + "<br>Current block: " + (num2 - result) + "<br>Retry";
        num2 = num2 - result;
    }
    if(num2 < 25)
    {
        document.getElementById("result2").innerHTML = "You have rolled: " + result + "<br>Current block: " + num2;
    }
    if(num2 == 25)
    {
        document.getElementById("result2").innerHTML = "You have rolled: " + result + "<br>Current block: " + num2 + "<br>Player 1 Wins";
    }
    if(document.getElementById(player2 + num2).style.display != 'block')
    document.getElementById(player2 + num2).style.display = 'block';
    if(num2 != 25)
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
    count++;
}