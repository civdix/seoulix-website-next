"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, Shield, Users, Zap, HeartHandshake, TrendingUp, Globe } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Award,
    title: "5+ Years Experience",
    description: "Proven track record in delivering exceptional technology solutions",
    color: "text-yellow-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability in all our solutions",
    color: "text-green-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with expertise in latest technologies",
    color: "text-purple-500",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development process ensuring quick time-to-market",
    color: "text-orange-500",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused",
    description: "Dedicated to understanding and exceeding client expectations",
    color: "text-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Future-ready solutions that grow with your business",
    color: "text-indigo-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with localized expertise",
    color: "text-cyan-500",
  },
]

const stats = [
  { number: "100+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
  { number: "50+", label: "Happy Clients", color: "from-purple-500 to-pink-500" },
  { number: "99%", label: "Client Satisfaction", color: "from-green-500 to-teal-500" },
  { number: "24/7", label: "Support Available", color: "from-orange-500 to-red-500" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Seoulix Technologies</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full text-center p-6">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <feature.icon className={`w-12 h-12 mx-auto ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
