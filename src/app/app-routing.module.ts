import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:'welcome/:name', component:WelcomeComponent , canActivate:[RouteGaurdService]},
  {path:'login', component:LoginComponent},
  {path:'movies', component:ListMoviesComponent , canActivate:[RouteGaurdService]},
  {path:'logout',component:LogoutComponent},
  {path:'movie/:id', component:MovieComponent,canActivate:[RouteGaurdService]},
  {path:'' , component:LoginComponent},
{path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
