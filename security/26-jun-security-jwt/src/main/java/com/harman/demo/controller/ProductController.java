package com.harman.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.harman.demo.entity.Product;
import com.harman.demo.service.ProductService;

@RestController
@RequestMapping("/api/v2/product")
public class ProductController {
	@Autowired
	private ProductService ps;
	
	@PostMapping
	@PreAuthorize("hasAnyAuthority('admin')")
	@ResponseStatus(value = HttpStatus.CREATED)
	public Product create(@RequestBody Product product) {
		return ps.create(product);
	}
	
	@GetMapping
	@PreAuthorize("hasAnyAuthority('admin','user')")
	public ResponseEntity<List<Product>> read() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(ps.read());
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAnyAuthority('admin','user')")
	public Product read(@PathVariable("id") Long id) {
		return ps.read(id);
	}
	
	@PutMapping("/{id}")
	@PreAuthorize("hasAnyAuthority('admin')")
	public Product update(@PathVariable Long id, @RequestBody Product product) {
		return ps.update(id, product);
	}
	
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAnyAuthority('admin')")
	public ResponseEntity<Product> delete(@PathVariable Long id) {
		ps.delete(id);
		return ResponseEntity
				.status(HttpStatus.NO_CONTENT)
				.build();
	}
	
	@GetMapping("/category/{category}")
	public List<Product> findByCategory(@PathVariable String category) {
		return ps.findByCategory(category);
	}
	
	@GetMapping("/range/{from}/{to}")
	public List<Product> findProductsInRange(@PathVariable("from") Double from,@PathVariable Double to){
		return ps.findProductsInRange(from, to);
	}
}