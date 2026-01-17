package com.example.demo.service;

import com.example.demo.food.Category;
import com.example.demo.food.Dish;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class FoodService {

    private List<Category> categories = new ArrayList<>();
    private List<Dish> dishes = new ArrayList<>();

    private AtomicInteger categoryIdCounter = new AtomicInteger(1);
    private AtomicInteger dishIdCounter = new AtomicInteger(1);

    public List<Category> getCategoriesByRestaurant(String owner) {
        return categories.stream()
                .filter(c -> c.getOwnerName().equals(owner))
                .collect(Collectors.toList());
    }

    public Category addCategory(String title, String description, String owner) {
        Category newCat = new Category(categoryIdCounter.getAndIncrement(), title, description, owner);
        categories.add(newCat);
        return newCat;
    }

    public void deleteCategory(Integer id) {
        categories.removeIf(c -> c.getId().equals(id));
        dishes.removeIf(d -> d.getCategoryId().equals(id));
    }

    public List<Dish> getAllDishes() {
        return dishes;
    }

    public Category getCategoryById(Integer id) {
        return categories.stream()
                .filter(c -> c.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public List<Category> getAllCategories() { return categories; }

    public List<Dish> getDishesByCategoryId(Integer categoryId) {
        return dishes.stream()
                .filter(dish -> dish.getCategoryId().equals(categoryId))
                .collect(Collectors.toList());
    }

    public Dish getDishById(Integer id) {
        return dishes.stream()
                .filter(d -> d.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public Dish addDish(Dish dish) {
        boolean categoryExists = categories.stream()
                .anyMatch(c -> c.getId().equals(dish.getCategoryId()));

        if (!categoryExists) {
            throw new IllegalArgumentException("Ошибка: Категории с ID " + dish.getCategoryId() + " не существует!");
        }

        dish.setId(dishIdCounter.getAndIncrement());
        dishes.add(dish);
        return dish;
    }

    public void deleteDish(Integer id) {
        dishes.removeIf(d -> d.getId().equals(id));
    }
}