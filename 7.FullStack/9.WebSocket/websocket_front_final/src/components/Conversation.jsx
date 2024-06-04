import React, { useContext } from "react";
import styles from "./Conversation.module.scss";
import { AllUsersContext } from "../context/AllUsersContext";
import { SocketContext } from "../context/SocketContext";

export default function Conversation({ user }) {
  const { selectConversation } = useContext(AllUsersContext);
  const { onlineUsers } = useContext(SocketContext);
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      onClick={() => selectConversation(user)}
      className="d-flex flex-column"
    >
      <div className={`${styles.pseudoContainer}`}>
        <p className={`${styles.pseudo}`}>
          {user.username}
          {isOnline && "✅"}
        </p>
      </div>
    </div>
  );
}
