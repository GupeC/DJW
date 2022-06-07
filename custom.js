// Botão C - clear
document.querySelector(#clear).addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
    // no display (ou visor) limpando o número informado
})

//Botão -> backSpace

const backSpace = () =>{
    const backSpace = document.querySelector("#display").value.slice(0, -1);
    // declarando constante NUM e tirando -1 (número da direita para esquerda) em #display
    document.querySelector("#display".value = num);
    // igualando e atualizando NUM no #display (visor)
}
