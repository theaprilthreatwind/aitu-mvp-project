package com.example.demo.food;

public class Category {

    private Integer id;
    private String title;
    private String description;
    private String ownerName;

    public Category(Integer id, String title, String description, String ownerName) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.ownerName = ownerName;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public Integer getId() {
        return id;
    }

    public void setCategoryId(Integer id) {
        this.id = id;
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
}