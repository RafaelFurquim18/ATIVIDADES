let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let numero4 = document.querySelector("#numero4");
let btsoma = document.querySelector("#btSoma");
let resposta = document.querySelector("#resp");


btVerificar.onclick = function(){
    let nr1 = Number(numero1.value);
    let nr2 = Number(numero2.value);
    let nr3 = Number(numero3.value);
    let nr4 = Number(numero4.value);

    let menor = nr1;

    if(nr2 < menor){
        menor = nr2;
    }

    if(nr3 < menor){
        menor = nr3;
    }

    if(nr4 < menor){
        menor = nr4;
    }
    
    resposta.textContent = + menor;
}