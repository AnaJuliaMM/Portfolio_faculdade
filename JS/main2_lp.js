
//Lógica section 1 : Introdução
//Array com os elementos
var class_introducao = ".explicacao";


var ids_explicacoes = [ "explicacao_comunicacaoWeb", "explicacao_conceito", "explicacao_ide", "explicacao_github" ]

div_comunicacaoWeb = document.getElementById("comunicacao_web");
div_comunicacaoWeb.addEventListener("mouseover", function() {
    tornarDisplayFlex(ids_explicacoes[0]);
  });

div_conceitos = document.getElementById("conceitos");
div_conceitos.addEventListener("mouseover", function() {
    tornarDisplayFlex(ids_explicacoes[1]);
  });

div_conceitos_ide = document.getElementById("ide");
div_conceitos_ide.addEventListener("mouseover", function() {
    tornarDisplayFlex(ids_explicacoes[2]);
  });

div_github = document.getElementById("github");
div_github.addEventListener("mouseover", function() {
    tornarDisplayFlex(ids_explicacoes[3]);
  });


function tornarDisplayNone(class_element){
  var divs = document.querySelectorAll(class_element);

    //Deixar todos os display invisíveis
    for(let i=0; i< divs.length; i++){
        divs[i].style.display = "none";
    }   
}
function tornarDisplayFlex(id_elemento){
    //Tornar todos invisíveis (display= "none")
    tornarDisplayNone(class_introducao)

    //Tornar 1 display flex
    let elemento = document.getElementById(id_elemento);
    elemento.style.display = "flex"
    console.log("display flex")

}


//Lógica seção projeto html5 semântico

//Video inicial
video_projeto = document.getElementById("video_projeto").style.display = "block";

//classe para criar os vetores
var projeto_semantico = ".conteudo_projeto_html_semantico";

lista_suspensa = document.getElementById("select_html_semantico");
lista_suspensa.addEventListener("change", controlarCartoes)

//de acordo com o selecionado deixar tudo display none e mostrar só o correspondente a ele

function controlarCartoes(){
  //Apagar todos os elementos da div 
  var media = document.getElementsByClassName("conteudo_projeto_html_semantico")
  item_selecionado = lista_suspensa.value
  if(item_selecionado == "demonstração do projeto"){
    tornarDisplayNone(projeto_semantico) //desaparecer com o div
    media[0].style.display = "flex"
    console.log("aqui")
  }
  if(item_selecionado == "html_semantico"){
    tornarDisplayNone(projeto_semantico) //desaparecer com o div
    media[1].style.display = "flex"
    console.log("aqui")
  }
  else if(item_selecionado == "tag_formulario"){
    tornarDisplayNone(projeto_semantico) //desaparecer com o div
    media[2].style.display = "flex"
    console.log(item_selecionado)
  }
  else{
    console.log(item_selecionado)

  }
    

}



 




