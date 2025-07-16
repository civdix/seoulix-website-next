"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"
import { motion } from "framer-motion"

const jobOpenings = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Gurgaon / Remote",
    type: "Full-time",
    salary: "₹8-15 LPA",
    experience: "2-5 years",
    description:
      "We're looking for a talented Full Stack Developer to join our engineering team and work on exciting projects using modern technologies.",
    requirements: [
      "Strong experience with React, Node.js, and databases",
      "Knowledge of cloud platforms (AWS/Azure)",
      "Experience with version control (Git)",
      "Good understanding of software development lifecycle",
    ],
    skills: ["React", "Node.js", "MongoDB", "AWS", "JavaScript", "TypeScript"],
  },
  {
    id: 2,
    title: "Business Development Executive",
    department: "Sales",
    location: "Gurgaon",
    type: "Full-time",
    salary: "₹5-8 LPA",
    experience: "1-3 years",
    description:
      "Join our sales team to help grow our business by identifying new opportunities and building relationships with potential clients.",
    requirements: [
      "Excellent communication and presentation skills",
      "Experience in B2B sales or business development",
      "Understanding of technology services",
      "Strong networking and relationship-building abilities",
    ],
    skills: ["Sales", "Communication", "Networking", "CRM", "Lead Generation"],
  },
]

interface JobOpeningsProps {
  onApplyClick: (jobId: number, jobTitle: string) => void
}

export function JobOpenings({ onApplyClick }: JobOpeningsProps) {
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
            Current <span className="gradient-text">Openings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our current job opportunities and find the perfect role for your career growth
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{job.department}</Badge>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>
                    <Button className="hero-gradient text-white w-fit" onClick={() => onApplyClick(job.id, job.title)}>
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
