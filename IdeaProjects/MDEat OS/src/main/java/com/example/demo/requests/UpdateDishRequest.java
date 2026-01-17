package com.example.demo.requests;

public class UpdateDishRequest {
    private String title;
    private String description;
    private double price;
    private String photoUrl;

    public UpdateDishRequest(String title, String description, double price, String photoUrl) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.photoUrl = photoUrl;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }
}