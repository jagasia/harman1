package com.harman.demo;

import com.harman.demo.model.Department;
import com.harman.demo.model.DepartmentDao;
import com.harman.demo.model.DepartmentDaoImpl;
import com.harman.demo.model.Employee;
import com.harman.demo.model.EmployeeDao;
import com.harman.demo.model.EmployeeDaoImpl;

public class App2 {

	public static void main(String[] args) {
		DepartmentDao ddao=new DepartmentDaoImpl();
		EmployeeDao edao=new EmployeeDaoImpl();
		
//		Department dept = ddao.read(2L);
//		Employee e1=new Employee(null, "Abdul", new Department(1L,null));
		
		Employee emp = edao.read(2L);
		System.out.println(emp);
//		edao.create(e1);
	}
}
