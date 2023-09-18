import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  username='arushi';
  password ='';
  errorMessage ='invalid credentials';
  invalidlogin=false;
  

  constructor(private router : Router , public hardcodedAuthService : HardcodedAuthService,
   private basicAuthservice:BasicAuthService){

   
  }


ngOnInit(): void {
 
}
handleLogin(){
 
  this.invalidlogin=this.hardcodedAuthService.authenticate(this.username, this.password);
  console.log(this.hardcodedAuthService.isUserLoggedIn());
  if(this.invalidlogin== true)this.router.navigate(['welcome', this.username]);
  
 
}

handleBasicAuthLogin(){
  console.log(this.username);
  console.log(this.password);
this.basicAuthservice.executeBasicAuth(this.username, this.password).subscribe(
  (  data: any)=>{
    console.log(data)

    this.router.navigate(['welcome',this.username])
    this.invalidlogin=false

  },
  (  error: any)=>{
    console.log(error)
    this.invalidlogin=true
  }
)
}
}