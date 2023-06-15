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

//Variáveis introdução a tendecia central
var btn_medidas = document.getElementsByClassName("topico_mt")
var medidas_centrais = document.getElementsByClassName("tendeciaCentral")

btn_medidas[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,medidas_centrais)})
btn_medidas[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,medidas_centrais)})
btn_medidas[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,medidas_centrais)})
btn_medidas[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,medidas_centrais)})
btn_medidas[4].addEventListener("mouseover", function (){tornarDisplayFlex(4,medidas_centrais)})
btn_medidas[5].addEventListener("mouseover", function (){tornarDisplayFlex(5,medidas_centrais)})


//Variáveis medida dispersão
var btn_medidasDispersao = document.getElementsByClassName("topico_md")
var medidas_dispersão = document.getElementsByClassName("medidaDispersao")

btn_medidasDispersao[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,medidas_dispersão)})
btn_medidasDispersao[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,medidas_dispersão)})
btn_medidasDispersao[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,medidas_dispersão)})
btn_medidasDispersao[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,medidas_dispersão)})
btn_medidasDispersao[4].addEventListener("mouseover", function (){tornarDisplayFlex(4,medidas_dispersão)})

//Variáveis inferencia
var btn_inferencia = document.getElementsByClassName("topico_in")
var medidas_inferencia = document.getElementsByClassName("inferencia")

btn_inferencia[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,medidas_inferencia)})
btn_inferencia[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,medidas_inferencia)})
btn_inferencia[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,medidas_inferencia)})
btn_inferencia[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,medidas_inferencia)})


//Lógica do Carrossel de exercícios
var imagens = [
 "/CSS/Images/cd/ex1Classificacao.png",
 "/CSS/Images/cd/ex2Classificacao.png",
 "/CSS/Images/cd/codigo.png"

]
var indiceImagem = 0;
var imagemExercicio = document.getElementById("imageExercicio");

function trocarImagem (indice){
  imagemExercicio.src = imagens[indice]
}
function avancarImagem(){
  indiceImagem++;
if (indiceImagem >= imagens.length) {
  indiceImagem = 0; //Para o primeiro
}
trocarImagem(indiceImagem);
}
function voltarImagem(){
  indiceImagem--; //Retorna
if (indiceImagem < 0) {
  indiceImagem = imagens.length - 1; //Para o último
}
trocarImagem(indiceImagem);
}


//Variáveis calculo
var btn_calculo = document.getElementsByClassName("topico_calculo")
var medidas_calculo = document.getElementsByClassName("calculo")

btn_calculo[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,medidas_calculo)})
btn_calculo[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,medidas_calculo)})
btn_calculo[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,medidas_calculo)})
btn_calculo[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,medidas_calculo)})