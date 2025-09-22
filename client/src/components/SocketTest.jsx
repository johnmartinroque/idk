import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // adjust if backend runs elsewhere

export default function SocketTest() {
  const [status, setStatus] = useState("🔴 Not connected");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
      setStatus("🟢 Socket connected");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setStatus("🔴 Disconnected");
    });

    socket.on("welcome", (data) => {
      console.log("Server says:", data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("welcome");
    };
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Socket.IO Status</h2>
      <div className="text-lg">{status}</div>
    </div>
  );
}
