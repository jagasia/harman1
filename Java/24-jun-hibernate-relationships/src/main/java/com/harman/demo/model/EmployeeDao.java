package com.harman.demo.model;

import java.util.List;

public interface EmployeeDao {

	void create(Employee employee);

	List<Employee> read();

	Employee read(Long id);

	void update(Employee employee);

	void delete(Long id);

}