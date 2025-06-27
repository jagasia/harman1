package com.harman.demo.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/api/v2")
public class YourController {

	@GetMapping("/about")
	@SecurityRequirement(name = "Bearer Authentication")
	@PreAuthorize("hasAuthority('user')")
	public String about(Authentication authentication) {
		return "About us";
	}
	
	@GetMapping("/contact")
	@PreAuthorize("hasAuthority('admin')")
	public String contact() {
		return "Contact us";
	}

}
