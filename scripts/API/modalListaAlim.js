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

//Funcao que adiciona um alimento a tabela refeicao
function adicionarAlimento() {
  for(i=0; i<4; i++) {
    if($(".modal").eq(i).hasClass("show")) {
      var nr = i;
      break;
    }
  }
  for(i=0; i<arrayAlimentos.length; i++) {
    var x = document.getElementsByClassName(i)[nr];
    if($(x).attr("style") == "background-color:black") {
      var y = document.createElement("p");
      y.setAttribute("class", "alimento");
      y.setAttribute("id_Alimento", x.children[0].innerHTML);

      var qty = document.getElementsByClassName("num")[nr].value;
      y.setAttribute("quantidade", qty);
      var z = document.createTextNode(x.children[1].innerHTML+"("+qty+"g)");
      y.addEventListener("click", removeAlimento);
      y.appendChild(z);

      var d = document.getElementById("form"+nr);
      d.appendChild(y);

      x.style.backgroundColor = "white";
      soma(nr);
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
  for(i=0; i<arrayAlimentos.length; i++) {
    if($(this).attr("id_Alimento") == arrayAlimentos[i].id) {
      $(this).remove();
      soma(nr);
      break;
    }
  }
}
