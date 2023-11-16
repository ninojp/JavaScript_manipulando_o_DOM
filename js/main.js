"use strict";
// const robotron = document.querySelector("#robotron");
// robotron.addEventListener("click", (evento)=>{
//     console.log(evento);
// });
// function dizOi(nome){
//     console.log("Oi " + nome);
//     console.log("Bem-vindo ao Robotron 2000");
// };
// dizOi("Pedro");

//==================================================================
// const subtrairElem = document.querySelector("#subtrair");
// const somarElem = document.querySelector("#somar");
// const bracoElem = document.querySelector("#braco");

// somarElem.addEventListener("click", (envent)=>{
//     braco.value = parseInt(braco.value) +1;
// });
// subtrairElem.addEventListener("click", (envent)=>{
//     braco.value = parseInt(braco.value) -1;
// });
//==========================================================================

const subtrairElem = document.getElementById("subtrair");
const somarElem = document.getElementById("somar");
const bracoElem = document.getElementById("braco");

const controle = document.querySelectorAll(".controle-ajuste");
controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipularDados(evento.target.textContent);
    });
});

// somarElem.addEventListener("click", ()=>{ manipularDados("somarElem"); });
// subtrairElem.addEventListener("click", ()=>{ manipularDados("subtrairElem"); });

function manipularDados(operacao){
    if(operacao === "-"){
        braco.value = parseInt(braco.value) -1;
    }else{
        braco.value = parseInt(braco.value) +1;
    }
}