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



//Variáveis Redes de computadores
var btn_protocolo = document.getElementsByClassName("protocolos")
var explicacao_camada_osi = document.getElementsByClassName("explicacao_camda_OSI")

btn_protocolo[1].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_camada_osi)})
btn_protocolo[2].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_camada_osi)})



