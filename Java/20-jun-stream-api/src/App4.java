import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class App4 {

	public static void main(String[] args) {
		List<String> list=Arrays.asList("India","Australia","Sri lanka","Japan","Bangladesh","China");
		list.stream()
//		.sorted()
//		.sorted(Comparator.reverseOrder())
		.sorted((a,b)->b.compareTo(a))
		.forEach(System.out::println);
	}

}
