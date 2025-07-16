"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function CareersHero() {
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
            Join Our Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Build Your <span className="gradient-text">Career</span> With Us
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Join our dynamic team of technology professionals and be part of innovative projects that make a difference.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2</div>
              <div className="text-sm text-muted-foreground">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Remote Friendly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Growth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
