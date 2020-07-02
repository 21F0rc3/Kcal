window.onbeforeunload = function() {
   localStorage.setItem("peso", $("#peso").val());

   localStorage.setItem("altura", $("#altura").val());

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
  var peso = localStorage.getItem("peso");
  var altura = localStorage.getItem("altura");

  $("#peso").val(peso);
  $("#altura").val(altura);
  macros();
  imc();

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
