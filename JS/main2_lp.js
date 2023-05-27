//Lógica section 1 : Introdução
var divs_explicacao = document.getElementsByClassName("explicacao");

var id_explicacao_cW = "explicacao_comunicacaoWeb";
var id_explicacao_c = "explicacao_conceito";
var id_explicacao_ide = "explicacao_ide";

div_comunicacaoWeb = document.getElementById("comunicacao_web");
div_comunicacaoWeb.addEventListener("mouseover", function() {
    tornarDisplayFlex(id_explicacao_cW);
  });

div_conceitos = document.getElementById("conceitos");
div_conceitos.addEventListener("mouseover", function() {
    tornarDisplayFlex(id_explicacao_c);
  });

div_conceitos = document.getElementById("ide");
div_conceitos.addEventListener("mouseover", function() {
    tornarDisplayFlex(id_explicacao_ide);
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


