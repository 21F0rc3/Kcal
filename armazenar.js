var db = openDatabase("Historico.db", "1.0", "Historico de Macros", 2 * 1024 * 1024);

/*db.transaction(function(tx) {
  tx.executeSql('DELETE FROM "Historico";');
});*/



window.onbeforeunload = function() {
   var resumoDia = {
     //Armazenar data atual
     data : $("#data").html(),

     //Armazenar os valores de peso e altura atuais
     peso : $("#peso").val(),
     altura : $("#altura").val(),

     //Armazenar valores das macros e os alimentos do atual dia
     t1Macros: [$(".counter").eq(0).children().eq(0).html(),
                $(".counter").eq(0).children().eq(1).html(),
                $(".counter").eq(0).children().eq(2).html(),
                $(".counter").eq(0).children().eq(3).html()],

     t2Macros: [$(".counter").eq(1).children().eq(0).html(),
                $(".counter").eq(1).children().eq(1).html(),
                $(".counter").eq(1).children().eq(2).html(),
                $(".counter").eq(1).children().eq(3).html()],

     t3Macros: [$(".counter").eq(2).children().eq(0).html(),
                $(".counter").eq(2).children().eq(1).html(),
                $(".counter").eq(2).children().eq(2).html(),
                $(".counter").eq(2).children().eq(3).html()],

     t4Macros: [$(".counter").eq(3).children().eq(0).html(),
                $(".counter").eq(3).children().eq(1).html(),
                $(".counter").eq(3).children().eq(2).html(),
                $(".counter").eq(3).children().eq(3).html()],

     tam1: $("#form0").find(".alimento").length,

     tam2: $("#form1").find(".alimento").length,

     tam3: $("#form2").find(".alimento").length,

     tam4: $("#form3").find(".alimento").length,
   };

   localStorage.setItem("resumoDia", JSON.stringify(resumoDia));

   //Armazenar valores das macros e os alimentos do atual dia

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
  var resumoDia = JSON.parse(localStorage.getItem("resumoDia"));

  //Carregar data e valores

  var data = resumoDia.data;
  dataAtual();

  if(data == $("#data").html()) {
    //Carregar os valores de peso e altura atuais

    var peso = resumoDia.peso;
    var altura = resumoDia.altura;

    $("#peso").val(peso);
    $("#altura").val(altura);
    macros();
    imc();

    //Carregar valores das macros e os alimentos do atual dia

    for(i=0; i<4; i++) {
      $(".counter").eq(0).children().eq(i).html(resumoDia.t1Macros[i]);
      $(".counter").eq(1).children().eq(i).html(resumoDia.t2Macros[i]);
      $(".counter").eq(2).children().eq(i).html(resumoDia.t3Macros[i]);
      $(".counter").eq(3).children().eq(i).html(resumoDia.t4Macros[i]);
    }

    for(i=0; i<resumoDia.tam1; i++) {
      var y = document.createElement("p");
      y.setAttribute("class", "alimento");

      var z = document.createTextNode(localStorage.getItem("t1alimento"+i));
      y.appendChild(z);

      var d = document.getElementById("form0");
      d.appendChild(y);
     }

     for(i=0; i<resumoDia.tam2; i++) {
       var y = document.createElement("p");
       y.setAttribute("class", "alimento");

       var z = document.createTextNode(localStorage.getItem("t2alimento"+i));
       y.appendChild(z);

       var d = document.getElementById("form1");
       d.appendChild(y);
      }

      for(i=0; i<resumoDia.tam3; i++) {
        var y = document.createElement("p");
        y.setAttribute("class", "alimento");

        var z = document.createTextNode(localStorage.getItem("t3alimento"+i));
        y.appendChild(z);

        var d = document.getElementById("form2");
        d.appendChild(y);
       }

       for(i=0; i<resumoDia.tam4; i++) {
         var y = document.createElement("p");
         y.setAttribute("class", "alimento");

         var z = document.createTextNode(localStorage.getItem("t4alimento"+i));
         y.appendChild(z);

         var d = document.getElementById("form3");
         d.appendChild(y);
        }

      counterTotal();
  }else {
    db.transaction(function (tx) {
      tx.executeSql("INSERT INTO Historico(Tipo, Data, Cal, Lip, Carb, Prot) VALUES ('1',"+JSON.stringify(data)+","+resumoDia.t1Macros[0]+","+resumoDia.t1Macros[1]+","+resumoDia.t1Macros[2]+","+resumoDia.t1Macros[3]+");");
      tx.executeSql("INSERT INTO Historico(Tipo, Data, Cal, Lip, Carb, Prot) VALUES ('2',"+JSON.stringify(data)+","+resumoDia.t2Macros[0]+","+resumoDia.t2Macros[1]+","+resumoDia.t2Macros[2]+","+resumoDia.t2Macros[3]+");");
      tx.executeSql("INSERT INTO Historico(Tipo, Data, Cal, Lip, Carb, Prot) VALUES ('3',"+JSON.stringify(data)+","+resumoDia.t3Macros[0]+","+resumoDia.t3Macros[1]+","+resumoDia.t3Macros[2]+","+resumoDia.t3Macros[3]+");");
      tx.executeSql("INSERT INTO Historico(Tipo, Data, Cal, Lip, Carb, Prot) VALUES ('4',"+JSON.stringify(data)+","+resumoDia.t4Macros[0]+","+resumoDia.t4Macros[1]+","+resumoDia.t4Macros[2]+","+resumoDia.t4Macros[3]+");");
    });

    for(i=0; i<4; i++) {
      $(".counter").eq(0).children().eq(i).html("0");
      $(".counter").eq(1).children().eq(i).html("0");
      $(".counter").eq(2).children().eq(i).html("0");
      $(".counter").eq(3).children().eq(i).html("0");
    }
  }
}
