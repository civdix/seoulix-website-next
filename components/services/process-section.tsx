"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Lightbulb, Code2, Rocket, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team creates a comprehensive project roadmap with timelines, milestones, and technical specifications.",
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    icon: Code2,
    title: "Development & Design",
    description:
      "We bring your vision to life using cutting-edge technologies and best practices in development and design.",
    color: "from-green-500 to-teal-500",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Testing & Launch",
    description: "Rigorous testing ensures quality and performance before we deploy your solution to production.",
    color: "from-orange-500 to-red-500",
  },
  {
    step: "05",
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to ensure your solution continues to perform optimally.",
    color: "from-indigo-500 to-purple-500",
  },
]

export function ProcessSection() {
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
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 5-step process ensures successful project delivery from concept to completion
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="card-hover h-full text-center p-6 relative overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-2">{step.step}</div>
                  <h3 className="font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
