//Mudança de Janela
var disciplinas = document.getElementsByClassName("cc")
var paginas = ["01_linguagemProgramacao.html", "02_automacaoIndustrial.html", "03_redesComputadores.html"]
disciplinas[0].addEventListener("click", function(){mudarJanela(0)} )
disciplinas[1].addEventListener("click", function(){mudarJanela(1)} )
disciplinas[2].addEventListener("click", function(){mudarJanela(2)} )



function mudarJanela (index){
    window.location.href = paginas[index]
}