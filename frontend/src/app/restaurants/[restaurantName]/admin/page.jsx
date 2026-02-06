"use client";
import { LoginForm } from "@/features";
import { LoadingSkeleton } from "@/shared";
import { AdminMenu, OrdersMenu, QRCodeMenu, SideBar, StatsMenu } from "@/widgets";
import { Suspense, use, useEffect, useState } from "react";

export default function AdminPanel({ params }) {
  const { restaurantName = "error" } = use(params);
  const [token, setToken] = useState(null);
  const [currentTab, setTab] = useState("menu");
  console.log(currentTab);

  const tabs = (currentTab) => {
    switch (currentTab) {
      case "menu":
        return <AdminMenu restaurantName={restaurantName} />;
      case "stats":
        return <StatsMenu restaurantName={restaurantName} token={token} />;
      case "orders":
        return <OrdersMenu restaurantName={restaurantName} />;
      case "qr-code":
        return <QRCodeMenu restaurantName={restaurantName} />;
      default:
        return <AdminMenu restaurantName={restaurantName} />;
    }
  };

  console.log(token);
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
