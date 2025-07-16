"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Visionary leader with 10+ years in tech industry, passionate about innovation and business growth.",
    skills: ["Leadership", "Strategy", "Business Development", "Product Management"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "rajesh@seoulix.com",
    },
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Technical expert specializing in scalable architectures and emerging technologies.",
    skills: ["Architecture", "Cloud Computing", "DevOps", "Team Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "priya@seoulix.com",
    },
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Lead Full Stack Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack developer with expertise in modern frameworks and scalable solutions.",
    skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "amit@seoulix.com",
    },
  },
  {
    id: 4,
    name: "Sneha Gupta",
    position: "Senior UI/UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Creative designer focused on user-centered design and exceptional user experiences.",
    skills: ["UI Design", "UX Research", "Prototyping", "Design Systems"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "sneha@seoulix.com",
    },
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    bio: "Mobile development specialist with expertise in React Native and Flutter.",
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "vikram@seoulix.com",
    },
  },
  {
    id: 6,
    name: "Anita Verma",
    position: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    bio: "DevOps expert ensuring smooth deployment and infrastructure management.",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "anita@seoulix.com",
    },
  },
]

export function TeamGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover overflow-hidden h-full">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-center space-x-3">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={`mailto:${member.social.email}`}>
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
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
