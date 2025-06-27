import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class AppMinMax {

	public static void main(String[] args) {
		List<Integer> list=Arrays.asList(41,24,35,54,65,61,27,83,49);
		Optional<Integer> x = list.stream()
		.max(Integer::compareTo);
		
		if(x.isPresent())
			System.out.println(x.get());
		else
		{
			System.out.println("No result found");
		}
		
	}

}
