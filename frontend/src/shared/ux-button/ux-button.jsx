import { clsx } from "clsx";

/**
 * Button компонент.
 *
 * @param {Object} props - Пропсы для кнопки.
 * @param {"small" | "medium" | "large"} [props.size="normal"] - Размер кнопки.
 * @param {"blue" | "red" | "green" | "gray"} [props.color="blue"] - Цвет кнопки.
 * @param {"primary" | "secondary"} [props.variant="primary"] - вариант кнопки
 * @param {"button | "submit"} [props.color="button"] - Тип кнопки
 * @param {function} [props.onClick=null] - Функция при нажатии
 * @param {React.ReactNode} props.children - Содержимое кнопки.
 * @param {string} props.customClassName - дополнительные стили
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Остальные атрибуты для кнопки.
 */
export function UXButton({
  size = "medium",
  color = "red",
  type = "button",
  variant = "primary",
  customClassName = "",
  children,
  ...props
}) {
  const className = clsx(
    customClassName,
    "transition-all hover:cursor-pointer",
    {
      "px-2 py-1 text-xl rounded-xl": size === "small",
      "px-4 py-2 text-3xl rounded-3xl": size === "medium",
      "px-8 py-4 text-4xl rounded-xl": size === "large",
      "bg-red-600 text-white font-bold hover:bg-red-700 ":
        color === "red" && variant === "primary",
      "bg-sky-600 text-white font-bold hover:bg-sky-700 ":
        color === "sky" && variant === "primary",
      "border border-red-600 hover:border-red-400 hover:text-gray-600 text-gray-800 bg-white":
        color === "red" && variant === "secondary",
      "border border-sky-600 hover:border-sky-400 hover:text-gray-600 text-gray-800 bg-white":
        color === "sky" && variant === "secondary",
    }
  );
  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  );
}
