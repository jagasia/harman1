package com.harman.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.harman.demo.model.Calculator;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext ctx=new ClassPathXmlApplicationContext("spring.xml");
    	Calculator calc = ctx.getBean(Calculator.class);
    	System.out.println(calc.sum());
        System.out.println( "Hello World!" );
    }
}
