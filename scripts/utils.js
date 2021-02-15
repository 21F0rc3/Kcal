//Funcao que atualiza os valores da tabela de refeicoes especificada com --> nr
function soma(nr) {
  var cal=0, lip=0, carb=0, prot=0;

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
  var cal=0, lip=0, carb=0, prot=0;

  for(i=0; i<$(".box").children().length; i++) {                                //$(".box").children().length --> Nr de divs inseridos no div com class box --> (Nr total de refeicoes)
    cal += parseFloat($(".counter").eq(i).children().eq(0).text());
    lip += parseFloat($(".counter").eq(i).children().eq(1).text());
    carb += parseFloat($(".counter").eq(i).children().eq(2).text());
    prot += parseFloat($(".counter").eq(i).children().eq(3).text());
  }

  $(".counterTotal").eq(0).children().eq(1).html(prot.toFixed(2));
  $(".counterTotal").eq(1).children().eq(1).html(carb.toFixed(2));
  $(".counterTotal").eq(2).children().eq(1).html(cal.toFixed(2));
  $(".counterTotal").eq(3).children().eq(1).html(lip.toFixed(2));
}

//Funcao que cria e inicializa um dado alimento na respetiva tabela de refeicoes
function createAlimElem(alim, nr, qty, id) {
  var y = document.createElement("p");                                          //Create element <p>
  y.setAttribute("class", "alimento");                                          //Set element <p> with class = "alimento"
  y.setAttribute("id_Alimento", id);                                            //Set element <p> with id_Alimento = alim --> ID
  y.setAttribute("quantidade", qty);                                            //Set element <p> with qty = alim --> qty
  y.addEventListener("click", removeAlimento);                                  //Set element <p> with eventListener onClick=removeAlimento()

  var z = document.createTextNode(alim);                                        //Populate element <p> with string alim

  y.appendChild(z);

  var d = document.getElementById("form"+nr);                                   //Move element <p> to children of form of the respective modal(Tabela de refeicao)
  d.appendChild(y);
}
