import java.util.List;
import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import com.harman.demo.model.Customer;
import com.harman.demo.util.DbUtil;

public class AppQueries {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the name:");
		String name=sc.nextLine();
		SessionFactory sf = DbUtil.getSessionFactory();
		Session session = sf.openSession();
		Query<Customer> query = session.createQuery("from Customer c where c.name=:name", Customer.class);
		query.setParameter("name", name);
		List<Customer> customers = query.list();
		for(Customer c:customers)
			System.out.println(c);
	}

}
