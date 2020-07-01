var arrayAlimentos;

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

function reset(nr) {
  while($("#form"+nr).find(".alimento").length != 0) {
    $("#form"+nr).find(".alimento").eq(0).remove();
  }
  for(i=0; i<4; i++) {
    $(".counter").eq(nr).children().eq(i).html(0);
  }
  soma();
}

function selectAlimento() {
     if($(this).attr("style") == "background-color:black") {
       $(this).attr("style", "background-color:white");
       $(".qt").css("display", "none");
     }else {
       $(this).attr("style", "background-color:black");
       $(this).siblings().attr("style", "background-color:white");
       $(".qt").css("display", "block");
     }
 }

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

function counterTotal() {
  var cal, lip, carb, prot;
  cal = lip = carb = prot = 0;

  for(i=0; i<4; i++) {
    cal += parseFloat($(".counter").eq(i).children().eq(0).text());
    lip += parseFloat($(".counter").eq(i).children().eq(1).text());
    carb += parseFloat($(".counter").eq(i).children().eq(2).text());
    prot += parseFloat($(".counter").eq(i).children().eq(3).text());
  }

  $("#counterTotal").children().eq(0).html(cal);
  $("#counterTotal").children().eq(1).html(lip);
  $("#counterTotal").children().eq(2).html(carb);
  $("#counterTotal").children().eq(3).html(prot);
}

 function start() {
   getAlimentos();
 }

 start();

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

function getAlimentos() {
  var xmlhttp = new XMLHttpRequest();


 xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     arrayAlimentos = JSON.parse(this.responseText);
     fillAlimentos(arrayAlimentos);
   }
 };

 xmlhttp.open("GET", "alimentos.txt", true);
 xmlhttp.send();

 return arrayAlimentos;
}

