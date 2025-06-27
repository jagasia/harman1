import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

public class College {
	private String name;
	private String website;
	private String mobile;
	private String founder;
	private Integer numberOofDept;
	private String location;
	private Date createdDate;
	
	public College() {}

	public College(String name, String website, String mobile, String founder, Integer numberOofDept, String location,
			Date createdDate) {
		super();
		this.name = name;
		this.website = website;
		this.mobile = mobile;
		this.founder = founder;
		this.numberOofDept = numberOofDept;
		this.location = location;
		this.createdDate = createdDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getFounder() {
		return founder;
	}

	public void setFounder(String founder) {
		this.founder = founder;
	}

	public Integer getNumberOofDept() {
		return numberOofDept;
	}

	public void setNumberOofDept(Integer numberOofDept) {
		this.numberOofDept = numberOofDept;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	@Override
	public String toString() {
		return "College [name=" + name + ", website=" + website + ", mobile=" + mobile + ", founder=" + founder
				+ ", numberOofDept=" + numberOofDept + ", location=" + location + ", createdDate=" + createdDate + "]";
	}
	
	static Map<String,Integer> calculateLocationCount(List<College> list){
		Map<String,Integer> map=new TreeMap<>();
		//logic here...
		for(College college:list) {
			map.put(college.getLocation(), map.getOrDefault(college.getLocation(),0)+1);
		}
		return map;
	}
	
	
	static Map<String,Long> calculateLocationCount1(List<College> list){
		return list.stream()
				.collect(Collectors.groupingBy(College::getLocation, Collectors.counting()));
	}
	
	static Map<String, Integer> calculateLocationCount2(List<College> list) {
	    return list.stream()
	            .collect(Collectors.groupingBy(
	                    College::getLocation,
	                    TreeMap::new, // Use TreeMap instead of default HashMap
	                    Collectors.collectingAndThen(
	                            Collectors.counting(),
	                            Long::intValue // Convert Long to Integer
	                    )
	            ));
	}
}
