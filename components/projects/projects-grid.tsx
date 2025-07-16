"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with advanced features including payment integration, inventory management, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Biometrics", "Redux"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare management system for hospitals with patient records, appointment scheduling, and billing.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    category: "Software Development",
    technologies: ["Next.js", "PostgreSQL", "AWS", "Docker"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tours, advanced search, and CRM integration.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    category: "Web Development",
    technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Food Delivery App",
    description:
      "On-demand food delivery application with real-time tracking, payment integration, and restaurant management.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Learning Management System",
    description:
      "Educational platform with interactive courses, assessments, progress tracking, and certification system.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
    category: "Software Development",
    technologies: ["React", "Django", "PostgreSQL", "Redis"],
    link: "#",
    github: "#",
    featured: false,
  },
]

const categories = ["All", "Web Development", "Mobile App", "Software Development"]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "hero-gradient text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover overflow-hidden h-full">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 hero-gradient text-white">Featured</Badge>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
