/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);

  // Fetch messages from the server or set up WebSocket connection
  useEffect(() => {
    // Initialization code for WebSocket or fetching initial messages
  }, []);

  const sendMessage = (message) => {
    // Logic for sending message, either via WebSocket or API
    setMessages([...messages, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
