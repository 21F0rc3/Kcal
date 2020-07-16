var db = openDatabase("Historico.db", "1.0", "Historico de Macros", 2 * 1024 * 1024);

var cal = new Array();
var dias = new Array();

function ola() {
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM HISTORICO WHERE HISTORICO.TIPO = 0;', [], function(tx, results) {
      var len=results.rows.length;
      var i;
      for(i=0; i<len; i++) {
        cal.push(results.rows.item(i).Cal);
        dias.push(results.rows.item(i).Data);
      };
      returnCalorias();
      return dias;
    });
  });
}

function returnCalorias() {
  return cal;
}

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
        backgroundColor: 'transparent'
      }]
    }
});
