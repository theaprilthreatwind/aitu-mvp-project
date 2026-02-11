package com.example.demo.entities;

public class Stats {
    private double totalRevenue;
    private int totalCustomers;
    private int totalVisitors;

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

    public int getTotalVisitors() {
        return totalVisitors;
    }
}
