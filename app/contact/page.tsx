import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapSection } from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact Us - Seoulix Technologies",
  description: "Get in touch with Seoulix Technologies. Contact us for your next project or business inquiry.",
  keywords: "contact, get in touch, business inquiry, project consultation, Gurgaon office",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <ContactHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <MapSection />
          </div>
        </div>
      </div>
    </div>
  )
}
