package com.harman.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.harman.demo.entity.Product;
import com.harman.demo.exception.ProductNotFoundException;
import com.harman.demo.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository pr;
	
	public Product create(Product product) {
		return pr.save(product);
	}
	
	public List<Product> read() {
		return pr.findAll();
	}
	
	public Product read(Long id) {
		Optional<Product> temp = pr.findById(id);
		Product product=null;
		if(temp.isPresent()) {
			product=temp.get();
		}else {
			throw new ProductNotFoundException(id);
		}
		return product;
	}
	
	public Product update(Long id, Product product) {
		Product temp=read(id);
		if(temp!=null) {
			pr.save(product);
		}
		return temp;
	}
	
	public Product delete(Long id) {
		Product temp=read(id);
		if(temp!=null) {
			pr.delete(temp);
		}
		return temp;
	}
	
	public List<Product> findByCategory(String category) {
		return pr.findByCategory(category);
	}
	
	public List<Product> findProductsInRange(Double from, Double to){
		return pr.findProductsInRange(from, to);
	}
	
}
