import { useState } from "react";

const Chat = () => {
  const [chats, setChats] = useState({
    Felipe: [
      { id: 1, text: "Hi Felipe, I'm looking to remodel my kitchen. Any suggestions?", sender: "user" },
      { id: 2, text: "Hello! Yes, I can connect you with a great team. What's your budget?", sender: "bot" },
    ],
    Felix: [
      { id: 1, text: "Hey Felix! I need advice on remodeling my living room.", sender: "user" },
      { id: 2, text: "Sure, I recommend starting with a design plan. Do you have any ideas in mind?", sender: "bot" },
    ],
    Daria: [
      { id: 1, text: "Hi Daria, do you know any good companies for bathroom renovations?", sender: "user" },
      { id: 2, text: "Yes, I know a reliable company. They specialize in modern designs.", sender: "bot" },
    ],
    Saiful: [
      { id: 1, text: "Saiful, I need help with my office remodel.", sender: "user" },
      { id: 2, text: "Happy to help! What kind of style are you going for?", sender: "bot" },
    ],
    Jose: [
      { id: 1, text: "Hey Jose! I’m considering remodeling my basement.", sender: "user" },
      { id: 2, text: "That's exciting! I know some contractors who can help. When would you like to start?", sender: "bot" },
    ],
  });
  
  const [currentChat, setCurrentChat] = useState("Felipe");
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setChats((prev) => ({
      ...prev,
      [currentChat]: [
        ...prev[currentChat],
        { id: prev[currentChat].length + 1, text: input, sender: "user" },
      ],
    }));
    setInput("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-3xl h-full md:h-[85%] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Chat Main Area */}
        <div className="flex flex-col w-full md:w-2/3 max-w-md p-4 bg-white">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{currentChat}</h2>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 max-h-[65vh]">
            {chats[currentChat]?.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-2 my-1 rounded-lg text-sm max-w-xs ${
                    msg.sender === "user" ? "bg-redMakit text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center p-2 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-2 bg-redMakit text-white rounded-lg hover:bg-red-700"
            >
              Send
            </button>
          </div>
        </div>

        {/* Contacts Sidebar */}
        <div className="w-full md:w-1/3 p-4 bg-gray-100 border-l border-gray-300 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Chats</h3>
          <ul className="space-y-2">
            {Object.keys(chats).map((contact) => (
              <li
                key={contact}
                onClick={() => setCurrentChat(contact)}
                className={`p-2 cursor-pointer rounded-lg ${
                  currentChat === contact
                    ? "bg-redMakit text-white"
                    : "bg-white hover:bg-gray-200 text-gray-800"
                }`}
              >
                {contact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chat;
