package com.harman.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.harman.demo.model.Jbl;

@Configuration
@ComponentScan(basePackages = {"com"})
public class MyConfiguration {

	@Bean
	public Jbl jbl2() {
		return new Jbl();
	}
}
