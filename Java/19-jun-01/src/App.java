import java.util.Arrays;

public class App {

	public static void main(String[] args) {
		Integer arr[]= {41,24,53,45,65};
		Arrays.sort(arr,(a,b)->b-a);
		for(Integer x:arr)
		{
			System.out.println(x);
		}
	}

}
