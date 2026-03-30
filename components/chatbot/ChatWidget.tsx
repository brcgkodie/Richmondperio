"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const GREETING =
  "Hello! I'm the virtual assistant for Overstreet, White & Dunegan. I can help you with scheduling appointments, learning about our services, insurance questions, or anything else about our practice. How can I help you today?";

const QUICK_ACTIONS = [
  { label: "Book an appointment", message: "I'd like to schedule an appointment." },
  { label: "Services offered", message: "What services do you offer?" },
  { label: "Insurance & payment", message: "What insurance do you accept?" },
  { label: "Office hours", message: "What are your office hours?" },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "greeting", role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    setShowQuickActions(false);
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Send only user/assistant messages (skip greeting id mapping)
      const apiMessages = updatedMessages
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble right now. Please call our Richmond office at (804) 355-6593 or Midlothian at (804) 794-7094 for immediate help.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
        style={{ background: "#182838" }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-lg shadow-2xl"
          style={{
            width: "min(400px, calc(100vw - 3rem))",
            height: "min(600px, calc(100vh - 10rem))",
            fontFamily: "var(--font-sans)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-4"
            style={{ background: "#182838" }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "#1C818D" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">OWD Periodontics</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                Virtual Assistant
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4"
            style={{ background: "#FAFAFA" }}
          >
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "text-white"
                        : "text-gray-dark"
                    }`}
                    style={{
                      background: msg.role === "user" ? "#182838" : "#F1ECE8",
                      ...(msg.role === "assistant" && { borderLeft: "2px solid #1C818D" }),
                    }}
                  >
                    {msg.content.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              {showQuickActions && messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => sendMessage(action.message)}
                      className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                      style={{
                        borderColor: "#1C818D",
                        color: "#1C818D",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#1C818D";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#1C818D";
                      }}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="flex items-center gap-1.5 rounded-lg px-4 py-3"
                    style={{ background: "#F1ECE8", borderLeft: "2px solid #1C818D" }}
                  >
                    <span className="chat-dot" style={{ animationDelay: "0ms" }} />
                    <span className="chat-dot" style={{ animationDelay: "150ms" }} />
                    <span className="chat-dot" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-2 border-t px-4 py-3"
            style={{ background: "white", borderColor: "#EEEEEE" }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows={1}
              disabled={isLoading}
              className="flex-1 resize-none border-0 bg-transparent py-2 text-sm outline-none placeholder:text-gray-400 disabled:opacity-50"
              style={{ color: "#262F32", maxHeight: "120px" }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all disabled:opacity-30"
              style={{ background: "#182838" }}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Inline styles for typing animation */}
      <style jsx>{`
        .chat-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #1C818D;
          animation: chatBounce 1s infinite;
        }
        @keyframes chatBounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
