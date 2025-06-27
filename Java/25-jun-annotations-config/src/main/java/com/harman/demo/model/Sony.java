package com.harman.demo.model;

import org.springframework.stereotype.Component;

@Component("sonymusic")
public class Sony implements Audio{
	public void play() {
		System.out.println("Sony music is good");
	}
}
