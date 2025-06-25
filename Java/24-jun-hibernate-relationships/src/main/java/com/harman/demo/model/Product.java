package com.harman.demo.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue
    private Long id;
    
    private String name;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "product_category", // Join table name
        joinColumns = @JoinColumn(name = "product_id"), // FK in join table pointing to Product
        inverseJoinColumns = @JoinColumn(name = "category_id") // FK in join table pointing to Category
    )
    private List<Category> categories;

    public Product() {}

    public Product(Long id, String name, List<Category> categories) {
        this.id = id;
        this.name = name;
        this.categories = categories;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    @Override
    public String toString() {
        return "Product [id=" + id + ", name=" + name + "]";
    }
}
