import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule ,HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListMoviesComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    MovieComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
BrowserModule,
    AppRoutingModule
   
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorBasicAuthService,multi:true}], 
  
  bootstrap: [AppComponent]
})
export class AppModule { }
