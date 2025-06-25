package com.harman.demo.model;

//we will configure this as bean in configuration class
public class Jbl implements Audio
{
	@Override
	public void play() {
		System.out.println("Jbl sounds nice");
	}

}
