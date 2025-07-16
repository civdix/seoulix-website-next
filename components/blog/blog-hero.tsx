"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function BlogHero() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4">
            Our Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Tech <span className="gradient-text">Insights & Tutorials</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Stay updated with the latest technology trends, development tutorials, and industry insights from our expert
            team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
