function dataAtual() {
  d =  new Date();
  a = d.getFullYear();
  m = d.getMonth() + 1;
  d = d.getDate();
  $("#data").html(d+"-"+m+"-"+a);
}
