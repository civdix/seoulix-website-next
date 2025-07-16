"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Code, Smartphone, Globe, Sparkles, Zap, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function EnhancedHeroSection() {
  // Rotating headline words
  const texts = ["AI-Powered Solutions", "Web Development", "Mobile Apps", "Cloud Computing", "Digital Innovation"]
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrentText((i) => (i + 1) % texts.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      {/* FLOATING SHAPES */}
      <AnimatePresence>
        <motion.div
        key={1}
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
           key={2}
          className="absolute top-1/2 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20"
          animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
           key={3}
          className="absolute bottom-24 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-teal-400 opacity-20"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
        <motion.div
           key={4}
          className="absolute top-1/3 left-1/4 text-primary/20"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
        <motion.div
           key={5}
          className="absolute bottom-1/4 right-1/4 text-primary/20"
          animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          <Zap key={6} className="w-8 h-8" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* SMALL BADGE */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Star className="w-4 h-4" />
              AI-Powered Development
              <Sparkles className="w-4 h-4" />
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Next-Gen{" "}
              <motion.span
                key={texts[currentText]}
                className="gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {texts[currentText]}
              </motion.span>{" "}
              for Modern Businesses
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with cutting-edge AI, web and mobile solutions. We build secure, scalable and
              high-performance products that drive exponential growth.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="hero-gradient text-white group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>

              <Button variant="outline" size="lg" className="group bg-transparent">
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* STATS */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { value: "100+", label: "Projects" },
                { value: "50+", label: "Happy Clients" },
                { value: "99%", label: "Success Rate" },
              ].map((stat,idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE VISUAL */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* MAIN CARD */}
              <motion.div
                className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 shadow-2xl space-y-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              >
                {[
                  {
                    icon: Code,
                    title: "AI-Driven Development",
                    subtitle: "Smart & Efficient",
                    gradient: "hero-gradient",
                  },
                  {
                    icon: Smartphone,
                    title: "Smart Mobile Apps",
                    subtitle: "iOS & Android",
                    gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
                  },
                  {
                    icon: Globe,
                    title: "Cloud Solutions",
                    subtitle: "Scalable & Secure",
                    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-12 h-12 rounded-lg ${item.gradient} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
