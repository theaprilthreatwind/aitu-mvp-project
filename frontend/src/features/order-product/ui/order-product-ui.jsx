"use client";

import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { OrderPopover } from "./order-popover";
import { orderProduct } from "../api/order-product.js";
import toast from "react-hot-toast";

export function OrderProductUI({ productId }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  async function handleSubmitOrder(formData) {
    const userToken = sessionStorage.getItem("ClientToken");
    const table = formData.get("table");

    const orderResult = await orderProduct(productId, table);

    if (orderResult) {
      toast.success("Блюдо заказано!");
    }

    setIsPopoverOpen(false);
  }
  return (
    <div className="flex justify-end">
      <Popover
        isOpen={isPopoverOpen}
        positions={["bottom", "right"]}
        content={<OrderPopover handleSubmitOrder={handleSubmitOrder} />}
      >
        <button
          onClick={() => setIsPopoverOpen((prev) => !prev)}
          className="bg-sky-500 text-white text-2xl px-6 py-3 rounded-2xl z-50"
        >
          Order
        </button>
      </Popover>
    </div>
  );
}
