
public class AppSync1 {

	public static void main(String[] args) {
		NumberGenerator ng=new NumberGenerator();
		MyThread t1=new MyThread(ng);
		MyThread t2=new MyThread(ng);
		
		t1.setName("Jag");
		t2.setName("Raja");
		
		t1.start();
		t2.start();
	}

}
