var db = openDatabase("Historico.db", "1.0", "Historico de Macros", 2 * 1024 * 1024);

/*db.transaction(function(tx) {
  tx.executeSql('DROP TABLE HISTORICO;');
  tx.executeSql('CREATE TABLE "HISTORICO" ("IdH"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,"Tipo" INTENGER NOT NULL,"Data"	NUMERIC NOT NULL,"Calorias"	INTEGER NOT NULL,"Lipidos"	INTEGER NOT NULL,"Carboidratos"	INTEGER NOT NULL,"Proteinas"	INTEGER NOT NULL);');
});*/

window.onbeforeunload = function() {
  localStorage.setItem("data", $("#data").html());
  localStorage.setItem("peso", $("#peso").val());
  localStorage.setItem("altura", $("#altura").val());

  for(i=0; i<$(".box").children().length; i++) {
    var newRef = {cal: parseInt($(".counter").eq(i).children().eq(0).html()),
                  lip: parseInt($(".counter").eq(i).children().eq(1).html()),
                  carb: parseInt($(".counter").eq(i).children().eq(2).html()),
                  prot: parseInt($(".counter").eq(i).children().eq(3).html())
                  }
    localStorage.setItem("Ref"+i.toString(), JSON.stringify(newRef));

    for(j=0; j<$("#form"+i.toString()).find(".alimento").length; j++) {
      localStorage.setItem("t"+i+"alimento"+j, $("#form"+i).find(".alimento").eq(j).html());
      localStorage.setItem("t"+i+"alimento"+j+"id", $("#form"+i).find(".alimento").eq(j).attr("id_Alimento"));
      localStorage.setItem("t"+i+"alimento"+j+"qty", $("#form"+i).find(".alimento").eq(j).attr("quantidade"));
    }
    localStorage.setItem("tam"+i.toString(), $("#form"+i.toString()).find(".alimento").length);
  }
}

window.onload = function() {
  start();

  //Carregar data
  var data = localStorage.getItem("data");
  dataAtual();

  if(data == $("#data").html()) {
    //Carregar os valores de peso e altura atuais
    var peso = localStorage.getItem("peso");
    var altura = localStorage.getItem("altura");

    $("#peso").val(peso);
    $("#altura").val(altura);
    macros();
    imc();

    //Carregar valores das macros e os alimentos do atual dia

    for(i=0; i<$(".box").children().length; i++) {
      var ref = JSON.parse(localStorage.getItem("Ref"+i.toString()));
      $(".counter").eq(i).children().eq(0).html(ref.cal);
      $(".counter").eq(i).children().eq(1).html(ref.lip);
      $(".counter").eq(i).children().eq(2).html(ref.carb);
      $(".counter").eq(i).children().eq(3).html(ref.prot);

      for(j=0; j<parseInt(localStorage.getItem("tam"+i.toString())); j++) {
        var alim = localStorage.getItem("t"+i+"alimento"+j);
        var id = localStorage.getItem("t"+i+"alimento"+j+"id");
        var qty = localStorage.getItem("t"+i+"alimento"+j+"qty");
        createAlimElem(alim,i,qty,id);
       }
    }

    counterTotal();
  }/*else {
    db.transaction(function (tx) {
      tx.executeSql("INSERT INTO HISTORICO(Tipo, Data, Calorias, Lipidos, Carboidratos, Proteinas) VALUES ('1',"+JSON.stringify(data)+","+resumoDia.t1Macros[0]+","+resumoDia.t1Macros[1]+","+resumoDia.t1Macros[2]+","+resumoDia.t1Macros[3]+");");
      tx.executeSql("INSERT INTO HISTORICO(Tipo, Data, Calorias, Lipidos, Carboidratos, Proteinas) VALUES ('2',"+JSON.stringify(data)+","+resumoDia.t2Macros[0]+","+resumoDia.t2Macros[1]+","+resumoDia.t2Macros[2]+","+resumoDia.t2Macros[3]+");");
      tx.executeSql("INSERT INTO HISTORICO(Tipo, Data, Calorias, Lipidos, Carboidratos, Proteinas) VALUES ('3',"+JSON.stringify(data)+","+resumoDia.t3Macros[0]+","+resumoDia.t3Macros[1]+","+resumoDia.t3Macros[2]+","+resumoDia.t3Macros[3]+");");
      tx.executeSql("INSERT INTO HISTORICO(Tipo, Data, Calorias, Lipidos, Carboidratos, Proteinas) VALUES ('4',"+JSON.stringify(data)+","+resumoDia.t4Macros[0]+","+resumoDia.t4Macros[1]+","+resumoDia.t4Macros[2]+","+resumoDia.t4Macros[3]+");");
      tx.executeSql("INSERT INTO HISTORICO(Tipo, Data, Calorias, Lipidos, Carboidratos, Proteinas) VALUES ('0',"+JSON.stringify(data)+","+resumoDia.tMacros[0]+","+resumoDia.tMacros[1]+","+resumoDia.tMacros[2]+","+resumoDia.tMacros[3]+");");
      tx.executeSql("INSERT INTO PESO(Data, Peso) VALUES ("+JSON.stringify(data)+","+resumoDia.peso+");");
    });

    for(i=0; i<4; i++) {
      $(".counter").eq(0).children().eq(i).html("0");
      $(".counter").eq(1).children().eq(i).html("0");
      $(".counter").eq(2).children().eq(i).html("0");
      $(".counter").eq(3).children().eq(i).html("0");
    }

    //Carregar os valores de peso e altura atuais

    var peso = resumoDia.peso;
    var altura = resumoDia.altura;

    $("#peso").val(peso);
    $("#altura").val(altura);
    macros();
    imc();
  }*/
  loadHistorico();

  var cal = $(".counterTotal").eq(2).children().eq(1).html();
  var tot = $(".counterTotal").eq(2).children().eq(3).html();
  graphInicio(cal, tot);
}
