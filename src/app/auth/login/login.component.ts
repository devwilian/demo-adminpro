import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

declare let gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css'],
})
export class LoginComponent implements OnInit {
  public formSubmitted = false;
  public auth2: any;
  public formLogin = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', Validators.required],
    remenber: [localStorage.getItem('remenber') || false],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.renderButton();
  }
  loginUser() {
    this.router.navigateByUrl('/admin');
    // this.formSubmitted=true;
    // if(this.formLogin.invalid){
    //   return;
    // }
    // this.authService.postLogin(this.formLogin.value).subscribe(res=>{
    //   console.log(res);
    //   if(this.formLogin.get('remenber')?.value){
    //     localStorage.setItem('email',this.formLogin.get('email')?.value);
    //     localStorage.setItem('remenber',this.formLogin.get('remenber')?.value);
    //   }else{
    //     localStorage.removeItem('email');
    //     localStorage.removeItem('remenber');
    //   }
    // },err=>{
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: err.error.msg
    //   });
    // });
  }
  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });
    this.startApp();
  }
  async startApp() {
    console.log('Login with google');
    // gapi.load('auth2', function(){
    //   // Retrieve the singleton for the GoogleAuth library and set up the client.
    //   this.auth2 = gapi.auth2.init({
    //     client_id: '274325183342-bgpjtuu19mh2jmt3v2ta99vct84e72b6.apps.googleusercontent.com',
    //     cookiepolicy: 'single_host_origin',
    //     // Request scopes in addition to 'profile' and 'email'
    //     //scope: 'additional_scope'
    //   });
    //   this.attachSignin(document.getElementById('my-signin2'));
    // });
  }
  attachSignin(element: any) {
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser: any) => {
        var id_token = googleUser.getAuthResponse().id_token;
        console.log(id_token);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
