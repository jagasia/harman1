package com.harman.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class MyUser {
	@Id
	private String username;
	private String password;
	private String role;	//csv roles
}
