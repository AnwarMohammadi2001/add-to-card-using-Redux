import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slices/chatSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(addMessage({ text: message, id: Date.now() }));
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className="p-2 mb-2 bg-gray-100 rounded-lg">
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded-lg mr-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
