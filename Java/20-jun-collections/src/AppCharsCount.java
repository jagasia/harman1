import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

public class AppCharsCount {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		String input=sc.nextLine();
		Map<Character, Integer> map=new LinkedHashMap<>();
		//lets iterate each character present in the input string
		
		for(char c : input.toCharArray()) {
//			Integer count = map.get(c);
//			if(count==null) {
//				count=0;
//			}
//			count++;
//			map.put(c, count);
			map.put(c, map.getOrDefault(c, 0)+1);
		}
		
		for(Entry<Character, Integer> e:map.entrySet()) {
			System.out.printf("%c\t%d\n",e.getKey(),e.getValue());
		}
	}

}
