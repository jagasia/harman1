class Two extends Thread
{

	@Override
	public void run() {
		for(int i=1;i<=5;i++) {
			System.out.println(this.getName()+"Two");
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}

public class App2 {

	public static void main(String[] args) throws InterruptedException {
		One t1=new One();
		Two t2=new Two();
		One t3=new One();
		Two t4=new Two();
		
		t1.setName("1");
		t2.setName("2");
		t3.setName("3");
		t4.setName("4");
		
		
		t1.start();
//		t1.join();		//until whoever started already, completes, the others are made wait
		t2.start();		
		t3.start();
		t3.join();
		t4.start();
	}

}
