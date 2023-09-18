import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(user : string , password: string):boolean{
    if(user==='arushi' &&  password==='arushi'){
      sessionStorage.setItem('authenticatedUser',user);
      return true ;}
      else return false ;
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
