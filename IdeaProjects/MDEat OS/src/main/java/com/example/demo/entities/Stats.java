package com.example.demo.entities;

public class Stats {
    private double totalRevenue;
    private int totalCustomers;

    public Stats(double totalRevenue, int totalCustomers) {
        this.totalRevenue = totalRevenue;
        this.totalCustomers = totalCustomers;
    }

    public double getTotalRevenue() {
        return totalRevenue;
    }

    public int getTotalCustomers() {
        return totalCustomers;
    }
}
