let text1 = 'imageAdd';
var fin_text = '';
var pre_fin_text = '';
var num = 0;
var num_text;
var cont = 0;
var result = 0;

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

function show(name){
    var add = document.createElement('img');
    add.src = 'snake_ladder_img/dp1_s.png'
    document.getElementById(name).appendChild(add);
}

function hide(){
    const button1 = document.getElementById("roll");
    button1.disabled = false;
    const button2 = document.getElementById("confirm");
    button2.disabled = true;
    var remove = document.getElementById(pre_fin_text);
    remove.removeChild(remove.childNodes[1]);
    cont=cont-1;
}

function random_Num(max) {
    return Math.floor(Math.random() * max);
}

function move(){
    const button1 = document.getElementById("roll");
    button1.disabled = true;
    const button2 = document.getElementById("confirm");
    button2.disabled = false;
    if(cont == 0 || cont == 1)
    {
        cont=cont+1;
    pre_fin_text = fin_text;
    result = random_Num(5)+1;
    num = num + result;
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
        num_text = num.toString();
        document.getElementById("result").innerHTML = "You have rolled: "+result+"...and current block = "+num;
        fin_text = text1.concat(num_text);
        show(fin_text);
        }
    }
    else if(num == 25)
    {
        num_text = num.toString();
        fin_text = text1.concat(num_text);
        show(fin_text);
        document.getElementById("result").innerHTML = "You have rolled: "+result+"...You Won";
    }
    else{
        num=num-result;
        num_text = num.toString();
        fin_text = text1.concat(num_text);
        document.getElementById("result").innerHTML = "You have rolled: "+result+"....retry";
        
    }
}

