import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input("titulo") titulo="Sin Titulo"; 
  @Input("data") data:MultiDataSet =[
                                      [0, 0, 0],
                                    ];;
  @Input("labels") labels:Label[]=['Leyenda 1', 'Leyenda 2', 'Leyenda 3'];

  public colors:Color[]=[
    {backgroundColor:['#6857E6','#009FEE','#F02059']}
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public tipo: ChartType = 'doughnut';
   // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
