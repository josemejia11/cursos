import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBPRqLM-wua-pLpST8cOUbSTsfMi_8nsqE';
  userToken: string;

  //register
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http:HttpClient) { 
    this.leerToken();
  }


  logout(){
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData).pipe(
      map( res => {
        this.guardarToken(res['idToken']);
        return res;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}signUp?key=${this.apiKey}`, authData).pipe(
      map( res => {
        this.guardarToken(res['idToken']);
        return res;
      })
    );
  }

  private guardarToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  getToken(): boolean {
    if(this.userToken.length < 2){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();

    expiraDate.setTime(expira);

    if(expiraDate > new Date()){
      return true;

    }else {
      return false;
    }

    
  }
}

