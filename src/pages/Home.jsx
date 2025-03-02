import React from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
  return (
    <div className="flex h-screen">
      <ChatList />
      <ChatWindow />
    </div>
  );
};

export default Home;
