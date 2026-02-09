"use client";

import { ProductUI } from "@/entities";
import { useEffect, useState } from "react";
import { fetchOrderList } from "../api/fetch-order-list";

export function OrdersMenu() {
  const [orders, setOrders] = useState(null);
  const [shouldFetchOrders, setShouldFetchOrders] = useState(true);
  console.log(orders);
  useEffect(() => {
    if (shouldFetchOrders)
      (async () => {
        const token = sessionStorage.getItem("mangerAuthToken");
        const orders = await fetchOrderList(token);
        console.log(orders);
        setOrders(orders);
        setShouldFetchOrders(false);
      })();
  }, [shouldFetchOrders]);
  return (
    <main className="w-8/9 h-screen">
      <header className="flex px-6 items-center shadow-md w-full h-15 border-b border-neutral-200 z-20">
        <div className="text-2xl">Restaurant's orders list</div>
      </header>
      <section className="pl-4 mt-4 overflow-hidden box-border">
        <div className="overflow-x-scroll flex gap-2 py-4">
          {orders === null ? (
            <div className="text-6xl text-gray-400">No orders yet</div>
          ) : (
            orders.map((dish, productIndex) => {
              return (
                <ProductUI
                  key={productIndex}
                  name={dish.title}
                  description={dish.description}
                  price={dish.price}
                  photoUrl={dish.photoUrl}
                  className={"relative mr-5"}
                />
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}
