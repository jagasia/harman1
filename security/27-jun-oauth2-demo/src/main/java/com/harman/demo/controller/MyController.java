package com.harman.demo.controller;

import java.util.Map;
import java.util.Map.Entry;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

	@GetMapping("/home")
	public String home(@AuthenticationPrincipal OAuth2User user)
	{
		Map<String, Object> attrs = user.getAttributes();
		for(Entry<String, Object> attr:attrs.entrySet())
		{
			System.out.println(attr);
		}
		Object name = user.getAttribute("name");
		return "Hello world. Welcome "+name;
	}
	
	@GetMapping("/about")
	public String about() {
		return "About us";
	}
}
