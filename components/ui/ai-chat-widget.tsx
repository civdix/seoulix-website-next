"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Send, X, Minimize2, Maximize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const botResponses = [
  "Hello! I'm Seoulix AI Assistant. How can I help you today?",
  "I can help you with information about our services, pricing, or technical questions.",
  "Our web development services include React, Next.js, and full-stack solutions.",
  "We offer mobile app development for both iOS and Android platforms.",
  "Our team has expertise in cloud computing, DevOps, and modern development practices.",
  "Would you like to schedule a consultation with our team?",
  "I can provide information about our portfolio and previous projects.",
  "Our pricing varies based on project complexity. Would you like a custom quote?",
]

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "Our pricing depends on project scope and requirements. I'd recommend scheduling a free consultation to discuss your specific needs and get an accurate quote."
    }

    if (lowerMessage.includes("web") || lowerMessage.includes("website")) {
      return "We specialize in modern web development using React, Next.js, and other cutting-edge technologies. Our websites are responsive, fast, and SEO-optimized."
    }

    if (lowerMessage.includes("mobile") || lowerMessage.includes("app")) {
      return "We develop mobile apps for both iOS and Android using React Native and Flutter. Our apps are feature-rich and provide excellent user experiences."
    }

    if (lowerMessage.includes("ai") || lowerMessage.includes("artificial intelligence")) {
      return "We integrate AI capabilities into our solutions, including chatbots, recommendation systems, and data analytics. AI is the future of software development!"
    }

    return botResponses[Math.floor(Math.random() * botResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: generateBotResponse(inputValue),
          isBot: true,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-24 right-6 z-50 ${
              isMinimized ? "w-80 h-16" : "w-80 h-96"
            } transition-all duration-300`}
          >
            <Card className="h-full shadow-2xl border-2 border-primary/20">
              <CardHeader className="pb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Seoulix AI Assistant
                  </CardTitle>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="h-6 w-6 p-0 text-white hover:bg-white/20"
                    >
                      {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="h-6 w-6 p-0 text-white hover:bg-white/20"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {!isMinimized && (
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
                    {messages.length === 0 && (
                      <div className="text-center text-muted-foreground text-sm">
                        👋 Hi! I'm here to help you with any questions about our services.
                      </div>
                    )}

                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                        <div
                          className={`max-w-[80%] p-2 rounded-lg text-sm ${
                            message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-muted p-2 rounded-lg text-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything..."
                        className="flex-1"
                      />
                      <Button size="sm" onClick={handleSendMessage} disabled={!inputValue.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed bottom-6 right-20 z-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
          size="sm"
        >
          <Bot className="w-6 h-6" />
        </Button>
      </motion.div>
    </>
  )
}
