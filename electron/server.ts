import express from "express";
import http from "http";
import { Server } from "socket.io";
import { Request, Response } from "express";
export const initServer = () => {
  const app = express();
  const PORT = 3000;

  app.get("/", (req: Request, res: Response) => {
    res.send("Socket.IO server running");
  });

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("send_message", (data) => {
      console.log("Message received:", data);

      io.emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });

  server.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`),
  );
};
