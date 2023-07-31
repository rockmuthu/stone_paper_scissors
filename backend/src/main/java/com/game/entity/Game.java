package com.game.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Game {

	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	public String name;
	public String userScore;
	public String compScore;
	public String status;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserScore() {
		return userScore;
	}
	public void setUserScore(String userScore) {
		this.userScore = userScore;
	}
	public String getCompScore() {
		return compScore;
	}
	public void setCompScore(String compScore) {
		this.compScore = compScore;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
