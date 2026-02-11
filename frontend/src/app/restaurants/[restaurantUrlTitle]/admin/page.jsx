"use client";
import { LoginForm } from "@/features";
import { LoadingSkeleton } from "@/shared";
import {
  AdminMenu,
  OrdersMenu,
  QRCodeMenu,
  SideBar,
  StatsMenu,
} from "@/widgets";
import { Suspense, use, useEffect, useState } from "react";

export default function AdminPanel({ params }) {
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
          <StatsMenu restaurantTitle={cleanRestaurantUrlTitle} token={token} />
        );
      case "orders":
        return <OrdersMenu restaurantName={cleanRestaurantUrlTitle} />;
      case "qr-code":
        return <QRCodeMenu restaurantName={cleanRestaurantUrlTitle} />;
      default:
        return <AdminMenu restaurantName={cleanRestaurantUrlTitle} />;
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
      <SideBar setTab={setTab} />
      <Suspense fallback={<LoadingSkeleton />}>{tabs(currentTab)}</Suspense>
    </div>
  );
}
