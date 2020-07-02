import Highcharts from 'highcharts'

export const generateHighchartsData = (foodConsumption = []) => {

    const options = {
        chart: {
            type: 'column'
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
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>Tanggal {point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        xAxis: {
            categories: foodConsumption.map((i) => {
                return i.day + '/' + i.month
            })
        },
        series: [
            {'name': 'BERUANG', 'data': foodConsumption.map((i) => i.BERUANG)},
            // {'name': 'BUAYA', 'data': foodConsumption.map((i) => i.BUAYA)},
            // {'name': 'MACAN', 'data': foodConsumption.map((i) => i.MACAN)},
            {'name': 'SERIGALA', 'data': foodConsumption.map((i) => i.SERIGALA)},
            {'name': 'SINGA', 'data': foodConsumption.map((i) => i.SINGA)},
            {'name': 'ULAR', 'data': foodConsumption.map((i) => i.ULAR)},
            {'name': 'LAINNYA', 'data': foodConsumption.map((i) => i.LAINNYA)},
        ]
    }
  
    return options
  }