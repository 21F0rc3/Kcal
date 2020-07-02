window.onbeforeunload = function() {
   //Armazenar os valores de peso e altura atuais

   localStorage.setItem("peso", $("#peso").val());
   localStorage.setItem("altura", $("#altura").val());


   //Armazenar valores das macros e os alimentos do atual dia

   localStorage.setItem("tcal", document.getElementById("counterTotal").children[0].innerHTML);
   localStorage.setItem("tlip", document.getElementById("counterTotal").children[1].innerHTML);
   localStorage.setItem("tcarb", document.getElementById("counterTotal").children[2].innerHTML);
   localStorage.setItem("tprot", document.getElementById("counterTotal").children[3].innerHTML);

   for(i=1; i<=4; i++) {
     j=i-1;
     localStorage.setItem("t"+i+"cal", $(".counter").eq(j).children().eq(0).html());
     localStorage.setItem("t"+i+"lip", $(".counter").eq(j).children().eq(1).html());
     localStorage.setItem("t"+i+"carb", $(".counter").eq(j).children().eq(2).html());
     localStorage.setItem("t"+i+"prot", $(".counter").eq(j).children().eq(3).html());
     localStorage.setItem("tam"+i, $("#form"+j).find(".alimento").length);
   }

   for(i=0; i<document.getElementById("form0").getElementsByClassName("alimento").length; i++) {
     localStorage.setItem("t1alimento"+i, document.getElementById("form0").getElementsByClassName("alimento")[i].innerHTML);
   }

   for(i=0; i<document.getElementById("form1").getElementsByClassName("alimento").length; i++) {
     localStorage.setItem("t2alimento"+i, document.getElementById("form1").getElementsByClassName("alimento")[i].innerHTML);
   }

   for(i=0; i<document.getElementById("form2").getElementsByClassName("alimento").length; i++) {
     localStorage.setItem("t3alimento"+i, document.getElementById("form2").getElementsByClassName("alimento")[i].innerHTML);
   }

   for(i=0; i<document.getElementById("form3").getElementsByClassName("alimento").length; i++) {
     localStorage.setItem("t4alimento"+i, document.getElementById("form3").getElementsByClassName("alimento")[i].innerHTML);
   }
}

window.onload = function() {
  //Carregar os valores de peso e altura atuais

  var peso = localStorage.getItem("peso");
  var altura = localStorage.getItem("altura");

  $("#peso").val(peso);
  $("#altura").val(altura);
  macros();
  imc();

  //Carregar valores das macros e os alimentos do atual dia

  var tcal = localStorage.getItem("tcal");
  var tlip = localStorage.getItem("tlip");
  var tcarb = localStorage.getItem("tcarb");
  var tprot = localStorage.getItem("tprot");

  if(tcal != null && tlip!= null && tcarb!=null && tprot!=null) {
    document.getElementById("counterTotal").children[0].innerHTML = tcal;
    document.getElementById("counterTotal").children[1].innerHTML = tlip;
    document.getElementById("counterTotal").children[2].innerHTML = tcarb;
    document.getElementById("counterTotal").children[3].innerHTML = tprot;
  }

  for(i=1; i<=4; i++) {
    if(localStorage.getItem("t"+i+"cal") != null && localStorage.getItem("t"+i+"lip") != null && localStorage.getItem("t"+i+"carb") != null && localStorage.getItem("t"+i+"prot") != null) {
      $(".counter").eq(i-1).children().eq(0).html(localStorage.getItem("t"+i+"cal"));
      $(".counter").eq(i-1).children().eq(1).html(localStorage.getItem("t"+i+"lip"));
      $(".counter").eq(i-1).children().eq(2).html(localStorage.getItem("t"+i+"carb"));
      $(".counter").eq(i-1).children().eq(3).html(localStorage.getItem("t"+i+"prot"));

      for(j=0; j<localStorage.getItem("tam"+i); j++) {
        var y = document.createElement("p");
        y.setAttribute("class", "alimento");

        var z = document.createTextNode(localStorage.getItem("t"+i+"alimento"+j));
        y.appendChild(z);

        var d = document.getElementById("form"+(i-1));
        d.appendChild(y);
      }
    }
  }
}
