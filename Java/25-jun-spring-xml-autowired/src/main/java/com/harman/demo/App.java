package com.harman.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.harman.demo.model.Car;
import com.harman.demo.model.Sony;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext ctx=new ClassPathXmlApplicationContext("spring.xml");
//    	Sony sony= (Sony) ctx.getBean("sony");
    	Car car=(Car) ctx.getBean("car");
    	car.playMusic();
    }
}
