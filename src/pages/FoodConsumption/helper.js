import Highcharts from 'highcharts'

export const generateHighchartsData = (foodConsumption = []) => {

    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
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
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: []
    }
  
    if (foodConsumption.length > 0) {
        options.series = [
          {
            name: foodConsumption.map((foodConsumption) => foodConsumption.animal),
            data: foodConsumption.map((foodConsumption) => foodConsumption.meat)
          }
        ]
        options.categories = () => {
            foodConsumption.map((foodConsumption) => foodConsumption.day)
        }
    }

    return options
  }