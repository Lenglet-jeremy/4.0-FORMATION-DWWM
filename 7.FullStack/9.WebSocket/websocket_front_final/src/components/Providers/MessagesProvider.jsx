import { useState } from "react";
import { MessagesContext } from "../../context/MessageContext";

export default function MessagesProvider({ children }) {
  const [allMessages, setAllMessages] = useState([]);

  function displayMessages(datas) {
    setAllMessages(datas);
  }

  function addMessage(message) {
    setAllMessages([...allMessages, message]);
  }
  return (
    <MessagesContext.Provider
      value={{
        allMessages,
        addMessage,
        displayMessages,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
