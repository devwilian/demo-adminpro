import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['../auth.component.css']
})
export class RegisterComponent {
  private formSubmitted = false;
  public registerForm = this.fb.group({
    nombres    :['Wilian Dario',[Validators.required]],
    apellidos  :['Huanca Marca',[Validators.required]],
    email      :['wdhm@gmail.com',[Validators.required,Validators.email]],
    password   :['12345',[Validators.required]],
    password2  :['12345',[Validators.required]],
    terminos   :[true,[Validators.required]]
  },{
    validators: [this.passwordIguales('password','password2'),this.aceptaTerminosyCondiciones('terminos')]
  });

  constructor(
    private fb:FormBuilder,
    private usuarioService:UsuarioService
  ) { }

  crearUsuario(){
    this.formSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }
    this.usuarioService.postUsuario(this.registerForm.value)
    .subscribe(res=>{
      console.log('Usuario creado!');
      console.log(res); 
    },(err)=>{
      // console.log(err.error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.msg
      });
    });
  }  
  campoNoValido(campo:string):boolean{
    if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
      return true;
    }else{
      return false;
    }
  }
  terminosValido(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }
  contrasenasNoIguales(){
    const pass1= this.registerForm.get('password')?.value;
    const pass2= this.registerForm.get('password2')?.value;
    if((pass1 !== pass2) && this.formSubmitted){
      return true;
    }else{ 
      return false;
    }
  }

  passwordIguales(pass1:string,pass2:string){
    
    return (formGroup:FormGroup)=>{
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);
      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors({noEsIgual: true});
      }
    }
  }
  aceptaTerminosyCondiciones(terminos:string){
    return (formGroup:FormGroup)=>{
      const terminosControl = formGroup.get(terminos);
      if(terminosControl?.value === true){
        terminosControl?.setErrors(null);
      }else{
        terminosControl?.setErrors({aceptaTerminosYCondiciones: false});
      }
    }
  }
}
