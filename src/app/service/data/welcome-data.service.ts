import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';



@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {

  constructor(public http: HttpClient,
    private basicAuth :BasicAuthService) { }

  executeHelloWorldBeanService(name :String){
    let basicAuthheaderString = this.basicAuth.getAuthenticatedToken();

  
    return this.http.get<hellobean>(`http://localhost:8080/getBean/${name}`);
    console.log("hey");
  }


  // createBasicAuthHTTPheader(){
  //   let username='arushi';
  //   let password='4628';

  //   let basicAuth=('Basic ' +window.btoa(`${username}:${password}`));

  //   return basicAuth;

  // }
}

export class hellobean{
 

  num=2;
  constructor(message : String){}
}
