package com.harman.demo;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.harman.demo.config.MyConfiguration;
import com.harman.demo.model.Car;

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
        
        Car car=ctx.getBean(Car.class);
        
        car.playMusic();
    }
}
