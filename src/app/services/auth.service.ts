import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public num: number = 0;
  public user: boolean = true;
  url: string = " https://test.agetic.gob.bo/asuss-asegurado-api";
  constructor(
    private http:HttpClient
  ) {}
  headers: HttpHeaders=new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer "+localStorage.getItem("token")
  });
  login(datos){
    return this.http.post(this.url+"/api/v1/login",datos);
  }
  validacionafiliado(datos){
    return this.http.post(this.url+"/api/v1/validacion/afiliado",datos,{ headers:this.headers});
  }
}
