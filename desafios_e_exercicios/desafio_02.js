"use strict";

const botao = document.querySelector("#calcular");
const h2Element = document.querySelector(".resultado");

botao.addEventListener("click", (evento)=>{
    console.log(evento);
    h2Element.innerText=`"O Botão foi clicado! "${evento} `;
})
