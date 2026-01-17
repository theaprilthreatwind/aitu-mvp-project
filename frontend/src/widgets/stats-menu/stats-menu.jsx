"use client";

import { useEffect, useState } from "react";
import { fetchStats } from "./api/fetch-stats";

export function StatsMenu() {
  const [stats, setStats] = useState(null);
  const [shouldFetchOrders, setShouldFetchOrders] = useState(true);
  console.log(stats);
  useEffect(() => {
    if (shouldFetchOrders)
      (async () => {
        try {
          const token = sessionStorage.getItem("mangerAuthToken");
          const stats1 = await fetchStats(token);
          setShouldFetchOrders(false);
          setStats(stats1);
        } catch (error) {
          console.log(error.message);
        }
      })();
  }, [shouldFetchOrders]);
  return (
    <main className="w-8/9 h-screen">
      <header className="flex px-6 items-center shadow-md w-full h-15 border-b border-neutral-200 z-20">
        <div className="text-2xl">Restaurant's statistic</div>
      </header>
      <section className="pl-4 mt-4 overflow-hidden box-border">
        <div>
          <div>
            Total income:{" "}
            <span>{stats === null ? "Wait..." : stats.totalIncome}</span>
          </div>
          <div>
            Total income:{" "}
            <span>{stats === null ? "Wait..." : stats.dailyIncome}</span>
          </div>
          <div>
            Total income:{" "}
            <span>{stats === null ? "Wait..." : stats.totalVisitors}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
