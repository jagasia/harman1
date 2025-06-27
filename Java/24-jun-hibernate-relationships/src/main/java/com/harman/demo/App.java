package com.harman.demo;

import java.util.List;

import com.harman.demo.model.Department;
import com.harman.demo.model.DepartmentDao;
import com.harman.demo.model.DepartmentDaoImpl;
import com.harman.demo.model.Employee;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
//    	Department d1=new Department(null, "IT");
//    	Department d2=new Department(null, "CSE");
//    	Department d3=new Department(null, "EEE");
//    	Department d4=new Department(null, "AI & ML");
//    	Department d5=new Department(null, "AI & DS");
//    	
    	DepartmentDao ddao2 = new DepartmentDaoImpl();
//    	ddao2.create(d1);
//    	ddao2.create(d2);
//    	ddao2.create(d3);
//    	ddao2.create(d4);
//    	ddao2.create(d5);
    	
    	Department dept = ddao2.read(1L);
    	
    	List<Employee> emps = dept.getEmployees();
    	for(Employee e:emps)
    		System.out.println(e);
    	
    	
        System.out.println( "Hello World!" );
    }
}
