package com.example.demo.requests;

public class CategoryRequest {
    private String title;
    private String description;

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    private String ownerName;

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

    public CategoryRequest(String title, String description, String ownerName) {
        this.title = title;
        this.description = description;
        this.ownerName = ownerName;
    }
}