package com.harman.demo.model;

import java.util.List;

public interface DepartmentDao {

	void create(Department department);

	List<Department> read();

	Department read(Long id);

	void update(Department department);

	void delete(Long id);

}