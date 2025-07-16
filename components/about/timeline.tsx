"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const timelineEvents = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Seoulix Technologies was established with a vision to deliver innovative technology solutions.",
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Successfully delivered our first enterprise-level web application for a healthcare client.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Expanded our team to include mobile app developers and UI/UX designers.",
  },
  {
    year: "2022",
    title: "50+ Projects Milestone",
    description: "Reached the milestone of 50+ successful project deliveries across various industries.",
  },
  {
    year: "2023",
    title: "Cloud Services Launch",
    description: "Launched comprehensive cloud migration and DevOps services for enterprise clients.",
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Integrated AI and machine learning capabilities into our service offerings.",
  },
]

export function Timeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones in our growth and evolution as a technology company
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {event.year}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 rounded-full hero-gradient flex-shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
