div_comunicacaoWeb = document.getElementById("comunicacao_web");
div_comunicacaoWeb.addEventListener("mouseover", mudarConteudo);
div_conceitos = document.getElementById("conceitos");
div_conceitos.addEventListener("mouseover", mudarConteudo_conceitos);



//Função para mudar o conteúdo da div
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