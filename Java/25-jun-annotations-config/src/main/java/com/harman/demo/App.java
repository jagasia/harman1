package com.harman.demo;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.harman.demo.config.MyConfiguration;
import com.harman.demo.model.Car;
import com.harman.demo.model.Product;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        AnnotationConfigApplicationContext ctx=new AnnotationConfigApplicationContext(MyConfiguration.class);
//        ctx.scan("com");
//        ctx.refresh();
        
//        Car car=ctx.getBean(Car.class);
//        car.playMusic();
        
        Product p= (Product) ctx.getBean("product");
        System.out.println(p);
    }
}
