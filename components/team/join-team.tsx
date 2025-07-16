"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Zap, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const benefits = [
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with talented professionals in a supportive team environment",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options for better balance",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement opportunities",
  },
  {
    icon: Trophy,
    title: "Competitive Benefits",
    description: "Attractive salary packages and comprehensive benefits",
  },
]

export function JoinTeam() {
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
            Join Our <span className="gradient-text">Amazing Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of a dynamic team that's passionate about technology and committed to excellence
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="hero-gradient text-white">
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
