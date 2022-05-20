import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/registerform.interface';
import { environment } from '../../environments/environment.prod';
import { tap } from 'rxjs/operators';
const base_url = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }

  postUsuario(formData:RegisterForm){
    return this.httpClient.post(`${base_url}/usuarios`,formData)
                    .pipe(tap((res:any)=>{
                      localStorage.setItem('token',res.token)
                    }));
  }
}
