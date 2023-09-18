import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { movies } from 'src/app/list-movies/list-movies.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http:HttpClient) { }


  retrieveMovies(username:String){
return this.http.get<movies[]>(`${API_URL}/get/${username}/movies`);
  }

  deleteMovie(username : String ,id:any){
    return this.http.delete<movies>(`${API_URL}/deleteMovie/${username}/${id}`);
  }

  retrieveSingleMovie(username:String , id:any){
    return this.http.get<movies>(`${API_URL}/user/${username}/movie/${id}`)
  }

  updateMovies(username: String , id: any , movie :movies){
    return this.http.put<movies>(`${API_URL}/user/${username}/movie/${id}` ,movie);
  }

  addNewMovie(username :String , id:any , movie:movies){
    return this.http.post<movies>(`${API_URL}/user/${username}/movie`, movie);
  }

}
