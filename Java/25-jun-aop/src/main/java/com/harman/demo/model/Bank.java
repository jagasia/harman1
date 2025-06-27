package com.harman.demo.model;

import org.springframework.stereotype.Component;

@Component
public class Bank {
    public void withdraw() {
        System.out.println("Executing withdraw method");
    }

    public void deposit() {
        System.out.println("Executing deposit method");
    }
}
