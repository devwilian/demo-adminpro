import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls:['../client.component.css']
})
export class BienvenidoComponent implements OnInit {
  
  @Output('verBienvenido') verBienvenido:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output('verAspectosGenerales') verAspectosGenerales:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  cambioAAspectosGenerales(){
    this.verAspectosGenerales.emit(true);
    this.verBienvenido.emit(false);
  }
}
