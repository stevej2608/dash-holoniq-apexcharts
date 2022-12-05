/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashApexcharts} from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          options:{
            chart: {
              fontFamily: 'Inter, sans-serif',
              foreColor: '#6B7280',
              toolbar: {
                show: false
              }
            },
            fill: {
              type: 'solid',
              opacity: 0.3,
            },
            dataLabels: {
              enabled: false
            },
            tooltip: {
              style: {
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
              },
            },
            grid: {
              show: false,
            },
            xaxis: {
              categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
              labels: {
                style: {
                  colors: ['#6B7280'],
                  fontSize: '14px',
                  fontWeight: 500,
                },
              },
              axisBorder: {
                color: '#F3F4F6',
              },
              axisTicks: {
                color: '#F3F4F6',
              }
            },
            yaxis: {
              labels: {
                style: {
                  colors: ['#6B7280'],
                  fontSize: '14px',
                  fontWeight: 500,
                },
                formatter: function (value) {
                  return '$' + value;
                }
              },
            },
            responsive: [
              {
                breakpoint: 1024,
                options: {
                  xaxis: {
                    labels: {
                      show: false
                    }
                  }
                }
              }
            ]
          },
          series: [
            {
              name: 'Revenue',
              data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
              color: '#0694a2'
            },
          ]

        };
    }

    render() {
        return (
            <div>
              <DashApexcharts options={this.state.options}
                        series={this.state.series}
                        type="area"
                        width="420"
                />
            </div>
        )
    }
}

export default App;
