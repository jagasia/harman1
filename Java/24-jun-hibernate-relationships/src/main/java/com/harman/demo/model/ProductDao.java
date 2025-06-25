package com.harman.demo.model;

import java.util.List;

public interface ProductDao {

	void create(Product product);

	List<Product> read();

	Product read(Long id);

	void update(Product product);

	void delete(Long id);

}