import React from "react";
import { useSelector } from "react-redux";

const ChatWindow = () => {
  const { activeChat } = useSelector((state) => state.chat);

  if (!activeChat) return <div className="w-2/3 p-4">Select a chat</div>;

  return (
    <div className="w-2/3 p-4">
      <h2 className="text-xl">{activeChat.name}</h2>
      <div className="mt-4">Messages go here...</div>
    </div>
  );
};

export default ChatWindow;
