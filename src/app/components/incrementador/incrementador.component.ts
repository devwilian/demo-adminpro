import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls:['../components.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso:number = 0;
  @Input() btnClass="btn-primary";

  @Output('valor') cambioSalida:EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`;
  }
  cambiarValor(valor:number){
    if(this.progreso>=100 && valor>=0){
      this.cambioSalida.emit(100);
      this.progreso=100;
    }
    if(this.progreso<=0 && valor<=0){
      this.cambioSalida.emit(0);
      this.progreso=0;
    }
    this.progreso=this.progreso+valor;
    this.cambioSalida.emit(this.progreso);
  }
  onChange(valor:number){
    if (valor>=100) {
      this.progreso=100;
    }else if (valor<=0) {
      this.progreso=0;
    }else{
      this.progreso=valor;
    }
    this.cambioSalida.emit(this.progreso);
    console.log(this.progreso);
  }
  get porcentaje(){
    return `${this.progreso}%`;
  }

}
