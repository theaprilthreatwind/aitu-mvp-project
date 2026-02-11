"use client";

import React, { use } from "react";
import { useState } from "react";
import "./App.css";
import Link from "next/link";
import { fetchRestaurantList } from "@/shared";

const Search = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const RESTAURANTS = use(fetchRestaurantList())
  console.log(RESTAURANTS)
  const filteredRestaurants = RESTAURANTS.filter((restaurant) => {
    const matchesSearch = restaurant
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || restaurant.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="restaurants-page">
      <br />
      <br />
      <br />
      <div className="restaurants-container">
        <div className="restaurants-header">
          <h1>Restaurants</h1>
          <p>Discover the best places to enjoy quality food</p>

          <input
            className="restaurants-search"
            type="text"
            placeholder="Search restaurants or cuisines"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <RestaurantGrid restaurants={filteredRestaurants} />
      </div>
    </div>
  );
};

export default Search;

function RestaurantGrid({restaurants}) {
  return (
    <div className="restaurants-grid">
      {restaurants.length ? (
        restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <h3>{restaurant}</h3>

            <Link
              href={`restaurants/${restaurant}`}
              className="restaurant-card-button"
            >
              View menu
            </Link>
          </div>
        ))
      ) : (
        <p className="empty">Restaurants not found</p>
      )}
    </div>
  );
}
