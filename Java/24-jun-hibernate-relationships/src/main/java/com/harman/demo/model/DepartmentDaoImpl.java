package com.harman.demo.model;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.harman.demo.util.DbUtil;

public class DepartmentDaoImpl implements DepartmentDao {
	@Override
	public void create(Department department) {
		Session session = DbUtil.getSessionFactory()
		.openSession();
		Transaction txn = session.beginTransaction();
		Object id = session.save(department);
		txn.commit();
		session.close();
		System.out.println("Department is created. ID is: "+id);		
	}
	@Override
	public List<Department> read() {
		Session session = DbUtil.getSessionFactory()
				.openSession();
		Query<Department> query = session.createQuery("from Department", Department.class);
		List<Department> departments = query.list();
		session.close();
		return departments;
	}
	@Override
	public Department read(Long id) {
		Session session = DbUtil.getSessionFactory()
				.openSession();
		Department department = session.get(Department.class, id);
		session.close();
		return department;
	}
		
	@Override
	public void update(Department department) {
		Session session = DbUtil.getSessionFactory()
				.openSession();
				Transaction txn = session.beginTransaction();
				Object id = session.merge(department);
				txn.commit();
				session.close();
				System.out.println("Department is updated");		
	}
	@Override
	public void delete(Long id) {
		Session session = DbUtil.getSessionFactory()
				.openSession();
				Transaction txn = session.beginTransaction();
				Department department = session.get(Department.class, id);
				if(department!=null) {
				session.delete(department);
				}else
				{
					System.out.println("Nothing to delete");
				}
				
				session.close();
	}
	
}
