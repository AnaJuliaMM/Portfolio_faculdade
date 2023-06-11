//  Funções para troca de cartões
function tornarDisplayNone(elementos){
    //Deixar todos os display invisíveis
    for(let i=0; i< elementos.length; i++){
      elementos[i].style.display = "none";
      console.log("display none")
    }  
}
function tornarDisplayFlex(indice, elementos){
  //Recebe o índice do elemento para tornar flex
  tornarDisplayNone(elementos)
  //Manda para o ser none todo o array
  elementos[indice].style.display = "flex"
  console.log("display flex")
}

/*Variáveis da seção de conceitos introdutórios */
var conceitos_introdutorios = document.getElementsByClassName("assuntos")
var descricao_conceitos_introdutorios = document.getElementsByClassName("descricao")

conceitos_introdutorios[0].addEventListener("mouseover", function (){tornarDisplayFlex(1,descricao_conceitos_introdutorios)})
conceitos_introdutorios[1].addEventListener("mouseover", function (){tornarDisplayFlex(2,descricao_conceitos_introdutorios)})
conceitos_introdutorios[2].addEventListener("mouseover", function (){tornarDisplayFlex(3,descricao_conceitos_introdutorios)})

/*Variáveis da seção porta lógica */
var descricao_porta_logica = document.getElementsByClassName("descricao_portas_logicas")

conceitos_introdutorios[3].addEventListener("mouseover", function (){tornarDisplayFlex(0,descricao_porta_logica)})
conceitos_introdutorios[4].addEventListener("mouseover", function (){tornarDisplayFlex(1,descricao_porta_logica)})
conceitos_introdutorios[5].addEventListener("mouseover", function (){tornarDisplayFlex(2,descricao_porta_logica)})

/*Variáveis da seção porta lógica */
var descricao_microcontroladores = document.getElementsByClassName("descricao_mc_assuntos")
conceitos_introdutorios[6].addEventListener("mouseover", function (){tornarDisplayFlex(0,descricao_microcontroladores)})
conceitos_introdutorios[7].addEventListener("mouseover", function (){tornarDisplayFlex(1,descricao_microcontroladores)})
conceitos_introdutorios[8].addEventListener("mouseover", function (){tornarDisplayFlex(2,descricao_microcontroladores)})

/*Seção classificação robôs */
classificacao_robos = document.getElementsByClassName("assuntos_robotica")
explicacao_classificacao_robo = document.getElementsByClassName("categorias_classificacao")

classificacao_robos[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_classificacao_robo)})
classificacao_robos[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_classificacao_robo)})
classificacao_robos[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,explicacao_classificacao_robo)})
classificacao_robos[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,explicacao_classificacao_robo)})
classificacao_robos[4].addEventListener("mouseover", function (){tornarDisplayFlex(4,explicacao_classificacao_robo)})


