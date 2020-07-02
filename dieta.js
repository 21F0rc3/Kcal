var calorias, lipidos, carboidratos, proteinas;

function macros() {
  var peso = $("#peso").val();
  calorias = peso * 44;
  lipidos = calorias * 0.25;
  carboidratos = calorias * 0.5;
  proteinas = calorias * 0.25;

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

  $("#IMC").html(imc);
}
