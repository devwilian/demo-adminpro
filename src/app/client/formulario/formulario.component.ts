import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls:['../client.component.css','./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input('bienvenido') bienvenido:boolean=false;
  @Input('aspectosgenerales') aspectosgenerales:boolean=false;
  constructor() { }

  ngOnInit(): void {
    if(!(this.bienvenido && this.aspectosgenerales)){
        
    }
  }

}
