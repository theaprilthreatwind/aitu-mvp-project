package com.example.demo;

import com.example.demo.entities.*;
import com.example.demo.food.Category;
import com.example.demo.food.Dish;
import com.example.demo.food.Order;
import com.example.demo.requests.CategoryRequest;
import com.example.demo.requests.CreateDishRequest;
import com.example.demo.requests.OrderRequest;
import com.example.demo.service.FoodService;
import com.example.demo.service.RestaurantStats;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

import java.time.LocalDate;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class AppController {

    private List<User> users = new CopyOnWriteArrayList<>();
    private List<Order> orders = new CopyOnWriteArrayList<>();
    private Map<String, User> sessions = new ConcurrentHashMap<>();
    private Map<String, Integer> restaurantViews = new ConcurrentHashMap<>();
    private Map<String, List<MousePoint>> mouseTrackingData = new ConcurrentHashMap<>();

    private final FoodService foodService;

    public AppController(FoodService foodService) {
        this.foodService = foodService;

        users.add(new User("Los Pollos Hermanos", "pochta.admina@gmail.com", "1234", Role.MANAGER));
        users.add(new User("guest", "pochta.usera@gmail.com", "1234", Role.CLIENT));

    }

    // TODO Страница 1: Авторизация

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        for (User u : users) {
            if (user.getUsername() == null || user.getUsername().isEmpty()) {
                return ResponseEntity.status(400).body("Ошибка: Поле 'name' обязательно для заполнения!");
            }
            if (user.getMail() == null || user.getMail().isEmpty()) {
                return ResponseEntity.status(400).body("Ошибка: Поле 'email' обязательно для заполнения!");
            }
            if (user.getPassword() == null || user.getPassword().isEmpty()) {
                return ResponseEntity.status(400).body("Ошибка: Поле 'password' не может быть пустым!");
            }

            if (u.getUsername().equals(user.getUsername()) || u.getMail().equals(user.getMail())) {
                return ResponseEntity.status(400).body("Пользьзователь с таким/-ой логином/почтой уже существует.");
            }
        }
        if (user.getRole() == null) {
            user.setRole(Role.CLIENT);
        }

        users.add(user);
        if (user.getRole() == Role.MANAGER) {

            String token = UUID.randomUUID().toString();
            sessions.put(token, user);

            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("role", user.getRole().toString());
            return ResponseEntity.ok(response);
        }

        return ResponseEntity
                .ok("Регистрация прошла успешно под логином: " + user.getUsername() + ". Приятного аппетита!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        for (User user : users) {
            if (user.getUsername().equals(loginRequest.getUsername()) &&
                    user.getPassword().equals(loginRequest.getPassword())) {

                String token = UUID.randomUUID().toString();
                sessions.put(token, user);

                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                response.put("role", user.getRole().toString());
                return ResponseEntity.ok(response);
            }
        }
        return ResponseEntity.status(401).body("Неверный логин/пароль. Попробуйте еще раз.");
    }

    // TODO Страница 2: Дэшборд Менеджера

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return foodService.getAllCategories();
    }

    @GetMapping("/categories/{id}/dishes")
    public List<Dish> getDishesByCategory(@PathVariable Integer id) {
        return foodService.getDishesByCategoryId(id);
    }

    @PostMapping("/admin/dish")
    public ResponseEntity<?> createDish(@RequestHeader("Token") String token,
            @RequestBody CreateDishRequest request) {
        User user = sessions.get(token);
        if (user == null || user.getRole() != Role.MANAGER)
            return ResponseEntity.status(403).body("Нет прав");

        Category category = foodService.getCategoryById(request.getCategoryId());

        if (category == null)
            return ResponseEntity.status(404).body("Категория не найдена");

        if (!category.getOwnerName().equals(user.getUsername())) {
            return ResponseEntity.status(403).body("Это не ваша категория! Вы не можете добавлять сюда блюда.");
        }

        Dish dish = new Dish();
        dish.setTitle(request.getTitle());
        dish.setDescription(request.getDescription());
        dish.setPrice(request.getPrice());
        dish.setPhotoUrl(request.getPhotoUrl());
        dish.setCategoryId(request.getCategoryId());

        foodService.addDish(dish);
        return ResponseEntity.ok(dish);
    }

    @DeleteMapping("/admin/dish/{id}")
    public ResponseEntity<?> deleteDish(@RequestHeader("Token") String token,
            @PathVariable Integer id) {
        User user = sessions.get(token);
        if (user == null || user.getRole() != Role.MANAGER)
            return ResponseEntity.status(403).body("Нет прав");

        Dish dish = foodService.getDishById(id);
        if (dish == null)
            return ResponseEntity.status(404).body("Блюдо не найдено");

        Category category = foodService.getCategoryById(dish.getCategoryId());
        if (category == null || !category.getOwnerName().equals(user.getUsername())) {
            return ResponseEntity.status(403).body("Вы не можете удалить чужое блюдо");
        }

        foodService.deleteDish(id);
        return ResponseEntity.ok("Блюдо успешно удалено");
    }

    @PostMapping("/admin/category")
    public ResponseEntity<?> createCategory(@RequestHeader("Token") String token,
            @RequestBody CategoryRequest request) {
        User user = sessions.get(token);
        if (user == null || user.getRole() != Role.MANAGER) {
            return ResponseEntity.status(403).body("Нет прав");
        }

        Category created = foodService.addCategory(
                request.getTitle(),
                request.getDescription(),
                user.getUsername());

        return ResponseEntity.ok(created);
    }

    @DeleteMapping("/admin/category/{id}")
    public ResponseEntity<?> deleteCategory(@RequestHeader("Token") String token,
            @PathVariable Integer id) {
        User user = sessions.get(token);
        if (user == null || user.getRole() != Role.MANAGER)
            return ResponseEntity.status(403).body("Нет прав");

        Category category = foodService.getCategoryById(id);
        if (category == null)
            return ResponseEntity.status(404).body("Категория не найдена");

        if (!category.getOwnerName().equals(user.getUsername())) {
            return ResponseEntity.status(403).body("Вы не можете удалить чужую категорию");
        }

        foodService.deleteCategory(id);
        return ResponseEntity.ok("Категория и все её блюда удалены");
    }

    @GetMapping("/admin/stats")
    public ResponseEntity<?> getRestaurantStats(@RequestHeader("Token") String token) {
        User user = sessions.get(token);
        if (user == null || user.getRole() != Role.MANAGER) {
            return ResponseEntity.status(403).body("Доступ запрещен");
        }

        String restaurantName = user.getUsername();
        LocalDate today = LocalDate.now();

        double totalIncome = orders.stream()
                .filter(order -> order.getRestaurantName().equals(restaurantName))
                .mapToDouble(Order::getTotalPrice)
                .sum();

        double dailyIncome = orders.stream()
                .filter(order -> order.getRestaurantName().equals(restaurantName))
                .filter(order -> order.getCreatedAt().toLocalDate().equals(today))
                .mapToDouble(Order::getTotalPrice)
                .sum();

        long TotalOrders = orders.stream()
                .filter(order -> order.getRestaurantName().equals(restaurantName))
                .map(Order::getClientName)
                .distinct()
                .count();

        long views = restaurantViews.getOrDefault(restaurantName, 0).longValue();

        return ResponseEntity.ok(new RestaurantStats(totalIncome, dailyIncome, TotalOrders, views));
    }

    @GetMapping("/admin/orders")
    public ResponseEntity<?> getAllOrders(@RequestHeader("Token") String token) {
        User user = sessions.get(token);
        if (user == null || user.getRole() != Role.MANAGER) {
            return ResponseEntity.status(403).body("Доступ запрещен");
        }

        String restaurantName = user.getUsername();

        List<Order> restaurantOrders = orders.stream()
                .filter(order -> order.getRestaurantName().equals(restaurantName))
                .collect(Collectors.toList());

        return ResponseEntity.ok(restaurantOrders);
    }

    // TODO Страница 3: Логика Юзера

    @GetMapping("/menu/{restaurantName}")
    public ResponseEntity<?> getRestaurantMenu(@PathVariable String restaurantName) {
        String decodedName = URLDecoder.decode(restaurantName, StandardCharsets.UTF_8);

        List<Category> menu = foodService.getCategoriesByRestaurant(decodedName);
        return ResponseEntity.ok(menu);
    }

    @GetMapping("/restaurants")
    public ResponseEntity<?> getAllRestaurants() {
        List<String> restaurants = new ArrayList<>();
        for (User u : users) {
            if (u.getRole() == Role.MANAGER) {
                restaurants.add(u.getUsername());
            }
        }
        return ResponseEntity.ok(restaurants);
    }

    @PostMapping("/{restaurantName}/view")
    public ResponseEntity<?> addView(@PathVariable String restaurantName) {
        String decodedName = URLDecoder.decode(restaurantName, StandardCharsets.UTF_8);

        boolean exists = users.stream()
                .anyMatch(u -> u.getRole() == Role.MANAGER && u.getUsername().equalsIgnoreCase(decodedName));

        if (!exists) {
            return ResponseEntity.status(404).body("Ресторан не найден");
        }

        restaurantViews.merge(restaurantName, 1, Integer::sum);

        int currentViews = restaurantViews.get(restaurantName);
        return ResponseEntity.ok("Просмотр засчитан. Всего просмотров: " + currentViews);
    }

    @PostMapping("/client/order")
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest request) {

        List<Dish> items = new ArrayList<>();
        String restaurantName = "Unknown";

        for (Integer dishId : request.getDishIds()) {
            Dish foundDish = foodService.getDishById(dishId);

            if (foundDish != null) {
                items.add(foundDish);
                Integer catId = foundDish.getCategoryId();

                foodService.getAllCategories().stream()
                        .filter(c -> c.getId().equals(catId))
                        .findFirst()
                        .ifPresent(category -> {
                        });

                for (Category c : foodService.getAllCategories()) {
                    if (c.getId().equals(catId)) {
                        restaurantName = c.getOwnerName();
                        break;
                    }
                }
            }
        }

        if (items.isEmpty()) {
            return ResponseEntity.badRequest().body("Список блюд пуст или неверные ID");
        }

        Order order = new Order(
                orders.size() + 1,
                "Guest",
                restaurantName,
                request.getTableNumber(),
                0,
                items);

        double sum = items.stream().mapToDouble(Dish::getPrice).sum();
        order.setTotalPrice(sum);

        orders.add(order);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/client/my-orders")
    public ResponseEntity<?> getMyOrders(@RequestHeader("Token") String token) {
        User user = sessions.get(token);
        if (user == null)
            return ResponseEntity.status(401).body("Нет авторизации");

        List<Order> myOrders = new ArrayList<>();
        for (Order o : orders) {
            if (o.getClientName().equals(user.getUsername())) {
                myOrders.add(o);
            }
        }
        return ResponseEntity.ok(myOrders);
    }

    // TODO Страница 3: Логика и хранение точек указателя

    @PostMapping("/{restaurantName}/setMousePoints")
    public ResponseEntity<?> setMousePoints(
            @PathVariable String restaurantName,
            @RequestBody List<MousePoint> points) {

        String decodedName = URLDecoder.decode(restaurantName, StandardCharsets.UTF_8);

        boolean exists = users.stream()
                .anyMatch(u -> u.getRole() == Role.MANAGER && u.getUsername().equalsIgnoreCase(decodedName));

        if (!exists) {
            return ResponseEntity.status(404).body("Ресторан не найден");
        }

        mouseTrackingData.computeIfAbsent(decodedName, k -> new CopyOnWriteArrayList<>())
                .addAll(points);

        return ResponseEntity.ok("Данные успешно сохранены. Всего точек: " +
                mouseTrackingData.get(decodedName).size());
    }

    @GetMapping("/{restaurantName}/getMousePoints")
    public ResponseEntity<?> getMousePoints(@PathVariable String restaurantName) {
        String decodedName = URLDecoder.decode(restaurantName, StandardCharsets.UTF_8);

        List<MousePoint> points = mouseTrackingData.getOrDefault(decodedName, Collections.emptyList());

        return ResponseEntity.ok(points);
    }
}