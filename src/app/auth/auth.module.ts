import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
