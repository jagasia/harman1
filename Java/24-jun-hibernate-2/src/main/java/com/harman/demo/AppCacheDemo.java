package com.harman.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.harman.demo.model.Customer;
import com.harman.demo.util.DbUtil;

public class AppCacheDemo {

	public static void main(String[] args) throws InterruptedException {
		SessionFactory sf = DbUtil.getSessionFactory();
		Session session = sf.openSession();
		Customer c1 = session.get(Customer.class, 1L);
		System.out.println(c1);
//		session.close();
//		
//		session = sf.openSession();
		
		Thread.sleep(30000);
		Customer c2 = session.get(Customer.class, 1L);
		System.out.println(c2);
		session.close();
		
		
	}

}
