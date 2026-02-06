"use client";

import { useEffect } from "react";

export function HeatmapTracker() {
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
  });
}

function handleMouseMove(event) {
  console.log("движение на странице:", event.pageX, event.pageY);
}
