import { fetchGetMenu, UXButton } from "@/shared";
import { Menu, RestaurantHeader, RestaurantInfo } from "@/widgets";

async function getMenu(restaurantName) {
  try {
    const restaurantList = await fetchRestaurantList();
    if (!restaurantList.includes(restaurantName)) return "does not exsist";
    const menu = await fetchGetMenu(restaurantName);
    return menu;
  } catch (error) {
    console.error(error.message);
  }
}

export default async function Restaraunt({ params }) {
  const { restaurantName } = await params;
  console.log(restaurantName);
  const menu = await getMenu(restaurantName);

  return (
    <>
      {menu === "does not exsist"}
      <RestaurantHeader restaurantName={restaurantName} />
      <main className="">
        <RestaurantInfo restaurantName={restaurantName} />
        <Menu menu={menu} />
      </main>
    </>
  );
}
