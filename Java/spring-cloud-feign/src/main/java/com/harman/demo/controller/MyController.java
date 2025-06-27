package com.harman.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harman.demo.Product;
import com.harman.demo.api.ProductApi;

@RestController
public class MyController {
	@Autowired
	private ProductApi api;

	@GetMapping
	public ResponseEntity<List<Product>> home() {
		ResponseEntity<List<Product>> products = api.read();
		return products;
	}
}
