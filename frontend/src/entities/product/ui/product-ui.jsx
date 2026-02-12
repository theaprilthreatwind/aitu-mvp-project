import { Product } from "../model/product-model";
import { clsx } from "clsx";

/**
 * @component ProductUI
 * @description UI-компонент для отображения карточки продукта.
 * * @param {Object} props - Свойства компонента.
 * @param {number} props.categoryId - ID категории.
 * @param {string} props.title - Заголовок карточки.
 * @param {string} props.description - Текст описания.
 * @param {number} props.price - Цена для отображения.
 * @param {string} props.photoUrl - URL картинки.
 * @param {React.ReactNode} [props.children] - Дополнительные элементы (например, кнопки действий).
 * @param {string} [props.className] - Дополнительные CSS классы для внешней обертки.
 * * @returns {JSX.Element} Рендерит карточку блюда.
 */

export function ProductUI({
  categoryId,
  title,
  description,
  price,
  photoUrl,
  productId,
  children,
  className,
  ...props
}) {
  const product = Product(
    categoryId,
    title,
    description,
    price,
    photoUrl,
    productId,
  );

  return (
    <div className={className} {...props}>
      <div className="text-xl font-bold flex">{product.title}</div>
      <div className="text-lg text-gray-600">{product.description}</div>
      <div className="text-lg text-gray-600">Цена: {product.price} тенге</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
