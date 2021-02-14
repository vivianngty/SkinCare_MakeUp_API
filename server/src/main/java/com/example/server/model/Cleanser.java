package com.example.server.model;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table (name ="cleanser_table")
public class Cleanser {

    @Id
    @Column
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String brand;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String Ingredients;
    @Column
    private int price;
    @Column
    private String image;

    public Cleanser() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIngredients() {
        return Ingredients;
    }

    public void setIngredients(String ingredients) {
        Ingredients = ingredients;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
