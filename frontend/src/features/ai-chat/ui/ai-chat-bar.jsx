"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { GrCircleQuestion } from "react-icons/gr";

export function AiChatBar() {
  const [chatHistory, setChatHistory] = useState(null);

  return (
    <div className="fixed z-50 w-full bottom-6 flex justify-center">
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Ask something"
          className="flex items-center gap-2 bg-white border grow border-gray-200 shadow-xl rounded-full pl-5 min-w-81 max-w-1000 w-full"
        />
        <button
          type="submit"
          className="flex justify-center items-center p-4 rounded-full border border-gray-200 text-gray-500 text-2xl bg-white shadow-xl"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}
