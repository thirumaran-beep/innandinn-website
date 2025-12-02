import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: number; text: string; sender: 'user' | 'bot' }[]>([
    { id: 1, text: "Hi! 👋 Welcome to Innovative & Innovators. How can we help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");

  const botResponses = [
    "Great question! Would you like to know about our bulk ordering process?",
    "I'd be happy to help! Are you interested in private-label products?",
    "Thanks for reaching out! Our team can provide customized quotes. When would you like to discuss?",
    "That's excellent! We offer pan-India delivery. What's your location?",
    "Our team is here to assist. Feel free to share your requirements!"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: messages.length + 1, text: input, sender: 'user' as const };
    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot' as const
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] bg-white rounded-lg shadow-2xl flex flex-col h-[500px] z-40 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-t-lg">
            <h3 className="font-heading font-bold text-lg">Chat with us</h3>
            <p className="text-xs text-white/80">We typically respond within minutes</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex",
                  msg.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-xs px-4 py-2 rounded-lg",
                    msg.sender === 'user'
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-slate-100 text-slate-900 rounded-bl-none"
                  )}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 p-3 rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-primary hover:bg-primary/90 text-white rounded transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
