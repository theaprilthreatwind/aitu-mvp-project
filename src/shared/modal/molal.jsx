import { RxCross1 } from "react-icons/rx";

/**
 * Button компонент.
 *
 * @param {"button | "submit"} [props.color="button"] - Тип кнопки
 * @param {function} props.onClose - Функция при нажатии закрыть
 * @param {React.ReactNode} props.children - Содержимое кнопки.
 */

export function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 backdrop-blur-xs">
      <div className="flex justify-center bg-white">
        <div className="relative p-4 rounded-2xl shadow border border-gray-200 max-w-383">
          <button
            onClick={onClose}
            className="absolute text-2xl -right-8 top-1"
          >
            <RxCross1 />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
