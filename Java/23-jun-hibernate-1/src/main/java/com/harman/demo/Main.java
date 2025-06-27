package com.harman.demo;

import org.hibernate.Session;

import com.harman.demo.model.Product;

public class Main {
    public static void main(String[] args) {
        Product product = new Product(null, "Pencil", "Stationery", 10.0);

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            session.beginTransaction();
            session.persist(product);
            session.getTransaction().commit();
        }

        HibernateUtil.getSessionFactory().close();
        System.out.println("Please check db");
    }
}
