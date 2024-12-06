"use client";

import { motion } from "framer-motion";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Chatbot: React.FC = () => {
  const [chatbotOpen, setChatbotOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    const userMessage: Message = { text: userInput, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setUserInput("");
    setIsLoading(true);

    try {
      // Make API call using Axios
      const response = await axios.post(
        "https://maurifun.xyz/main/agent_water/",
        {
          query: userInput,
        }
      );

      const botResponse: Message = {
        text: response.data.response || "Réponse indisponible",
        sender: "bot",
      };

      // Append bot's response to the chat
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Erreur : impossible d'obtenir une réponse. Réessayez plus tard.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-teal-700 transition-all z-50"
        onClick={() => setChatbotOpen(!chatbotOpen)}
        aria-label="Open Chatbot"
      >
        🤖
      </button>

      {/* Chatbot Interface */}
      {chatbotOpen && (
        <motion.div
          className="fixed bottom-20 right-6 w-96 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {/* Header with Slogan */}
          <div className="p-4 bg-teal-600 text-white font-bold">
            Explorez les mystères de l'océan, une question à la fois ! 🌊
          </div>

          {/* Chat Messages */}
          <div className="p-4 text-left text-gray-800 h-64 overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-gray-500">
                Posez une question pour commencer !
              </p>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="text-gray-500 text-sm italic">
                Le bot réfléchit...
              </div>
            )}
          </div>

          {/* Input Section with Icons */}
          <div className="p-4 border-t border-gray-300">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Posez une question..."
                className="flex-grow p-2 border rounded focus:outline-none"
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSend}
                className="bg-teal-600 text-white px-3 py-2 rounded-full hover:bg-teal-700 transition flex items-center justify-center"
                title="Envoyer"
                aria-label="Envoyer"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
              </button>
              <button
                onClick={handleReset}
                className="bg-gray-300 text-teal-600 px-3 py-2 rounded-full hover:bg-gray-400 transition flex items-center justify-center"
                title="Réinitialiser"
                aria-label="Réinitialiser"
              >
                <FontAwesomeIcon icon={faRotateLeft} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
