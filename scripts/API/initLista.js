var arrayAlimentos;

 function start() {
   getAlimentos();
 }

function getAlimentos() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     arrayAlimentos = JSON.parse(this.responseText);
     fillAlimentos(arrayAlimentos);
   }
 };

 xmlhttp.open("GET", "/assets/alimentos.txt", true);
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
