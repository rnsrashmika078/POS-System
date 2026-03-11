// App.js
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function WebSocket() {
  const [messages, setMessages] = useState<string>("");

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      setMessages(msg);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", "Hello from React");
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <div>{messages}</div>
    </div>
  );
}

export default WebSocket;
