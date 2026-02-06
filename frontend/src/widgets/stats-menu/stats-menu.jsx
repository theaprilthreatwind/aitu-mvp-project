"use client";

import { Suspense, use, useEffect, useMemo, useState } from "react";
import { fetchStats } from "./api/fetch-stats";

const statsCache = new Map();

export function StatsMenu({ token }) {

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
