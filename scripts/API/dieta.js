var calorias, lipidos, carboidratos, proteinas;

//Calcula os macros que precisa bater consoante a dieta
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

  $(".counterTotal").eq(0).children().eq(3).html(proteinas.toFixed(2));
  $(".counterTotal").eq(1).children().eq(3).html(carboidratos.toFixed(2));
  $(".counterTotal").eq(2).children().eq(3).html(calorias.toFixed(2));
  $(".counterTotal").eq(3).children().eq(3).html(lipidos.toFixed(2));
}

//Calcula o IMC consoante os dados de peso e altura
function imc() {
  var peso = $("#peso").val();
  var altura = $("#altura").val();

  var imc = peso / (altura * altura);

  $("#IMC").html("IMC: "+imc);

  var right = (imc * 100)/50;
  console.log(right);
  document.getElementById("setas").style.left = right+"%";
}
