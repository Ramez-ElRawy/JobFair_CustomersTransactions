import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-user-transactions-chart',
  templateUrl: './user-transactions-chart.component.html',
  styleUrls: ['./user-transactions-chart.component.css']
})
export class UserTransactionsChartComponent {

  @Input() transactionsPerDay: { date: string, totalAmount: number }[] = [];
  @ViewChild('chart') chartRef!: ElementRef;

  private chart: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactionsPerDay'] && changes['transactionsPerDay'].currentValue) {
      setTimeout(() => {
        this.updateChart();
      }, 0);
    }
  }

  updateChart() {
    if (this.chartRef && this.chartRef.nativeElement) {
      console.log(this.chartRef.nativeElement);
      const ctx = this.chartRef.nativeElement.getContext('2d');
      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.transactionsPerDay.map(item => item.date),
          datasets: [{
            label: 'Total Amount',
            data: this.transactionsPerDay.map(item => item.totalAmount),
            backgroundColor: '#5AA454',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Total Amount'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Date'
              }
            }
          }
        }
      });
    }
  }

}
