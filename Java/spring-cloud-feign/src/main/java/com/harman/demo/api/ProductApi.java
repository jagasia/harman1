package com.harman.demo.api;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.harman.demo.Product;

@FeignClient(name = "product-api", url = "http://localhost:5000/product")
public interface ProductApi {

	@PostMapping
	@ResponseStatus(value = HttpStatus.CREATED)
	public Product create(@RequestBody Product product);
	
	@GetMapping
	public ResponseEntity<List<Product>> read();
	
	@GetMapping("/{id}")
	public Product read(@PathVariable("id") Long id);
	
	@PutMapping("/{id}")
	public Product update(@PathVariable Long id, @RequestBody Product product);	

	@DeleteMapping("/{id}")
	public ResponseEntity<Product> delete(@PathVariable Long id);
	
	@GetMapping("/category/{category}")
	public List<Product> findByCategory(@PathVariable String category);
	
	@GetMapping("/range/{from}/{to}")
	public List<Product> findProductsInRange(@PathVariable("from") Double from,@PathVariable Double to);
}
