package com.harman.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestParam;



class Person{
	int id;
	String name;
	
	public Person() {}

	public Person(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}

@RestController
public class HomeController {
	@Value("${spring.application.name}")
	private String appName;

	@GetMapping
	public String home() {
		return "Welcome to "+appName;	//not view name. it is response body
	}
	
	@GetMapping(value="/person")
	public Person person(HttpServletResponse response) {
		response.setContentType("text/html");
		Person p=new Person();
		p.id=1;
		p.name="Raja";
		return p;
	}
	
	
	
}
