package com.harman.demo.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v2")
public class YourController {

	@GetMapping("/about")
	@PreAuthorize("hasAuthority('user')")
	public String about() {
		return "About us";
	}
	
	@GetMapping("/contact")
	@PreAuthorize("hasAuthority('admin')")
	public String contact() {
		return "Contact us";
	}

}
