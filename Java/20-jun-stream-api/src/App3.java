import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class App3 {

	public static void main(String[] args) {
		List<String> list=Arrays.asList("India","Australia","Sri lanka","Japan","Bangladesh","China");
		List<String> result = list.stream()
		.map((s)->s.toUpperCase())
		.collect(Collectors.toList());
		
		for(String s:result) {
			System.out.println(s);
		}
	}

}
