"use client";
import { LoginForm } from "@/features";
import { AdminMenu, OrdersMenu, SideBar, StatsMenu } from "@/widgets";
import { use, useEffect, useState } from "react";

export default function AdminPanel({ params }) {
  const [isLogined, setIsLogined] = useState(false);
  const [currentTab, setTab] = useState("menu");
  const { restaurantName = "error" } = use(params);

  const tabs = {
    menu: <AdminMenu restaurantName={restaurantName} />,
    stats: <StatsMenu restaurantName={restaurantName} />,
    orders: <OrdersMenu restaurantName={restaurantName}/>
  };

  useEffect(() => {
    const isManagerAuth = sessionStorage.getItem("mangerAuthToken");
    setIsLogined(isManagerAuth);
  });

  const render = isLogined ? (
    <div className="flex max-w-screen">
      <SideBar setTab={setTab} />
      {tabs[currentTab]}
    </div>
  ) : (
    <div className="max-w-300 p-4 mx-auto mt-20 shadow-2xl rounded-2xl border border-gray-200">
      <LoginForm role="MANAGER" />
    </div>
  );
  return render;
}
