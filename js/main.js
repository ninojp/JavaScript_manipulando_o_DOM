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

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatisticas]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipularDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    });
});

// somarElem.addEventListener("click", ()=>{ manipularDados("somarElem"); });
// subtrairElem.addEventListener("click", ()=>{ manipularDados("subtrairElem"); });
function manipularDados(operacao, controle){
    const pecaElem = controle.querySelector("[data-contador]");
    if(operacao === "-"){
        pecaElem.value = parseInt(pecaElem.value) -1;
    }else{
        pecaElem.value = parseInt(pecaElem.value) +1;
    }
};

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento)=>{
        elemento.textContent =  parseInt(elemento.textContent) +pecas[peca][elemento.dataset.estatisticas]
    })
};

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }