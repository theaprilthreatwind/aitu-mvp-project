"use client";

import { useEffect, useRef } from "react";
import { sendMousePositions } from "../api/send-mouse-positions";

export function HeatmapTracker({ restaurantTitle }) {
  const mousePosition = useRef({ x: 0, y: 0 });
  const mousePositionLogs = useRef([]);

  function handleMouseMove(event) {
    mousePosition.current = {
      x: Number((event.pageX / document.body.scrollWidth).toFixed(4)),
      y: Number((event.pageY / document.body.scrollHeight).toFixed(4)),
    };
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    console.log("Сборка данных о местоположении указателя");

    const mousePositionIntervalId = setInterval(() => {
      const newMousePosition = {
        x: mousePosition.current.x,
        y: mousePosition.current.y,
      };

      mousePositionLogs.current.push(newMousePosition);
    }, 200);

    const sendMousePositionLogsIntervalId = setInterval(async () => {
      if (mousePositionLogs.current.length === 0) {
        return;
      }

      const dataToSend = [...mousePositionLogs.current];
      console.log(dataToSend);
      mousePositionLogs.current = [];

      try {
        console.log("Отправка местоположении указателя...");
        const response = sendMousePositions(dataToSend, restaurantTitle);
        console.log("Отправлены местоположение указателя");
      } catch (error) {
        console.error(error);
      }
    }, 10000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(mousePositionIntervalId);
      clearInterval(sendMousePositionLogsIntervalId);
    };
  }, []);
}
