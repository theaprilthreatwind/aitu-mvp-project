"use server";

import { getRestaurantInformation } from "@/entities";
import { HeatmapTracker } from "@/features";
import {
  AssistantMenu,
  Menu,
  RestaurantHeader,
  RestaurantInfo,
} from "@/widgets";

export default async function Restaraunt({ params }) {
  const { restaurantUrlTitle } = await params;
  
  const cleanRestaurantUrlTitle = decodeURIComponent(restaurantUrlTitle);

  const restaurant = await getRestaurantInformation(cleanRestaurantUrlTitle);

  return (
    <>
      {restaurant === null ? (
        <div className="w-full flex justify-center text-6xl mt-20">
          <div>Restaurant does not exsist</div>
        </div>
      ) : (
        <>
          <RestaurantHeader restaurantName={restaurant.title} />
          <RestaurantInfo restaurantName={restaurant.title} />
          <Menu restaurantMenu={restaurant.categories} />
          <AssistantMenu
            restaurantMenu={restaurant.categories}
            restaurantTitle={restaurant.title}
          />

        </>
      )}
    </>
  );
}
