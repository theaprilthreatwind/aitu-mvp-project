package com.example.demo.requests;


public class CreateDishRequest {
    private Integer categoryId;
    private String title;
    private String description;
    private double price;
    private String photoUrl;

    public CreateDishRequest(Integer categoryId, String title, String description, double price, String photoUrl) {
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.price = price;
        this.photoUrl = photoUrl;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }
}