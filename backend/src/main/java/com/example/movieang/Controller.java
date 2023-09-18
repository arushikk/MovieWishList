package com.example.movieang;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("http://localhost:4200/")
public class Controller {
	
	@GetMapping("/getA")
	public String get() {
		return "hello";
	}
	
	
	

}
