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
var btn_banco = document.getElementsByClassName("item_bd")
var descricao_banco = document.getElementsByClassName("descricao_banco")

btn_banco[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,descricao_banco)})
btn_banco[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,descricao_banco)})

//Variáveis MER
var btn_mer = document.getElementsByClassName("item_mer")
var descricao_MER = document.getElementsByClassName("explicacao_mer")

btn_mer[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,descricao_MER)})
btn_mer[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,descricao_MER)})
btn_mer[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,descricao_MER)})
btn_mer[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,descricao_MER)})


//Lógica do Carrossel de exercícios
var imagens = [
    "/CSS/Images/bd/exercícios/ex1.png",
    "/CSS/Images/bd/exercícios/ex2.png",
    "/CSS/Images/bd/exercícios/ex3.png"
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

