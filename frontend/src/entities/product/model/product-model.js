/**
 * @class Product
 * @description Сущность продукта (блюда) ресторана.
 * Используется для централизованного хранения и валидации данных о продукте.
 * * @param {number} categoryId - Уникальный идентификатор категории.
 * @param {string} title - Название блюда.
 * @param {string} description - Краткое описание состава или способа приготовления.
 * @param {number} price - Стоимость в тенге.
 * @param {string} photoUrl - Ссылка на изображение блюда.
 */

export function Product(categoryId, title, description, price, photoUrl) {
  this.categoryId = categoryId;
  this.title = title;
  this.description = description;
  this.price = price;
  this.photoUrl = photoUrl;
}
