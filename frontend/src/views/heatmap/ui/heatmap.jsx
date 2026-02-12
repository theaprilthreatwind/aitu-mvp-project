import {
  RestaurantMenu,
  RestaurantHeader,
  RestaurantInfo,
} from "@/widgets/restaurant";
import { HeatmapDisplayUI } from "./heatmap-display-ui";
import { getRestaurantInformation } from "@/entities";

export async function Heatmap({ params }) {
  const { restaurantUrlTitle } = await params;

  const cleanRestaurantUrlTitle = decodeURIComponent(restaurantUrlTitle);

  const mousePoints = await getMousePoints(cleanRestaurantUrlTitle);
  const restaurant = await getRestaurantInformation(cleanRestaurantUrlTitle);
  return (
    <>
      {restaurant === null ? (
        <div className="w-full flex justify-center text-6xl mt-20">
          <div>Restaurant does not exsist</div>
        </div>
      ) : (
        <div className="relative ">
          <HeatmapDisplayUI points={mousePoints} />
          <RestaurantHeader restaurantName={restaurant.title} />
          <RestaurantInfo restaurantName={restaurant.title} />
          <RestaurantMenu restaurantMenu={restaurant.categories} />
        </div>
      )}
    </>
  );
}

async function getMousePoints(restaurantTitle) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/${restaurantTitle}/getMousePoints`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(
        `Error during get mouse points. Code: ${response.status}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
