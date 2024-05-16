let numero1 = document.querySelector("#numero1");
let btVerificar = document.querySelector("#btVerificar");



btVerificar.onclick = function(){
    let nr1 = Number(numero1.value);

    if(nr1 === 1){
        alert("PARAFUSO");
    }else if(nr1 === 2){
        alert("PORCA");
    }else if(nr1 === 3){
        alert("PREGO");
    }else{
        alert("DIVERSOS");
    }

}