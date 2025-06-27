package com.harman.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MyController {

	@GetMapping
	public String home() {
		return "index";
	}
	
//	@GetMapping("/add")
//	public String add(@RequestParam("no1") Integer no1,@RequestParam("no2") Integer no2, ModelMap model) {
//		Integer sum=no1+no2;
//		model.addAttribute("sum", sum);
//		return "index";
//	}
//	@GetMapping("/add")
//	@PostMapping("/add")
	@RequestMapping(method = RequestMethod.POST, value = "/add")
	public ModelAndView add(@RequestParam("no1") Integer no1,@RequestParam("no2") Integer no2) {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("index");
		Integer sum=no1+no2;
		mv.addObject("no1",no1);
		mv.addObject("no2",no2);
		mv.addObject("sum",sum);
		return mv;
	}
}
