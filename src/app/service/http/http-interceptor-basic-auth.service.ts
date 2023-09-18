import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthService : BasicAuthService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
      // let username='arushi';
      // let password='4628';
      //let basicAuth=('Basic ' +window.btoa(`${username}:${password}`));
      let token =this.basicAuthService.getAuthenticatedToken();
      let username = this.basicAuthService.getAuthenticatedUser();
  
      
     if(token &&username){
      
     
     req=req.clone({
      setHeaders:{
        Authorization:token
      }
     })
    }

     return next.handle(req);
  
    
  }
}
