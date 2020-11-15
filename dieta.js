var calorias, lipidos, carboidratos, proteinas;

function macros() {
  var peso = $("#peso").val();
  calorias = peso * 44;
  lipidos = calorias * 0.25 / 9;
  carboidratos = calorias * 0.5 / 4;
  proteinas = calorias * 0.25 / 4;

  $("#calorias").html(calorias);
  $("#lipidos").html(lipidos);
  $("#carboidratos").html(carboidratos);
  $("#proteinas").html(proteinas);

  $("#ct").children().eq(0).html("Calorias (" +calorias+")");
  $("#ct").children().eq(1).html("Lipidos (" +lipidos+")");
  $("#ct").children().eq(2).html("Carboidratos (" +carboidratos+")");
  $("#ct").children().eq(3).html("Proteinas (" +proteinas+")");
}

function imc() {
  var peso = $("#peso").val();
  var altura = $("#altura").val();

  var imc = peso / (altura * altura);

  $("#IMC").html("IMC: "+imc);

  var right = (imc * 100)/50;
  console.log(right);
  document.getElementById("setas").style.left = right+"%";
}
