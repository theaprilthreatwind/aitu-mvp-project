package com.example.demo.entities;

public class User {
    private String name;
    private String password;
    private String email;
    private Role role;

    public User(String name, String email, String password, Role role) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public String getMail() {
        return email;
    }

    public String getUsername() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
