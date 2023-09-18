import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  constructor(public hardcodeAuth: HardcodedAuthService, public router : Router) { }
  canActivate(route: ActivatedRouteSnapshot , state : RouterStateSnapshot){
  if(this.hardcodeAuth.isUserLoggedIn())
    return true;
    this.router.navigate(['login']);
     return false;
  }
}
