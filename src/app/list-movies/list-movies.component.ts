import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../service/data/movies-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit{
  movie: movies[] = [];
  message="";

  //  new movies (1, "Gadar 2" , true , new Date()),
  //  new movies (2, "OMG 2 " , true , new Date()),
  //  new movies (1, "Scream VI" , true , new Date()),
  //  new movies (1, "Barbie" , true , new Date()),
  //  new movies (1, "Avatar" , false , new Date()),

  constructor(private movieService:MoviesDataService,
    private router:Router
    ){}
  ngOnInit() {
    this.movieService.retrieveMovies('arushi').subscribe(
      response =>{  console.log(response);
        this.movie=response;
      })
  }

  deleteMovie(id:any){
    this.movieService.deleteMovie("arushi",id).subscribe(response=>
      
      {//console.log(response.description);
        this.message=id +" has been deleted";
        this.refreshMovies();

      });
  }

  updateMovie(id : any){
    console.log(id+"updated");
    this.router.navigate(['movie',id]);
  }
  
  
refreshMovies(){
  this.movieService.retrieveMovies('arushi').subscribe(
    response =>{  console.log(response);
      this.movie=response;
    })
}

addNew(){
  
  console.log("add new");
  this.router.navigate(['movie',-1]); 
}
}
export class movies{
  

  constructor(
    public id : number ,
     public username : String,
     public description:String,
     public inCinemas : boolean,
     public releaseDate :Date
     ){}
}
