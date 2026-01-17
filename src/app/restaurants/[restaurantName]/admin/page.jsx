"use client";

import { LoginForm } from "@/features";
import { fetchGetMenu } from "@/shared";
import { AdminMenu, SideBar } from "@/widgets";
import { use, useEffect, useState } from "react";

export default function AdminPanel({ params }) {
  const [isLogined, setIsLogined] = useState(false);
  const { restaurantName } = use(params);
  
  useEffect(() => {

    const isManagerAuth = sessionStorage.getItem("mangerAuthToken");
    console.log(isManagerAuth)
    setIsLogined(isManagerAuth);
  });

  const render = isLogined ? (
    <div className="flex max-w-screen">
      <SideBar />
      <AdminMenu restaurantName={restaurantName} />
    </div>
  ) : (
    <div className="max-w-300 p-4 mx-auto mt-20 shadow-2xl rounded-2xl border border-gray-200">
      <LoginForm />
    </div>
  );
  return render;
}
