import React, { useContext, useEffect, useState } from "react";
import styles from "./Homepage.module.scss";
import { AllUsersContext } from "../context/AllUsersContext";
import Conversation from "./Conversation";
import { Link } from "react-router-dom";
import { MessagesContext } from "../context/MessageContext";
import { getAllMessages, sendMessage } from "../apis/message";
import OneMessage from "./OneMessage";

export default function Homepage() {
  const { allUsers, updateAllUsers, selectedUser, selectConversation } =
    useContext(AllUsersContext);
  const { addMessage, displayMessages, allMessages } =
    useContext(MessagesContext);
  const [message, setMessage] = useState("");
  console.log(allMessages);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message) return;
    const newMessage = await sendMessage(message, selectedUser._id);
    setMessage("");
    addMessage(newMessage);
  }

  useEffect(() => {
    updateAllUsers();
    async function getMessages() {
      try {
        if (selectedUser) {
          const messagesFromApi = await getAllMessages(selectedUser);
          displayMessages(messagesFromApi);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getMessages();
  }, [selectedUser]);

  // console.log(allUsers);
  return (
    <div className="d-flex center flex-column flex-fill mh100">
      <h1>Chat</h1>
      <div className="d-flex">
        <div className={`${styles.sidebar} d-flex flex-column`}>
          <h2>Users</h2>
          <div className={`${styles.users} flex-fill`}>
            {allUsers &&
              allUsers.map((user) => (
                <Conversation key={user._id} user={user} />
              ))}
          </div>
          <div>
            <Link
              to="/logout"
              onClick={() => {
                selectConversation(null), displayMessages([]);
              }}
            >
              <button className="btn btn-primary">Logout</button>
            </Link>
          </div>
        </div>
        <div className={`${styles.messages} d-flex flex-column`}>
          <h2>Messages</h2>
          <div className={`${styles.container} flex-fill`}>
            {allMessages &&
              allMessages.map((mes) => (
                <OneMessage key={mes._id} message={mes} />
              ))}
          </div>
          <form onSubmit={handleSubmit} className="d-flex center">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="flex-fill"
            />
            <button
              disabled={!selectedUser && true}
              className="btn btn-primary"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
