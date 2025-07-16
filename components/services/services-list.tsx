"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Settings, Palette, Users, Server, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and user experience.",
    features: [
      "React/Next.js Development",
      "Node.js Backend Solutions",
      "Database Integration",
      "API Development & Integration",
      "E-commerce Platforms",
      "Progressive Web Apps (PWA)",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS & Android Development",
      "React Native Solutions",
      "Flutter Applications",
      "App Store Deployment",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "software-development",
    icon: Settings,
    title: "Software Development",
    description: "Enterprise software solutions and system integration for streamlined business operations.",
    features: [
      "Custom Software Solutions",
      "System Integration",
      "Legacy System Modernization",
      "Cloud Migration Services",
      "Microservices Architecture",
      "DevOps Implementation",
    ],
    technologies: ["Python", "Java", "Docker", "Kubernetes", "AWS", "Azure"],
    color: "from-green-500 to-teal-500",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive digital experiences.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
      "Mobile-First Design",
      "Accessibility Compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "it-consultation",
    icon: Users,
    title: "IT Consultation",
    description: "Strategic technology consulting to help businesses make informed decisions and optimize operations.",
    features: [
      "Technology Strategy Planning",
      "Digital Transformation",
      "Process Optimization",
      "Team Training & Development",
      "Security Audits",
      "Performance Analysis",
    ],
    technologies: ["Strategy", "Analysis", "Training", "Optimization"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "server-maintenance",
    icon: Server,
    title: "Server Maintenance",
    description: "Reliable server management and monitoring services to ensure optimal performance and security.",
    features: [
      "24/7 Server Monitoring",
      "Performance Optimization",
      "Security Updates & Patches",
      "Automated Backup Solutions",
      "Load Balancing",
      "Disaster Recovery Planning",
    ],
    technologies: ["Linux", "AWS", "Docker", "Nginx", "Apache", "MySQL"],
    color: "from-gray-500 to-slate-500",
  },
]

export function ServicesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <CardHeader className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="w-fit mb-2">
                      {service.title}
                    </Badge>
                    <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-base mb-6">{service.description}</CardDescription>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="mt-6 w-fit" asChild>
                      <a href="/contact" className="flex items-center space-x-2">
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardHeader>

                  <CardContent className={`p-0 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div
                      className={`h-full min-h-[400px] bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      <service.icon className="w-32 h-32 text-white/20" />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
