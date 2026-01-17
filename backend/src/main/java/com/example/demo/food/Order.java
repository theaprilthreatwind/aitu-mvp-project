package com.example.demo.food;

import java.time.LocalDateTime;
import java.util.List;

public class Order {
    private int id;
    private String clientName;
    private String restaurantName;
    private String tableNumber;
    private double totalPrice = 0;
    private List<Dish> items;
    private LocalDateTime createdAt;

    public String getRestaurantName() {
        return restaurantName;
    }

    public Order(int id, String clientName, String restaurantName, String tableNumber, double totalPrice, List<Dish> items) {
        this.id = id;
        this.clientName = clientName;
        this.restaurantName = restaurantName;
        this.tableNumber = tableNumber;
        this.totalPrice = totalPrice;
        this.items = items;
        this.createdAt = LocalDateTime.now();
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public List<Dish> getItems() {
        return items;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public String getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(String tableNumber) {
        this.tableNumber = tableNumber;
    }

    public void setItems(List<Dish> items) {
        this.items = items;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "[" + id + "]" +
                "Заказ от: (" + clientName +
                ") : Блюда = (" + items +
                ") : Итоговый чек: " + totalPrice + " тг.";
    }
}
