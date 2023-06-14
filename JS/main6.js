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

//Variáveis introdução a bando de dados
var btn_medidas = document.getElementsByClassName("topico_mt")
var medidas_centrais = document.getElementsByClassName("explicacao")

btn_medidas[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,medidas_centrais)})
btn_medidas[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,medidas_centrais)})
btn_medidas[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,medidas_centrais)})
btn_medidas[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,medidas_centrais)})
btn_medidas[4].addEventListener("mouseover", function (){tornarDisplayFlex(4,medidas_centrais)})
btn_medidas[5].addEventListener("mouseover", function (){tornarDisplayFlex(5,medidas_centrais)})