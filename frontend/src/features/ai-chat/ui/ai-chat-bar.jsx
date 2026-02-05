"use client";

import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { sendQuestion } from "../api/send-question.js";

export function AiChatBar() {
  const [chatHistory, setChatHistory] = useState([]); // история чата
  const [isChatBarShown, setIsChatBarShown] = useState(false); // true <=> false, видна ли панель
  const [status, setStatus] = useState("typing"); // "typing" <=> "submitting"
  const [userText, setUserText] = useState(""); // текст пользователя
  const chatBarRef = useRef(null); // свойства панели

  // отправка текста пользователя
  async function sendText(formData) {
    formData.preventDefault();

    setChatHistory((prev) => {
      const newArray = prev.concat({ role: "user", message: userText });
      if (newArray.length > 3) {
        const sortedArray = newArray.filter((_, index) => index > 0);
        return sortedArray;
      }
      return newArray;
    });

    setUserText("");
  }

  // обработчик клика не на панель
  function handleClickOutside(event) {
    if (!chatBarRef.current?.contains(event.target) && isChatBarShown) {
      setIsChatBarShown(false);
    }
  }

  // вешаем eventListener на клики
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return isChatBarShown ? (
    // если панель показываеться
    <div className="fixed z-50 w-full bottom-0 px-4 pb-4 flex justify-center gap-2">
      <div className="min-w-85 max-w-150 w-full" ref={chatBarRef}>
        <div className="flex flex-col bg-transparent w-full p-4 rounded-2xl">
          {chatHistory.map((element, index) =>
            element.role === "user" ? (
              // если роль user
              <div key={index} className="flex flex-col items-end mb-4 bg-white">
                <div className="flex flex-col items-end max-w-70 min-w-60 p-4 border border-gray-200 rounded-b-2xl rounded-l-2xl shadow-xl">
                  <div className="mb-2 text-xl">{element.role}</div>
                  <div>{element.message}</div>
                </div>
              </div>
            ) : (
              // если роль bot
              <div key={index} className="flex flex-col items-start">
                <div className="flex flex-col items-start p-4 border border-gray-200 rounded-r-2xl rounded-b-2xl shadow-xl max-w-70 min-w-60 ">
                  <div className="mb-2 text-xl">{element.role}</div>
                  <div>{element.message}</div>
                </div>
              </div>
            ),
          )}
        </div>

        <form className="flex gap-2 w-full" onSubmit={sendText}>
          <input
            placeholder="Ask something"
            className="bg-white border grow box-border shrink-0 border-gray-200 shadow-xl rounded-full pl-5 min-w-0"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
          />
          <button
            type="submit"
            className="p-4 rounded-full border border-gray-200 text-gray-500 text-2xl bg-white shadow-xl"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  ) : (
    // если панель не показываеться
    <div className="fixed z-50 w-full bottom-0 px-4 pb-4 flex justify-end flex-col items-center gap-2">
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="p-4 rounded-full border border-gray-200 text-gray-500 text-2xl bg-white shadow-xl"
          onClick={() => setIsChatBarShown(true)}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
