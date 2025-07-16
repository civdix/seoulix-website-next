"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Smartphone, Settings, Palette, Users, Server, ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    id: "web",
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    features: ["React/Next.js", "Node.js Backend", "Database Integration", "API Development"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "software",
    icon: Settings,
    title: "Software Development",
    description: "Enterprise software solutions and system integration",
    features: ["Custom Software", "System Integration", "Legacy Modernization", "Cloud Migration"],
    color: "from-green-500 to-teal-500",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design for exceptional experiences",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "consultation",
    icon: Users,
    title: "IT Consultation",
    description: "Strategic technology consulting and planning",
    features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Team Training"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "maintenance",
    icon: Server,
    title: "Server Maintenance",
    description: "Reliable server management and monitoring",
    features: ["24/7 Monitoring", "Performance Optimization", "Security Updates", "Backup Solutions"],
    color: "from-gray-500 to-slate-500",
  },
]

export function ServicesOverview() {
  const [activeService, setActiveService] = useState("web")

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to transform your business and drive growth
          </p>
        </motion.div>

        {/* Desktop Tabs View */}
        <div className="hidden lg:block">
          <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex items-center space-x-2">
                  <service.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{service.title.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <CardHeader className="p-8">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base mb-6">{service.description}</CardDescription>
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-fit">
                          <Link href="/services" className="flex items-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className={`h-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          <service.icon className="w-32 h-32 text-white/20" />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile Grid View */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-3`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
