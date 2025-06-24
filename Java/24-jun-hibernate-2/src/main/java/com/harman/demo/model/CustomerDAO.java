package com.harman.demo.model;

import java.util.List;

public interface CustomerDAO {

	void create(Customer customer);

	List<Customer> read();

	Customer read(Long id);

	void update(Customer customer);

	void delete(Long id);

}