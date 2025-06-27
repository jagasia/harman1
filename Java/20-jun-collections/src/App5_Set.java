import java.util.HashSet;

public class App5_Set {

	public static void main(String[] args) {
		HashSet<Employee> set=new HashSet<>();
		set.add(new Employee(11L, "Raja", "IT", 100000.0));
		set.add(new Employee(1L, "Abdul", "CSE", 100000.0));
		set.add(new Employee(15L, "Zaheer", "CSE", 100000.0));
		set.add(new Employee(4L, "Babu", "IT", 100000.0));
		set.add(new Employee(6L, "Rajeesh", "CSE", 100000.0));
		set.add(new Employee(5L, "Chandru", "ECE", 100000.0));
		set.add(new Employee(10L, "Ravi", "IT", 100000.0));

		for(Employee e:set)
		{
			System.out.println(e);
		}
		
	}

}
