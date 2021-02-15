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
  for(i=0; i<arrayAlimentos.length; i++) {
    for(j=0; j<$(".box").children().length; j++) {                              //$(".box").children().length --> Nr de divs inseridos no div com class box --> (Nr total de refeicoes)
      var table = document.getElementsByClassName("table-alimentos")[0];
      var newRow = table.insertRow();
      newRow.addEventListener("click", selectAlimento);
      newRow.setAttribute("class", i);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);
      var cell6 = newRow.insertCell(5);

      cell1.innerHTML = arrayAlimentos[i].id;
      cell2.innerHTML = arrayAlimentos[i].alimento;
      cell3.innerHTML = arrayAlimentos[i].calorias;
      cell4.innerHTML = arrayAlimentos[i].lipidos;
      cell5.innerHTML = arrayAlimentos[i].carboidratos;
      cell6.innerHTML = arrayAlimentos[i].proteinas;
    }
  }
}
