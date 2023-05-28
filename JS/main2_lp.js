
//Lógica section 1 : Introdução
//Array com os elementos
var divs_explicacao = document.querySelectorAll(".explicacao");
var ids_explicacoes = [ "explicacao_comunicacaoWeb", "explicacao_conceito", "explicacao_ide", "explicacao_github" ]

div_comunicacaoWeb = document.getElementById("comunicacao_web");
div_comunicacaoWeb.addEventListener("mouseover", function() {
    tornarDisplayFlex(ids_explicacoes[0]);
  });

div_conceitos = document.getElementById("conceitos");
div_conceitos.addEventListener("mouseover", function() {
    tornarDisplayFlex(ids_explicacoes[1]);
  });

div_conceitos_ide = document.getElementById("ide");
div_conceitos_ide.addEventListener("mouseover", function() {
    tornarDisplayFlex(ids_explicacoes[2]);
  });

div_github = document.getElementById("github");
div_github.addEventListener("mouseover", function() {
    tornarDisplayFlex(ids_explicacoes[3]);
  });



function tornarDisplayNone(){
    //Deixar todos os display invisíveis
    for(let i=0; i< divs_explicacao.length; i++){
        divs_explicacao[i].style.display = "none";
    }   
}
function tornarDisplayFlex(id_elemento){
    //Tornar todos invisíveis (display= "none")
    tornarDisplayNone()

    //Tornar 1 display flex
    let elemento = document.getElementById(id_elemento);
    elemento.style.display = "flex"
    console.log("display flex")

}

