//Funcao que atualiza os valores da tabela de refeicoes especificada com --> nr
function soma(nr) {
  var cal, lip, carb, prot;
  cal = lip = carb = prot = 0;
  for(i=0; i<=$("#form"+nr).children(".alimento").length; i++) {
    if($("#form"+nr).children(".alimento").length!=0 && i!=$("#form"+nr).children(".alimento").length) {
      var id = parseInt($("#form"+nr).children(".alimento").eq(i).attr("id_Alimento"))-1;
      var qty = parseInt($("#form"+nr).children(".alimento").eq(i).attr("quantidade"));
      cal += (arrayAlimentos[id].calorias * qty/100);
      lip += (arrayAlimentos[id].lipidos * qty/100);
      carb += (arrayAlimentos[id].carboidratos * qty/100);
      prot += (arrayAlimentos[id].proteinas * qty/100);
    }
    $(".counter").eq(nr).children().eq(0).html(cal);
    $(".counter").eq(nr).children().eq(1).html(lip);
    $(".counter").eq(nr).children().eq(2).html(carb);
    $(".counter").eq(nr).children().eq(3).html(prot);
  }
  counterTotal();
}

//Função que atualiza os valores do counter no menu principal com TODOS os valores de todas as tabelas
function counterTotal() {
  var cal, lip, carb, prot;
  cal = lip = carb = prot = 0;

  for(i=0; i<4; i++) {
    cal += parseFloat($(".counter").eq(i).children().eq(0).html());
    lip += parseFloat($(".counter").eq(i).children().eq(1).text());
    carb += parseFloat($(".counter").eq(i).children().eq(2).text());
    prot += parseFloat($(".counter").eq(i).children().eq(3).text());
  }

  $("#counterTotal").eq(0).children().eq(1).html(prot);
  $("#counterTotal").eq(1).children().eq(1).html(carb);
  $("#counterTotal").eq(2).children().eq(1).html(cal);
  $("#counterTotal").eq(3).children().eq(1).html(lip);
}
