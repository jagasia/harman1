package com.harman.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class MySecurityConfiguration {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
	{
		return http
				.csrf(csrf->csrf.disable())
				.authorizeHttpRequests((auth)->
				auth
				.anyRequest()
				.authenticated()
				)
				.formLogin((form)->form.defaultSuccessUrl("/home", true))
				.oauth2Login(x->x.defaultSuccessUrl("/home",true))
				.build();
	}

}
