//Mudança de Janela
var disciplinas = document.getElementsByClassName("cc")
var paginas = ["01_linguagemProgramacao.html", "02_automacaoIndustrial.html", "03_redesComputadores.html", "04_bancoDados.html", "05_cienciaDados.html"]
disciplinas[0].addEventListener("click", function(){mudarJanela(0)} )
disciplinas[1].addEventListener("click", function(){mudarJanela(1)} )
disciplinas[2].addEventListener("click", function(){mudarJanela(2)} )
disciplinas[3].addEventListener("click", function(){mudarJanela(3)} )
disciplinas[4].addEventListener("click", function(){mudarJanela(4)} )





function mudarJanela (index){
    window.location.href = paginas[index]
}