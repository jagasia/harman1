package com.harman.demo.util;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.harman.demo.model.Customer;

public class DbUtil {

	public static SessionFactory getSessionFactory() {
		Configuration cfg=new Configuration();
		cfg.configure("hibernate.cfg.xml");
		cfg.addAnnotatedClass(Customer.class);
		SessionFactory sf = cfg.buildSessionFactory();
		return sf;
	}
}
