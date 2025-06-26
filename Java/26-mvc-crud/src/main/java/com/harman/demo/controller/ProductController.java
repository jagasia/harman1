package com.harman.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.harman.demo.entity.Product;
import com.harman.demo.service.ProductService;

@Controller
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService ps;
	
	@RequestMapping(value = "/dml", method = RequestMethod.POST, params = "add")
	public ModelAndView addProduct(Product product) {
		ps.create(product);
		return showProductPage();
	}
	
	
	@GetMapping
	public ModelAndView showProductPage() {
		List<Product> products = ps.read();
		ModelAndView mv=new ModelAndView();
		mv.setViewName("product");
		mv.addObject("products",products);
		return mv;
	}
	
	@GetMapping("/select/{id}")
	public ModelAndView findProductById(@PathVariable("id")Long id) {
		Product product = ps.read(id);
		List<Product> products = ps.read();
		ModelAndView mv=new ModelAndView();
		mv.setViewName("product");
		mv.addObject("products",products);
		mv.addObject("product",product);
		return mv;
	}
	
	@RequestMapping(value = "/dml", method = RequestMethod.POST, params = "update")
	public ModelAndView updateProduct(Product product) {
		ps.update(product.getId(), product);
		return showProductPage();
	}
	
	@RequestMapping(value = "/dml", method = RequestMethod.POST, params = "delete")
	public ModelAndView deleteProduct(Product product) {
		ps.delete(product.getId());
		return showProductPage();
	}
	
	
}
