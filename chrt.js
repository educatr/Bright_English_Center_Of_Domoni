google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Levels', 'Effective'],
    ['2023',  0 ,100],
    ['2024',  1,  25],
    ['2024',  2,  28],
    ['2024', 3,   38],
  ]);

  var options = {
    title: " Performance",
    hAxis: {title: 'Year', titleTextStyle: {color: 'red'}},
    chartArea: {
        left: 100, // Adjust this value according to your preference
        width: '50%', // Adjust this value according to your preference
    },
    series: {
        0: {targetAxisIndex: 0},
        1: {targetAxisIndex: 1}
    },
    vAxes: {
        0: {title: 'Levels'},
        1: {title: 'Effective'}
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Population'],
    ['2023', 45000],
    ['2024', 15351]
  ]);

  var options = {
    title: 'Population of Domoni and Anjouan, Comoros',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

$(window).resize(function(){
  drawChart1();
  drawChart2();
});
