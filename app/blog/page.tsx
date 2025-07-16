import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export const metadata: Metadata = {
  title: "Blog - Seoulix Technologies",
  description: "Stay updated with the latest tech insights, tutorials, and industry trends from our experts.",
  keywords: "blog, tech insights, tutorials, web development, mobile development, software development",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogGrid />
          </div>
          <div>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
