import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class App4 {

	public static void main(String[] args) {
		List<Employee> list=new ArrayList<>();
		list.add(new Employee(11L, "Raja", "IT", 100000.0));
		list.add(new Employee(1L, "Abdul", "CSE", 100000.0));
		list.add(new Employee(15L, "Zaheer", "CSE", 100000.0));
		list.add(new Employee(4L, "Babu", "IT", 100000.0));
		list.add(new Employee(6L, "Rajeesh", "CSE", 100000.0));
		list.add(new Employee(5L, "Chandru", "ECE", 100000.0));
		list.add(new Employee(10L, "Ravi", "IT", 100000.0));
		
		//How can we sort this list?
		
//		Collections.sort(list, (a,b)->a.getDepartment().compareTo(b.getDepartment()));
		Collections.sort(list);
		
		for(Employee employee : list)
		{
			System.out.println(employee);
		}
	}

}
