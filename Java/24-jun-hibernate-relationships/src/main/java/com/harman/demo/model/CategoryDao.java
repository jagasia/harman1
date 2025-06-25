package com.harman.demo.model;

import java.util.List;

public interface CategoryDao {

	void create(Category category);

	List<Category> read();

	Category read(Long id);

	void update(Category category);

	void delete(Long id);

}