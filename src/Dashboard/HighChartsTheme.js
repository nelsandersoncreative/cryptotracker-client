// import { lightTheme } from '../Shared/Styles';
// Styling for HighCharts visualization chart used in PriceChart
const innerWidthLeft = () => window.innerWidth <= 684 ? 50 : 120;
const innerWidthRight = () => window.innerWidth <= 684 ? 35 : 120;
console.log(innerWidthLeft());
console.log(innerWidthRight());
export default {
  colors: ['#61d936', '#552ccb', '#1163c9', '#04A1EE', '#08C6E0',
      '#146B9E', '#F376C1', '#1B2839'],
  chart: {
      backgroundColor: '#061a44',
      borderColor: '#000000',
      borderWidth: 0,
      className: 'dark-container',
      plotBackgroundColor: '#061a44',
      plotBorderWidth: 0,
      marginBottom: 90,
      marginTop: 90,
      marginLeft: innerWidthLeft(),
      marginRight: innerWidthRight()
  },
  title: {
      style: {
          color: '#C0C0C0',
          font: 'bold 26px "Trebuchet MS", Verdana, sans-serif'
      }
  },
  subtitle: {
      style: {
          color: '#666666',
          font: 'bold 22px "Trebuchet MS", Verdana, sans-serif'
      }
  },
  xAxis: {
      gridLineColor: '#333333',
      gridLineWidth: 0,
      labels: {
          style: {
              color: '#A0A0A0'
          }
      },
      lineColor: '#A0A0A0',
      tickColor: '#A0A0A0',
      title: {
          style: {
              color: '#CCC',
              fontWeight: 'bold',
              fontSize: '22px',
              fontFamily: 'Trebuchet MS, Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      gridLineWidth: 0,
      gridLineColor: '#333333',
      labels: {
          style: {
              color: '#A0A0A0'
          }
      },
      lineColor: '#A0A0A0',
      minorTickInterval: null,
      tickColor: '#A0A0A0',
      tickWidth: 1,
      title: {
          style: {
              color: '#CCC',
              fontWeight: 'bold',
              fontSize: '22px',
              fontFamily: 'Trebuchet MS, Verdana, sans-serif'
          }
      }
  },
  tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      style: {
          color: 'var(--success-color)'
      }
  },
  toolbar: {
      itemStyle: {
          color: 'silver'
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              color: '#CCC'
          },
          marker: {
              lineColor: '#333'
          }
      },
      spline: {
          marker: {
              lineColor: '#333'
          }
      },
      scatter: {
          marker: {
              lineColor: '#333'
          }
      },
      candlestick: {
          lineColor: 'white'
      }
  },
  legend: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      itemStyle: {
          font: '20px Trebuchet MS, Verdana, sans-serif',
          color: '#A0A0A0'
      },
      itemHoverStyle: {
          color: '#FFF'
      },
      itemHiddenStyle: {
          color: '#444'
      },
      title: {
          style: {
              color: '#C0C0C0'
          }
      }
  },
  credits: {
      enabled: false
  },
  labels: {
      style: {
          color: '#CCC'
      }
  },
  navigation: {
      buttonOptions: {
          symbolStroke: '#DDDDDD',
          theme: {
              fill: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                      [0.4, '#606060'],
                      [0.6, '#333333']
                  ]
              },
              stroke: '#000000'
          }
      }
  },
  responsive: {
    rules: [{
        condition: {
            maxWidth: 3000
        },
        chartOptions: {
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
            },
            yAxis: {
                labels: {
                    align: 'left',
                    x: 0,
                    y: -5
                },
                title: {
                    text: null
                }
            },
            subtitle: {
                text: null
            },
            credits: {
                enabled: false
            }
        }
    }]
},
  // scroll charts
  rangeSelector: {
      buttonTheme: {
          fill: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                  [0.4, '#888'],
                  [0.6, '#555']
              ]
          },
          stroke: '#000000',
          style: {
              color: '#CCC',
              fontWeight: 'bold'
          },
          states: {
              hover: {
                  fill: {
                      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                      stops: [
                          [0.4, '#BBB'],
                          [0.6, '#888']
                      ]
                  },
                  stroke: '#000000',
                  style: {
                      color: 'white'
                  }
              },
              select: {
                  fill: {
                      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                      stops: [
                          [0.1, '#000'],
                          [0.3, '#333']
                      ]
                  },
                  stroke: '#000000',
                  style: {
                      color: 'yellow'
                  }
              }
          }
      },
      inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
      },
      labelStyle: {
          color: 'silver'
      }
  },
  navigator: {
      handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(16, 16, 16, 0.5)',
      series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
      }
  },
  scrollbar: {
      barBackgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
              [0.4, '#888'],
              [0.6, '#555']
          ]
      },
      barBorderColor: '#CCC',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
              [0.4, '#888'],
              [0.6, '#555']
          ]
      },
      buttonBorderColor: '#CCC',
      rifleColor: '#FFF',
      trackBackgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
              [0, '#000'],
              [1, '#333']
          ]
      },
      trackBorderColor: '#666'
  }
}
