import { FaPaperPlane } from "react-icons/fa6";
import { clsx } from "clsx";

/**
 * Панель ввода
 * @param {boolean} isSubmitting - отправляеться ли сообщение
 * @param {Function} setUserText - функция для изменения текста пользователя
 * @param {string} userText - текст пользователя
 * @param {Function} sendText - функция которая срабатывает при отправке запроса
 */

export function AiForm({ isSubmitting, setUserText, userText, sendText }) {
  const inputClasses = clsx(
    "border border-gray-200 grow shadow-xl rounded-full pl-5 min-w-0 shrink-0",
    isSubmitting ? "bg-neutral-100" : "bg-white",
  );

  return (
    <form className="flex gap-2 w-full" onSubmit={sendText}>
      <input
        disabled={isSubmitting}
        placeholder={isSubmitting ? "wait for an answer" : "Ask something"}
        className={inputClasses}
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="p-4 rounded-full border border-gray-200 text-gray-500 text-2xl bg-white shadow-xl"
      >
        <FaPaperPlane />
      </button>
    </form>
  );
}
