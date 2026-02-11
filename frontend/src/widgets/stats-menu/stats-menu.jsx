"use client";

import { Suspense, use, useEffect, useMemo, useState } from "react";
import { fetchStats } from "./api/fetch-stats";
import Link from "next/link";

const statsCache = new Map();

export function StatsMenu({ token, restaurantTitle }) {
  if (!statsCache.has(token)) {
    statsCache.set(token, fetchStats(token));
  }

  const stats = use(statsCache.get(token));
  console.log(stats);
  return (
    <main className="w-8/9 h-screen">
      <header className="flex px-6 items-center shadow-md w-full h-15 border-b border-neutral-200 z-20">
        <div className="text-2xl">Restaurant's statistic</div>
      </header>
      <section className="pl-4 mx-4 text-2xl flex flex-col">
        <div>
          <div>
            Total income:{" "}
            <span>{stats === null ? "Wait..." : stats.totalIncome}</span>
          </div>
          <div>
            Daily income:{" "}
            <span>{stats === null ? "Wait..." : stats.dailyIncome}</span>
          </div>
          <div>
            Total orders:{" "}
            <span>{stats === null ? "Wait..." : stats.totalVisitors}</span>
          </div>
          <div>
            Total views:{" "}
            <span>{stats === null ? "Wait..." : stats.totalViews}</span>
          </div>
        </div>

        <Link
          href={`/restaurants/${restaurantTitle}/admin/heatmap`}
          className="bg-sky-500 px-4 py-3 rounded-2xl text-white hover:bg-sky-600 self-start"
        >
          Посмотреть карту теплоты
        </Link>
      </section>
    </main>
  );
}
