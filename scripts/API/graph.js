function loadHistorico() {
  var db = openDatabase("Historico.db", "1.0", "Historico de Macros", 2 * 1024 * 1024);

  var cal = new Array();
  var dias = new Array();
  var pes = new Array();

  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM HISTORICO WHERE HISTORICO.Tipo = 0;', [], function(tx, results) {
      var len=results.rows.length;
      var i;
      for(i=0; i<len; i++) {
        cal.push(results.rows.item(i).Calorias);
        dias.push(results.rows.item(i).Data);
      };
    });
  });

  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM PESO;', [], function(tx, results) {
      var len=results.rows.length;
      var i;
      for(i=0; i<len; i++) {
        pes.push(results.rows.item(i).Peso);
      };
    });
  });

  var ctx = document.getElementById('myChart').getContext('2d');

  var chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dias,
        datasets: [{
          label: "Calorias",
          data: cal,
          borderWidth: 6,
          borderColor: 'rgb(77,166,253,0.85)',
          backgroundColor: 'transparent',
          showLine: true,
          spanGaps: true
        },
        {
          label: "Peso",
          data: pes,
          borderWidth: 6,
          borderColor: 'rgb(0,255,40,0.85)',
          backgroundColor: 'transparent',
          hidden: true
        }
      ]},
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  });
}
