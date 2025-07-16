"use client"

import { useState } from "react"
import { CareersHero } from "@/components/careers/careers-hero"
import { JobOpenings } from "@/components/careers/job-openings"
import { WhyJoinUs } from "@/components/careers/why-join-us"
import { ApplicationForm } from "@/components/careers/application-form"

export default function CareersPageClient() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  // Selected job for the application dialog
  const [selectedJob, setSelectedJob] = useState<{ id: number; title: string } | undefined>(undefined)

  const handleApplyClick = (jobId: number, jobTitle: string) => {
    setSelectedJob({ id: jobId, title: jobTitle })
    setIsApplicationOpen(true)
  }

  return (
    <div className="min-h-screen pt-20">
      <CareersHero />
      <JobOpenings onApplyClick={handleApplyClick} />
      <WhyJoinUs />
      <ApplicationForm
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
        selectedJob={selectedJob}
      />
    </div>
  )
}
