import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components 
import { FormularioComponent } from './formulario/formulario.component';
import { AgeneralesComponent } from './agenerales/agenerales.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ClientComponent } from './client.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientComponent,
    BienvenidoComponent,
    AgeneralesComponent,
    FormularioComponent
  ],
  exports:[
    ClientComponent,
    BienvenidoComponent,
    AgeneralesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
