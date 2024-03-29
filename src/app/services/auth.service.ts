import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { LoginForm } from '../interfaces/loginform.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const base_url = environment.BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  postLogin(formData:LoginForm){
    // console.log('Auth service ',formData);
    return this.httpClient.post(`${base_url}/login`,formData)
                    .pipe(tap((res:any)=>{
                      localStorage.setItem('token',res.token)
                    }));
  }
}
