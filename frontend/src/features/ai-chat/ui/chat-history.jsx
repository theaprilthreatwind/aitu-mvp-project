/**
 * @param {object[]} chatHistory - массив с истории сообщения пользователя и чат-бота
 * @returns {JSX.element}
 */

export function ChatHistory({ chatHistory }) {
  return chatHistory.map((element, index) =>
    element.role === "user" ? (
      // если роль user
      <div key={index} className="flex flex-col items-end mb-4 ">
        <div className="flex flex-col items-end bg-white max-w-70 min-w-60 p-4 border border-gray-200 rounded-b-2xl rounded-l-2xl shadow-xl">
          <div className="mb-2 text-xl">{element.role}</div>
          <div>{element.content}</div>
        </div>
      </div>
    ) : (
      // если роль bot
      <div key={index} className="flex flex-col items-start">
        <div className="flex flex-col items-start p-4 border bg-white border-gray-200 rounded-r-2xl rounded-b-2xl shadow-xl max-w-70 min-w-60 ">
          <div className="mb-2 text-xl">{element.role}</div>
          <div>{element.content}</div>
        </div>
      </div>
    ),
  );
}
