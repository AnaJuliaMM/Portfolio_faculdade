//Mudança de Janela
var disciplinas = document.getElementsByClassName("cc")
var paginas = ["linguagemProgramacao.html", "automacaoIndustrial.html"]
disciplinas[0].addEventListener("click", function(){mudarJanela(0)} )
disciplinas[1].addEventListener("click", function(){mudarJanela(1)} )


function mudarJanela (index){
    window.location.href = paginas[index]
}