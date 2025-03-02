// src/pages/ChatList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveChat } from "../redux/slices/chatSlice";

const ChatList = () => {
  const { chats } = useSelector((state) => state.chat || {}); // Add fallback
  const dispatch = useDispatch();

  if (!chats) return <div>No chats available</div>; // Optionally show a message if chats is undefined

  return (
    <div className="w-1/3 p-4 bg-gray-100">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="p-3 cursor-pointer hover:bg-gray-200"
          onClick={() => dispatch(setActiveChat(chat))}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
