package com.harman.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.harman.demo.entity.MyUser;
import com.harman.demo.repository.MyUserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService{
	@Autowired
	private MyUserRepository ur;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		//find user by username
		Optional<MyUser> temp = ur.findById(username);
		
		User user=null;
		if(temp.isPresent()) {
			//user found. convert MyUser to User type
			MyUser myUser = temp.get();
			String[] arr = myUser.getRole().split(",");
			List<SimpleGrantedAuthority> authorities=new ArrayList<>();
			for(String role:arr) {
				authorities.add(new SimpleGrantedAuthority(role));
			}
			user=new User(myUser.getUsername(), myUser.getPassword(), authorities);
		}else
		{
			throw new UsernameNotFoundException("Login failed");
		}
//		return new User("dinesh", "prasad", new ArrayList<>());
		return user;
	}
	
	public MyUser signup(MyUser myUser) {
		myUser.setPassword(passwordEncoder.encode(myUser.getPassword()));
		return ur.save(myUser);
	}

}
