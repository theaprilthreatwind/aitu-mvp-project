import { clsx } from "clsx";

/**
 * Button компонент.
 *
 * @param {Object} props - Пропсы для кнопки.
 * @param {"small" | "medium" | "large"} [props.size="normal"] - Размер кнопки.
 * @param {"blue" | "red" | "green" | "gray"} [props.color="blue"] - Цвет кнопки.
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
  customClassName = "",
  children,
  ...props
}) {
  const className = clsx(customClassName, "transition-all", {
    "px-4 py-2 text-xl font-bold text-white rounded-lg": size === "small",
    "px-8 py-4 text-2xl font-bold text-white rounded-xl": size === "medium",
    "px-8 py-4 text-4xl font-bold text-white rounded-xl": size === "large",
    "bg-red-600 hover:bg-red-700 ": color === "red",
    "bg-sky-600 hover:bg-sky-700 ": color === "sky",
  });
  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  );
}
