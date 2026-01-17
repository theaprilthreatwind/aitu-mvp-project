package com.example.demo.requests;

import java.util.List;

public class OrderRequest {
    private String tableNumber;
    private List<Integer> dishIds;

    public String getTableNumber() {
        return tableNumber;
    }
    public void setTableNumber(String tableNumber) {
        this.tableNumber = tableNumber;
    }

    public List<Integer> getDishIds() {
        return dishIds;
    }
    public void setDishIds(List<Integer> dishIds) {
        this.dishIds = dishIds;
    }
}