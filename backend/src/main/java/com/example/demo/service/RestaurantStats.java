package com.example.demo.service;

public class RestaurantStats {
    private double totalIncome;
    private long totalVisitors;
    private double dailyIncome;
    private long totalViews;

    public RestaurantStats(double totalIncome, double dailyIncome, long totalVisitors, long totalViews) {
        this.totalIncome = totalIncome;
        this.totalVisitors = totalVisitors;
        this.dailyIncome = dailyIncome;
        this.totalViews = totalViews;
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

    public Long getTotalViews() {
        return totalViews;
    }
}