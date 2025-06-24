package com.harman.demo.model;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.harman.demo.util.DbUtil;

public class EmployeeDaoImpl implements EmployeeDao {
	@Override
	public void create(Employee employee) {
		Session session = DbUtil.getSessionFactory()
		.openSession();
		Transaction txn = session.beginTransaction();
		Object id = session.save(employee);
		txn.commit();
		session.close();
		System.out.println("Employee is created. ID is: "+id);		
	}
	@Override
	public List<Employee> read() {
		Session session = DbUtil.getSessionFactory()
				.openSession();
		Query<Employee> query = session.createQuery("from Employee", Employee.class);
		List<Employee> employees = query.list();
		session.close();
		return employees;
	}
	@Override
	public Employee read(Long id) {
		Session session = DbUtil.getSessionFactory()
				.openSession();
		Employee employee = session.get(Employee.class, id);
		session.close();
		return employee;
	}
		
	@Override
	public void update(Employee employee) {
		Session session = DbUtil.getSessionFactory()
				.openSession();
				Transaction txn = session.beginTransaction();
				Object id = session.merge(employee);
				txn.commit();
				session.close();
				System.out.println("Employee is updated");		
	}
	@Override
	public void delete(Long id) {
		Session session = DbUtil.getSessionFactory()
				.openSession();
				Transaction txn = session.beginTransaction();
				Employee employee = session.get(Employee.class, id);
				if(employee!=null) {
				session.delete(employee);
				}else
				{
					System.out.println("Nothing to delete");
				}
				
				session.close();
	}
	
}
