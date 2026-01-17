import { clsx } from "clsx";

/**
 * Button компонент.
 *
 * @param {Object} props - Пропсы для ввода.
 * @param {string} placeHolder - PlaceHolder
 * @param {"small" | "medium"} [props.size="normal"] - Размер ввода.
 */

export function UXInput({
  placeHolder = "Write something",
  size = "medium",
  ...props
}, ref) {
  const className = clsx("text-gray-800 bg-white border border-gray-400", {
    "rounded-2xl px-4 py-2 text-xl": size === "medium",
    "rounded-xl px-2 py1 text-lg": size === "small",
  });
  return <input placeholder={placeHolder} className={className} ref={ref} {...props}/>;
}
