package com.harman.demo.exception;

public class ProductNotFoundException extends RuntimeException {
	public ProductNotFoundException(Long id) {
		super("No Product found with id: "+id);
	}
}
