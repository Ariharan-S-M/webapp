let result=document.getElementById("input");

let calc=(n)=>{
    result.value += n;
}


let result1=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Give a valid input");
    }
}

let clr=()=>{
    result.value=" ";
}

let del=()=>{
    result.value=result.value.slice(0,-1);
}