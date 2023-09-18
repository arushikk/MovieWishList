package com.example.movieang;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin("http://localhost:4200")
public class MovieController {
	
	@Autowired
	private MovieService movieService ;
	
	@GetMapping("/BasicAuth")
	public HelloWorldBean getBean() {
		return new AuthenticationBean("authentiucated");
	}
	@GetMapping("/getBean/{name}")
	public HelloWorldBean getHelloMessage(@PathVariable String name) {
		return new HelloWorldBean("hello welcome here ");
	}
	
	@GetMapping("/get/{username}/movies")
	public List<Movies> getAllforuser(@PathVariable String username){
		return movieService.getAll();
			
	}
	
	@GetMapping("/user/{username}/movie/{id}")
	public Movies getMovie(@PathVariable String username , @PathVariable int id)
	{
		return movieService.findByID(id);
	}
	
	@PutMapping("/user/{username}/movie/{id}")
	public ResponseEntity<Movies> saveMovie(@PathVariable String username , @PathVariable int id, @RequestBody Movies movie) {
		Movies updated = movieService.save(movie);
		return new ResponseEntity<Movies>(movie , HttpStatus.OK);
	}
	
	@PostMapping("/user/{username}/movie")
	public ResponseEntity<Void> newMovie(@PathVariable String username , @RequestBody Movies movie) {
		Movies updated = movieService.save(movie);
	URI uri=	ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(updated.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("/deleteMovie/{username}/{id}")
	public ResponseEntity<Void> deleteMe(@PathVariable String username ,@PathVariable long id  ) {
		Movies movie = movieService.deleteById(id);
		return movie==null? ResponseEntity.notFound().build():ResponseEntity.noContent().build();
	}

}
