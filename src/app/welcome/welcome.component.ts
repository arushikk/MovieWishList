import { Component, OnInit } from '@angular/core';
import  {AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message ='new message';
  username='';
  responseMessage="";
  

  //Actiavted route 
  constructor(private route : ActivatedRoute,
    public service:WelcomeDataService){}
  ngOnInit(): void {
    this.username=this.route.snapshot.params['name'];
    this.route.snapshot.params['name'];
  }

  getMessage(){
    
    console.log(this.service.executeHelloWorldBeanService(this.username));
    this.service.executeHelloWorldBeanService(this.username).subscribe(
    response=>this.handleSuccessfullResponse(response),
    error=>this.handleErrorResponse(error));
  }

  handleSuccessfullResponse(response:any):boolean{
   
    this.responseMessage = response.message;
    console.log(response.message);
    return true;
  }



handleErrorResponse(error :any){
  
  console.log(error);
  console.log(error.error);
  
  this.responseMessage=error.error.message;
  
}
}

export class one {
 print():void{
  console.log();
 }

}

//module - is one file contains classes and fntn definitions