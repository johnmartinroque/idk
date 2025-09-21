const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express + PostgreSQL Auth Server!");
});

{
  /* SOCKET */
}
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // change to your frontend origin in production
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.emit("welcome", { message: "Hello from server!", id: socket.id });

  socket.on("send_message", (data) => {
    console.log("Message received:", data);
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
