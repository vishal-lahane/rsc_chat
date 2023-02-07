import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chat as ChatType } from "../models/datatype";

const Chat = () => {
  const [chats, setChats] = useState<[ChatType] | []>([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const { data } = await axios.get("/chats");
    setChats(data);
  };
  return (
    <>
      {chats.map((c) => (
        <div>{c.chatName}</div>
      ))}
    </>
  );
};

export default Chat;
