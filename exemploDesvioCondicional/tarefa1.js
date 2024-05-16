let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btsVerificar = document.querySelector("#btVerificar");
let resposta = document.querySelector("#resp");


    btVerificar.onclick = function(){
    let nr1 = Number(numero1.value);
    let nr2 = Number(numero2.value);
    let resp = nr1 - nr2;
    
    resposta.textContent = + resp.toFixed(2);
}