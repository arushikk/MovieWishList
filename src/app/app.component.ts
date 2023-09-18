import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root', //tag-name of the cmponent
  templateUrl: './app.component.html',
  template:'<h1>{{message}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj';
  message ='welcome to movie booking app';

  
}
