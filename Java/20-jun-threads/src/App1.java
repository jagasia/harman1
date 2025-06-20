
class Odd implements Runnable{

	@Override
	public void run() {
		for(int i=1;i<=20;i+=2) {
			System.out.println("Odd: "+i);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}


class Even implements Runnable{

	@Override
	public void run() {
		for(int i=2;i<=20;i+=2) {
			System.out.println("Even: "+i);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}


public class App1 {

	public static void main(String[] args) {
		Thread t1=new Thread(new Odd());
		Thread t2=new Thread(new Even());
		
		t1.start();
		t2.start();
	}

}
