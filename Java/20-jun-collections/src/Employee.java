
public class Employee implements Comparable<Employee> {
	private Long id;
	private String name;
	private String department;
	private Double salary;
	
	public Employee() {}

	public Employee(Long id, String name, String department, Double salary) {
		super();
		this.id = id;
		this.name = name;
		this.department = department;
		this.salary = salary;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", department=" + department + ", salary=" + salary + "]";
	}

	@Override
	public int compareTo(Employee o) {
		if(this.getDepartment().equals(o.getDepartment())) {
			return this.getId().compareTo(o.getId());
		}else
		{
			return this.getDepartment().compareTo(o.getDepartment());
		}
	}
	
	
	
}
