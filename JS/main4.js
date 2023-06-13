//Funções
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



//Variáveis de Introducao Redes de computadores
var btn_introducao = document.getElementsByClassName("item_redes")
var explicacao_introducao = document.getElementsByClassName("body_introducao")

btn_introducao[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_introducao)})
btn_introducao[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_introducao)})

//Variáveis de equipamentos
var btn_equipamentos= document.getElementsByClassName("item_equipamento")
var explicacao_equipamentos = document.getElementsByClassName("descricao_equipamentos")

btn_equipamentos[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_equipamentos)})
btn_equipamentos[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_equipamentos)})
btn_equipamentos[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,explicacao_equipamentos)})

//Variáveis de Transmissão
var btn_transmissao = document.getElementsByClassName("item_transmissao")
var explicacao_transmissao = document.getElementsByClassName("body_transmissao")

btn_transmissao[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_transmissao)})
btn_transmissao[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_transmissao)})

//Variáveis do IP
var btn_ip = document.getElementsByClassName("item_ip")
var explicacao_ip = document.getElementsByClassName("descricao_ip")

btn_ip[0].addEventListener("mouseover", function (){tornarDisplayFlex(0,explicacao_ip)})
btn_ip[1].addEventListener("mouseover", function (){tornarDisplayFlex(1,explicacao_ip)})
btn_ip[2].addEventListener("mouseover", function (){tornarDisplayFlex(2,explicacao_ip)})