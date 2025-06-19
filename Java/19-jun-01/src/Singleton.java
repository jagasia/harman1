
public class Singleton {
	private static Singleton obj=null;
	
	private Singleton() {}
	
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public static Singleton getSingleton() {
		if(obj==null) {
			obj=new Singleton();
		}
		return obj;
	}
	
}
