package com.harman.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.harman.demo.model.Bank;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
//        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
    	AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext();
    	context.scan("com");
    	context.refresh();

        Bank bank = context.getBean("bank", Bank.class);

        bank.withdraw();
        System.out.println("----");
        bank.deposit();
    }
}
