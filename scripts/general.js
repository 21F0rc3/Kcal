//Funcao que revela a pagina de contagem das refeicoes
function displayContador() {
  $("#contador").show();
  $("#dieta").hide();
  $("#estatisticas").hide();
  $("#inicio").hide();
}

//Funcao que revela a pagina de dieta com todas as opcoes
function displayDieta() {
  $("#dieta").show();
  $("#contador").hide();
  $("#estatisticas").hide();
  $("#inicio").hide();
}

//Funcao que revela a pagina de estatisticas com os graficos
function displayEstatisticas() {
  $("#dieta").hide();
  $("#contador").hide();
  $("#estatisticas").show();
  $("#inicio").hide();
}

//Função que mostra a imagem com o id = #plus
function showPlus() {
  $(".image").hide();
  $("#plus").show();
}

//Funcao que esconde a imagem com o id = #plus
function hidePlus() {
  $(".image").show();
  $("#plus").hide();
}
