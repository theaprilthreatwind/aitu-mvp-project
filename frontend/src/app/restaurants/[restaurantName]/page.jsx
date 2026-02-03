import { AiChatBar } from "@/features";
import { fetchGetMenu, fetchRestaurantList } from "@/shared";
import { Menu, RestaurantHeader, RestaurantInfo } from "@/widgets";

async function getMenu(restaurantName) {
  try {
    const restaurantList = await fetchRestaurantList();
    console.log(restaurantList);
    if (!restaurantList.includes(restaurantName)) return "does not exsist";
    const menu = await fetchGetMenu(restaurantName);
    return menu;
  } catch (error) {
    console.error(error.message);
  }
}

export default async function Restaraunt({ params }) {
  const { restaurantName } = await params;
  const menu = await getMenu(restaurantName);

  return (
    <>
      {menu === "does not exsist" ? (
        <div className="w-full flex justify-center text-6xl mt-20">
          <div>Restaurant does not exsist</div>
        </div>
      ) : (
        <>
          <RestaurantHeader restaurantName={restaurantName} />
          <RestaurantInfo restaurantName={restaurantName} />
          <Menu menu={menu} />
          <AiChatBar />
        </>
      )}
    </>
  );
}
