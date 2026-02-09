import { Product, Restaurant } from "@/entities";
import { HeatmapTracker } from "@/features";
import { fetchGetMenu, fetchRestaurantList } from "@/shared";
import {
  AssistantMenu,
  Menu,
  RestaurantHeader,
  RestaurantInfo,
} from "@/widgets";
export default async function Restaraunt({ params }) {
  const { restaurantUrlTitle } = await params;
  const cleanRestaurantUrlTitle = decodeURIComponent(restaurantUrlTitle);

  const menu = await getMenu(cleanRestaurantUrlTitle);
  const categories = await fetchCategories(cleanRestaurantUrlTitle);

  await Promise.all(
    categories.map(async (category) => {
      const rawProducts = await fetchProducts(category.id);

      // Создаем массив объектов Product
      category.products = rawProducts.map(
        (raw) =>
          new Product(
            raw.categoryId,
            raw.title,
            raw.description,
            raw.price,
            raw.photoUrl,
          ),
      );
    }),
  );
  const restaurant = new Restaurant(restaurantUrlTitle, categories);
  console.log({ restaurant });
  console.log(menu);
  return (
    <>
      {menu === "does not exsist" ? (
        <div className="w-full flex justify-center text-6xl mt-20">
          <div>Restaurant does not exsist</div>
        </div>
      ) : (
        <>
          <RestaurantHeader restaurantName={restaurant.title} />
          <RestaurantInfo restaurantName={restaurant.title} />
          <Menu menu={restaurant.categories} />
          <AssistantMenu />
        </>
      )}
    </>
  );
}