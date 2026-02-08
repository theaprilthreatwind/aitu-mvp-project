import { Message } from "../model/message-model";

export function MessageUI({ role, content }) {
  const message = new Message(role, content);

  if (message.role === "user") {
    return (
      <div className="flex flex-col items-end mb-4 ">
        <div className="flex flex-col items-end bg-white max-w-70 min-w-60 p-4 border border-gray-200 rounded-b-2xl rounded-l-2xl shadow-xl">
          <div className="mb-2 text-xl">{message.role}</div>
          <div>{message.content}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col items-start p-4 border bg-white border-gray-200 rounded-r-2xl rounded-b-2xl shadow-xl max-w-70 min-w-60 ">
        <div className="mb-2 text-xl">{message.role}</div>
        <div>{message.content}</div>
      </div>
    </div>
  );
}
