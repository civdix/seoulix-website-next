import type { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Projects - Seoulix Technologies",
  description: "Explore our portfolio of successful web development, mobile app, and software development projects.",
  keywords: "portfolio, projects, web development, mobile apps, software development, case studies",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProjectsHero />
      <ProjectsGrid />
      <CTASection />
    </div>
  )
}
