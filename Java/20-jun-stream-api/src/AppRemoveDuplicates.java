import java.util.Arrays;
import java.util.List;

public class AppRemoveDuplicates {

	public static void main(String[] args) {
		List<String> list=Arrays.asList("India","Australia","Sri lanka","China","Japan","Bangladesh","China");
		list.stream()
		.distinct()
		.forEach(System.out::println);
	}
}
