package com.harman.demo.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harman.demo.helper.AuthRequest;
import com.harman.demo.helper.JwtToken;
import com.harman.demo.service.JwtService;

@RestController
@RequestMapping("/api/v1")
public class MyController {
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private JwtService jwtService;
	
	@GetMapping
	public String home() {
		return "Welcome to home";
	}

	@PostMapping("/login")
	public JwtToken login(@RequestBody AuthRequest authRequest) {
		Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
		JwtToken token=null;
		if(authentication.isAuthenticated()) {
			//return token
			String username=authRequest.getUsername();
			String jwt = jwtService.generateToken(username);
			Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
			 token=new JwtToken(jwt, username, authorities);
		}else
		{
			throw new UsernameNotFoundException("Login failed");
		}
		return token;
	}
	
	@PostMapping("/signup")
	public String signup() {
		return "Signing up";
	}
}
