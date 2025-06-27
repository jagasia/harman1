package com.harman.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@RestController
public class MyController {

	@Autowired
	private RestTemplate rt;
	

	@GetMapping
	@CircuitBreaker(name = "jag", fallbackMethod = "fallbackMethod")
	public String home() {
		rt.getForEntity("http://localhost:5000/product", String.class);
		return "Home";
	}
	
	public String fallbackMethod(Throwable throwable) {
		return "Service is not available. circuit is broken";
	}
}
