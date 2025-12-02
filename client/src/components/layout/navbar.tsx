import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "👋 Welcome! How can we help you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages([...messages, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "Thank you for your inquiry! Our team will respond shortly with detailed information about our products and bulk pricing.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 max-w-[90vw] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <div>
                <h3 className="font-bold text-sm">Support Assistant</h3>
                <p className="text-xs opacity-90">Innovative & Innovators</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 max-h-96 space-y-3 dark:bg-slate-900/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex",
                  msg.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-xs px-3 py-2 rounded-lg text-sm",
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none"
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 dark:border-slate-800 p-3 flex gap-2 bg-slate-50 dark:bg-slate-900 rounded-b-xl">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              data-testid="chatbot-input"
            />
            <Button
              size="sm"
              onClick={handleSendMessage}
              className="bg-primary hover:bg-primary/90"
              data-testid="chatbot-send"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "rounded-full w-16 h-16 shadow-lg animate-bounce",
          isOpen
            ? "bg-slate-700 hover:bg-slate-800"
            : "bg-primary hover:bg-primary/90"
        )}
        size="lg"
        data-testid="chatbot-toggle"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
}
