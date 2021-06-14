function graphInicio(cal, tot) {
  var percent = (cal * 100) / tot;
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var offset = 58 * (vw / 100);
  $("#perc").css("stroke-dashoffset", offset - (offset * percent) / 100);
}
