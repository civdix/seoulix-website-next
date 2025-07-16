"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function AboutHero() {
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
            About Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Transforming Ideas into{" "}
            <span className="gradient-text">Digital Reality</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We are a passionate team of technology experts dedicated to
            delivering innovative solutions that drive business growth and
            digital transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
