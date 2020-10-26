import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styleUrls: ['./donas.component.css']
})
export class DonasComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData = [
    [350,23,60],
    [50,23,60],
    [25,23,60],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public numeros_random(){
    this.doughnutChartData = [
      [Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100)],
      [Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100)],
      [Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100)]
    ];
  }
}

