import java.util.Arrays;
import java.util.List;

public class App5 {

	public static void main(String[] args) {
		List<String> list=Arrays.asList("India","Australia","Sri lanka","Japan","Bangladesh","China");
		list.stream()
		.filter((x)->x.startsWith("A"))
		.forEach(System.out::println);
	}

}
