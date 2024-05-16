let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btVer = document.querySelector("#btVer");
let resposta = document.querySelector("#resp");

function subtrair(){
    let nr1 = Number (numero1.value);
    let nr2 = Number (numero2.value);
    let resp = nr1 * nr2;
    resposta.textContent = resp;
}

btVer.onclick = function(){
    subtrair();
}