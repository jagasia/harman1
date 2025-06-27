
public class NumberGenerator {

	public void display() throws InterruptedException {
		String name=Thread.currentThread().getName();
		
		System.out.println(name+" has entered the display method");
		System.out.println(name+" has entered the first for loop");
		for(int i=0;i<10;i++) {			
			System.out.println(name+" : " + i);
			Thread.sleep(1000);
		}
		
		synchronized (this) {
			System.out.println(name+" has entered the sync block");
			for(int i=0;i<10;i++) {				
				System.out.println(name+" : " + i);
				Thread.sleep(1000);
			}
			System.out.println("Last line of sync block by "+name);
		}

		System.out.println(name+" has exited the display method");
	}
}
