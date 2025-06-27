package com.harman.demo.model;

public class Car {
	private Audio audio;	//loosely coupled. Any implementation of Audio can be injected
	
	public Car() {}

	public Car(Audio audio) {
		super();
		this.audio= audio;
	}

	public Audio getAudio() {
		return audio;
	}

	public void setAudio(Audio audio) {
		this.audio = audio;
	}
	
	public void playMusic() {
		audio.play();
	}
}
