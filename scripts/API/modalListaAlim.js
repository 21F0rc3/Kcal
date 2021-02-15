//Função que filtra a lista com os carateres inseridos pelo utilizador
//var nr --> indica qual o modal(refeicao) que estamos a procurar o alimento
function search(nr) {
  var filter = $("#search"+nr).val().toUpperCase();

  var tam = $(".table-alimentos").eq(nr).children().eq(0).find("tr").length - 1;

  for(i=1; i<=tam; i++) {
    var txtValue = $(".table-alimentos").eq(nr).children().eq(0).find("tr").eq(i).text();
    if(txtValue.toUpperCase().indexOf(filter) > -1) {
      $(".table-alimentos").eq(nr).children().eq(0).find("tr").eq(i).show();
    }else{
      $(".table-alimentos").eq(nr).children().eq(0).find("tr").eq(i).hide();
    }
  }
}

//Função que reseta a tabela da refeicao especificada com o --> nr
function reset(nr) {
  while($("#form"+nr).find(".alimento").length != 0) {
    $("#form"+nr).find(".alimento").eq(0).remove();
  }
  for(i=0; i<4; i++) {
    $(".counter").eq(nr).children().eq(i).html(0);
  }
  soma();
}

//Funcao que destaca o alimento selecionado pelo utilizador
function selectAlimento() {
     if($(this).attr("style") == "background-color:black") {
       $(this).attr("style", "background-color:white");
       $(".qt").css("display", "none");
     }else {
       $(this).attr("style", "background-color:black");
       $(this).siblings().attr("style", "background-color:white");
       $(".qt").css("display", "block");
       var x = $(this);
       updateGraph(x);
     }
 }

//Funcao que adiciona um alimento a tabela refeicao especificada com --> nr
function adicionarAlimento(nr) {
  for(i=0; i<arrayAlimentos.length; i++) {
    var alim = document.getElementsByClassName(i)[nr];
    if($(alim).attr("style") == "background-color:black") {
      var str = alim.children[1].innerHTML;
      var id = alim.children[0].innerHTML;
      var qty = document.getElementsByClassName("num")[nr].value;               //Gets value inputted by user of selected alim qty
      createAlimElem(str, nr, qty, id);
      alim.style.backgroundColor = "white";
      soma(nr);                                                                 //Update tabela de refeicao values
    }
  }
}

//Funcao que remove o alimento "clicado"
function removeAlimento() {
  for(i=0; i<4; i++) {
    if($(this).parent().attr("id") == "form"+i) {
      nr = i;
    }
  }
  $(this).remove();
  soma(nr);
}
