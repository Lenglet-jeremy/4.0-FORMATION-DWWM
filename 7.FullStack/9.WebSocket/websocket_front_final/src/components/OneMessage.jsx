import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function OneMessage({ message }) {
  const { user } = useContext(UserContext);
  const fromMe = message.senderId === user._id;
  const chatStyle = fromMe
    ? "justify-content-end mr-15"
    : "justify-content-start ml-15";

  const spanStyle = fromMe ? "sender" : "receiver";
  return (
    <div className={`d-flex ${chatStyle} mt-10`}>
      <span className={`${spanStyle}`}>{message.message}</span>
    </div>
  );
}
