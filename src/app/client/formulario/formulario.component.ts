import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls:['../client.component.css','./formulario.component.css']
})
export class FormularioComponent {
  docProbatorios:File [] = [];

  @Input('bienvenido') bienvenido:boolean=false;
  @Input('aspectosgenerales') aspectosgenerales:boolean=false;
  public registerFrm = this.fb.group({
    tipodocumento:[],
    nrodocumento:['70521314',[Validators.required]],
    razonsocial:['',[]],
    apellidos:['HUANCA MARCA',[Validators.required]],
    nombres:['WILIAN DARIO',[Validators.required]],
    telefono:['832784512',[Validators.required]],
    email:['WILIANDH@GMAIL.COM',[]],
    direccion:['AV ANTISUYO',[Validators.required]],
    biencontratado:['SERVICIO',[Validators.required]],
    montobien:['500',[]],
    reclamooqueja:['NO ME ATENDIERON BIEN',[Validators.required]],
    motivosreclamo:['QUEJA',[Validators.required]],
    detallesreclamo:['ME BOTARON',[Validators.required]],
    documentos:['',[]],
    pedido:['DEVOLUCION TOTAL',[]],
    confirmarterminos:[false,[]]
  });

  constructor(private fb:FormBuilder) { }
  guardarReclamos(){
    if(this.registerFrm.valid){
      this.guardarReclamo();
    }else{
      console.log("El formulario es Incorrecto");
    }
  }
  guardarReclamo(){
    console.log("Guardar Reclamo");
  }
  onFileChange(event:any) {
    for (var i = 0; i < event.target.files.length; i++) { 
      this.docProbatorios.push(event.target.files[i]);
      console.log(this.docProbatorios[i]);
    }
  }
}
