package com.harman.demo.util;


import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.harman.demo.model.Category;
import com.harman.demo.model.Department;
import com.harman.demo.model.Employee;
import com.harman.demo.model.Product;


public class DbUtil {

	public static SessionFactory getSessionFactory() {
		Configuration cfg=new Configuration();
		cfg.configure("hibernate.cfg.xml");
		cfg.addAnnotatedClass(Department.class);
		cfg.addAnnotatedClass(Employee.class);
		cfg.addAnnotatedClass(Category.class);
		cfg.addAnnotatedClass(Product.class);
		SessionFactory sf = cfg.buildSessionFactory();
		return sf;
	}
}
