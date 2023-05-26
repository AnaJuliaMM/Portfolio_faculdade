var divs_explicacao = document.getElementsByClassName("div_explicacao");

var id_explicacao_cW = "explicacao_comunicacaoWeb";
var id_explicacao_c = "explicacao_conceito";

div_comunicacaoWeb = document.getElementById("comunicacao_web");
div_comunicacaoWeb.addEventListener("mouseover", function() {
    tornarDisplayFlex(id_explicacao_cW);
  });

div_conceitos = document.getElementById("conceitos");
div_conceitos.addEventListener("mouseover", function() {
    tornarDisplayFlex(id_explicacao_c);
  });



function tornarDisplayNone(){
    //Itinerar um array deixando todos ele none
    for(let i=0; i< divs_explicacao.length; i++){
        divs_explicacao[i].style.display = "none";
        console.log("display none")
    }
    
}
function tornarDisplayFlex(id_elemento){
    //Tornar todos none
    tornarDisplayNone()
    //Tornar 1 display flex
    let elemento = document.getElementById(id_elemento);
    elemento.style.display = "flex"
    console.log("display flex")

}



//Função para mudar o conteúdo da div

//Tentando uma lógica nova

//1° Função que deixa todos os display "none"
//Função que deixa apenas a div do id passado flex

//Array com todas as div de explicação


/*
function mudarConteudo(){
    //Pegar a div de explicacao comunicação web
    div_explicacao_comunicacaoWeb = document.getElementById("explicacao_comunicacaoWeb");
    //Pegar a div de conceito
    div_explicacao_conceito = document.getElementById("explicacao_conceito");

    //Tornar a div de C.W em display none
    div_explicacao_comunicacaoWeb.style.display = "flex";

    //Tornar a div Conc em display flex
    div_explicacao_conceito.style.display = "none"

    console.log('oi');

}

function mudarConteudo_conceitos(){
    //Pegar a div de explicacao comunicação web
    div_explicacao_comunicacaoWeb = document.getElementById("explicacao_comunicacaoWeb");
    //Pegar a div de conceito
    div_explicacao_conceito = document.getElementById("explicacao_conceito");

    //Tornar a div de C.W em display none
    div_explicacao_comunicacaoWeb.style.display = "none";

    //Tornar a div Conc em display flex
    div_explicacao_conceito.style.display = "flex"

}


*/