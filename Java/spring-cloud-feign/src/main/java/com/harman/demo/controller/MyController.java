package com.harman.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.harman.demo.Product;
import com.harman.demo.api.ProductApi;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@RestController
public class MyController {
	@Autowired
	private ProductApi api;

	@GetMapping
	@CircuitBreaker(name = "jag",fallbackMethod = "fallbackMethod")
	public ResponseEntity<List<Product>> home() {
		ResponseEntity<List<Product>> products = api.read();
		return products;
	}
	
	@GetMapping("/another")
	public Product another() {
		RestTemplate rt=new RestTemplate();
		return rt.getForObject("http://localhost:5000/product", Product.class);
	}
	
	@GetMapping("/about")
	public String about() {
		return "about";
	}
	
	public String fallbackMethod(Throwable throwable)
	{
		return "This is fallbakc method";
	}
}
