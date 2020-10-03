// Config for HighCharts data visualization used in PriceChart
export default function(historical) {

  return {
    chart: {
      type: 'line',
    },
    title: {
      text: ''
    },

    yAxis: {
      title: {
        text: 'Price in US Dollars'
      }
    },

    xAxis: {
      type: 'datetime'
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      y: 0,
      x: -10,
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: historical,

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }
}
