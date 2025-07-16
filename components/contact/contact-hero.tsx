"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function ContactHero() {
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
            Contact Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Start Your <span className="gradient-text">Next Project</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your business with innovative technology
            solutions? Get in touch with our expert team today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
