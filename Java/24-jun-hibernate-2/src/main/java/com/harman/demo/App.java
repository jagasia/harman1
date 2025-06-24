package com.harman.demo;

import java.util.List;

import com.harman.demo.model.Customer;
import com.harman.demo.model.CustomerDAO;
import com.harman.demo.model.CustomerDAOImpl;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
//    	Customer customer=new Customer(2L, "Suresh", "Raja street, New Delhi", "1212121212");
    	CustomerDAO cdao=new CustomerDAOImpl();
//    	cdao.update(customer);
    	
//    	List<Customer> customers = cdao.read();
//    	for(Customer c:customers) {
//    		System.out.println(c);
//    	}
    	
//    	Customer x = cdao.read(1L);
//    	System.out.println(x);
    	
    	cdao.delete(2L);

        System.out.println( "Hello World!" );
    }
}

