"use client";

import { ProductUI } from "@/entities";
import { useEffect, useState } from "react";
import { fetchOrderList } from "../api/fetch-order-list";
import { ProductLayout } from "@/shared";

export function AdminOrders() {
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
            orders.map((product, index) => {
              return (
                <ProductLayout key={index} photoUrl={product.items[0].photoUrl}>
                  <ProductUI
                    title={product.items[0].title}
                    description={product.items[0].description}
                    price={product.items[0].price}
                    photoUrl={product.items[0].photoUrl}
                  />
                </ProductLayout>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}
