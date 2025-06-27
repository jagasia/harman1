package com.harman.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
public class Application {
	
	@GetMapping
	public String home() {
		//call http://localhost:8085/person
		RestTemplate rt=new RestTemplate();
		String str = rt.getForObject("http://localhost:8085/person", String.class);
		return "hello world: "+str;
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
