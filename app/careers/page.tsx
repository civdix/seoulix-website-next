import type { Metadata } from "next"
import CareersPageClient from "./CareersPageClient"

export const metadata: Metadata = {
  title: "Careers - Seoulix Technologies",
  description: "Join our team of talented professionals. Explore current job openings and apply today.",
  keywords: "careers, jobs, full stack developer, business developer, employment, hiring",
}

export default function CareersPage() {
  return <CareersPageClient />
}
