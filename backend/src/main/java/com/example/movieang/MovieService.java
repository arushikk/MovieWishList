package com.example.movieang;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MovieService {
	
	private static List<Movies> listOfMovies = new ArrayList();
	private static long id =0;
	
	static {
		listOfMovies.add(new Movies(++id, "MOVIE 1", " one" , new Date(2-03-2010), true));
		listOfMovies.add(new Movies(++id, "MOVIE 2", " two" , new Date(1-10-2023), true));
		
		listOfMovies.add(new Movies(++id, "MOVIE 3", " three" , new Date(12-12-2022), true));
		listOfMovies.add(new Movies(++id, "MOVIE 4", " four" , new Date(10-12-2020), true));
	}
	
	public List<Movies> getAll(){
		return listOfMovies;
	}
	
	public Movies findByID(long id) {
		
		for(Movies movie : listOfMovies) {
			if(movie.getId()== id) {
				
				return movie;
			}
		}
		return null;
	}
	
	public Movies deleteById(long id) {
		Movies movie = findByID(id);
		if(movie ==null) return null;
		listOfMovies.remove(movie);
		return movie;
	}
	
	public Movies save(Movies movie) {
		if(movie.getId()==-1 || movie.getId()==0) {
			movie.setId(++id);
			listOfMovies.add(movie);
		}
		else {
			Movies tobeUpdated = findByID(movie.getId());
			tobeUpdated.setDescription(movie.getDescription());
			tobeUpdated.setReleaseDate(movie.getReleaseDate());
			
		}
		return movie;
		
	}

}
