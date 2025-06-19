
public class AppSingleton {

	public static void main(String[] args) {
		Singleton s1=Singleton.getSingleton();
		Singleton s2=Singleton.getSingleton();
		
		s1.setName("Raja");
		s2.setName("Suresh");
		s1.setName("Ravi");
		System.out.println(s1.getName());
		System.out.println(s2.getName());
		
	}

}
