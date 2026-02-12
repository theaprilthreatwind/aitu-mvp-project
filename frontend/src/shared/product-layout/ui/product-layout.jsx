import { clsx } from "clsx";
/**
 * Обертка карточки продукта (Stateless).
 * * @param {Object} props
 * @param {string} props.photoUrl - Ссылка на изображение продукта.
 * @param {React.ReactNode} props.children - Контент внутри карточки (текст, цена, кнопки).
 * @param {string} [props.className] - Дополнительные CSS-классы для контейнера.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props.props] - Прочие атрибуты корневого элемента.
 * * @returns {JSX.Element}
 */


export function ProductLayout({ photoUrl, children, className, ...props }) {
  const classNames = clsx(
    "w-70 w-max-50 rounded-2xl shadow-xl text-gray-800 overflow-hidden self-stretch border border-gray-200",
    className,
  );

  return (

    <div className={classNames}>
      <img
        src={photoUrl}
        alt="dish"
        className="h-40 w-full object-cover border-b border-gray-200"
      />
      <div className="px-4 py-2 min-h-40 max-h-60">{children}</div>
    </div>
  );
}
