package com.harman.demo.model;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.harman.demo.util.DbUtil;

public class CustomerDAOImpl implements CustomerDAO {

	@Override
	public void create(Customer customer) {
		SessionFactory sf = DbUtil.getSessionFactory();
		Session session = sf.openSession();
		Transaction txn = session.beginTransaction();
//		session.persist(customer);
		Object id = session.save(customer);
		System.out.println("Customer created. Kindly note the ID: ");
		System.out.println(id);
		txn.commit();
		session.clear();
	}
	@Override
	public List<Customer> read() {
		SessionFactory sf = DbUtil.getSessionFactory();
		Session session = sf.openSession();
		Query<Customer> query = session.createQuery("select c from Customer c",Customer.class);
		return query.list();
	}
	
	@Override
	public Customer read(Long id) {
		SessionFactory sf = DbUtil.getSessionFactory();
		Session session = sf.openSession();
		Customer managed = session.get(Customer.class, id);
		return managed;
	}
	
	@Override
	public void update(Customer customer) {
		SessionFactory sf = DbUtil.getSessionFactory();
		Session session = sf.openSession();
		Transaction txn = session.beginTransaction();
//		session.persist(customer);	 //detached entity error
//		detached entity passed to persist: com.harman.demo.model.Customer
		session.merge(customer);
		txn.commit();
		session.close();
	}
	@Override
	public void delete(Long id) {
		SessionFactory sf = DbUtil.getSessionFactory();
		Session session = sf.openSession();
		Transaction txn = session.beginTransaction();
		Customer x = session.get(Customer.class, id);
		if(x!=null) {
			session.delete(x);
		}else {
			System.out.println("Nothing to delete");
		}
		
		txn.commit();
		session.close();
	}
	
}
