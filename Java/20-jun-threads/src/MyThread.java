
public class MyThread extends Thread
{
	NumberGenerator ng=null;
	
	public MyThread(NumberGenerator ng) {
		this.ng=ng;
	}
	
	public void run() {
		try {
			ng.display();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
