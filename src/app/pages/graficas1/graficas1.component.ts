import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component {

  //Reclamos por años
  public titulo1="Reclamos por año";
  public data1:MultiDataSet = [
    [350, 450, 300],
  ];
  public labels1:Label[]=['2018', '2019', '2020'];

  //Quejas por año
  titulo2="Quejas por año";
  public data2 = [
    [350, 350, 200],
  ];
  labels2:Label[]=['2018', '2019', '2020'];

  //Reclamos y Quejas por sede
  titulo3="Reclamos y Quejas por sede";
  public data3 = [
    [350, 450],
  ];
  labels3:Label[]=['Wanchaq', 'Larapa'];
  
  //General
  titulo4="Reclamos y Quejas";
  public data4 = [
    [350, 350],
  ];
  labels4:Label[]=['Reclamos', 'Quejas'];
}
