//  Funções para troca de cartões
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

/*Variáveis da seção microcontrolados */
var descricao_microcontroladores = document.getElementsByClassName("descricao_mc_assuntos")
conceitos_introdutorios[6].addEventListener("mouseover", function (){tornarDisplayFlex(0,descricao_microcontroladores)})
conceitos_introdutorios[7].addEventListener("mouseover", function (){tornarDisplayFlex(1,descricao_microcontroladores)})
conceitos_introdutorios[8].addEventListener("mouseover", function (){tornarDisplayFlex(2,descricao_microcontroladores)})
conceitos_introdutorios[9].addEventListener("mouseover", function (){tornarDisplayFlex(3,descricao_microcontroladores)})


/*Variáveis dos projetos de microcontroladores */
var projeto_arduino = document.getElementsByClassName("projetos_arduino")
var explicacao_projetos_arduino = document.getElementsByClassName("conteiner_projeto_descricao_arduino")

projeto_arduino[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_projetos_arduino)})
projeto_arduino[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_projetos_arduino)})
projeto_arduino[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,explicacao_projetos_arduino)})
projeto_arduino[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,explicacao_projetos_arduino)})
projeto_arduino[4].addEventListener("mouseover", function (){tornarDisplayFlex(4,explicacao_projetos_arduino)})

/*Seção projeto arduino e sensor ultrassônico*/
var arduino_sensor_ultra = document.getElementsByClassName("conteiner_projeto_descricao_arduino_sns")
projeto_arduino[5].addEventListener("mouseover", function (){tornarDisplayFlex(0,arduino_sensor_ultra)})
projeto_arduino[6].addEventListener("mouseover", function (){tornarDisplayFlex(1,arduino_sensor_ultra)})
projeto_arduino[7].addEventListener("mouseover", function (){tornarDisplayFlex(2,arduino_sensor_ultra)})

/*Seção classificação robôs */
var classificacao_robos = document.getElementsByClassName("assuntos_robotica")
var explicacao_classificacao_robo = document.getElementsByClassName("categorias_classificacao")

classificacao_robos[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_classificacao_robo)})
classificacao_robos[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_classificacao_robo)})
classificacao_robos[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,explicacao_classificacao_robo)})
classificacao_robos[3].addEventListener("mouseover", function (){tornarDisplayFlex(3,explicacao_classificacao_robo)})
classificacao_robos[4].addEventListener("mouseover", function (){tornarDisplayFlex(4,explicacao_classificacao_robo)})


/*Seção movimentação de juntas */
var  movimentacao_robotica = document.getElementsByClassName("movimentacao_robotica")
conceitos_introdutorios[10].addEventListener("mouseover", function (){tornarDisplayFlex(0,movimentacao_robotica)})
conceitos_introdutorios[11].addEventListener("mouseover", function (){tornarDisplayFlex(1,movimentacao_robotica)})
conceitos_introdutorios[12].addEventListener("mouseover", function (){tornarDisplayFlex(2,movimentacao_robotica)})
conceitos_introdutorios[13].addEventListener("mouseover", function (){tornarDisplayFlex(3,movimentacao_robotica)})
conceitos_introdutorios[14].addEventListener("mouseover", function (){tornarDisplayFlex(4,movimentacao_robotica)})
