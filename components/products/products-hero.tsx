"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function ProductsHero() {
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
            Our Products
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Innovative <span className="gradient-text">Digital Products</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover our suite of innovative SaaS products, APIs, and digital platforms designed to accelerate business
            growth and streamline operations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
