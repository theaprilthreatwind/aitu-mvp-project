/**
 * @typedef {Object} Category
 * @property {number} id - ID категории
 * @property {string} title - Название категории (например, "Пицца")
 * @property {string} description - описание категории
 * @property {import('../../product/model/product-model.js').Product[]} products - Массив объектов продуктов этой категории
 */

/**
 * @class Restaurant
 * @description Сущность ресторана, содержащая меню и общую информацию.
 * * @param {string} title - Название заведения.
 * @param {Category[]} categories - Массив категорий (каждая содержит свои продукты).
 */

export function Restaurant(title, categories) {
  this.title = title;
  this.categories = categories || [];
}

