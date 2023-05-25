//Leitor de eventos do mouse passando por cima da div Comunicação Web
div_comunicacaoWeb = document.getElementById("comunicacao_web");
addEventListener("mouseover", mudarConteudo);

//Função para mudar o conteúdo da div
function mudarConteudo(){
    //Pegar a div de explicacao comunicação web
    div_explicacao_comunicacaoWeb = document.getElementById("explicacao_comunicacaoWeb");
    //Pegar a div de conceito
    div_explicacao_conceito = document.getElementById("explicacao_conceito");

    //Tornar a div de C.W em display none
    div_explicacao_comunicacaoWeb.style.display = "none";

    //Tornar a div Conc em display flex
    div_explicacao_conceito.style.display = "flex"

    console.log('oi');

}
