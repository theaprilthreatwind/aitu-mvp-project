"use client";

import { useRef, useEffect } from "react";
import h337 from "heatmap.js";

export function HeatmapDisplayUI({ points = [] }) {
  const containerRef = useRef(null);
  const heatmapInstance = useRef(null);
  useEffect(() => {
    try {
      if (typeof window === "undefined" || !containerRef.current) return;

      if (!heatmapInstance.current) {
        heatmapInstance.current = h337.create({
          container: containerRef.current,
          radius: 40,
          maxOpacity: 0.6,
          minOpacity: 0,
          blur: 0.75,
          backgroundColor: "rgba(0, 0, 10, 0.5)",
        });
      }

      const width = window.innerWidth;
      const height = document.body.scrollHeight;

      const data = points.map((p) => ({
        x: Math.floor(p.x * width),
        y: Math.floor(p.y * height),
        value: 1,
      }));

      heatmapInstance.current.setData({
        max: 5,
        data: data,
      });
    } catch (err) {
      console.error("Ошибка при инициализации Heatmap:", err);
    }
  }, [points]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-50 pointer-events-none top-0"
    />
  );
}
