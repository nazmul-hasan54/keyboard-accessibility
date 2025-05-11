import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, NgApexchartsModule, ApexResponsive } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[]
};

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [
    BarChartComponent,
    NgApexchartsModule
  ],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  //public chartOptions: Partial<ChartOptions>;
  chartOptions!: ChartOptions;

  constructor(){
    
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ],
      chart: {
        type: 'line',
        height: 350
      },
      title: {
        text: 'Sales Trends'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            chart: {
              width: '100%'
            },
            xaxis: {
              labels: {
                show: true
              }
            }
          }
        },
        {
          breakpoint: 600,
          options: {
            chart: {
              width: '100%',
              height: 250
            },
            xaxis: {
              labels: {
                show: false
              }
            }
          }
        }
      ]
    };
  }
}
