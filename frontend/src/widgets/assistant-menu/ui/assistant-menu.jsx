"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";
import { MessageUI } from "@/entities";
import { AssistantSendForm } from "@/features";

const chatHistoryExample = [
  {
    role: "user",
    content: "hello nigga",
  },
  {
    role: "assistant",
    content: "fuck you asshole",
  },
];

export function AssistantMenu() {
  const [assistantChat, setAssistantChat] = useState({
    history: [],
    status: "typing",
  });
  const [isChatMenuShown, setIsChatMenuShown] = useState(false);

  const chatMenuRef = useRef(null);

  function handleClickOutside(event) {
    if (!chatMenuRef.current?.contains(event.target) && isChatMenuShown) {
      setIsChatMenuShown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  if (isChatMenuShown) {
    return (
      <div className="fixed z-50 w-full bottom-0 px-4 pb-4 flex justify-center gap-2">
        <div className="min-w-85 max-w-150 w-full" ref={chatMenuRef}>
          <div className="flex flex-col bg-transparent w-full p-4 rounded-2xl">
            {assistantChat.history.map((value, index) => (
              <MessageUI
                key={index}
                role={value.role}
                content={value.content}
              />
            ))}
          </div>
          <AssistantSendForm setAssistantChat={setAssistantChat} assistantChat={assistantChat}/>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed z-50 w-full bottom-0 px-4 pb-4 flex justify-end flex-col items-center gap-2">
      <div className="flex justify-center w-full">
        <button
          className="p-4 rounded-full border border-gray-200 text-gray-500 text-2xl bg-white shadow-xl"
          onClick={() => setIsChatMenuShown(true)}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
