import Highcharts from 'highcharts'

export const generateHighchartsData = (foodConsumption = []) => {

    const options = {
        chart: {
            type: 'column',
        },
        title: {
            text: ''
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total food consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',
            x: 0,
            verticalAlign: 'top',
            y: -10,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
              var chart = this.series.chart,
                x = this.x,
                stackName = this.series.userOptions.stack,
                contribuants = '';
        
            chart.series.forEach(function(series) {
                series.points.forEach(function(point) {
                  if (point.category === x && stackName === point.series.userOptions.stack) {
                    contribuants += "<svg width='20' height='20'>" + point.series.legendSymbol.element.outerHTML + "</svg>" + point.series.name + ': ' + point.y + '<br/>'
                  }
                })
            })
        
            return '<b>Tanggal ' + x + '</b><br/>' + contribuants + '<hr><b>TOTAL: ' + this.point.stackTotal + '</b>';
        }},
        plotOptions: {
            series: {
                pointWidth: 45
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        xAxis: {
            min: 0,
            max: 15,
            scrollbar: {
                enabled: true,
                showFull: false
            },
            categories: foodConsumption.map((i) => {
                return i.day + '/' + i.month
            })
        },
        series: [
            {'name': 'BERUANG', 'data': foodConsumption.map((i) => i.BERUANG)},
            {'name': 'BUAYA', 'data': foodConsumption.map((i) => i.BUAYA)},
            {'name': 'MACAN', 'data': foodConsumption.map((i) => i.MACAN)},
            {'name': 'SERIGALA', 'data': foodConsumption.map((i) => i.SERIGALA)},
            {'name': 'SINGA', 'data': foodConsumption.map((i) => i.SINGA)},
            {'name': 'ULAR', 'data': foodConsumption.map((i) => i.ULAR)},
            {'name': 'LAINNYA', 'data': foodConsumption.map((i) => i.LAINNYA)},
        ]
    }
  
    return options
  }