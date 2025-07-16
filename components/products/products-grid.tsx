"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "ProjectFlow",
    description: "Comprehensive project management platform for teams",
    category: "SaaS Platform",
    price: "$29/month",
    rating: 4.8,
    features: ["Task Management", "Team Collaboration", "Time Tracking", "Reporting & Analytics", "API Integration"],
    link: "#",
    popular: true,
  },
  {
    id: 2,
    name: "DataSync API",
    description: "Real-time data synchronization API for applications",
    category: "API Service",
    price: "$0.01/request",
    rating: 4.9,
    features: ["Real-time Sync", "Multi-database Support", "Webhook Integration", "99.9% Uptime", "24/7 Support"],
    link: "#",
    popular: false,
  },
  {
    id: 3,
    name: "E-Commerce Suite",
    description: "Complete e-commerce solution with payment integration",
    category: "Platform",
    price: "$99/month",
    rating: 4.7,
    features: [
      "Online Store Builder",
      "Payment Processing",
      "Inventory Management",
      "Analytics Dashboard",
      "Mobile App",
    ],
    link: "#",
    popular: false,
  },
  {
    id: 4,
    name: "CloudBackup Pro",
    description: "Automated cloud backup solution for businesses",
    category: "SaaS Platform",
    price: "$19/month",
    rating: 4.6,
    features: ["Automated Backups", "Encryption", "Multi-cloud Support", "Disaster Recovery", "Compliance Ready"],
    link: "#",
    popular: false,
  },
]

export function ProductsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`card-hover h-full relative ${product.popular ? "border-primary" : ""}`}>
                {product.popular && (
                  <Badge className="absolute -top-3 left-6 hero-gradient text-white">Most Popular</Badge>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="text-2xl font-bold gradient-text">{product.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full hero-gradient text-white" asChild>
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        Get Started
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
