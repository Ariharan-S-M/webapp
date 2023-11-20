let count=0;
let n=0;
let pla=0;
let array = ["demo", "demo1", "demo2", "demo3", "demo4", "demo5", "demo6", "demo7", "demo8"];
let pl = ["ss", "ss1", "ss2", "ss3", "ss4", "ss5", "ss6", "ss7"];
let xo=[2, 2, 2, 2, 2, 2, 2, 2, 2];
function tac(q){
    if(n%2==0){
    document.getElementById(array[q]).innerHTML = "x";
    document.getElementById(array[q]).disabled = true;
    xo[q]=1;
    document.getElementById(pl[pla]).innerHTML = "Player 2's Turn";
    pla++;
    count++;
    }
    else{
        document.getElementById(array[q]).innerHTML = "o";
        document.getElementById(array[q]).disabled = true;
        xo[q]=0;
        document.getElementById(pl[pla]).innerHTML = "Player 1's Turn";
        pla++;
        count++;
    }
    n++;
    
    if((xo[0] == 1 && xo[1] == 1 && xo[2] == 1) || (xo[3] == 1 && xo[4] == 1 && xo[5] == 1) || (xo[6] == 1 && xo[7] == 1 && xo[8] == 1) || (xo[0] == 1 && xo[4] == 1 && xo[8] == 1))
    {
        document.getElementById("aa").innerHTML = "x is the winner";
        for(let i=0; i<9; i++)
        {
            document.getElementById(array[i]).disabled = true;
        }
    }
    if((xo[0] == 1 && xo[3] == 1 && xo[6] == 1) || (xo[1] == 1 && xo[4] == 1 && xo[7] == 1) || (xo[2] == 1 && xo[5] == 1 && xo[8] == 1) || (xo[2] == 1 && xo[4] == 1 && xo[6] == 1))
    {
        document.getElementById("aa").innerHTML = "x is the winner";
        for(let i=0; i<9; i++)
        {
            document.getElementById(array[i]).disabled = true;
        }
    }
    if((xo[0] == 0 && xo[1] == 0 && xo[2] == 0) || (xo[3] == 0 && xo[4] == 0 && xo[5] == 0) || (xo[6] == 0 && xo[7] == 0 && xo[8] == 0) || (xo[0] == 0 && xo[4] == 0 && xo[8] == 0))
    {
        document.getElementById("aa").innerHTML = "o is the winner";
        for(let i=0; i<9; i++)
        {
            document.getElementById(array[i]).disabled = true;
        }
    }
    if((xo[0] == 0 && xo[3] == 0 && xo[6] == 0) || (xo[1] == 0 && xo[4] == 0 && xo[7] == 0) || (xo[2] == 0 && xo[5] == 0 && xo[8] == 0) || (xo[2] == 0 && xo[4] == 0 && xo[6] == 0))
    {
        document.getElementById("aa").innerHTML = "o is the winner";
        for(let i=0; i<9; i++)
        {
            document.getElementById(array[i]).disabled = true;
        }
    }
    if(count == 8)
    {
        document.getElementById("aaa").innerHTML = "draw!";
    }
}