function fillAlimentos(arrayAlimentos) {
  var table0 = document.getElementsByClassName("table-alimentos")[0];
  var table1 = document.getElementsByClassName("table-alimentos")[1];
  var table2 = document.getElementsByClassName("table-alimentos")[2];
  var table3 = document.getElementsByClassName("table-alimentos")[3];
  let tam = arrayAlimentos.length;
  for(i=0; i<tam; i++) {
    var row = table0.insertRow();
    row.addEventListener("click", selectAlimento);
    row.setAttribute("class", i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = arrayAlimentos[i].id;
    cell2.innerHTML = arrayAlimentos[i].alimento;
    cell3.innerHTML = arrayAlimentos[i].calorias;
    cell4.innerHTML = arrayAlimentos[i].lipidos;
    cell5.innerHTML = arrayAlimentos[i].carboidratos;
    cell6.innerHTML = arrayAlimentos[i].proteinas;

    var row1 = table1.insertRow();
    row1.addEventListener("click", selectAlimento);
    row1.setAttribute("class", i);
    var cell11 = row1.insertCell(0);
    var cell12 = row1.insertCell(1);
    var cell13 = row1.insertCell(2);
    var cell14 = row1.insertCell(3);
    var cell15 = row1.insertCell(4);
    var cell16 = row1.insertCell(5);

    cell11.innerHTML = arrayAlimentos[i].id;
    cell12.innerHTML = arrayAlimentos[i].alimento;
    cell13.innerHTML = arrayAlimentos[i].calorias;
    cell14.innerHTML = arrayAlimentos[i].lipidos;
    cell15.innerHTML = arrayAlimentos[i].carboidratos;
    cell16.innerHTML = arrayAlimentos[i].proteinas;

    var row2 = table2.insertRow();
    row2.addEventListener("click", selectAlimento);
    row2.setAttribute("class", i);
    var cell21 = row2.insertCell(0);
    var cell22 = row2.insertCell(1);
    var cell23 = row2.insertCell(2);
    var cell24 = row2.insertCell(3);
    var cell25 = row2.insertCell(4);
    var cell26 = row2.insertCell(5);

    cell21.innerHTML = arrayAlimentos[i].id;
    cell22.innerHTML = arrayAlimentos[i].alimento;
    cell23.innerHTML = arrayAlimentos[i].calorias;
    cell24.innerHTML = arrayAlimentos[i].lipidos;
    cell25.innerHTML = arrayAlimentos[i].carboidratos;
    cell26.innerHTML = arrayAlimentos[i].proteinas;

    var row3 = table3.insertRow();
    row3.addEventListener("click", selectAlimento);
    row3.setAttribute("class", i);
    var cell31 = row3.insertCell(0);
    var cell32 = row3.insertCell(1);
    var cell33 = row3.insertCell(2);
    var cell34 = row3.insertCell(3);
    var cell35 = row3.insertCell(4);
    var cell36 = row3.insertCell(5);

    cell31.innerHTML = arrayAlimentos[i].id;
    cell32.innerHTML = arrayAlimentos[i].alimento;
    cell33.innerHTML = arrayAlimentos[i].calorias;
    cell34.innerHTML = arrayAlimentos[i].lipidos;
    cell35.innerHTML = arrayAlimentos[i].carboidratos;
    cell36.innerHTML = arrayAlimentos[i].proteinas;
  }
}

window.onbeforeunload = function() {
   localStorage.setItem("tcal", document.getElementById("counterTotal").children[0].innerHTML);
   localStorage.setItem("tlip", document.getElementById("counterTotal").children[1].innerHTML);
   localStorage.setItem("tcarb", document.getElementById("counterTotal").children[2].innerHTML);
   localStorage.setItem("tprot", document.getElementById("counterTotal").children[3].innerHTML);

   localStorage.setItem("t1cal", document.getElementsByClassName("counter")[0].children[0].innerHTML);
   localStorage.setItem("t1lip", document.getElementsByClassName("counter")[0].children[1].innerHTML);
   localStorage.setItem("t1carb", document.getElementsByClassName("counter")[0].children[2].innerHTML);
   localStorage.setItem("t1prot", document.getElementsByClassName("counter")[0].children[3].innerHTML);

   localStorage.setItem("t2cal", document.getElementsByClassName("counter")[1].children[0].innerHTML);
   localStorage.setItem("t2lip", document.getElementsByClassName("counter")[1].children[1].innerHTML);
   localStorage.setItem("t2carb", document.getElementsByClassName("counter")[1].children[2].innerHTML);
   localStorage.setItem("t2prot", document.getElementsByClassName("counter")[1].children[3].innerHTML);

   localStorage.setItem("t3cal", document.getElementsByClassName("counter")[2].children[0].innerHTML);
   localStorage.setItem("t3lip", document.getElementsByClassName("counter")[2].children[1].innerHTML);
   localStorage.setItem("t3carb", document.getElementsByClassName("counter")[2].children[2].innerHTML);
   localStorage.setItem("t3prot", document.getElementsByClassName("counter")[2].children[3].innerHTML);

   localStorage.setItem("t4cal", document.getElementsByClassName("counter")[3].children[0].innerHTML);
   localStorage.setItem("t4lip", document.getElementsByClassName("counter")[3].children[1].innerHTML);
   localStorage.setItem("t4carb", document.getElementsByClassName("counter")[3].children[2].innerHTML);
   localStorage.setItem("t4prot", document.getElementsByClassName("counter")[3].children[3].innerHTML);

   localStorage.setItem("tam1", document.getElementById("form0").getElementsByClassName("alimento").length);
   localStorage.setItem("tam2", document.getElementById("form1").getElementsByClassName("alimento").length);
   localStorage.setItem("tam3", document.getElementById("form2").getElementsByClassName("alimento").length);
   localStorage.setItem("tam4", document.getElementById("form3").getElementsByClassName("alimento").length);

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

  var t1cal = localStorage.getItem("t1cal");
  var t1lip = localStorage.getItem("t1lip");
  var t1carb = localStorage.getItem("t1carb");
  var t1prot = localStorage.getItem("t1prot");

  var t2cal = localStorage.getItem("t2cal");
  var t2lip = localStorage.getItem("t2lip");
  var t2carb = localStorage.getItem("t2carb");
  var t2prot = localStorage.getItem("t2prot");

  var t3cal = localStorage.getItem("t3cal");
  var t3lip = localStorage.getItem("t3lip");
  var t3carb = localStorage.getItem("t3carb");
  var t3prot = localStorage.getItem("t3prot");

  var t4cal = localStorage.getItem("t4cal");
  var t4lip = localStorage.getItem("t4lip");
  var t4carb = localStorage.getItem("t4carb");
  var t4prot = localStorage.getItem("t4prot");

  var tam1 = localStorage.getItem("tam1");
  var tam2 = localStorage.getItem("tam2");
  var tam3 = localStorage.getItem("tam3");
  var tam4 = localStorage.getItem("tam4");

  if(t1cal!= null && t1lip!= null && t1carb!= null && t1prot!= null && tam1!= null) {
    document.getElementsByClassName("counter")[0].children[0].innerHTML = t1cal;
    document.getElementsByClassName("counter")[0].children[1].innerHTML = t1lip;
    document.getElementsByClassName("counter")[0].children[2].innerHTML = t1carb;
    document.getElementsByClassName("counter")[0].children[3].innerHTML = t1prot;

    for(i=0; i<tam1; i++) {
      var y = document.createElement("p");
      y.setAttribute("class", "alimento");

      var z = document.createTextNode(localStorage.getItem("t1alimento"+i));
      y.appendChild(z);

      var d = document.getElementById("form0");
      d.appendChild(y);
    }
  }

  if(t2cal!= null && t2lip!= null && t2carb!= null && t2prot!= null && tam2!= null) {
    document.getElementsByClassName("counter")[1].children[0].innerHTML = t2cal;
    document.getElementsByClassName("counter")[1].children[1].innerHTML = t2lip;
    document.getElementsByClassName("counter")[1].children[2].innerHTML = t2carb;
    document.getElementsByClassName("counter")[1].children[3].innerHTML = t2prot;

    for(i=0; i<tam2; i++) {
      var y = document.createElement("p");
      y.setAttribute("class", "alimento");

      var z = document.createTextNode(localStorage.getItem("t2alimento"+i));
      y.appendChild(z);

      var d = document.getElementById("form1");
      d.appendChild(y);
    }
  }

  if(t3cal!= null && t3lip!= null && t3carb!= null && t3prot!= null && tam3!= null) {
    document.getElementsByClassName("counter")[2].children[0].innerHTML = t3cal;
    document.getElementsByClassName("counter")[2].children[1].innerHTML = t3lip;
    document.getElementsByClassName("counter")[2].children[2].innerHTML = t3carb;
    document.getElementsByClassName("counter")[2].children[3].innerHTML = t3prot;

    for(i=0; i<tam3; i++) {
      var y = document.createElement("p");
      y.setAttribute("class", "alimento");

      var z = document.createTextNode(localStorage.getItem("t3alimento"+i));
      y.appendChild(z);

      var d = document.getElementById("form2");
      d.appendChild(y);
    }
  }

  if(t4cal!= null && t4lip!= null && t4carb!= null && t4prot!= null && tam4!= null) {
    document.getElementsByClassName("counter")[3].children[0].innerHTML = t4cal;
    document.getElementsByClassName("counter")[3].children[1].innerHTML = t4lip;
    document.getElementsByClassName("counter")[3].children[2].innerHTML = t4carb;
    document.getElementsByClassName("counter")[3].children[3].innerHTML = t4prot;

    for(i=0; i<tam4; i++) {
      var y = document.createElement("p");
      y.setAttribute("class", "alimento");

      var z = document.createTextNode(localStorage.getItem("t4alimento"+i));
      y.appendChild(z);

      var d = document.getElementById("form3");
      d.appendChild(y);
    }
  }
 }
