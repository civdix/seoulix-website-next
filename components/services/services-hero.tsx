"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function ServicesHero() {
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
            Our Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive <span className="gradient-text">Technology Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            From concept to deployment, we provide end-to-end technology services that drive business growth and digital
            transformation.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
