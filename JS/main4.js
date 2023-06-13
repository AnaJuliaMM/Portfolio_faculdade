//Funções
function tornarDisplayNone(elementos){
    //Deixar todos os display invisíveis
    for(let i=0; i< elementos.length; i++){
      elementos[i].style.display = "none";
      console.log("display none")
    }  
}
function tornarDisplayFlex(indice, elementos){
  //Manda para o ser none todo o array
  tornarDisplayNone(elementos)
  
  //Tornar display flex
  elementos[indice].style.display = "flex"
  console.log("display flex")
}



//Variáveis de Introducao Redes de computadores
var btn_introducao = document.getElementsByClassName("item_redes")
var explicacao_introducao = document.getElementsByClassName("body_introducao")

btn_introducao[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_introducao)})
btn_introducao[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_introducao)})


//Variáveis de Transmissão
var btn_transmissao = document.getElementsByClassName("item_transmissao")
var explicacao_transmissao = document.getElementsByClassName("body_transmissao")

btn_transmissao[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_transmissao)})
btn_transmissao[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_transmissao)})