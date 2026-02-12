"use client";
import { LoginForm } from "@/features";
import { LoadingSkeleton } from "@/shared";
import {
  AdminMenu,
  AdminStats,
  AdminNavigation,
  AdminOrders,
  AdminQR,
} from "@/widgets/admin";
import { Suspense, use, useEffect, useState } from "react";

export function Admin({ params }) {
  const { restaurantUrlTitle = "error" } = use(params);
  const cleanRestaurantUrlTitle = decodeURIComponent(restaurantUrlTitle);

  const [token, setToken] = useState(null);
  const [currentTab, setTab] = useState("menu");
  console.log(currentTab);

  const tabs = (currentTab) => {
    switch (currentTab) {
      case "menu":
        return <AdminMenu restaurantName={cleanRestaurantUrlTitle} />;
      case "stats":
        return (
          <AdminStats restaurantTitle={cleanRestaurantUrlTitle} token={token} />
        );
      case "orders":
        return <AdminOrders restaurantName={cleanRestaurantUrlTitle} />;
      case "qr-code":
        return <AdminQR restaurantName={cleanRestaurantUrlTitle} />;
      default:
        return <AdminStats restaurantName={cleanRestaurantUrlTitle} />;
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("mangerAuthToken");
    setToken(token);
  }, []);

  if (!token) {
    return (
      <div className="max-w-300 p-4 mx-auto mt-20 shadow-2xl rounded-2xl border border-gray-200">
        <LoginForm role="MANAGER" />
      </div>
    );
  }

  return (
    <div className="flex max-w-screen">
      <AdminNavigation setTab={setTab} />
      <Suspense fallback={<LoadingSkeleton />}>{tabs(currentTab)}</Suspense>
    </div>
  );
}
