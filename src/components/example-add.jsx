"use client";

import { useStore } from "@/stores";
import JsSIP from "jssip";

export default function ExampleAdd() {
  const { setUserAgent } = useStore();
  const handleAddUserAgent = () => {
    const socket = new JsSIP.WebSocketInterface("wss://sip.example.com");
    const configuration = {
      sockets: [socket],
      uri: "sip:alice@example.com",
      ha1: "350fe29ce3890bd85d105998b0a95cf7",
      realm: "sip.example.com",
    };
    const ua = new JsSIP.UA(configuration);
    setUserAgent(ua);
  };

  return <button onClick={handleAddUserAgent}>Click Add</button>;
}
