import {
  fetchProducts,
  fetchCategories,
  getAvailableRestaurants,
} from "@/shared";
import { RestaurantMapper } from "../model/restaurant-model";

export async function getRestaurantInformation(title) {
  const availableRestaurants = await getAvailableRestaurants();

  if (!availableRestaurants.includes(title)) {
    return null;
  }

  const categories = await fetchCategories(title);
  const productsByCat = {};

  await Promise.all(
    categories.map(async (cat) => {
      productsByCat[cat.id] = await fetchProducts(cat.id);
    }),
  );

  return RestaurantMapper.fromDto(title, categories, productsByCat);
}
