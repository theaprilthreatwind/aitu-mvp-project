import { Product } from "@/entities/product";

export const createRestaurant = (title, categories = []) => ({
  title,
  categories,
});

export const RestaurantMapper = {
  fromDto(rawTitle, rawCategories, productsMap) {
    const categories = rawCategories.map((cat) => ({
      ...cat,
      products: (productsMap[cat.id] || []).map((p) => ({
        productId: p.id,
        categoryId: p.categoryId,
        title: p.title,
        description: p.description,
        price: p.price,
        photoUrl: p.photoUrl
      })),
    }));

    return createRestaurant(rawTitle, categories);
  },
};

// import { Product } from "../../product/model/product-model";

// /**
//  * @typedef {Object} Category
//  * @property {number} id - ID категории
//  * @property {string} title - Название категории (например, "Пицца")
//  * @property {string} description - описание категории
//  * @property {import('../../product/model/product-model.js').Product[]} products - Массив объектов продуктов этой категории
//  */

// /**
//  * @class Restaurant
//  * @description Сущность ресторана, содержащая меню и общую информацию.
//  * * @param {string} title - Название заведения.
//  * @param {Category[]} categories - Массив категорий (каждая содержит свои продукты).
//  */

// export function Restaurant(title, categories) {
//   this.title = title;
//   this.categories = categories || [];
// }

// /**
//  * Статический метод для создания ресторана из "сырых" данных API.
//  */
// Restaurant.fromDto = function (rawTitle, rawCategories, productsMap) {
//   const categories = rawCategories.map((cat) => ({
//     ...cat,
//     // Сразу превращаем сырые продукты в объекты класса Product
//     products: (productsMap[cat.id] || []).map(
//       (p) =>
//         new Product(p.categoryId, p.title, p.description, p.price, p.photoUrl),
//     ),
//   }));

//   return new Restaurant(rawTitle, categories);
// };
