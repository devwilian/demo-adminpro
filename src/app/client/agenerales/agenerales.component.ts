import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agenerales',
  templateUrl: './agenerales.component.html',
  styleUrls:['../client.component.css']
})
export class AgeneralesComponent implements OnInit {
  // @Output('verBienvenido') verBienvenido:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output('verAspectosGenerales') verAspectosGenerales:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  mostrarFormulario(){
    this.verAspectosGenerales.emit(false);
  }
}
