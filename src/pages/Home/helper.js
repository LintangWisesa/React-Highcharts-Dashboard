export const generateHighchartsData = (sickAnimals = []) => {
  const options = {
    title: {
      text: "Sick Animals",
      style: {
        fontFamily: 'Roboto',
      }
    },
    chart: {
      type: 'pie',
    },
    colors: ['#5ED562', 'orange', 'grey'],
    series: [],
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true
      }
    },
  }

  if (sickAnimals.length > 0) {
    options.series = [
      {
        name: 'Jumlah',
        data: sickAnimals.map((sickAnimal) => ({
          name: sickAnimal.name,
          y: sickAnimal.count,
        }))
      }
    ]
  }

  return options
}