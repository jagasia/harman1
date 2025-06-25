package com.harman.demo.model;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;

@Component
@Aspect
@EnableAspectJAutoProxy
public class BankAspect {
	
	@Pointcut("execution(* com.harman.demo.model.*.withdraw(..))")
	public void withdrawPointCut() {
		
	}
	
	@Pointcut("execution(* com.harman.demo.model.*.deposit(..))")
	public void depositPointCut() {
		
	}
	
	@Before("withdrawPointCut()")
    public void beforeWithdraw() {
        System.out.println("Before Withdraw Advice");
    }

	@After("withdrawPointCut()")
    public void afterWithdraw() {
        System.out.println("After Withdraw Advice");
    }

	@Before("depositPointCut()")
    public void beforeDeposit() {
        System.out.println("Before Deposit Advice");
    }

	@After("depositPointCut()")
    public void afterDeposit() {
        System.out.println("After Deposit Advice");
    }
}