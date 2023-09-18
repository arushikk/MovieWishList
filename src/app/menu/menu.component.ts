import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  // userLoggedIn = false;
  constructor(public hardcodedAuth : HardcodedAuthService){}
  ngOnInit(): void {
  // this.userLoggedIn =this.hardcodedAuth.isUserLoggedIn();
  }

}
