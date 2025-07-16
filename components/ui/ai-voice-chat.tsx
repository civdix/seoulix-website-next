"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mic, MicOff, Volume2, VolumeX, Send, Minimize2, Maximize2, X, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

export function AIVoiceChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. I can help you navigate the website, schedule calls, answer questions about our services, and much more. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [currentInput, setCurrentInput] = useState("")

  const recognitionRef = useRef<any>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis

      // Initialize speech recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = "en-IN" // Indian English

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          setCurrentInput(transcript)
          handleSendMessage(transcript)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }

        recognitionRef.current.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error)
          setIsListening(false)
        }
      }
    }
  }, [])

  const getIndianVoice = () => {
    if (!synthRef.current) return null

    const voices = synthRef.current.getVoices()

    // Try to find Indian English female voice
    let voice = voices.find(
      (v: SpeechSynthesisVoice) => v.lang.includes("en-IN") && v.name.toLowerCase().includes("female"),
    )

    // Fallback to any Indian English voice
    if (!voice) {
      voice = voices.find((v: SpeechSynthesisVoice) => v.lang.includes("en-IN"))
    }

    // Fallback to any English female voice
    if (!voice) {
      voice = voices.find((v: SpeechSynthesisVoice) => v.lang.includes("en") && v.name.toLowerCase().includes("female"))
    }

    return voice
  }

  const speak = (text: string) => {
    if (!synthRef.current) return

    // Stop any current speech
    synthRef.current.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    const voice = getIndianVoice()

    if (voice) {
      utterance.voice = voice
    }

    utterance.rate = 0.85
    utterance.pitch = 1.1
    utterance.volume = 1
    utterance.lang = "en-IN"

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    synthRef.current.speak(utterance)
  }

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsSpeaking(false)
    }
  }

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true)
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Navigation commands
    if (message.includes("home") || message.includes("homepage")) {
      window.location.href = "/"
      return "Taking you to the homepage now."
    }

    if (message.includes("about") || message.includes("about us")) {
      window.location.href = "/about"
      return "Navigating to our About page where you can learn more about Seoulix Technologies."
    }

    if (message.includes("service") || message.includes("what do you do")) {
      window.location.href = "/services"
      return "Let me show you our services page. We offer web development, mobile apps, software solutions, and more."
    }

    if (message.includes("project") || message.includes("portfolio") || message.includes("work")) {
      window.location.href = "/projects"
      return "Here are our featured projects showcasing our expertise across various industries."
    }

    if (message.includes("team") || message.includes("who are you")) {
      window.location.href = "/team"
      return "Meet our amazing team of talented professionals at Seoulix Technologies."
    }

    if (message.includes("blog") || message.includes("article") || message.includes("news")) {
      window.location.href = "/blog"
      return "Check out our latest blog posts with tech insights and tutorials."
    }

    if (message.includes("contact") || message.includes("get in touch")) {
      window.location.href = "/contact"
      return "Here's our contact page. You can reach out to us anytime!"
    }

    // Service-specific queries
    if (message.includes("web development") || message.includes("website")) {
      return "We specialize in modern web development using React, Next.js, and other cutting-edge technologies. We create responsive, fast, and user-friendly websites that drive business growth."
    }

    if (message.includes("mobile app") || message.includes("app development")) {
      return "We develop native and cross-platform mobile applications for iOS and Android using React Native and Flutter. Our apps are secure, scalable, and user-centric."
    }

    if (message.includes("price") || message.includes("cost") || message.includes("quote")) {
      return "Our pricing varies based on project requirements. I'd recommend scheduling a free consultation call to discuss your specific needs and get a customized quote."
    }

    // Schedule call
    if (
      message.includes("schedule") ||
      message.includes("call") ||
      message.includes("meeting") ||
      message.includes("appointment")
    ) {
      return "I'd be happy to help you schedule a call! You can click the 'Schedule Call' button in the header, or I can guide you through our contact process."
    }

    // Company info
    if (message.includes("experience") || message.includes("how long")) {
      return "Seoulix Technologies has been delivering exceptional technology solutions for over 5 years. We've completed 100+ projects and served 50+ happy clients worldwide."
    }

    if (message.includes("location") || message.includes("where are you")) {
      return "We're a global technology company serving clients worldwide. You can find our contact details on the contact page for specific location information."
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! I'm here to help you learn more about Seoulix Technologies and our services. What specific information are you looking for?",
      "I'd be happy to assist you! You can ask me about our services, projects, team, or anything else about Seoulix Technologies.",
      "Great question! Feel free to ask me about web development, mobile apps, our team, or how we can help your business grow.",
      "I'm here to help! You can ask me to navigate to different pages, learn about our services, or schedule a consultation call.",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = (text: string = currentInput) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setCurrentInput("")

    // Generate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(text.trim())
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      speak(aiResponse)
    }, 500)
  }

  if (!isOpen) {
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-14 h-14 hero-gradient text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Card className={`w-80 shadow-2xl ${isMinimized ? "h-auto" : "h-96"}`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <CardTitle className="text-sm">AI Assistant</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {isListening ? "Listening..." : isSpeaking ? "Speaking..." : "Online"}
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)} className="w-8 h-8 p-0">
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="w-8 h-8 p-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CardContent className="pt-0">
                <ScrollArea className="h-48 mb-4">
                  <div className="space-y-3">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-2 rounded-lg text-sm ${
                            message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {message.sender === "ai" && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                            {message.sender === "user" && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                            <span>{message.text}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="flex items-center space-x-2">
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Type or speak your message..."
                      className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSendMessage()}
                      disabled={!currentInput.trim()}
                      className="w-8 h-8 p-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={isListening ? stopListening : startListening}
                      className={`w-8 h-8 p-0 ${isListening ? "text-red-500" : ""}`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={isSpeaking ? stopSpeaking : () => {}}
                      className={`w-8 h-8 p-0 ${isSpeaking ? "text-blue-500" : ""}`}
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}
