package com.harman.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
	@Autowired
	private Audio audio;
	
	public Car() {}

	public Car(Audio audio) {
		super();
		this.audio = audio;
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
