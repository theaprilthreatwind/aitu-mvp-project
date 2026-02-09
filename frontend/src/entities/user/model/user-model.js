/**
 * @class User
 * @description Сущность пользователя
 * @param {"MANAGER" | "CLIENT"} role - роль пользователя
 * @param {string} token - Токен аутентификации пользователя (формат UUID v4).
 */

export function User(role, token) {
  this.role = role;
  this.token = token;
}
