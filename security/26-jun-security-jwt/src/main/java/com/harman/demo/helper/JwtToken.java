package com.harman.demo.helper;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtToken {
	private String jwt;
	private String username;
	private Collection<? extends GrantedAuthority> authorities;
}
