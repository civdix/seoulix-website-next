import { EnhancedHeroSection } from "@/components/sections/enhanced-hero-section"
import { ServicesOverview } from "@/components/sections/services-overview"
import { ProjectsShowcase } from "@/components/sections/projects-showcase"
import { TechStack } from "@/components/sections/tech-stack"
import { TeamPreview } from "@/components/sections/team-preview"
import { BlogPreview } from "@/components/sections/blog-preview"
import { CTASection } from "@/components/sections/cta-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProjectsShowcase />
      <TechStack />
      <TestimonialsSection />
      <TeamPreview />
      <BlogPreview />
      <CTASection />
    </div>
  )
}
