import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // change to your backend URL

export default function SocketTest() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Listen for welcome event
    socket.on("welcome", (data) => {
      console.log("Server says:", data);
      setMessages((prev) => [...prev, `Server: ${data.message}`]);
    });

    // Listen for broadcast messages
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, `Broadcast: ${data}`]);
    });

    return () => {
      socket.off("welcome");
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("send_message", input);
      setInput("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Socket.IO Chat</h2>
      <div className="h-40 overflow-y-auto border p-2 mb-2 bg-white rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className="text-sm">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
          placeholder="Type message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
