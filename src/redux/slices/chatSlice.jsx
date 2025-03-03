// src/components/ChatList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChats, setActiveChat } from "../redux/slices/chatSlice";

const ChatList = () => {
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state.chat);

  useEffect(() => {
    // Example of fetching chats (could be from an API or static data)
    const fetchedChats = [
      { id: 1, name: "Chat 1", messages: [] },
      { id: 2, name: "Chat 2", messages: [] },
    ];

    // Dispatching action to set chats
    dispatch(setChats(fetchedChats));
  }, [dispatch]);

  const handleChatClick = (chat) => {
    // Set the active chat when a chat is clicked
    dispatch(setActiveChat(chat));
  };

  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => handleChatClick(chat)}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
