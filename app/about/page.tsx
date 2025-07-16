import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { MissionVision } from "@/components/about/mission-vision"
import { Timeline } from "@/components/about/timeline"
import { Leadership } from "@/components/about/leadership"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Us - Seoulix Technologies",
  description: "Learn about Seoulix Technologies - our story, mission, vision, and the team behind our success.",
  keywords: "about us, company story, mission, vision, leadership team, Seoulix Technologies",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Timeline />
      <Leadership />
      <CTASection />
    </div>
  )
}
