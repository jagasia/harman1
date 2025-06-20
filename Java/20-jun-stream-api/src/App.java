import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Stream;

class MyPredicate implements Predicate<String>{
	
	@Override
	public boolean test(String t) {
		return t.length()>5;
	}
	
}



public class App {

	boolean test(String t) {
		return t.length()>5;
	}
	
	public static void main(String[] args) {
		List<String> countries=new ArrayList<>();
		countries.add("India");
		countries.add("Australia");
		countries.add("Sri lanka");
		countries.add("China");
		countries.add("Japan");
		countries.add("Iran");
		countries.add("Germany");
		
//		Stream<String> s1 = countries.stream();
//		Stream<String> s2 = s1.filter(new MyPredicate());
//		Stream<String> s3 = s2.sorted();
//		//terminal operation can be collect or forEach
//		
//		s3.forEach(System.out::println);

//		countries.stream()
//		.filter(new MyPredicate())
//		.sorted()
//		.forEach(System.out::println);

		
		
		countries.stream()
		.filter((t)->t.length()>5)
		.sorted()
		.forEach(System.out::println);

		

		countries.stream()
		.filter(new App()::test)
		.sorted()
		.forEach(System.out::println);

		
	}

}

