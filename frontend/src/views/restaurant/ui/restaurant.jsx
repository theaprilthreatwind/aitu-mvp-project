import { getRestaurantInformation } from "@/entities";
import { sendIncomingVisitor } from "@/shared";
import {
  RestaurantHeader,
  RestaurantInfo,
  RestaurantMenu,
  HeatmapTracker,
  AssistantMenu,
} from "@/widgets/restaurant";

export async function Restaurant({ params }) {
  const { restaurantUrlTitle } = await params;

  const cleanRestaurantUrlTitle = decodeURIComponent(restaurantUrlTitle);

  const restaurant = await getRestaurantInformation(cleanRestaurantUrlTitle);

  await sendIncomingVisitor(cleanRestaurantUrlTitle);

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
          <RestaurantMenu restaurantMenu={restaurant.categories} />
          <AssistantMenu
            restaurantMenu={restaurant.categories}
            restaurantTitle={restaurant.title}
          />
          <HeatmapTracker restaurantTitle={restaurant.title} />
        </>
      )}
    </>
  );
}
