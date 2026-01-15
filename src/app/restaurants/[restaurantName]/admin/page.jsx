"use client";

import { AdminMenu, SideBar } from "@/widgets";
import { useState } from "react";

export default function AdminPanel() {
  const [currentTab, setCurrentTab] = useState("menu");

  return (
    <div className="flex max-w-screen">
      <SideBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "menu" && <AdminMenu />}
      {currentTab === "stats" && <div>ligma balls</div>}
    </div>
  );
}
