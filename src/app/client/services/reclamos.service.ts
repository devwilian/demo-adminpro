import { Injectable } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/registerform.interface';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const base_url = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  constructor(private httpClient: HttpClient) { }

  postUsuario(formData:RegisterForm){
    return this.httpClient.post(`${base_url}/reclamos`,formData)
                    .pipe(tap((res:any)=>{
                      localStorage.setItem('token',res.token)
                    }));
  }
}
