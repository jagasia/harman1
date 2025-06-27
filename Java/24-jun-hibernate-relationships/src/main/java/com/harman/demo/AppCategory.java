package com.harman.demo;

import java.util.ArrayList;
import java.util.List;

import com.harman.demo.model.Category;
import com.harman.demo.model.CategoryDao;
import com.harman.demo.model.CategoryDaoImpl;
import com.harman.demo.model.Product;
import com.harman.demo.model.ProductDao;
import com.harman.demo.model.ProductDaoImpl;

public class AppCategory {

	public static void main(String[] args) {
		CategoryDao cdao=new CategoryDaoImpl();
//		cdao.create(new Category(null, "Stationery", new ArrayList<>()));
		
//		ProductDao pdao=new ProductDaoImpl();
//		List<Category> categories=new ArrayList<>();
//		categories.add(new Category(1L, null, null));
//		categories.add(new Category(2L, null, null));
//		pdao.create(new Product(null, "Washing machine 1", categories));
		
		
		Category category = cdao.read(1L);
		System.out.println(category);
		List<Product> products = category.getProducts();
		
		for(Product p:products)
			System.out.println(p);
		
	}

}
