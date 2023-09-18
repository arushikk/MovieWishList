package com.example.movieang;

import java.util.Date;
import java.util.Objects;

public class Movies {
	private long id ;
	private String username ;
	private String description ;
	private Date releaseDate;
	private boolean inCinemas;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}
	public boolean isInCinemas() {
		return inCinemas;
	}
	public void setInCinemas(boolean inCinemas) {
		this.inCinemas = inCinemas;
		
		
		
		
	}
	
	public Movies(long id, String username, String description, Date releaseDate, boolean inCinemas) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.releaseDate = releaseDate;
		this.inCinemas = inCinemas;
		
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Movies other = (Movies) obj;
		return id == other.id;
	}
	
	

}
