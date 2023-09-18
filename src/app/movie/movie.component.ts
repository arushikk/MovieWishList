import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../service/data/movies-data.service';
import { movies } from '../list-movies/list-movies.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  
  id=1;
 movie = new movies(1, "dummy","",false , new Date());



  constructor(private movieService:MoviesDataService,
    private route : ActivatedRoute,
    private router :Router){

  

}


ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.movie.id=this.id;

  if(this.id!=-1){
  this.movieService.retrieveSingleMovie("arushi", this.id).subscribe(
    data=>this.movie=data
  )}
}

saveMovie(){

  if(this.movie.id==-1){
    this.movieService.addNewMovie("arushi", this.id, this.movie).subscribe(
      data=>this.movie =data
      );
      this.router.navigate(['movies']);
    }
    else{
  
  this.movieService.updateMovies("arushi",this.id, this.movie).subscribe(
    data=>this.movie =data
  );
  this.router.navigate(['movies']);
}}
}