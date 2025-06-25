package com.harman.demo.model;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.harman.demo.util.DbUtil;

public class CategoryDaoImpl implements CategoryDao {
	@Override
	public void create(Category category) {
		Session session = DbUtil.getSessionFactory().openSession();
		Transaction txn = session.beginTransaction();
		Object x = session.save(category);
		txn.commit();
		session.close();
		System.out.println("Category created with id: "+x);
	}
	@Override
	public List<Category> read() {
		Session session = DbUtil.getSessionFactory().openSession();
		Query<Category> query = session.createQuery("from Category", Category.class);
		List<Category> list = query.list();
		session.close();
		return list;
	}
	@Override
	public Category read(Long id) {
		Session session = DbUtil.getSessionFactory().openSession();
		Category category = session.get(Category.class, id);
		session.close();
		return category;
	}
	@Override
	public void update(Category category) {
		Session session = DbUtil.getSessionFactory().openSession();
		Transaction txn = session.beginTransaction();
		session.merge(category);
		txn.commit();
		session.close();
	}
	@Override
	public void delete(Long id) {
		Session session = DbUtil.getSessionFactory().openSession();
		Transaction txn = session.beginTransaction();
		session.delete(session.get(Category.class, id));
		txn.commit();
		session.close();
	}
	
}
