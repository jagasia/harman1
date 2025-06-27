import java.util.Comparator;
import java.util.TreeSet;

class EmployeeIdComparator implements Comparator<Employee>{

	@Override
	public int compare(Employee o1, Employee o2) {
		return o1.getId().compareTo(o2.getId());
	}
	
}

public class App5_TreeSet {

	public static void main(String[] args) {
		TreeSet<Employee> set=new TreeSet<>(new EmployeeIdComparator());
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
