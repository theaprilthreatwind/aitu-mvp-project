import { fetchProducts, fetchCategories, getAvailableRestaurants } from "@/shared";
import { RestaurantMapper } from "../model/restaurant-model";

export async function getRestaurantInformation(title) {
  const availableRestaurants = await getAvailableRestaurants();

  // Проверка на существование
  if (!availableRestaurants.includes(title)) {
    return null;
  }

  const categories = await fetchCategories(title);
  const productsByCat = {};

  // Собираем продукты для всех категорий параллельно
  await Promise.all(
    categories.map(async (cat) => {
      productsByCat[cat.id] = await fetchProducts(cat.id);
    }),
  );

  // ВАЖНО: Используем Mapper, чтобы правильно "склеить" категории и продукты
  return RestaurantMapper.fromDto(title, categories, productsByCat);
}