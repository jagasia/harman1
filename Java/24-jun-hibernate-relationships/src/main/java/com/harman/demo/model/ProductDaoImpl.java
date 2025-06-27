package com.harman.demo.model;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.harman.demo.util.DbUtil;

public class ProductDaoImpl implements ProductDao {
	@Override
	public void create(Product product) {
		Session session = DbUtil.getSessionFactory().openSession();
		Transaction txn = session.beginTransaction();
		Object x = session.save(product);
		txn.commit();
		session.close();
		System.out.println("Product created with id: "+x);
	}
	@Override
	public List<Product> read() {
		Session session = DbUtil.getSessionFactory().openSession();
		Query<Product> query = session.createQuery("from Product", Product.class);
		List<Product> list = query.list();
		session.close();
		return list;
	}
	@Override
	public Product read(Long id) {
		Session session = DbUtil.getSessionFactory().openSession();
		Product product = session.get(Product.class, id);
		session.close();
		return product;
	}
	@Override
	public void update(Product product) {
		Session session = DbUtil.getSessionFactory().openSession();
		Transaction txn = session.beginTransaction();
		session.merge(product);
		txn.commit();
		session.close();
	}
	@Override
	public void delete(Long id) {
		Session session = DbUtil.getSessionFactory().openSession();
		Transaction txn = session.beginTransaction();
		session.delete(session.get(Product.class, id));
		txn.commit();
		session.close();
	}
	
}
