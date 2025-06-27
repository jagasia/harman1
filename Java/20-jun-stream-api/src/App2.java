import java.util.Arrays;
import java.util.List;

public class App2 {

	public static void main(String[] args) {
		List<Integer> list=Arrays.asList(41,24,35,54,65,61,27,83,49);
		list.stream()
		.filter((x)->x%2==0)
		.forEach(System.out::println);
	}

}
