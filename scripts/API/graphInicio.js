function graphInicio(cal, tot) {
  var percent = (cal * 360) / tot;

  var halfL = 180;
  var halfR = 180;
  if(percent<=180) {
    halfL = 180-percent;
  }else if(percent<=360){
    halfL = 0;
    halfR = 360-percent;
  }else{
    halfL = 0;
    halfR = 0;
  }

  $(".left").children().css("transform","scale(-1,1) rotate("+halfL+"deg)");
  $(".right").children().css("transform","scale(-1,1) rotate("+halfR+"deg)");
}
