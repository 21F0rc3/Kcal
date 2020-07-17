function updateGraph(x) {
  var macr = new Array();

  if($(x).closest("#Adicionar0").length == 1) {
    var ctx = $("#graphAlim0");
  }else if($(x).closest("#Adicionar1").length == 1) {
    var ctx = $("#graphAlim1");
  }else if($(x).closest("#Adicionar2").length == 1) {
    var ctx = $("#graphAlim2");
  }else if($(x).closest("#Adicionar3").length == 1) {
    var ctx = $("#graphAlim3")
  }

    for(i=0; i<3; i++) {
      macr.shift();
    }

    macr.push($(x).children().eq(3).html());
    macr.push($(x).children().eq(4).html());
    macr.push($(x).children().eq(5).html());

    var myRadarChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Lipidos', 'Carboidratos', 'Proteinas'],
        datasets: [{
          backgroundColor: ['#DC143C', '#FF8C00', '#00FFFF'],
          data: macr
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          position: 'right'
        }
      }
    });
}
