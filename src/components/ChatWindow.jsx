import React from "react";
import { useSelector } from "react-redux";

const ChatWindow = () => {
  const { activeChat } = useSelector((state) => state.chat);

  if (!activeChat) return <div className="w-2/3 p-4">Select a chat</div>;

  return (
    <div className="w-2/3 p-4">
      <h2 className="text-xl">{activeChat.name}</h2>

      {/* Render messages if activeChat has messages */}
      <div className="mt-4">
        {activeChat.messages.length > 0 ? (
          <div>
            {activeChat.messages.map((message, index) => (
              <div key={index} className="p-2 my-2 bg-gray-200 rounded">
                <p>{message.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>No messages yet...</div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
