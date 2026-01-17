package com.example.demo.service;

public class RestaurantStats {
    private double totalIncome;
    private long totalVisitors;
    private double dailyIncome;


    public RestaurantStats(double totalIncome, double dailyIncome, long totalVisitors) {
        this.totalIncome = totalIncome;
        this.totalVisitors = totalVisitors;
        this.dailyIncome = dailyIncome;
    }

    public double getTotalIncome() {
        return totalIncome;
    }

    public double getDailyIncome() {
        return dailyIncome;
    }

    public long getTotalVisitors() {
        return totalVisitors;
    }
}