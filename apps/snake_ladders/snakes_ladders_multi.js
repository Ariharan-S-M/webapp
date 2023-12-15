let player1 = 'imageAdd';
let player2 = 'imageAddm';
var numm1 = 0;
var num_t1 = "";
var finale1 = "";
var pre_finale1 = "ar1";
var numm2 = 0;
var num_t2 = "";
var finale2 = "";
var pre_finale2 = "ar1";

var multi_count1 = 0;
var multi_count2 = 0;

function random_Num(max) {
    return Math.floor(Math.random() * max);
}

function block1()
{
    
    document.getElementById(pre_finale1).style.display = 'none';
    result = random_Num(5)+1;
    numm1 = numm1 + result;
    if(numm1 < 25)
    {
        if(numm1 == 5)
        {
            numm1=15;
        }
        if(numm1 == 10)
        {
            numm1=3;
        }
        if(numm1 == 12)
        {
            numm1=21;
        }
        if(numm1 == 17)
        {
            numm1=13;
        }
        if(numm1 == 24)
        {
            numm1=13;
        }
        document.getElementById("result").innerHTML = "You have rolled: "+result+"...and current block = "+numm1;
        numm_t1 = numm1.toString();
        finale1 = player1 + numm_t1;
        document.getElementById(finale1).style.display = 'block';
    }
    else if(numm1 == 25)
    {
        document.getElementById("result").innerHTML = "You have rolled: "+result+"...You Won";
        finale1 = player1.concat(numm1);
        document.getElementById(finale1).style.display = 'block';
    }
    else{
        numm1=numm1-result;
        document.getElementById("result").innerHTML = "You have rolled: "+result+"...You Won";
    }
    pre_finale1=finale1;
    const button1 = document.getElementById("roll1");
    button1.disabled = true;
    const button2 = document.getElementById("roll2");
    button2.disabled = false;
}

function block2()
{
    
    document.getElementById(pre_finale2).style.display = 'none';
        result = random_Num(5)+1;
        numm2 = numm2 + result;
    if(numm2 < 25)
    {
        if(numm2 == 5)
        {
            numm2=15;
        }
        if(numm2 == 10)
        {
            numm2=3;
        }
        if(numm2 == 12)
        {
            numm2=21;
        }
        if(numm2 == 17)
        {
            numm2=13;
        }
        if(numm2 == 24)
        {
            numm2=13;
        }
        document.getElementById("result").innerHTML = "You have rolled: "+result+"...and current block = "+numm2;
        numm_t2 = numm2.toString();
        finale2 = player2 + numm_t2;
        document.getElementById(finale2).style.display = 'block';
    }
    else if(num == 25)
    {
        document.getElementById("result").innerHTML = "You have rolled: "+result+"...You Won";
        finale2 = player2.concat(numm2);
        document.getElementById(finale2).style.display = 'block';
    }
    else{
        numm2=numm2-result;
        document.getElementById("result").innerHTML = "You have rolled: "+result+"...You Won";
    }
    pre_finale2=finale2;
    const button1 = document.getElementById("roll2");
    button1.disabled = true;
    const button2 = document.getElementById("roll1");
    button2.disabled = false;
}