
public class App2 {

	public static void main(String[] args) {
		Thread t1=new Thread(()->{
			for(int i=1;i<=10;i++) {
				System.out.println(i);
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		});
		
		t1.start();
	}

}
