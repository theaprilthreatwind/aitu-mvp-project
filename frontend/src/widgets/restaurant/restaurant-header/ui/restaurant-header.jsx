"use client";

import { UXButton } from "@/shared";

export function RestaurantHeader({ restaurantName }) {
  let innerWidth = null;
  if (typeof window !== "undefined") {
    innerWidth = window.innerWidth;
    console.log({ innerWidth, innerHeight });
  }
  return (
    <header className="flex items-center justify-between bg-white mx-auto mt-6.25 mb-10 h-12 max-w-375 text-3xl">
      <div className="font-semibold">{restaurantName}</div>
      <nav className="grid grid-cols-2 gap-2 font-extralight">
        {/* <UXButton variant="secondary" color="sky" size="medium">
          ABOUT
        </UXButton>
        <UXButton variant="secondary" color="sky" size="medium">
          MENU
        </UXButton> */}
      </nav>
      <div className="grid grid-cols-2 gap-2">
        <>
          <UXButton size="medium" variant="secondary" color="red">
            singIn
          </UXButton>
          <UXButton size="medium" variant="secondary" color="red">
            logIn
          </UXButton>
        </>
      </div>
    </header>
  );
}
