package com.harman.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.harman.demo.entity.Product;
import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findByCategory(String category);
	
	@Query("from Product p where p.price between :from and :to")
	public List<Product> findProductsInRange(@Param("from") Double from,@Param("to") Double to);
}
