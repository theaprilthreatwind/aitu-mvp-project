"use client";

import { useEffect, useState } from "react";
import { fetchOrders } from "./api/fetch-orders";

export function StatsMenu() {
  const [orders, setOrders] = useState(null);
  const [shouldFetchOrders, setShouldFetchOrders] = useState(true);

  useEffect(() => {
    if (shouldFetchOrders)
      (async () => {
        try {
          const token = sessionStorage.getItem("mangerAuthToken");
          const orders = await fetchOrders(token);
          setOrders(orders);
          setShouldFetchOrders(false);
        } catch (error) {
          console.log(error.message);
        }
      })();
  }, [shouldFetchOrders]);
  return (
    <main className="w-8/9 h-screen">
      <header className="flex px-6 items-center shadow-md w-full h-15 border-b border-neutral-200 z-20">
        <div className="">Restaurant's statistic</div>
      </header>
      <section className="pl-4 mt-4 overflow-hidden box-border">
        <div className="overflow-x-scroll flex gap-2 py-4">
          {orders? orders.map((dish, productIndex) => {
            return (
              <ProductCard
                key={productIndex}
                name={dish.title}
                description={dish.description}
                price={dish.price}
                photoUrl={dish.photoUrl}
                className={"relative mr-5"}
              />
            );
          }) : <div className="text-6xl text-gray-400"> No orders yet</div>}
        </div>
      </section>
    </main>
  );
}
