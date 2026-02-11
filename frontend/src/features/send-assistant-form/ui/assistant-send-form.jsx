"use client";

import { fetchAssistantResponse } from "../api/fetch-assistant-response";
import { FaPaperPlane } from "react-icons/fa6";
import { useState } from "react";

export function AssistantSendForm({ assistantChat, setAssistantChat, restaurantMenu }) {
  const [userText, setUserText] = useState("");

  async function handleSubmitForm(formData) {
    formData.preventDefault();

    setAssistantChat((prev) => ({
      history: [...prev.history, { role: "user", content: userText }],
      status: "submitting",
    }));

    setUserText("");
    const stringifiedMenu = JSON.stringify(restaurantMenu)
    const assistantText = await fetchAssistantResponse(userText, stringifiedMenu);

    setAssistantChat((prev) => ({
      history: [...prev.history, { role: "assistant", content: assistantText }],
      status: "typing",
    }));
  }

  return (
    <form onSubmit={handleSubmitForm} className="flex gap-2 w-full">
      <input
        value={userText}
        className="border border-gray-200 bg-white grow shadow-xl rounded-full pl-5 min-w-0 shrink-0"
        placeholder={
          assistantChat.status === "typing"
            ? "Ask something"
            : "Wait for an answer..."
        }
        disabled={assistantChat.status === "typing" ? false : true}
        onChange={(e) => setUserText(e.target.value)}
      />
      <button
        type="submit"
        disabled={assistantChat.status === "typing" ? false : true}
        className="p-4 rounded-full border border-gray-200 text-gray-500 text-2xl bg-white shadow-xl"
      >
        <FaPaperPlane />
      </button>
    </form>
  );
}
