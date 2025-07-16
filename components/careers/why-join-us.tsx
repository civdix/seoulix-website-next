"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Zap, Users, Trophy, BookOpen, Coffee } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options for better work-life balance",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement opportunities with skill development programs",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive and inclusive team environment",
  },
  {
    icon: Trophy,
    title: "Competitive Benefits",
    description: "Attractive salary packages, health insurance, and performance-based bonuses",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Access to training programs, conferences, and certification courses",
  },
  {
    icon: Coffee,
    title: "Great Workplace",
    description: "Modern office space with all amenities and a fun, energetic work environment",
  },
]

export function WhyJoinUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Join Us</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the benefits and opportunities that make Seoulix Technologies a great place to work
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full text-center p-6">
                <CardContent className="p-0">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
