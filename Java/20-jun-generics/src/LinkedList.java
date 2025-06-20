
public class LinkedList<T> {
	Node<T> start;	

	public LinkedList() {}

	public LinkedList(Node<T> start) {
		super();
		this.start = start;
	}
	
	public void add(T data) {
		Node<T> curr=new Node<>();
		curr.setData(data);
		if(start==null) {
			//adding the first node
			start=curr;
		}else
		{
			//find ref to last node
			Node temp=null;
			for(temp=start;temp.next!=null;temp=temp.next);
			temp.next=curr;
		}
	}
	
	public void traverse() {
		for(Node temp=start;temp!=null;temp=temp.next) {
			System.out.println(temp.getData());
		}
	}
	
}
