//Lógica dos cartões
//Array com os elementos
var class_introducao = ".explicacao";
var class_topicos = ".js_ct_main"
var ids_explicacoes = [ "explicacao_comunicacaoWeb", "explicacao_conceito", "explicacao_ide", "explicacao_github" ]

var bts_html_introducao_topicos = document.getElementsByClassName("html_topicos")
var divs_html_introducao_topicos = document.getElementsByClassName("explicacao")

bts_html_introducao_topicos[0].addEventListener("mouseover", function() {
  tornarDisplayFlex(0, divs_html_introducao_topicos );
});
bts_html_introducao_topicos[1].addEventListener("mouseover", function() {
  tornarDisplayFlex(1, divs_html_introducao_topicos );
});
bts_html_introducao_topicos[2].addEventListener("mouseover", function() {
  tornarDisplayFlex(2, divs_html_introducao_topicos );
});
bts_html_introducao_topicos[3].addEventListener("mouseover", function() {
  tornarDisplayFlex(3, divs_html_introducao_topicos );
});
bts_html_introducao_topicos[4].addEventListener("mouseover", function() {
  tornarDisplayFlex(4, divs_html_introducao_topicos );
});


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



//Lógica seção projeto html5 semântico
//Video inicial 
video_projeto = document.getElementById("video_projeto").style.display = "block";

//classe para criar os vetores
lista_suspensa = document.getElementById("select_html_semantico");
lista_suspensa.addEventListener("change", controlarCartoes)

//de acordo com o selecionado deixar tudo display none e mostrar só o correspondente a ele

function controlarCartoes(){
  //Apagar todos os elementos da div 
  var media = document.getElementsByClassName("conteudo_projeto_html_semantico")
  item_selecionado = lista_suspensa.value
  if(item_selecionado == "demonstração do projeto"){
    tornarDisplayNone(media) //desaparecer com o div
    media[0].style.display = "flex"
    console.log("aqui")
  }
  else if(item_selecionado == "html_semantico"){
    tornarDisplayNone(media) //desaparecer com o div
    media[1].style.display = "flex"
    console.log("aqui")
  }
  else if(item_selecionado == "tag_formulario"){
    tornarDisplayNone(media) //desaparecer com o div
    media[2].style.display = "flex"
    console.log(item_selecionado)
  }
  else if(item_selecionado == "tag_ancoragem"){
    tornarDisplayNone(media) //desaparecer com o div
    media[3].style.display = "flex"
    console.log(item_selecionado)
  }
  else if(item_selecionado == "css"){
    tornarDisplayNone(media) //desaparecer com o div
    media[4].style.display = "flex"
    console.log(item_selecionado)
  }
  else{
    tornarDisplayNone(media) //desaparecer com o div
    media[5].style.display = "flex"
    console.log("hello")
    console.log(item_selecionado)
  }

}


// Seção Js: conteúdos trabalhados
var bts_conteudo_trabalhados = document.getElementsByClassName("ct_topicos")
var conteiner_js_conteudos_trabalhados = document.getElementsByClassName("js_ct_main")


bts_conteudo_trabalhados[0].addEventListener("mouseover", function() {
  tornarDisplayFlex(1,  conteiner_js_conteudos_trabalhados );
});
bts_conteudo_trabalhados[1].addEventListener("mouseover", function() {
  tornarDisplayFlex(2,  conteiner_js_conteudos_trabalhados );
});
bts_conteudo_trabalhados[2].addEventListener("mouseover", function() {
  tornarDisplayFlex(3,  conteiner_js_conteudos_trabalhados );
});
bts_conteudo_trabalhados[3].addEventListener("mouseover", function() {
  tornarDisplayFlex(4,  conteiner_js_conteudos_trabalhados );
});
bts_conteudo_trabalhados[4].addEventListener("mouseover", function() {
  tornarDisplayFlex(5,  conteiner_js_conteudos_trabalhados );
});
/* Seção da parte 2 */
bts_conteudo_trabalhados[5].addEventListener("mouseover", function() {
  tornarDisplayFlex(7,  conteiner_js_conteudos_trabalhados );
});
bts_conteudo_trabalhados[6].addEventListener("mouseover", function() {
  tornarDisplayFlex(8,  conteiner_js_conteudos_trabalhados );
});

var bts_atividades = document.getElementsByClassName("atividades");
var conteiner_atividades = document.getElementsByClassName("conteiner_atividades_descricao")

bts_atividades[0].addEventListener("mouseover", function(){tornarDisplayFlex(0, conteiner_atividades)})
bts_atividades[1].addEventListener("mouseover", function(){tornarDisplayFlex(1, conteiner_atividades)})
bts_atividades[2].addEventListener("mouseover", function(){tornarDisplayFlex(2, conteiner_atividades)})
bts_atividades[3].addEventListener("mouseover", function(){tornarDisplayFlex(3, conteiner_atividades)})