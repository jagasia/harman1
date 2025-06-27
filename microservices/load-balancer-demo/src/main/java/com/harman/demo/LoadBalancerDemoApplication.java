package com.harman.demo;

import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class LoadBalancerDemoApplication {

	public static void main(String[] args) {
//		SpringApplication.run(LoadBalancerDemoApplication.class, args);
		ConfigurableApplicationContext ctx = new SpringApplicationBuilder(LoadBalancerDemoApplication.class)
				.web(WebApplicationType.NONE).run(args);

		WebClient loadBalancedClient = ctx.getBean(WebClient.Builder.class).build();

		for (int i = 1; i <= 10; i++) {
			String response = loadBalancedClient.get().uri("http://localhost:5001").retrieve().toEntity(String.class)
					.block().getBody();
			System.out.println(response);
		}

	}

}
