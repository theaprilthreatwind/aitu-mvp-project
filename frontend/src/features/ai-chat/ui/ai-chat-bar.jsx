"use client";

import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { sendRequest } from "../api/send-request.js";
import { AiForm } from "./ai-form.jsx";
import { ChatHistory } from "./chat-history.jsx";

export function AiChatBar({ menu }) {
  const [chatHistory, setChatHistory] = useState([]); // история чата
  const [isChatBarShown, setIsChatBarShown] = useState(false); // true <=> false, видна ли панель
  const [status, setStatus] = useState("typing"); // "typing" <=> "submitting"
  const [userText, setUserText] = useState(""); // текст пользователя
  const chatBarRef = useRef(null); // свойства панели
  console.log(typeof chatHistory);
  // отправка текста пользователя
  async function sendText(formData) {
    formData.preventDefault();

    setStatus("submitting");

    setChatHistory((prev) => prev.concat({ role: "user", content: userText }));
    setUserText("");

    const strMenu = JSON.stringify(menu);

    const assistantText = await sendRequest(userText, strMenu);
    
    setChatHistory((prev) => {
      const newChatHistory = prev.concat({
        role: "assistant",
        content: assistantText,
      });

      if (newChatHistory.length > 3) {
        console.log("here");
        return newChatHistory.filter((_, index) => index >= 1);
      }

      return newChatHistory;
    });

    setStatus("typing");
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
          <ChatHistory chatHistory={chatHistory} />
        </div>
        <AiForm
          isSubmitting={status === "submitting" ? true : false}
          userText={userText}
          setUserText={setUserText}
          sendText={sendText}
        />
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
