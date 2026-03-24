// App.js
import { useAppContext } from "@/context/appContext";
import { useProductStore } from "@/zustand/store";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { z } from "zod";
const socket = io("http://localhost:3000");

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  category: z.string(),
  image: z.string(),
  size: z.string(),
});
function WebSocket() {
  const setCounter = useProductStore((store) => store.setCounter);
  const { setActiveOrderBar } = useAppContext();
  const [messages, setMessages] = useState<string>("");
  const addProduct = useProductStore((store) => store.addProduct);
  useEffect(() => {
    const handler = (msg: string) => {
      const data = JSON.parse(msg);
      const result = productSchema.safeParse(data);
      const product = result.data;

      if (!product) return;

      setActiveOrderBar(true);

      addProduct({
        quantity: 1,
        price: product.price,
        image: product.image,
        available: true,
        name: product.name,
        size: product.size,
        category: product.category,
      });

      setCounter(product.name, "add");
    };

    socket.off("receive_message");

    socket.on("receive_message", handler);

    return () => {
      socket.off("receive_message", handler);
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", "Hello from React");
  };

  return null;
}

export default WebSocket;
