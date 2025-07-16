import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ProcessSection } from "@/components/services/process-section"
import { FAQSection } from "@/components/services/faq-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Services - Seoulix Technologies",
  description:
    "Comprehensive IT services including web development, mobile app development, software solutions, UI/UX design, IT consultation, and server maintenance.",
  keywords:
    "web development, mobile app development, software development, UI/UX design, IT consultation, server maintenance, Gurgaon",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
