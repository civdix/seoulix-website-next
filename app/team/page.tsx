import type { Metadata } from "next"
import { TeamHero } from "@/components/team/team-hero"
import { TeamGrid } from "@/components/team/team-grid"
import { JoinTeam } from "@/components/team/join-team"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Team - Seoulix Technologies",
  description: "Meet the talented professionals behind Seoulix Technologies and learn about our expertise.",
  keywords: "team, professionals, developers, designers, leadership, careers",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      <TeamHero />
      <TeamGrid />
      <JoinTeam />
      <CTASection />
    </div>
  )
}
