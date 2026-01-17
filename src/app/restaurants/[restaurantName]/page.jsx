import { fetchGetMenu, UXButton } from "@/shared";
import { Menu, RestaurantHeader, RestaurantInfo } from "@/widgets";

async function getMenu(restaurantName) {
  try {
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
      <RestaurantHeader restaurantName={restaurantName}/>
      <main className="">
        <RestaurantInfo restaurantName={restaurantName} />
        <Menu menu={menu} />
      </main>
    </>
  );
}
