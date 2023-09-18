import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(
    private http:HttpClient
  ) { }

  


  executeBasicAuth(username:string, password:string){

    let basicAuth=('Basic ' +window.btoa(`${username}:${password}`));
    let headers = new HttpHeaders({
      Authorization :basicAuth
    })
    return this.http.get<Authenticationbean>(`http://localhost:8080/BasicAuth`,{headers}).pipe(
      map(
        (        data: any)=>{
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem('token',basicAuth);
          
          return data;
        }
      )
    );
    console.log("hey");
  }


  createBasicAuthHTTPheader(){
    let username='arushi';
    let password='4628';

    let basicAuth=('Basic ' +window.btoa(`${username}:${password}`));

    return basicAuth;

  }

  getAuthenticatedToken(){
    //if(this.getAuthenticatedUser!=null)
    return sessionStorage.getItem('token');
 
  }

  getAuthenticatedUser(){
    
   return sessionStorage.getItem('authenticatedUser');
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class Authenticationbean{
  constructor(message:string){}
}